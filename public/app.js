"use strict";

const LOCALE_LABELS = {
  en: "English",
  vi: "Tiếng Việt",
  zh: "中文",
  ja: "日本語",
  ko: "한국어",
  es: "Español",
  fr: "Français",
  de: "Deutsch",
};

const I18N = {
  en: {
    title: "Language Codes",
    subtitle: "ISO 639 / BCP 47 language codes, translated into 8 languages",
    displayLanguage: "Display language",
    searchPlaceholder: "Search by code or name in any language… (e.g. vi, Japanese, tiếng Nhật)",
    colCode: "Code", colName: "Name", colNative: "Native name", colEnglish: "English",
    all: "All", base: "Language", region: "Regional", script: "Script", special: "Special",
    sortCode: "Sort: code A–Z", sortName: "Sort: name A–Z",
    results: (n, t) => `${n} / ${t} codes`,
    empty: (q) => `No language matches “${q}”.`,
    copied: (c) => `Copied “${c}”`,
    copyCode: "Copy code", copyLink: "Copy link",
    translations: "Translations", variants: "Related codes", native: "Native name",
    deprecated: "Deprecated code. Prefer",
    footer: "Names from Unicode CLDR via Intl.DisplayNames. Click any code to copy it.",
    theme: "Toggle theme", close: "Close",
  },
  vi: {
    title: "Mã Ngôn Ngữ",
    subtitle: "Tra cứu mã ngôn ngữ ISO 639 / BCP 47, dịch sang 8 ngôn ngữ",
    displayLanguage: "Ngôn ngữ hiển thị",
    searchPlaceholder: "Tìm theo mã hoặc tên bằng bất kỳ ngôn ngữ nào… (vd: vi, tiếng Nhật, Korean)",
    colCode: "Mã", colName: "Tên", colNative: "Tên bản ngữ", colEnglish: "Tiếng Anh",
    all: "Tất cả", base: "Ngôn ngữ", region: "Theo vùng", script: "Theo chữ viết", special: "Đặc biệt",
    sortCode: "Sắp xếp: mã A–Z", sortName: "Sắp xếp: tên A–Z",
    results: (n, t) => `${n} / ${t} mã`,
    empty: (q) => `Không tìm thấy ngôn ngữ nào khớp “${q}”.`,
    copied: (c) => `Đã sao chép “${c}”`,
    copyCode: "Sao chép mã", copyLink: "Sao chép liên kết",
    translations: "Bản dịch", variants: "Mã liên quan", native: "Tên bản ngữ",
    deprecated: "Mã đã lỗi thời. Nên dùng",
    footer: "Tên ngôn ngữ lấy từ Unicode CLDR qua Intl.DisplayNames. Bấm vào mã để sao chép.",
    theme: "Đổi giao diện sáng/tối", close: "Đóng",
  },
  zh: {
    title: "语言代码",
    subtitle: "ISO 639 / BCP 47 语言代码查询，提供 8 种语言译名",
    displayLanguage: "显示语言",
    searchPlaceholder: "按代码或任意语言的名称搜索…（如 vi、日语、Korean）",
    colCode: "代码", colName: "名称", colNative: "本地名称", colEnglish: "英文",
    all: "全部", base: "语言", region: "地区", script: "文字", special: "特殊",
    sortCode: "排序：代码 A–Z", sortName: "排序：名称 A–Z",
    results: (n, t) => `${n} / ${t} 个代码`,
    empty: (q) => `没有与“${q}”匹配的语言。`,
    copied: (c) => `已复制“${c}”`,
    copyCode: "复制代码", copyLink: "复制链接",
    translations: "译名", variants: "相关代码", native: "本地名称",
    deprecated: "已弃用的代码，建议使用",
    footer: "语言名称来自 Unicode CLDR（Intl.DisplayNames）。点击代码即可复制。",
    theme: "切换主题", close: "关闭",
  },
  ja: {
    title: "言語コード",
    subtitle: "ISO 639 / BCP 47 言語コード検索（8 言語の訳名付き）",
    displayLanguage: "表示言語",
    searchPlaceholder: "コードまたは任意の言語の名前で検索…（例: vi、ベトナム語、Korean）",
    colCode: "コード", colName: "名前", colNative: "現地名", colEnglish: "英語",
    all: "すべて", base: "言語", region: "地域", script: "文字", special: "特殊",
    sortCode: "並び順: コード A–Z", sortName: "並び順: 名前 A–Z",
    results: (n, t) => `${n} / ${t} 件`,
    empty: (q) => `「${q}」に一致する言語はありません。`,
    copied: (c) => `「${c}」をコピーしました`,
    copyCode: "コードをコピー", copyLink: "リンクをコピー",
    translations: "訳名", variants: "関連コード", native: "現地名",
    deprecated: "非推奨のコードです。推奨:",
    footer: "言語名は Unicode CLDR（Intl.DisplayNames）によるものです。コードをクリックでコピー。",
    theme: "テーマ切替", close: "閉じる",
  },
  ko: {
    title: "언어 코드",
    subtitle: "ISO 639 / BCP 47 언어 코드 검색 (8개 언어 번역 제공)",
    displayLanguage: "표시 언어",
    searchPlaceholder: "코드 또는 어떤 언어로든 이름 검색… (예: vi, 베트남어, Japanese)",
    colCode: "코드", colName: "이름", colNative: "현지 이름", colEnglish: "영어",
    all: "전체", base: "언어", region: "지역", script: "문자", special: "특수",
    sortCode: "정렬: 코드 A–Z", sortName: "정렬: 이름 A–Z",
    results: (n, t) => `${n} / ${t}개 코드`,
    empty: (q) => `“${q}”와 일치하는 언어가 없습니다.`,
    copied: (c) => `“${c}” 복사됨`,
    copyCode: "코드 복사", copyLink: "링크 복사",
    translations: "번역", variants: "관련 코드", native: "현지 이름",
    deprecated: "더 이상 사용되지 않는 코드입니다. 권장:",
    footer: "언어 이름은 Unicode CLDR(Intl.DisplayNames) 기준입니다. 코드를 클릭하면 복사됩니다.",
    theme: "테마 전환", close: "닫기",
  },
  es: {
    title: "Códigos de idioma",
    subtitle: "Códigos ISO 639 / BCP 47 traducidos a 8 idiomas",
    displayLanguage: "Idioma de visualización",
    searchPlaceholder: "Busca por código o nombre en cualquier idioma… (p. ej. vi, japonés, Korean)",
    colCode: "Código", colName: "Nombre", colNative: "Nombre nativo", colEnglish: "Inglés",
    all: "Todos", base: "Idioma", region: "Regional", script: "Escritura", special: "Especial",
    sortCode: "Orden: código A–Z", sortName: "Orden: nombre A–Z",
    results: (n, t) => `${n} / ${t} códigos`,
    empty: (q) => `Ningún idioma coincide con «${q}».`,
    copied: (c) => `Copiado «${c}»`,
    copyCode: "Copiar código", copyLink: "Copiar enlace",
    translations: "Traducciones", variants: "Códigos relacionados", native: "Nombre nativo",
    deprecated: "Código obsoleto. Usa",
    footer: "Nombres de Unicode CLDR mediante Intl.DisplayNames. Haz clic en un código para copiarlo.",
    theme: "Cambiar tema", close: "Cerrar",
  },
  fr: {
    title: "Codes de langue",
    subtitle: "Codes ISO 639 / BCP 47 traduits en 8 langues",
    displayLanguage: "Langue d’affichage",
    searchPlaceholder: "Rechercher par code ou nom dans n’importe quelle langue… (ex. vi, japonais, Korean)",
    colCode: "Code", colName: "Nom", colNative: "Nom natif", colEnglish: "Anglais",
    all: "Tous", base: "Langue", region: "Régional", script: "Écriture", special: "Spécial",
    sortCode: "Tri : code A–Z", sortName: "Tri : nom A–Z",
    results: (n, t) => `${n} / ${t} codes`,
    empty: (q) => `Aucune langue ne correspond à « ${q} ».`,
    copied: (c) => `« ${c} » copié`,
    copyCode: "Copier le code", copyLink: "Copier le lien",
    translations: "Traductions", variants: "Codes associés", native: "Nom natif",
    deprecated: "Code obsolète. Préférez",
    footer: "Noms issus d’Unicode CLDR via Intl.DisplayNames. Cliquez sur un code pour le copier.",
    theme: "Changer de thème", close: "Fermer",
  },
  de: {
    title: "Sprachcodes",
    subtitle: "ISO-639- / BCP-47-Sprachcodes, übersetzt in 8 Sprachen",
    displayLanguage: "Anzeigesprache",
    searchPlaceholder: "Nach Code oder Namen in beliebiger Sprache suchen… (z. B. vi, Japanisch, Korean)",
    colCode: "Code", colName: "Name", colNative: "Eigenname", colEnglish: "Englisch",
    all: "Alle", base: "Sprache", region: "Regional", script: "Schrift", special: "Speziell",
    sortCode: "Sortierung: Code A–Z", sortName: "Sortierung: Name A–Z",
    results: (n, t) => `${n} / ${t} Codes`,
    empty: (q) => `Keine Sprache passt zu „${q}“.`,
    copied: (c) => `„${c}“ kopiert`,
    copyCode: "Code kopieren", copyLink: "Link kopieren",
    translations: "Übersetzungen", variants: "Verwandte Codes", native: "Eigenname",
    deprecated: "Veralteter Code. Besser",
    footer: "Namen aus Unicode CLDR über Intl.DisplayNames. Klicken Sie auf einen Code, um ihn zu kopieren.",
    theme: "Design wechseln", close: "Schließen",
  },
};

