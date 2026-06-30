// Clarity Roofing Florida — clarityroofingfl.com
// Shared components: header, footer, form, scroll animations

// ── ADA / Accessibility Widget (self-contained, no third-party account) ──
// Renders a bottom-anchored button + panel. Preferences persist across pages via localStorage.
function renderA11y() {
  if (document.querySelector('.acc-fab')) return;
  const KEY = 'crf-acc';
  const DEFAULTS = { contrast:'', text:0, readable:false, links:false, titles:false, spacing:false, bigcursor:false, noanim:false, guide:false };
  const load = () => { try { return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') }; } catch { return { ...DEFAULTS }; } };
  const save = (s) => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} };
  let state = load();

  function apply(s) {
    const h = document.documentElement;
    h.classList.remove('acc-dark','acc-high','acc-mono');
    if (s.contrast) h.classList.add('acc-' + s.contrast);
    h.classList.remove('acc-text1','acc-text2','acc-text3');
    if (s.text) h.classList.add('acc-text' + s.text);
    h.classList.toggle('acc-readable',   s.readable);
    h.classList.toggle('acc-links',      s.links);
    h.classList.toggle('acc-titles',     s.titles);
    h.classList.toggle('acc-spacing',    s.spacing);
    h.classList.toggle('acc-bigcursor',  s.bigcursor);
    h.classList.toggle('acc-noanim',     s.noanim);
    h.classList.toggle('acc-guide-on',   s.guide);
  }

  const I = {
    access: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="7.5" r="1.6" fill="currentColor" stroke="none"/><path d="M5 10.5h14M12 11v6M12 17l-3 3M12 17l3 3"/></svg>',
    contrast: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 3v18" fill="currentColor"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/></svg>',
    high: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v10M9 9.5h6M9 14.5h6"/></svg>',
    mono: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/></svg>',
    text: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M7 6v13M17 6v13"/></svg>',
    font: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 19l5-13 5 13M7 14h6"/><path d="M16 19l3-7 3 7M17 16.5h4" stroke-width="1.6"/></svg>',
    link: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1"/></svg>',
    title: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4v16M18 4v16M6 12h12M3 4h6M15 4h6"/></svg>',
    space: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    cursor: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M5 3l14 8-6 1.5 3.5 6-2.5 1.5-3.5-6L5 14z"/></svg>',
    anim: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="5" width="4" height="14" rx="1"/><rect x="14" y="5" width="4" height="14" rx="1"/></svg>',
    guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h18"/><path d="M3 8h18M3 16h18" opacity=".4"/></svg>',
  };

  const tBtn = (lvl) => ['Default','Large','Larger','Largest'][lvl];

  const fab = document.createElement('button');
  fab.className = 'acc-fab';
  fab.setAttribute('aria-label', 'Open accessibility menu');
  fab.setAttribute('aria-expanded', 'false');
  fab.innerHTML = I.access;

  const panel = document.createElement('div');
  panel.className = 'acc-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-modal', 'false');
  panel.setAttribute('aria-label', 'Accessibility settings');
  panel.innerHTML = `
    <div class="acc-panel-head">
      <h2>Accessibility</h2>
      <button class="acc-close" aria-label="Close accessibility menu">&times;</button>
    </div>
    <div class="acc-sub">Contrast</div>
    <div class="acc-grid">
      <button class="acc-btn" data-act="contrast" data-val="dark">${I.contrast}<span>Dark Contrast</span></button>
      <button class="acc-btn" data-act="contrast" data-val="high">${I.high}<span>High Contrast</span></button>
      <button class="acc-btn" data-act="contrast" data-val="mono">${I.mono}<span>Monochrome</span></button>
    </div>
    <div class="acc-sub">Reading</div>
    <div class="acc-grid">
      <button class="acc-btn" data-act="text">${I.text}<span>Bigger Text</span><span class="lvl" data-lvl>Default</span></button>
      <button class="acc-btn" data-act="readable">${I.font}<span>Readable Font</span></button>
      <button class="acc-btn" data-act="spacing">${I.space}<span>Text Spacing</span></button>
      <button class="acc-btn" data-act="guide">${I.guide}<span>Reading Guide</span></button>
    </div>
    <div class="acc-sub">Highlight & Focus</div>
    <div class="acc-grid">
      <button class="acc-btn" data-act="links">${I.link}<span>Highlight Links</span></button>
      <button class="acc-btn" data-act="titles">${I.title}<span>Highlight Titles</span></button>
      <button class="acc-btn" data-act="bigcursor">${I.cursor}<span>Big Cursor</span></button>
      <button class="acc-btn" data-act="noanim">${I.anim}<span>Pause Animations</span></button>
    </div>
    <button class="acc-reset">Reset All Settings</button>
    <p class="acc-fineprint">Settings are saved on this device and apply across the site.</p>`;

  const guide = document.createElement('div');
  guide.className = 'acc-guide';

  function refresh() {
    panel.querySelectorAll('.acc-btn').forEach(b => {
      const act = b.dataset.act;
      let on = false;
      if (act === 'contrast') on = state.contrast === b.dataset.val;
      else if (act === 'text') { on = state.text > 0; b.querySelector('[data-lvl]').textContent = tBtn(state.text); }
      else on = !!state[act];
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
    });
  }

  panel.addEventListener('click', (e) => {
    const btn = e.target.closest('.acc-btn');
    if (btn) {
      const act = btn.dataset.act;
      if (act === 'contrast') state.contrast = (state.contrast === btn.dataset.val) ? '' : btn.dataset.val;
      else if (act === 'text') state.text = (state.text + 1) % 4;
      else state[act] = !state[act];
      apply(state); save(state); refresh();
      return;
    }
    if (e.target.closest('.acc-close')) { close(); }
    if (e.target.closest('.acc-reset')) { state = { ...DEFAULTS }; apply(state); save(state); refresh(); }
  });

  function open() { panel.classList.add('open'); fab.setAttribute('aria-expanded','true'); const f = panel.querySelector('.acc-btn'); if (f) f.focus(); }
  function close() { panel.classList.remove('open'); fab.setAttribute('aria-expanded','false'); fab.focus(); }
  fab.addEventListener('click', () => panel.classList.contains('open') ? close() : open());
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && panel.classList.contains('open')) close(); });

  // reading guide follows pointer
  document.addEventListener('mousemove', (e) => { if (state.guide) guide.style.top = (e.clientY - 22) + 'px'; });

  document.body.append(fab, panel, guide);
  apply(state); refresh();
}

