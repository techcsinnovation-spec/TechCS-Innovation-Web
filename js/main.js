document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const tabPanels = document.querySelectorAll('.tab-panel');
const tabLinks = document.querySelectorAll('[data-tab-link]');

function activateTab(tabId, updateHash = true) {
  tabPanels.forEach(panel => {
    panel.classList.toggle('active', panel.id === tabId);
  });
  tabLinks.forEach(link => {
    if (link.closest('.site-nav')) {
      link.classList.toggle('active', link.dataset.tabLink === tabId);
    }
  });
  if (updateHash) {
    history.pushState(null, '', '#' + tabId);
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

tabLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    activateTab(link.dataset.tabLink);
    siteNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

navToggle.addEventListener('click', () => {
  const isOpen = siteNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

window.addEventListener('popstate', () => {
  const id = location.hash ? location.hash.substring(1) : 'inicio';
  const validIds = Array.from(tabPanels).map(p => p.id);
  activateTab(validIds.includes(id) ? id : 'inicio', false);
});

const initialId = location.hash ? location.hash.substring(1) : 'inicio';
const validIds = Array.from(tabPanels).map(p => p.id);
activateTab(validIds.includes(initialId) ? initialId : 'inicio', false);