const FILTERS = ["all", "base", "region", "script", "special"];

const $ = (s) => document.querySelector(s);
const els = {
  q: $("#q"), list: $("#list"), empty: $("#empty"), count: $("#count"),
  filters: $("#filters"), sort: $("#sort"), uiLang: $("#ui-lang"),
  drawer: $("#drawer"), drawerBody: $("#drawer-body"), toast: $("#toast"), theme: $("#theme"),
};

const store = {
  get(k) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } },
};

const state = { ui: "vi", q: "", filter: "all", sort: "code", open: null };
let LANGS = [];
let BY_CODE = new Map();

const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

// Lowercase + strip diacritics, keeping a map back to original indices so matches can be highlighted.
function normChar(c) {
  return c.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/đ/g, "d").replace(/Đ/g, "d").toLowerCase();
}
function norm(s) {
  let out = "";
  for (const c of s) out += normChar(c);
  return out;
}
function highlight(text, nq) {
  if (!nq) return esc(text);
  let n = "";
  const map = [];
  const chars = Array.from(text);
  chars.forEach((c, i) => { const x = normChar(c); for (let k = 0; k < x.length; k++) map.push(i); n += x; });
  const at = n.indexOf(nq);
  if (at < 0) return esc(text);
  const start = map[at], end = map[at + nq.length - 1] + 1;
  return esc(chars.slice(0, start).join("")) + "<mark>" + esc(chars.slice(start, end).join("")) + "</mark>" + esc(chars.slice(end).join(""));
}

