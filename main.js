// Clarity Roofing Florida — clarityroofingfl.com
// Shared components: header, footer, form, scroll animations

// ── ADA / Accessibility Widget (UserWay) ──
// Replace YOUR_USERWAY_ACCOUNT_ID with the real key from userway.org
(function(d) {
  var s = d.createElement('script');
  s.setAttribute('data-account', 'YOUR_USERWAY_ACCOUNT_ID');
  s.setAttribute('src', 'https://cdn.userway.org/widget.js');
  s.async = true;
  (d.body || d.head).appendChild(s);
})(document);

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

document.addEventListener('DOMContentLoaded', initFade);
