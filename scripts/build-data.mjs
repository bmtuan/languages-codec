// Generates public/languages.json from languages_full.json,
// translating every language name into the supported UI locales via Intl.DisplayNames (CLDR).
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const source = JSON.parse(readFileSync(join(root, "languages_full.json"), "utf8"));

export const LOCALES = ["en", "vi", "zh", "ja", "ko", "es", "fr", "de"];

// Codes CLDR has no name for (or names misleadingly).
const OVERRIDES = {
  und: { en: "Other / Undetermined", vi: "Khác / Không xác định", zh: "其他 / 未确定", ja: "その他 / 未確定", ko: "기타 / 미확정", es: "Otro / Indeterminado", fr: "Autre / Indéterminé", de: "Andere / Unbestimmt" },
  zxx: { en: "Not applicable", vi: "Không áp dụng", zh: "不适用", ja: "該当なし", ko: "해당 없음", es: "No aplicable", fr: "Non applicable", de: "Nicht zutreffend" },
  sdp: { en: "Sherdukpen", vi: "Tiếng Sherdukpen", zh: "舍尔杜克彭语", ja: "シェルドゥクペン語", ko: "셰르둑펜어", es: "Sherdukpen", fr: "Sherdukpen", de: "Sherdukpen" },
  mo: { en: "Moldavian", vi: "Tiếng Moldova", zh: "摩尔多瓦语", ja: "モルダビア語", ko: "몰도바어", es: "Moldavo", fr: "Moldave", de: "Moldauisch" },
  "hi-Latn": { en: "Hindi (Phonetic)", vi: "Tiếng Hindi (Phiên âm)", zh: "印地语（拼音）", ja: "ヒンディー語（発音表記）", ko: "힌디어(발음 표기)", es: "Hindi (fonético)", fr: "Hindi (phonétique)", de: "Hindi (phonetisch)" },
  "ru-Latn": { en: "Russian (Phonetic)", vi: "Tiếng Nga (Phiên âm)", zh: "俄语（拼音）", ja: "ロシア語（発音表記）", ko: "러시아어(발음 표기)", es: "Ruso (fonético)", fr: "Russe (phonétique)", de: "Russisch (phonetisch)" },
};

const SPECIAL = new Set(["und", "zxx", "tlh", "eo", "ia", "ie", "io", "vo"]);
const DEPRECATED = { iw: "he", mo: "ro", sh: "sr-Latn", bh: "bho" };

const displayers = Object.fromEntries(
  LOCALES.map((l) => [l, new Intl.DisplayNames([l], { type: "language", fallback: "none" })]),
);

function nameIn(locale, code) {
  if (OVERRIDES[code]?.[locale]) return OVERRIDES[code][locale];
  try {
    return displayers[locale].of(code) ?? null;
  } catch {
    return null;
  }
}

function nativeName(code) {
  if (OVERRIDES[code]) return null;
  try {
    const n = new Intl.DisplayNames([code], { type: "language", fallback: "none" }).of(code);
    if (!n) return null;
    // If the locale has no own data, ICU falls back to root/English — not a real autonym.
    if (!code.startsWith("en") && n === displayers.en.of(code)) return null;
    if (n.toLowerCase() === code.toLowerCase()) return null;
    return n;
  } catch {
    return null;
  }
}

function classify(code) {
  if (SPECIAL.has(code)) return "special";
  const parts = code.split("-");
  if (parts.length === 1) return "base";
  return /^[A-Z][a-z]{3}$/.test(parts[1]) ? "script" : "region";
}

const capitalize = (s) => (s ? s.charAt(0).toLocaleUpperCase() + s.slice(1) : s);

const languages = Object.entries(source).map(([code, english]) => {
  const names = {};
  for (const l of LOCALES) names[l] = capitalize(nameIn(l, code)) || english;
  names.en = english; // keep the source file's English name as canonical
  const entry = { code, base: code.split("-")[0], type: classify(code), names };
  const native = nativeName(code);
  if (native) entry.native = capitalize(native);
  if (DEPRECATED[code]) entry.replacedBy = DEPRECATED[code];
  return entry;
});

writeFileSync(join(root, "public", "languages.json"), JSON.stringify({ locales: LOCALES, languages }));
console.log(`Wrote ${languages.length} languages × ${LOCALES.length} locales`);