const t = (key, ...args) => {
  const v = I18N[state.ui][key] ?? I18N.en[key];
  return typeof v === "function" ? v(...args) : v;
};

function score(l, nq) {
  if (!nq) return 0;
  const code = l.code.toLowerCase();
  if (code === nq) return 100;
  if (l._names.some((n) => n === nq)) return 90;
  if (code.startsWith(nq)) return 80;
  if (l._names.some((n) => n.startsWith(nq) || n.includes(" " + nq))) return 60;
  if (l._hay.includes(nq)) return 30;
  return -1;
}

function visible() {
  const nq = norm(state.q.trim());
  const collator = new Intl.Collator(state.ui);
  return LANGS
    .filter((l) => state.filter === "all" || l.type === state.filter)
    .map((l) => ({ l, s: score(l, nq) }))
    .filter((x) => x.s >= 0)
    .sort((a, b) =>
      (b.s - a.s) ||
      (state.sort === "name"
        ? collator.compare(a.l.names[state.ui], b.l.names[state.ui])
        : a.l.code.localeCompare(b.l.code)))
    .map((x) => x.l);
}

function badge(l) {
  let b = l.type === "base" ? "" : `<span class="badge ${l.type}">${esc(t(l.type))}</span>`;
  if (l.replacedBy) b += `<span class="badge old">${esc(l.replacedBy)}</span>`;
  return b;
}

