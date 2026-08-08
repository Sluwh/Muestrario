/* ==========================================================================
   MOTOR DEL MUESTRARIO DE APLICACIONES
   Físicas de cursor Lerp, cálculo vectorial SVG y gestión de estado
   Todo en Idioma Español
   ========================================================================== */

(function () {
  'use strict';

  // Gestión de Estado
  let appsList = [];
  let currentCategory = 'ALL';
  let searchQuery = '';
  let activeAppId = null;

  // Elementos DOM
  const preloader = document.getElementById('preloader');
  const cursorRing = document.getElementById('cursor-ring');
  const cursorDot = document.getElementById('cursor-dot');
  const appsListContainer = document.getElementById('apps-list');
  const detailsContent = document.getElementById('details-content');
  const connectorPath = document.getElementById('connector-path');
  const connectorSvg = document.getElementById('connector-svg');
  const anchorRight = document.getElementById('anchor-right');
  const searchInput = document.getElementById('search-input');
  const categoryBar = document.getElementById('category-bar');
  const appCounter = document.getElementById('app-counter');

  // --- Físicas de Cursor (Respuesta Instantánea 1:1 Sin Delay) ---
  function initCursor() {
    window.addEventListener('mousemove', (e) => {
      const x = e.clientX;
      const y = e.clientY;
      
      cursorDot.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      cursorRing.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    attachCursorTriggers();
  }

  function attachCursorTriggers() {
    document.querySelectorAll('.hover-trigger, button, a, input, select, .app-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursorRing.classList.add('active');
        if (el.tagName === 'A' || el.classList.contains('cat-pill')) {
          cursorRing.classList.add('hover-link');
        }
      });
      el.addEventListener('mouseleave', () => {
        cursorRing.classList.remove('active', 'hover-link');
      });
    });
  }

  // --- Carga de Datos ---
  function loadAppsData() {
    appsList = [...initialApps];
    saveAppsData();

    if (appsList.length > 0) {
      activeAppId = appsList[0].id;
    }
  }

  function saveAppsData() {
    localStorage.setItem('showcase_user_apps_v2', JSON.stringify(appsList));
  }

  // --- Renderizado de Lista y Detalles ---
  function renderList() {
    const filtered = appsList.filter(app => {
      const matchesCat = (currentCategory === 'ALL') || (app.category.toLowerCase() === currentCategory.toLowerCase());
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            app.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (app.tag && app.tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });

    appCounter.innerText = `${appsList.length} HERRAMIENTAS`;

    if (filtered.length === 0) {
      appsListContainer.innerHTML = `<div class="empty-state">No se encontraron aplicaciones coincidentes.</div>`;
      detailsContent.innerHTML = `<div class="empty-state">Selecciona una aplicación para ver sus detalles de utilidad.</div>`;
      clearConnectorLine();
      return;
    }

    if (!filtered.some(a => a.id === activeAppId)) {
      activeAppId = filtered[0].id;
    }

    appsListContainer.innerHTML = filtered.map(app => {
      const isActive = app.id === activeAppId;
      return `
        <div class="app-item ${isActive ? 'active' : ''} hover-trigger" data-id="${app.id}">
          <div class="app-item-left">
            <div class="app-icon">${app.icon || '📌'}</div>
            <div>
              <div class="app-info-name">${escapeHtml(app.name)}</div>
              <div class="app-info-category">${escapeHtml(app.tag || app.category)}</div>
            </div>
          </div>
          <div class="app-item-arrow">→</div>
          <div class="anchor-node-left" data-anchor-id="${app.id}"></div>
        </div>
      `;
    }).join('');

    document.querySelectorAll('.app-item').forEach(item => {
      item.addEventListener('click', () => {
        activeAppId = item.dataset.id;
        renderList();
        renderDetails();
      });
    });

    attachCursorTriggers();
    renderDetails();
  }

  function renderDetails() {
    const app = appsList.find(a => a.id === activeAppId);
    if (!app) {
      detailsContent.innerHTML = `<div class="empty-state">Selecciona una aplicación de la lista izquierda.</div>`;
      clearConnectorLine();
      return;
    }

    const featuresHtml = app.features && app.features.length > 0
      ? `<div class="details-section-title">CARACTERÍSTICAS CLAVE</div>
         <ul class="features-list">
           ${app.features.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
         </ul>`
      : '';

    const osPills = app.os && app.os.length > 0
      ? app.os.map(os => `<span class="os-pill">${escapeHtml(os)}</span>`).join('')
      : '<span class="os-pill">Universal</span>';

    detailsContent.innerHTML = `
      <div>
        <div class="details-header">
          <div>
            <div class="details-badge-group">
              <span class="details-tag">${escapeHtml(app.tag || app.category)}</span>
              <div class="details-os-group">${osPills}</div>
            </div>
            <h2 class="details-title">${escapeHtml(app.name)}</h2>
          </div>
          <span style="font-size: 2.2rem;">${app.icon || '📌'}</span>
        </div>

        <p class="details-short">${escapeHtml(app.shortDesc)}</p>

        <div class="divider"></div>

        <div class="details-section-title">POR QUÉ USO ESTA APLICACIÓN</div>
        <p class="details-full">${escapeHtml(app.fullDesc)}</p>

        ${featuresHtml}
      </div>

      <div class="details-footer">
        <div class="shortcut-block">
          <span>ATAJO:</span>
          <span class="shortcut-key">${escapeHtml(app.command || 'Inicio Directo')}</span>
        </div>
        <a href="${escapeHtml(app.website)}" target="_blank" rel="noopener" class="btn-visit hover-trigger">
          <span>Abrir Aplicación</span>
          <span>↗</span>
        </a>
      </div>
    `;

    attachCursorTriggers();

    const detailsCard = document.getElementById('app-details-card');
    if (detailsCard) {
      detailsCard.scrollTop = 0;
      if (window.innerWidth <= 868) {
        detailsCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }

    requestAnimationFrame(() => {
      updateConnectorLine();
    });
  }

  // --- Cálculo de la Flecha Conectora Vectorial SVG ---
  function updateConnectorLine() {
    if (window.innerWidth <= 1024) {
      clearConnectorLine();
      return;
    }

    const activeNode = document.querySelector(`.anchor-node-left[data-anchor-id="${activeAppId}"]`);
    if (!activeNode || !anchorRight || !connectorPath) {
      clearConnectorLine();
      return;
    }

    const leftRect = activeNode.getBoundingClientRect();
    const rightRect = anchorRight.getBoundingClientRect();
    const svgRect = connectorSvg.getBoundingClientRect();

    const x1 = leftRect.left - svgRect.left + leftRect.width / 2;
    const y1 = leftRect.top - svgRect.top + leftRect.height / 2;
    const x2 = rightRect.left - svgRect.left + rightRect.width / 2;
    const y2 = rightRect.top - svgRect.top + rightRect.height / 2;

    const dx = Math.abs(x2 - x1);
    const controlX1 = x1 + dx * 0.45;
    const controlY1 = y1;
    const controlX2 = x2 - dx * 0.45;
    const controlY2 = y2;

    const pathData = `M ${x1} ${y1} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${x2} ${y2}`;
    connectorPath.setAttribute('d', pathData);
  }

  function clearConnectorLine() {
    if (connectorPath) {
      connectorPath.setAttribute('d', '');
    }
  }

  // --- Listeners de Eventos ---
  function initEvents() {
    categoryBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.cat-pill');
      if (!btn) return;

      document.querySelectorAll('.cat-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      currentCategory = btn.dataset.category;
      renderList();
    });

    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderList();
    });

    // Update connector arrow on internal list scroll
    if (appsListContainer) {
      appsListContainer.addEventListener('scroll', updateConnectorLine);
    }

    window.addEventListener('resize', updateConnectorLine);
    window.addEventListener('scroll', updateConnectorLine);
  }

  function dismissPreloader() {
    setTimeout(() => {
      preloader.classList.add('fade-out');
      setTimeout(() => {
        preloader.style.display = 'none';
        updateConnectorLine();
      }, 800);
    }, 600);
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>"']/g, function (m) {
      return {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
      }[m];
    });
  }

  function init() {
    loadAppsData();
    initCursor();
    initEvents();
    renderList();
    dismissPreloader();
  }

  document.addEventListener('DOMContentLoaded', init);

})();
