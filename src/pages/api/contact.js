export const prerender = false;

const HUBSPOT_TOKEN = import.meta.env.HUBSPOT_PAT_TK;

const allowedOrigins = [
  "https://mvp-medrent.vercel.app",
  "https://www.medrent.mx",
  "https://medrent.mx",
  "http://localhost:4321",
  "http://localhost:4322",
];

const HUBSPOT_PROPERTY_ALLOWLIST = new Set([
  "email",
  "firstname",
  "lastname",
  "phone",
  "especialidad_medica",
  "otras_especialidades",
  "lugar_de_trabajo",
  "estado_mx",
  "por_qu_medio_nos_conociste",
  "message",
  "unidades_de_negocios",
  "hs_all_assigned_business_unit_ids",
  "definicion_de_necesidad",
  "utm_term",
  "utm_medium",
  "utm_source",
  "utm_content",
  "utm_campaign",
  "multi_equipo__medrent_",
]);

function capitalizeName(value) {
  return String(value)
    .trim()
    .split(/\s+/)
    .map((part) => part.charAt(0).toLocaleUpperCase("es-MX") + part.slice(1).toLocaleLowerCase("es-MX"))
    .join(" ");
}

function isAllowedOrigin(origin) {
  return Boolean(origin && allowedOrigins.includes(origin));
}

function genericError(status, headers) {
  headers.set("Content-Type", "application/json");
  return new Response(JSON.stringify({ error: "Unable to submit form" }), { status, headers });
}

async function sendToHubspot(properties) {
  const payload = { properties };
  const response = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
    },
    body: JSON.stringify(payload),
  });

  return {
    status: response.status,
    ok: response.ok || response.status === 409,
  };
}

export async function ALL({ request }) {
  const origin = request.headers.get("origin");
  const headers = new Headers();

  if (isAllowedOrigin(origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
    headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type");
  }

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers });
  }

  if (request.method !== "POST") {
    return genericError(405, headers);
  }

  if (!HUBSPOT_TOKEN) {
    console.error("HUBSPOT_PAT_TK is not defined");
    return genericError(500, headers);
  }

  try {
    const input = await request.json();

    if (!input.email) {
      return genericError(400, headers);
    }

    const properties = {};

    if (input.name) {
      const nameParts = String(input.name).trim().split(/\s+/);
      properties.firstname = capitalizeName(nameParts.shift() || "");
      properties.lastname = capitalizeName(nameParts.join(" ") || "");
    }

    for (const key in input) {
      if (key === "name") continue;

      const value = input[key];

      if (key === "specialty") {
        properties.especialidad_medica = String(value).trim();
        continue;
      }

      if (key === "phone") {
        const rawPhone = String(value).replace(/[^0-9]/g, "");
        if (rawPhone.length !== 10) {
          return genericError(400, headers);
        }
        properties.phone = `+52${rawPhone}`;
        continue;
      }

      if (key === "equipoInteres[]" || key === "equipoInteres") {
        const values = Array.isArray(value) ? value : [value];
        const filtered = values.map((v) => String(v).trim()).filter(Boolean);
        if (filtered.length > 0) {
          properties.multi_equipo__medrent_ = filtered.join("; ");
        }
        continue;
      }

      if (!HUBSPOT_PROPERTY_ALLOWLIST.has(key)) continue;
      if (value == null || value === "") continue;

      if (Array.isArray(value)) {
        const filteredValues = value.map((v) => String(v).trim()).filter(Boolean);
        if (filteredValues.length > 0) {
          properties[key] = filteredValues.join("; ");
        }
      } else {
        properties[key] = String(value).trim();
      }
    }

    const result = await sendToHubspot(properties);

    headers.set("Content-Type", "application/json");
    return new Response(JSON.stringify({ ok: result.ok }), {
      status: result.ok ? (result.status === 409 ? 409 : 200) : 500,
      headers,
    });
  } catch (error) {
    console.error("Function error:", error instanceof Error ? error.message : "unknown");
    return genericError(error instanceof SyntaxError ? 400 : 500, headers);
  }
}