function renderList() {
  const items = visible();
  const nq = norm(state.q.trim());
  els.list.innerHTML = items.map((l) => `
    <li><div class="row" tabindex="0" data-code="${esc(l.code)}">
      <div class="code-cell"><span class="code" title="${esc(t("copyCode"))}" data-copy="${esc(l.code)}">${highlight(l.code, nq)}</span></div>
      <div class="name">${highlight(l.names[state.ui], nq)}${badge(l)}</div>
      <div class="native"${l.native ? ` lang="${esc(l.code)}"` : ""}>${l.native ? highlight(l.native, nq) : "—"}</div>
      <div class="english">${highlight(l.names.en, nq)}</div>
    </div></li>`).join("");
  els.empty.hidden = items.length > 0;
  if (!items.length) els.empty.textContent = t("empty", state.q.trim());
  els.count.textContent = t("results", items.length, LANGS.length);
}

function renderFilters() {
  const counts = { all: LANGS.length };
  for (const l of LANGS) counts[l.type] = (counts[l.type] || 0) + 1;
  els.filters.innerHTML = FILTERS.map((f) =>
    `<button class="chip" role="tab" data-filter="${f}" aria-selected="${state.filter === f}">${esc(t(f))}<span class="n">${counts[f] || 0}</span></button>`
  ).join("");
}

function renderStatic() {
  document.documentElement.lang = state.ui;
  document.title = t("title");
  document.querySelectorAll("[data-i18n]").forEach((el) => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  els.sort.innerHTML = `<option value="code">${esc(t("sortCode"))}</option><option value="name">${esc(t("sortName"))}</option>`;
  els.sort.value = state.sort;
  els.theme.setAttribute("aria-label", t("theme"));
  document.querySelectorAll("[data-close].icon-btn").forEach((b) => b.setAttribute("aria-label", t("close")));
}

function renderDrawer() {
  const l = BY_CODE.get(state.open);
  if (!l) { els.drawer.hidden = true; return; }
  const related = LANGS.filter((x) => x !== l && (x.base === l.base || x.code === l.replacedBy || x.replacedBy === l.code));
  const order = [state.ui, ...Object.keys(LOCALE_LABELS).filter((k) => k !== state.ui)];
  els.drawerBody.innerHTML = `
    <div class="d-code">${esc(l.code)}</div>
    <h2 class="d-title" id="d-title">${esc(l.names[state.ui])}${badge(l)}</h2>
    ${l.native ? `<p class="d-native" lang="${esc(l.code)}">${esc(l.native)}</p>` : ""}
    <div class="d-actions">
      <button class="btn primary" data-copy="${esc(l.code)}">${esc(t("copyCode"))}</button>
      <button class="btn" data-copy-link>${esc(t("copyLink"))}</button>
    </div>
    ${l.replacedBy ? `<p class="note">${esc(t("deprecated"))} ${BY_CODE.has(l.replacedBy) ? `<a data-open="${esc(l.replacedBy)}">${esc(l.replacedBy)}</a>` : `<b>${esc(l.replacedBy)}</b>`}</p>` : ""}
    <div class="d-section">
      <h3>${esc(t("translations"))}</h3>
      <table class="tr-table"><tbody>
        ${order.map((k) => `<tr class="${k === state.ui ? "current" : ""}">
          <td class="loc"><b>${k}</b>${esc(LOCALE_LABELS[k])}</td>
          <td class="val" lang="${k}">${esc(l.names[k])}<button class="copy" data-copy="${esc(l.names[k])}" aria-label="Copy">⧉</button></td>
        </tr>`).join("")}
      </tbody></table>
    </div>
    ${related.length ? `<div class="d-section">
      <h3>${esc(t("variants"))}</h3>
      <div class="variants">${related.map((r) => `<button data-open="${esc(r.code)}"><span class="code">${esc(r.code)}</span><span class="lbl">${esc(r.names[state.ui])}</span></button>`).join("")}</div>
    </div>` : ""}`;
  els.drawer.hidden = false;
}

function syncUrl() {
  const p = new URLSearchParams();
  if (state.q) p.set("q", state.q);
  if (state.filter !== "all") p.set("type", state.filter);
  if (state.sort !== "code") p.set("sort", state.sort);
  p.set("ui", state.ui);
  const hash = state.open ? "#" + encodeURIComponent(state.open) : "";
  history.replaceState(null, "", "?" + p.toString() + hash);
}

function render() { renderStatic(); renderFilters(); renderList(); renderDrawer(); syncUrl(); }

let toastTimer;
function toast(msg) {
  els.toast.textContent = msg;
  els.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => els.toast.classList.remove("show"), 1600);
}
async function copy(text) {
  try { await navigator.clipboard.writeText(text); }
  catch {
    const ta = Object.assign(document.createElement("textarea"), { value: text });
    document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
  }
  toast(t("copied", text));
}

