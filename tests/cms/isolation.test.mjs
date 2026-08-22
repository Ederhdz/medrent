import test from "node:test";
import assert from "node:assert/strict";
import {
  computeFingerprint,
  hashedAssetPath,
  isStrapiMediaUrl,
  normalizeRequestKey,
  requireCmsReleaseMode,
  rewriteMediaUrls,
  shortContentHash,
} from "../../scripts/cms-lib.mjs";

test("normalizeRequestKey sorts query params", () => {
  const a = normalizeRequestKey("/products?b=2&a=1");
  const b = normalizeRequestKey("/products?a=1&b=2");
  assert.equal(a, b);
});

test("same bytes same hash", () => {
  const buf = Buffer.from("abc");
  assert.equal(shortContentHash(buf), shortContentHash(buf));
});

test("changed bytes new hash", () => {
  assert.notEqual(shortContentHash(Buffer.from("a")), shortContentHash(Buffer.from("b")));
});

test("rewriteMediaUrls localizes strapi media", () => {
  const url = "https://example.media.strapiapp.com/a.webp";
  const map = new Map([[url, "/cms-assets/abc.webp"]]);
  const out = rewriteMediaUrls({ img: url }, map, "example.media.strapiapp.com", "https://example.com");
  assert.equal(out.img, "/cms-assets/abc.webp");
});

test("fingerprint mismatch detects change", () => {
  const a = computeFingerprint({ "/x": "1" }, { u: "h1" });
  const b = computeFingerprint({ "/x": "2" }, { u: "h1" });
  assert.notEqual(a, b);
});

test("isStrapiMediaUrl detects media host", () => {
  assert.equal(isStrapiMediaUrl("https://x.media.strapiapp.com/a.png", "cms.example.com"), true);
  assert.equal(isStrapiMediaUrl("/cms-assets/ab.webp", "cms.example.com"), false);
});

test("same CMS state same fingerprint", () => {
  const a = computeFingerprint({ "/x": { n: 1 } }, { u: "h1" });
  const b = computeFingerprint({ "/x": { n: 1 } }, { u: "h1" });
  assert.equal(a, b);
});

test("media byte change changes fingerprint", () => {
  const a = computeFingerprint({ "/x": "1" }, { u: "h1" });
  const b = computeFingerprint({ "/x": "1" }, { u: "h2" });
  assert.notEqual(a, b);
});

test("same bytes same hashed filename", () => {
  const bytes = Buffer.from("same-bytes");
  assert.equal(
    hashedAssetPath(bytes, "https://example.media.strapiapp.com/a.webp"),
    hashedAssetPath(bytes, "https://example.media.strapiapp.com/b.webp"),
  );
});

test("changed bytes different hashed filename", () => {
  assert.notEqual(
    hashedAssetPath(Buffer.from("a"), "https://example.media.strapiapp.com/a.webp"),
    hashedAssetPath(Buffer.from("b"), "https://example.media.strapiapp.com/a.webp"),
  );
});

test("missing CMS_RELEASE_MODE is fail-closed", () => {
  assert.throws(() => requireCmsReleaseMode({}), /BLOCKED_CONFIG/);
});

test("CMS_RELEASE_MODE does not default to live", () => {
  assert.throws(
    () => requireCmsReleaseMode({ CMS_RELEASE_MODE: "" }),
    /'live' or 'snapshot'/,
  );
});
