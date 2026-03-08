/* ==========================================================================
   Andrea Ong Portfolio — Main JavaScript
   Handles: content loading, routing, animations, navigation
   ========================================================================== */

(function () {
  'use strict';

  // --- State ---
  let settings = {};
  let caseStudies = [];
  let blogPosts = [];
  let bio = {};
  let coaching = {};

  function formatDate(dateStr) {
    if (!dateStr) return '';
    if (dateStr.length <= 10 && dateStr.includes('–')) return dateStr;
    if (dateStr.startsWith('Q')) return dateStr;
    const d = new Date(dateStr);
    if (isNaN(d)) return dateStr;
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  }

  function slugify(str) {
    return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }

  function createImageOrPlaceholder(src, alt, placeholderText) {
    if (src && src !== '') {
      return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.parentElement.innerHTML='<div class=\\'image-placeholder\\'>${placeholderText || 'Image'}</div>'">`;
    }
    return `<div class="image-placeholder">${placeholderText || 'Image'}</div>`;
  }

  // --- Router ---
  function getRoute() {
    const hash = window.location.hash.slice(1) || '';
    if (hash.startsWith('case-study/')) return { page: 'case-study', id: hash.slice(11) };
    if (hash.startsWith('blog/')) return { page: 'blog', id: hash.slice(5) };
    if (hash === 'case-studies') return { page: 'home', section: 'case-studies' };
    if (hash === 'blog') return { page: 'home', section: 'blog' };
    if (hash === 'about') return { page: 'home', section: 'about' };
    if (hash === 'contact') return { page: 'home', section: 'contact' };
    return { page: 'home' };
  }

  // --- Render: Home ---
  function renderHome() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <!-- Hero -->
      <section class="hero" id="hero">
        <div class="container">
          <div class="hero__content reveal">
            <span class="hero__label">Strategy & Design Leadership</span>
            <h1>${bio.headline || ''}</h1>
            <p class="hero__text">${bio.intro || ''}</p>
            <div class="hero__cta">
              <a href="#blog" class="btn btn--primary">Read Blog <span class="btn__arrow">&rarr;</span></a>
              <a href="#contact" class="btn btn--outline">Get in Touch</a>
            </div>
          </div>
        </div>
      </section>

      <!-- Blog -->
      <section class="blog-section" id="blog">
        <div class="container">
          <div class="section-header reveal">
            <h4>Insights & Notes</h4>
            <h2>Blog</h2>
          </div>
          <div class="blog-grid stagger-children">
            ${blogPosts.map(post => `
              <a href="#blog/${post.id}" class="blog-card">
                <div class="blog-card__image">
                  ${createImageOrPlaceholder(post.image, post.title, 'Blog')}
                </div>
                <div class="blog-card__content">
                  <p class="blog-card__date">${formatDate(post.date)}</p>
                  <h3>${post.title}</h3>
                  <p class="blog-card__subtitle">${post.subtitle}</p>
                  <div class="blog-card__tags">
                    ${(post.tags || []).map(t => `<span class="skill-tag">${t}</span>`).join('')}
                  </div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Case Studies -->
      <section class="case-studies" id="case-studies">
        <div class="container">
          <div class="section-header reveal">
            <h4>Selected Work</h4>
            <h2>Case Studies</h2>
          </div>
          <div class="case-studies-grid stagger-children">
            ${caseStudies.map(cs => `
              <a href="#case-study/${cs.id}" class="case-study-card">
                <div class="case-study-card__image">
                  ${createImageOrPlaceholder(cs.thumbnail, cs.title, cs.title)}
                </div>
                <div class="case-study-card__content">
                  <div class="case-study-card__skills">
                    ${cs.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
                  </div>
                  <h3>${cs.title}</h3>
                  <p class="case-study-card__subtitle">${cs.subtitle}</p>
                  <p class="case-study-card__overview">${cs.overview}</p>
                  <span class="case-study-card__link">Read Case Study <span>&rarr;</span></span>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </section>

      <!-- Coaching -->
      <section class="coaching" id="coaching">
        <div class="container--narrow">
          <div class="coaching__hero reveal">
            <p class="coaching__tagline">${coaching.tagline || ''}</p>
            <h2>${coaching.headline || 'Design Coaching'}</h2>
          </div>

          ${coaching.intro ? `
          <div class="coaching__intro reveal">
            <h3>${coaching.intro.heading || ''}</h3>
            <p>${coaching.intro.body || ''}</p>
          </div>
          ` : ''}

          ${coaching.whatICanDo ? `
          <div class="coaching__what-i-can-do reveal">
            <h3>${coaching.whatICanDo.heading || ''}</h3>
            ${(coaching.whatICanDo.content || []).map(p => `<p>${p}</p>`).join('')}
            ${coaching.whatICanDo.targetAudience ? `
              <div class="coaching__target-audience">
                <h4>${coaching.whatICanDo.targetAudience.heading || ''}</h4>
                <ul>
                  ${(coaching.whatICanDo.targetAudience.items || []).map(item => `<li>${item}</li>`).join('')}
                </ul>
              </div>
            ` : ''}
          </div>
          ` : ''}

          <div class="coaching__programs">
            ${(coaching.programs || []).map(program => `
              <div class="coaching__program reveal">
                <h3>${program.title}</h3>
                <p class="coaching__program-desc">${program.description}</p>

                <div class="coaching__outcomes">
                  <h4>Outcomes:</h4>
                  <ul>
                    ${(program.outcomes || []).map(outcome => `<li>${outcome}</li>`).join('')}
                  </ul>
                </div>

                <div class="coaching__pricing">
                  <h4>Pricing ${program.pricing.note ? `(${program.pricing.note})` : `(${program.pricing.type})`}:</h4>
                  <ul class="pricing-tiers">
                    ${(program.pricing.tiers || []).map(tier => `
                      <li><strong>${tier.level}:</strong> ${tier.rate}</li>
                    `).join('')}
                  </ul>
                  ${program.pricing.followUp ? `
                    <div class="coaching__follow-up">
                      <p>${program.pricing.followUp.note}</p>
                      <ul class="pricing-tiers">
                        ${(program.pricing.followUp.tiers || []).map(tier => `
                          <li><strong>${tier.level}:</strong> ${tier.rate}</li>
                        `).join('')}
                      </ul>
                    </div>
                  ` : ''}
                </div>

                <a href="${program.ctaLink || '#contact'}" class="btn btn--outline btn--sm">Let's chat</a>
              </div>
            `).join('')}
          </div>

          ${coaching.testimonials && coaching.testimonials.items && coaching.testimonials.items.length > 0 ? `
          <div class="coaching__testimonials-section reveal">
            <h3>${coaching.testimonials.heading || 'Testimonials'}</h3>
            <div class="coaching__testimonials">
              ${coaching.testimonials.items.map(t => `
                <blockquote class="coaching__testimonial">
                  <p>&ldquo;${t.quote}&rdquo;</p>
                  <footer>
                    <strong>${t.name}</strong>
                    <span>${t.role}</span>
                  </footer>
                </blockquote>
              `).join('')}
            </div>
          </div>
          ` : ''}

          ${coaching.cta ? `
          <div class="coaching__cta reveal">
            <p>${coaching.cta.text || ''}</p>
            <a href="${coaching.cta.buttonLink || '#contact'}" class="btn btn--primary">${coaching.cta.buttonText || 'Get in Touch'} <span class="btn__arrow">&rarr;</span></a>
          </div>
          ` : ''}
        </div>
      </section>

      <!-- About -->
      <section class="about" id="about">
        <div class="container">
          <div class="about__grid">
            <div class="about__image reveal">
              ${createImageOrPlaceholder(bio.headshot, 'Andrea Ong', 'Headshot')}
            </div>
            <div class="about__content reveal">
              <h4>About</h4>
              <h2>Andrea Ong</h2>
              <p class="about__intro">${bio.intro || ''}</p>
              <div class="about__body">
                ${(bio.body || []).map(p => `<p>${p}</p>`).join('')}
              </div>
              <div class="about__skills">
                <h4>Expertise</h4>
                <div class="skills-list">
                  ${(bio.skills || []).map(s => `<span class="skill-tag">${s}</span>`).join('')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact -->
      <section class="contact" id="contact">
        <div class="container">
          <div class="reveal">
            <h4>Get in Touch</h4>
            <h2>Let's work together</h2>
            <p class="text-large">Have a project in mind or just want to connect?<br>I'd love to hear from you.</p>
          </div>
          <form class="contact-form reveal" action="${settings.contactFormAction || '#'}" method="POST">
            <div class="form-group">
              <label for="name">Name</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group">
              <label for="message">Message</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit" class="btn btn--primary">Send Message <span class="btn__arrow">&rarr;</span></button>
          </form>
        </div>
      </section>
    `;

    initAnimations();
  }

  // --- Render: Case Study Detail ---
  function renderCaseStudy(id) {
    const cs = caseStudies.find(c => c.id === id);
    if (!cs) { renderHome(); return; }
    const app = document.getElementById('app');
    window.scrollTo(0, 0);

    app.innerHTML = `
      <section class="detail-hero">
        <div class="container--narrow">
          <a href="#case-studies" class="detail-hero__back">&larr; Back to Work</a>
          <div class="reveal">
            <div class="case-study-card__skills" style="margin-bottom: 1rem;">
              ${cs.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
            <h1>${cs.title}</h1>
            <p class="text-large">${cs.subtitle}</p>
          </div>
          <div class="detail-hero__meta reveal">
            <div class="detail-hero__meta-item">
              <h4>Timeline</h4>
              <p>${cs.date}</p>
            </div>
            <div class="detail-hero__meta-item">
              <h4>My Role</h4>
              <p>${cs.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="detail-content">
        <div class="container--narrow">
          ${cs.demonstrates ? `
            <div class="detail-content__demonstrates reveal">
              <h4>What This Demonstrates</h4>
              <ul>
                ${cs.demonstrates.map(d => `<li>${d}</li>`).join('')}
              </ul>
            </div>
          ` : ''}

          ${cs.sections.map(s => `
            <div class="detail-content__section reveal">
              <h3>${s.heading}</h3>
              ${s.content.split('\n\n').map(p => `<p>${p}</p>`).join('')}
            </div>
          `).join('')}

          <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-border-light);">
            <a href="#case-studies" class="btn btn--outline">&larr; Back to All Work</a>
          </div>
        </div>
      </section>
    `;

    initAnimations();
  }

  // --- Password Gate ---
  var BLOG_PASSWORD = 'Andrea5work';
  var SESSION_KEY = 'blog_unlocked';

  function isBlogUnlocked() {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  }

  function renderPasswordGate(id) {
    var app = document.getElementById('app');
    window.scrollTo(0, 0);
    app.innerHTML = `
      <section class="password-gate">
        <div class="password-gate__box reveal">
          <div class="password-gate__icon">🔒</div>
          <h2>Protected Content</h2>
          <p>This section is password protected.<br>Enter the password to continue.</p>
          <form class="password-gate__form" id="password-gate-form">
            <input
              type="password"
              class="password-gate__input"
              id="password-gate-input"
              placeholder="Password"
              autocomplete="current-password"
              autofocus
            >
            <div class="password-gate__error" id="password-gate-error"></div>
            <button type="submit" class="btn btn--primary" style="width:100%;">
              Unlock <span class="btn__arrow">&rarr;</span>
            </button>
          </form>
          <p style="margin-top:1.5rem;">
            <a href="#case-studies" style="font-size:0.85rem;color:var(--color-text-secondary);">&larr; Back to Work</a>
          </p>
        </div>
      </section>
    `;

    initAnimations();

    var form = document.getElementById('password-gate-form');
    var input = document.getElementById('password-gate-input');
    var errorEl = document.getElementById('password-gate-error');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (input.value === BLOG_PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, 'true');
        renderHome();
        scrollToSection('case-studies');
      } else {
        errorEl.textContent = 'Incorrect password. Please try again.';
        input.classList.add('error');
        input.value = '';
        setTimeout(function () { input.classList.remove('error'); }, 400);
      }
    });
  }

  // --- Render: Blog Detail ---
  function renderBlogPost(id) {
    const post = blogPosts.find(p => p.id === id);
    if (!post) { renderHome(); return; }
    const app = document.getElementById('app');
    window.scrollTo(0, 0);

    app.innerHTML = `
      <section class="detail-hero">
        <div class="container--narrow">
          <a href="#blog" class="detail-hero__back">&larr; Back to Blog</a>
          <div class="reveal">
            <p class="blog-card__date">${formatDate(post.date)}</p>
            <h1>${post.title}</h1>
            <p class="text-large">${post.subtitle}</p>
            <div class="blog-card__tags" style="margin-top: 1rem;">
              ${(post.tags || []).map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </section>

      <section class="detail-content">
        <div class="container--narrow">
          <div class="blog-detail__image reveal">
            ${createImageOrPlaceholder(post.image, post.title, 'Sketchnote')}
          </div>
          <div class="blog-detail__content">
            ${(post.content || []).map(p => `<p class="reveal">${p}</p>`).join('')}
          </div>
          <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid var(--color-border-light);">
            <a href="#blog" class="btn btn--outline">&larr; Back to Blog</a>
          </div>
        </div>
      </section>
    `;

    initAnimations();
  }

  // --- Navigation ---
  function initNav() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.nav__toggle');
    const links = document.querySelector('.nav__links');
    const overlay = document.querySelector('.nav__overlay');

    // Scroll effect
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Mobile toggle
    if (toggle) {
      toggle.addEventListener('click', () => {
        links.classList.toggle('open');
        overlay.classList.toggle('open');
      });
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        links.classList.remove('open');
        overlay.classList.remove('open');
      });
    }

    // Close on link click
    document.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        links.classList.remove('open');
        overlay.classList.remove('open');
      });
    });
  }

  // --- Scroll Animations ---
  function initAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal, .stagger-children').forEach(el => observer.observe(el));
  }

  // --- Smooth Scroll to Section ---
  function scrollToSection(sectionId) {
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const navHeight = document.querySelector('.nav').offsetHeight;
        const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight - 20;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  }

  // --- Router Handler ---
  function handleRoute() {
    const route = getRoute();

    if (route.page === 'case-study') {
      if (isBlogUnlocked()) {
        renderCaseStudy(route.id);
      } else {
        renderPasswordGate(route.id);
      }
    } else if (route.page === 'blog') {
      renderBlogPost(route.id);
    } else {
      renderHome();
      if (route.section) {
        scrollToSection(route.section);
      }
    }
  }

  // --- Contact Form ---
  function initContactForm() {
    document.addEventListener('submit', function (e) {
      if (!e.target.classList.contains('contact-form')) return;

      // If no Formspree URL configured, show a message
      const action = e.target.getAttribute('action');
      if (!action || action === '#' || action.includes('YOUR_FORM_ID')) {
        e.preventDefault();
        const btn = e.target.querySelector('.btn');
        btn.textContent = 'Form not configured yet — see README';
        btn.style.background = 'var(--color-text-tertiary)';
        return;
      }
    });
  }

  // --- Init ---
  function init() {
    try {
      const content = window.SITE_CONTENT || {};
      settings = content.settings || {};
      caseStudies = content.caseStudies || [];
      blogPosts = (content.blog || []).sort((a, b) => new Date(b.date) - new Date(a.date));
      bio = content.bio || {};
      coaching = content.coaching || {};

      // Set page title
      document.title = settings.siteName || 'Portfolio';

      // Update meta
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.content = settings.metaDescription || '';

      // Render nav
      // Nav logo is an image — no text update needed

      // Render footer
      renderFooter();

      // Handle initial route
      handleRoute();

      // Init components
      initNav();
      initContactForm();

      // Listen for route changes
      window.addEventListener('hashchange', handleRoute);

    } catch (err) {
      console.error('Failed to load content:', err);
      document.getElementById('app').innerHTML = `
        <div style="min-height:80vh;display:flex;align-items:center;justify-content:center;text-align:center;padding:2rem;">
          <div>
            <h2>Content loading error</h2>
            <p style="margin-top:1rem;color:var(--color-text-secondary);">
              Make sure you're running this site through a local server (not opening the HTML file directly).<br>
              See the README for instructions.
            </p>
          </div>
        </div>
      `;
    }
  }

  function renderFooter() {
    const footer = document.querySelector('.footer');
    if (!footer) return;
    const year = new Date().getFullYear();
    const social = settings.socialLinks || {};

    footer.innerHTML = `
      <div class="container">
        <div class="footer__inner">
          <p class="footer__copyright">&copy; ${year} ${settings.siteName || ''}. All rights reserved.</p>
          <div class="footer__social">
            ${social.linkedin ? `<a href="${social.linkedin}" target="_blank" rel="noopener">LinkedIn</a>` : ''}
            ${social.instagram ? `<a href="${social.instagram}" target="_blank" rel="noopener">Instagram</a>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  // Start
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
