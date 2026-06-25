import { renderHome } from './pages/home.js';
import { renderPropiedades } from './pages/propiedades.js';
import { renderInvertir } from './pages/invertir.js';
import { renderMapa } from './pages/mapa.js';
import { renderNosotros } from './pages/nosotros.js';
import { renderContacto } from './pages/contacto.js';

const appEl = document.getElementById('app');

function getRoute(){
  const hash = (location.hash || '#/home').replace(/^#/, '');
  const route = hash.startsWith('/') ? hash.slice(1) : hash;
  return route.split('?')[0];
}

function setActiveYear(){
  const y = document.getElementById('year');
  if (y) y.textContent = String(new Date().getFullYear());
}

function highlightNav(){
  const route = getRoute();
  document.querySelectorAll('.nav-link').forEach(a => {
    const href = (a.getAttribute('href') || '').replace(/^#/, '');
    const targetRoute = href.startsWith('/') ? href.slice(1) : href;
    const isActive = targetRoute === route;
    a.style.color = isActive ? '#fff' : '';
    if (isActive) a.style.fontWeight = '900';
  });
}

function render(){
  const route = getRoute();
  highlightNav();

  appEl.innerHTML = '';

  if (route === 'home' || route === '') return renderHome(appEl);
  if (route === 'propiedades') return renderPropiedades(appEl);
  if (route === 'invertir') return renderInvertir(appEl);
  if (route === 'mapa') return renderMapa(appEl);
  if (route === 'nosotros') return renderNosotros(appEl);
  if (route === 'contacto') return renderContacto(appEl);

  // fallback
  return renderHome(appEl);
}

function setupMobileNav(){
  const btn = document.querySelector('[data-nav-toggle]');
  if (!btn) return;

  const onToggle = () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));

    let mobileNav = document.querySelector('.mobile-nav');
    if (!mobileNav){
      // clone nav for mobile
      const nav = document.querySelector('.nav');
      mobileNav = document.createElement('div');
      mobileNav.className = 'mobile-nav';
      mobileNav.setAttribute('role','navigation');
      nav.parentElement.appendChild(mobileNav);
      nav.querySelectorAll('a').forEach(a=> mobileNav.appendChild(a.cloneNode(true)));
    }

    mobileNav.classList.toggle('open');
  };

  btn.addEventListener('click', onToggle);
}

window.addEventListener('hashchange', render);

setActiveYear();
setupMobileNav();
render();

