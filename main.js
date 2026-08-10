/* ==========================================================================
   MOTOR DEL MUESTRARIO DE APLICACIONES - CLASSIC RETRO TERMINAL THEME
   Cursor Bloque Terminal 1:1 Instantáneo Sin Delay, Scramble Text & SVG Laser
   Zero Emojis - Iconografía Vectorial SVG Profesional
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
  const cursorCrosshair = document.getElementById('cursor-crosshair');
  const appsListContainer = document.getElementById('apps-list');
  const detailsContent = document.getElementById('details-content');
  const connectorPath = document.getElementById('connector-path');
  const connectorSvg = document.getElementById('connector-svg');
  const anchorRight = document.getElementById('anchor-right');
  const searchInput = document.getElementById('search-input');
  const categoryBar = document.getElementById('category-bar');
  const appCounter = document.getElementById('app-counter');
  const brandLink = document.getElementById('brand-link');

  // Caracteres para el Efecto de Decodificación Hacker
  const hackerGlyphs = '01#$@&%!><[]{}/\\~?*+=ABCDEF';

  // --- Animación de Decodificación de Texto (Cyber Text Scramble) ---
  function scrambleText(element, finalString, duration = 250) {
    if (!element) return;
    const targetText = finalString || element.innerText;
    if (!targetText || element.dataset.scrambling === 'true') return;

    element.dataset.scrambling = 'true';
    const length = targetText.length;
    let iteration = 0;
    const totalFrames = 10;
    const frameInterval = Math.max(16, Math.floor(duration / totalFrames));

    const interval = setInterval(() => {
      element.innerText = targetText
        .split('')
        .map((char, index) => {
          if (char === ' ') return ' ';
          if (index < (iteration / totalFrames) * length) {
            return targetText[index];
          }
          return hackerGlyphs[Math.floor(Math.random() * hackerGlyphs.length)];
        })
        .join('');

      iteration++;

      if (iteration > totalFrames) {
        clearInterval(interval);
        element.innerText = targetText;
        element.dataset.scrambling = 'false';
      }
    }, frameInterval);
  }

  // --- Cursor Retícula Crosshair Retro (Respuesta Instantánea 1:1 Sin Delay) ---
  function initCursor() {
    if (!cursorCrosshair) return;

    window.addEventListener('mousemove', (e) => {
      // Posicionamiento instantáneo 1:1 sin delay ni física lerp retardada
      cursorCrosshair.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    }, { passive: true });

    attachCursorTriggers();
  }

  function attachCursorTriggers() {
    if (!cursorCrosshair) return;

    document.querySelectorAll('.hover-trigger, button, a, input, select, .app-item').forEach(el => {
      if (el.dataset.triggerAttached === 'true') return;
      el.dataset.triggerAttached = 'true';

      el.addEventListener('mouseenter', () => {
        cursorCrosshair.classList.add('active');

        if (el.tagName === 'A' || el.classList.contains('cat-pill')) {
          cursorCrosshair.classList.add('hover-link');
        }

        // Decodificación scramble al pasar por encima el mouse
        if (el.classList.contains('cat-pill')) {
          scrambleText(el, el.innerText);
        } else if (el.classList.contains('app-item')) {
          const nameEl = el.querySelector('.app-info-name');
          if (nameEl) scrambleText(nameEl, nameEl.innerText);
        } else if (el.classList.contains('btn-visit')) {
          const btnSpan = el.querySelector('.btn-label');
          if (btnSpan) scrambleText(btnSpan, btnSpan.innerText);
        }
      });

      el.addEventListener('mouseleave', () => {
        cursorCrosshair.classList.remove('active', 'hover-link');
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

  // Renderizado de Iconos Vectoriales SVG sin Emojis
  function renderAppIcon(app, size = '1.2rem') {
    if (!app.icon) {
      return `<iconify-icon icon="lucide:box" style="font-size: ${size}; color: var(--c-neon);"></iconify-icon>`;
    }
    if (app.icon.includes(':') || app.icon.includes('-')) {
      return `<iconify-icon icon="${escapeHtml(app.icon)}" style="font-size: ${size}; color: var(--c-neon);"></iconify-icon>`;
    }
    return `<iconify-icon icon="lucide:box" style="font-size: ${size}; color: var(--c-neon);"></iconify-icon>`;
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

    appCounter.innerText = `[${appsList.length} HERRAMIENTAS]`;

    if (filtered.length === 0) {
      appsListContainer.innerHTML = `<div class="empty-state">> ERROR 404: No se encontraron módulos coincidentes.</div>`;
      detailsContent.innerHTML = `<div class="empty-state">> SELECCIONA UN MÓDULO PARA MOSTRAR DETALLES</div>`;
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
            <div class="app-icon">${renderAppIcon(app, '1.2rem')}</div>
            <div>
              <div class="app-info-name">${escapeHtml(app.name)}</div>
              <div class="app-info-category">// ${escapeHtml(app.tag || app.category)}</div>
            </div>
          </div>
          <div class="app-item-arrow">
            <iconify-icon icon="lucide:arrow-right" style="font-size: 0.95rem;"></iconify-icon>
          </div>
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
      ? `<div class="details-section-title">// ESPECIFICACIONES_TÉCNICAS</div>
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
            <h2 class="details-title" id="details-main-title">${escapeHtml(app.name)}</h2>
          </div>
          <div class="details-icon-box">${renderAppIcon(app, '2.1rem')}</div>
        </div>

        <p class="details-short">${escapeHtml(app.shortDesc)}</p>

        <div class="divider"></div>

        <div class="details-section-title">// INFORME_DE_UTILIDAD_Y_DESPLIEGUE</div>
        <p class="details-full">${escapeHtml(app.fullDesc)}</p>

        ${featuresHtml}
      </div>

      <div class="details-footer">
        <div class="shortcut-block">
          <span>COMANDO:</span>
          <span class="shortcut-key">${escapeHtml(app.command || 'Ejecución Directa')}</span>
        </div>
        <a href="${escapeHtml(app.website)}" target="_blank" rel="noopener" class="btn-visit hover-trigger">
          <span class="btn-label">Abrir Aplicación</span>
          <iconify-icon icon="lucide:arrow-up-right" style="font-size: 1.05rem; color: currentColor;"></iconify-icon>
        </a>
      </div>
    `;

    // Efecto scramble en el título de detalles al seleccionar
    const titleEl = document.getElementById('details-main-title');
    if (titleEl) {
      scrambleText(titleEl, app.name, 250);
    }

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

    if (brandLink) {
      brandLink.addEventListener('mouseenter', () => {
        const titleSpan = brandLink.querySelector('.brand-title');
        if (titleSpan) scrambleText(titleSpan, '@demoneyess', 250);
      });
    }

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
      }, 600);
    }, 1100);
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
