import test from "node:test";
import assert from "node:assert/strict";
import {
  computeFingerprint,
  isStrapiMediaUrl,
  normalizeRequestKey,
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
