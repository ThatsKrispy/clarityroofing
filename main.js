// Clarity Roofing — shared components

const PHONE = '866.921.5205';
const PHONE_HREF = 'tel:8669215205';
const EMAIL = 'info@ClarityRoofingFL.com';
const EMAIL_HREF = 'mailto:info@ClarityRoofingFL.com';

function renderHeader(activePage = '') {
  const services = [
    { label: 'Metal Roofing', href: 'services/metal-roofing.html' },
    { label: 'Roof Repair & Waterproofing', href: 'services/roof-repair-waterproofing.html' },
    { label: 'Roof Replacement', href: 'services/roof-replacement.html' },
    { label: 'Roof Restoration & Coating', href: 'services/roof-restoration-coating.html' },
    { label: 'Emergency Response', href: 'services/emergency-response.html' },
    { label: 'Maintenance & Asset Protection', href: 'services/maintenance-asset-protection.html' },
  ];

  const isServicePage = activePage.startsWith('service-');

  document.getElementById('site-header').innerHTML = `
    <div class="topbar">
      <div class="container">
        <div class="topbar-left">
          <span>Serving South Florida Since 2005</span>
          <span>|</span>
          <span>Woman &amp; Minority-Owned Business</span>
        </div>
        <div class="topbar-right">
          <a href="${EMAIL_HREF}">${EMAIL}</a>
          <span>|</span>
          <a href="${PHONE_HREF}"><strong>${PHONE}</strong></a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="container">
        <a class="site-logo" href="index.html" aria-label="Clarity Roofing Home">
          <img src="images/clarity-roofing-florida-logo.png" alt="Clarity Roofing Florida" />
        </a>
        <nav aria-label="Main navigation">
          <ul class="site-nav">
            <li><a href="index.html" ${activePage==='home'?'class="active"':''}>Home</a></li>
            <li><a href="about.html" ${activePage==='about'?'class="active"':''}>About</a></li>
            <li class="has-dropdown">
              <a href="services.html" ${isServicePage||activePage==='services'?'class="active"':''}>Services</a>
              <ul class="dropdown">
                ${services.map(s=>`<li><a href="${s.href}">${s.label}</a></li>`).join('')}
              </ul>
            </li>
            <li><a href="residential.html" ${activePage==='residential'?'class="active"':''}>Residential</a></li>
            <li><a href="gallery.html" ${activePage==='gallery'?'class="active"':''}>Gallery</a></li>
            <li><a href="contact.html" ${activePage==='contact'?'class="active"':''}>Contact</a></li>
          </ul>
        </nav>
        <a class="btn btn-primary nav-cta" href="contact.html">Free Estimate</a>
        <button class="hamburger" aria-label="Toggle menu" aria-expanded="false" id="hamburger">
          <span></span><span></span><span></span>
        </button>
      </div>
      <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation">
        <a href="index.html">Home</a>
        <a href="about.html">About</a>
        <a href="services.html">Services</a>
        <div class="sub">
          ${services.map(s=>`<a href="${s.href}">${s.label}</a>`).join('')}
        </div>
        <a href="residential.html">Residential</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
        <a class="btn btn-primary" href="contact.html">Free Estimate</a>
      </nav>
    </header>
  `;

  // Hamburger toggle
  const ham = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  ham.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    ham.classList.toggle('open', open);
    ham.setAttribute('aria-expanded', open);
  });
}

function renderFooter() {
  const yr = new Date().getFullYear();
  document.getElementById('site-footer').innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            <img src="images/clarity-roofing-florida-logo.png" alt="Clarity Roofing Florida" />
            <p>Clarity Roofing Solutions is a trusted, full-service roofing partner serving commercial and residential clients throughout South Florida since 2005.</p>
            <div class="footer-social">
              <a class="social-link" href="https://www.facebook.com/ClarityRoofingFL/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a class="social-link" href="https://www.instagram.com/clarityroofingfl/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a class="social-link" href="https://www.linkedin.com/company/clarity-roofing-solutions/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>
          <div class="footer-col">
            <h5>Services</h5>
            <ul>
              <li><a href="services/metal-roofing.html">Metal Roofing</a></li>
              <li><a href="services/roof-repair-waterproofing.html">Roof Repair &amp; Waterproofing</a></li>
              <li><a href="services/roof-replacement.html">Roof Replacement</a></li>
              <li><a href="services/roof-restoration-coating.html">Roof Restoration &amp; Coating</a></li>
              <li><a href="services/emergency-response.html">Emergency Response</a></li>
              <li><a href="services/maintenance-asset-protection.html">MAPS Program</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="residential.html">Residential</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a href="contact.html">Free Estimate</a></li>
            </ul>
          </div>
          <div class="footer-col footer-contact">
            <h5>Get In Touch</h5>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.35a16 16 0 0 0 5.72 5.72l1.62-.63a2 2 0 0 1 2.11.45c.907.339 1.85.573 2.81.7a2 2 0 0 1 1.72 2.05z"/></svg><a href="${PHONE_HREF}">${PHONE}</a></p>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><a href="${EMAIL_HREF}">${EMAIL}</a></p>
            <p><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span>1625 SW 1st Way, Bay C15A<br>Deerfield Beach, FL 33441</span></p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Copyright &copy; ${yr} Clarity Roofing Solutions. All rights reserved.</p>
          <div class="footer-legal">
            <a href="privacy-policy.html">Privacy Policy</a>
            <a href="terms.html">Terms of Service</a>
            <a href="https://www.thatskrispy.com" target="_blank" rel="noopener">Site by @ThatsKrispy</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

// Scroll fade-in observer
function initScrollAnimations() {
  const els = document.querySelectorAll('.fade-in');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
}

// Web3Forms contact handler
function initContactForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('.form-submit');
    btn.textContent = 'Sending…';
    btn.disabled = true;
    const data = new FormData(form);
    data.append('access_key', '00000000-0000-0000-0000-000000000000'); // REPLACE with real Web3Forms key
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      if (json.success) {
        form.reset();
        const suc = document.getElementById('form-success');
        if (suc) { suc.style.display = 'block'; }
        btn.textContent = 'Message Sent!';
      } else {
        btn.textContent = 'Error — Please Try Again';
        btn.disabled = false;
      }
    } catch {
      btn.textContent = 'Error — Please Try Again';
      btn.disabled = false;
    }
  });
}

document.addEventListener('DOMContentLoaded', initScrollAnimations);