let lastFocus = null;
function openDrawer(code) {
  if (!BY_CODE.has(code)) return;
  if (!state.open) lastFocus = document.activeElement;
  state.open = code;
  renderDrawer(); syncUrl();
  els.drawer.querySelector(".close").focus();
}
function closeDrawer() {
  state.open = null;
  els.drawer.hidden = true; syncUrl();
  lastFocus?.focus?.();
}

function bind() {
  els.q.addEventListener("input", () => { state.q = els.q.value; renderList(); syncUrl(); });
  els.filters.addEventListener("click", (e) => {
    const b = e.target.closest("[data-filter]");
    if (!b) return;
    state.filter = b.dataset.filter; renderFilters(); renderList(); syncUrl();
  });
  els.sort.addEventListener("change", () => { state.sort = els.sort.value; renderList(); syncUrl(); });
  els.uiLang.addEventListener("change", () => { state.ui = els.uiLang.value; store.set("ui", state.ui); render(); });

  document.addEventListener("click", (e) => {
    const c = e.target.closest("[data-copy]");
    if (c) { e.stopPropagation(); copy(c.dataset.copy); return; }
    if (e.target.closest("[data-copy-link]")) { copy(location.href); return; }
    const o = e.target.closest("[data-open]");
    if (o) { openDrawer(o.dataset.open); return; }
    if (e.target.closest("[data-close]")) { closeDrawer(); return; }
    const row = e.target.closest(".row");
    if (row) openDrawer(row.dataset.code);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.open) { closeDrawer(); return; }
    if (e.key === "Enter" && e.target.classList?.contains("row")) { openDrawer(e.target.dataset.code); return; }
    if (e.key === "Enter" && e.target === els.q) {
      const first = els.list.querySelector(".row");
      if (first) openDrawer(first.dataset.code);
      return;
    }
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName);
    if (e.key === "/" && !typing && !state.open) { e.preventDefault(); els.q.focus(); els.q.select(); }
  });

  els.theme.addEventListener("click", () => {
    const dark = getComputedStyle(document.documentElement).colorScheme === "dark";
    const next = dark ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    store.set("theme", next);
  });

  window.addEventListener("hashchange", () => {
    const code = decodeURIComponent(location.hash.slice(1));
    if (code && code !== state.open) openDrawer(code);
    else if (!code && state.open) closeDrawer();
  });
}

function pickInitialUi(params) {
  const fromUrl = params.get("ui");
  if (fromUrl && I18N[fromUrl]) return fromUrl;
  const saved = store.get("ui");
  if (saved && I18N[saved]) return saved;
  for (const l of navigator.languages || []) {
    const base = l.toLowerCase().split("-")[0];
    if (I18N[base]) return base;
  }
  return "vi";
}

async function init() {
  const theme = store.get("theme");
  if (theme) document.documentElement.dataset.theme = theme;

  const params = new URLSearchParams(location.search);
  state.ui = pickInitialUi(params);
  state.q = params.get("q") || "";
  state.filter = FILTERS.includes(params.get("type")) ? params.get("type") : "all";
  state.sort = params.get("sort") === "name" ? "name" : "code";
  els.q.value = state.q;

  els.uiLang.innerHTML = Object.entries(LOCALE_LABELS).map(([k, v]) => `<option value="${k}">${esc(v)}</option>`).join("");
  els.uiLang.value = state.ui;
  renderStatic();

  const data = await (await fetch("languages.json")).json();
  LANGS = data.languages.map((l) => {
    const names = Object.values(l.names).map(norm);
    if (l.native) names.push(norm(l.native));
    return { ...l, _names: names, _hay: norm(l.code) + " " + names.join(" ") };
  });
  BY_CODE = new Map(LANGS.map((l) => [l.code, l]));

  const hash = decodeURIComponent(location.hash.slice(1));
  if (BY_CODE.has(hash)) state.open = hash;

  bind();
  render();
}

init();
