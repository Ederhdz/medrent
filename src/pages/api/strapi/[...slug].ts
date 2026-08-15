export const prerender = false;
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  return new Response(null, { status: 404 });
};

export const ALL: APIRoute = async () => {
  return new Response(null, { status: 404 });
};