const PHONE      = '866.921.5205';
const PHONE_HREF = 'tel:8669215205';
const EMAIL      = 'info@ClarityRoofingFL.com';
const EMAIL_HREF = 'mailto:info@ClarityRoofingFL.com';
const ADDRESS    = '1625 SW 1st Way, Bay C15A<br>Deerfield Beach, FL 33441';

const SERVICES = [
  { label: 'Metal Roofing',                href: 'services/metal-roofing.html' },
  { label: 'Roof Repair & Waterproofing',  href: 'services/roof-repair-waterproofing.html' },
  { label: 'Roof Replacement',             href: 'services/roof-replacement.html' },
  { label: 'Roof Restoration & Coating',   href: 'services/roof-restoration-coating.html' },
  { label: 'Emergency Response',           href: 'services/emergency-response.html' },
  { label: 'Maintenance & Asset Protection', href: 'services/maintenance-asset-protection.html' },
];

function icon(path, size = 20) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`;
}

const ICONS = {
  phone: icon('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.35a16 16 0 0 0 5.72 5.72l1.62-.63a2 2 0 0 1 2.11.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.05z"/>'),
  mail:  icon('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
  pin:   icon('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'),
  fb:    icon('<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>', 16),
  ig:    icon('<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>', 16),
  li:    icon('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>', 16),
  check: icon('<polyline points="20 6 9 17 4 12"/>'),
};

function renderHeader(activePage = '') {
  const isService = activePage.startsWith('svc-');
  document.getElementById('site-header').innerHTML = `
    <div class="topbar">
      <div class="container">
        <span>Serving South Florida Since 2005 · Woman &amp; Minority-Owned Business</span>
        <div class="topbar-right">
          <a href="${EMAIL_HREF}">${EMAIL}</a>
          <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="container">
        <a class="site-logo" href="index.html" aria-label="Clarity Roofing Home">
          <img src="images/clarity-roofing-logo-nav.png" alt="Clarity Roofing Florida Logo" width="165" height="49" />
        </a>
        <nav aria-label="Main navigation">
          <ul class="site-nav">
            <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
            <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About Us</a></li>
            <li class="has-dropdown">
              <a href="services.html" ${isService||activePage==='services'?'class="active"':''}>Services</a>
              <ul class="dropdown">
                ${SERVICES.map(s=>`<li><a href="${s.href}">${s.label}</a></li>`).join('')}
              </ul>
            </li>
            <li><a href="residential.html" ${activePage==='residential'?'class="active"':''}>Residential</a></li>
            <li class="has-dropdown">
              <a href="gallery.html" ${activePage==='gallery'||activePage==='news'?'class="active"':''}>Clarity College</a>
              <ul class="dropdown">
                <li><a href="gallery.html">Clarity College</a></li>
                <li><a href="news.html">News</a></li>
              </ul>
            </li>
            <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact Us</a></li>
          </ul>
        </nav>
        <a class="nav-phone" href="${PHONE_HREF}">${PHONE}</a>
        <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" id="mobile-nav">
        <a href="index.html">Home</a>
        <a href="about.html">About Us</a>
        <a href="services.html">Services</a>
        <div class="sub">${SERVICES.map(s=>`<a href="${s.href}">${s.label}</a>`).join('')}</div>
        <a href="residential.html">Residential</a>
        <a href="gallery.html">Clarity College</a>
        <div class="sub"><a href="news.html">News</a></div>
        <a href="contact.html">Contact Us</a>
        <a class="m-cta" href="${PHONE_HREF}">${PHONE}</a>
      </nav>
    </header>`;

  const ham = document.getElementById('hamburger');
  const mn  = document.getElementById('mobile-nav');
  ham.addEventListener('click', () => {
    const open = mn.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', String(open));
  });
}

function renderFooter() {
  const yr = new Date().getFullYear();
  document.getElementById('site-footer').innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img class="footer-brand-logo" src="images/clarity-roofing-logo-white.png" alt="Clarity Roofing Florida" width="165" height="49" />
            <p>Clarity Roofing Solutions is dedicated to partnering with you through education and exceptional service — it's a two-way street!</p>
            <div class="footer-social">
              <a class="social-btn" href="https://www.facebook.com/ClarityRoofingFL/" target="_blank" rel="noopener" aria-label="Facebook">${ICONS.fb}</a>
              <a class="social-btn" href="https://www.instagram.com/clarityroofingfl/" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.ig}</a>
              <a class="social-btn" href="https://www.linkedin.com/company/clarity-roofing-solutions/" target="_blank" rel="noopener" aria-label="LinkedIn">${ICONS.li}</a>
            </div>
          </div>
          <div class="footer-col">
            <h5>Services</h5>
            <ul>
              ${SERVICES.map(s=>`<li><a href="${s.href}">${s.label}</a></li>`).join('')}
            </ul>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="residential.html">Residential</a></li>
              <li><a href="gallery.html">Clarity College</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="contact.html">Free Estimate</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Get In Touch</h5>
            <div class="footer-contact-info">
              <div class="f-contact">${ICONS.phone}<a href="${PHONE_HREF}">${PHONE}</a></div>
              <div class="f-contact">${ICONS.mail}<a href="${EMAIL_HREF}">${EMAIL}</a></div>
              <div class="f-contact">${ICONS.pin}<span>${ADDRESS}</span></div>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Copyright &copy; ${yr} Clarity Roofing Solutions. All rights reserved.</p>
          <div class="footer-legal">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="https://www.thatskrispy.com" target="_blank" rel="noopener">@ThatsKrispy</a>
          </div>
        </div>
      </div>
    </footer>`;
}

// Web3Forms contact form
function initContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending…'; btn.disabled = true;
    const fd = new FormData(form);
    fd.append('access_key', 'REPLACE_WITH_WEB3FORMS_KEY');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd });
      const json = await res.json();
      if (json.success) {
        form.reset();
        const s = document.getElementById('form-success');
        if (s) s.style.display = 'block';
        btn.textContent = 'Message Sent!';
      } else {
        btn.textContent = 'Error — Try Again'; btn.disabled = false;
      }
    } catch { btn.textContent = 'Error — Try Again'; btn.disabled = false; }
  });
}

// Scroll animation
function initFade() {
  const els = document.querySelectorAll('.fade-up');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => io.observe(el));
}

document.addEventListener('DOMContentLoaded', () => { initFade(); renderA11y(); });
