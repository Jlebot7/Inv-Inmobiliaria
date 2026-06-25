export function renderMapa(root){
  root.innerHTML = `
    <div class="container">
      <div class="section-title">Mapa</div>
      <p class="section-subtitle">Pines múltiples (placeholder sin API key) con popup dinámico al hacer clic.</p>

      <div class="card map-wrap">
        <div class="map-stage" id="mapStage" aria-label="Mapa (placeholder)">
          <div class="map-gridlines" aria-hidden="true"></div>

          <div class="map-pins" id="mapPins" aria-hidden="false"></div>

          <div class="map-popup" id="mapPopup" role="dialog" aria-modal="false">
            <!-- content injected by JS -->
          </div>
        </div>
      </div>

      <div style="margin-top:10px; color:var(--muted); font-size:13px; line-height:1.5;">
        Si luego agregas Google Maps, reemplazamos el placeholder por el mapa real y reutilizamos el mismo popup.
      </div>
    </div>
  `;

  const popup = root.querySelector('#mapPopup');
  const pinsContainer = root.querySelector('#mapPins');
  const stage = root.querySelector('#mapStage');

  const pinData = [
    { id: 'p1', x: 56, y: 43, label: 'Punto A' },
    { id: 'p2', x: 40, y: 58, label: 'Punto B' },
    { id: 'p3', x: 68, y: 62, label: 'Punto C' },
    { id: 'p4', x: 52, y: 24, label: 'Punto D' }
  ];

  function popupHtmlFor(pin){
    const suffix = pin?.label ? ` (${pin.label})` : '';
    return `
      <div class="map-popup-head">
        <h3>Análisis Geotécnico e Inversión${suffix}</h3>
        <button class="map-popup-close" type="button" aria-label="Cerrar" id="mapPopupClose">×</button>
      </div>
      <div class="map-popup-content">
        <div class="popup-item">
          <span class="popup-label">Tipo de Suelo (Ingeniería Civil/Arquitectura):</span>
          <span class="popup-value">Suelo arcilloso-limoso de compacidad media, clasificado como ML-CL bajo la norma INVIAS. Requiere cimentación profunda debido a la baja capacidad portante superficial.</span>
        </div>
        <div class="popup-item">
          <span class="popup-label">Riesgo de Inversión (Habilidades Blandas):</span>
          <span class="popup-value">Riesgo Medio. La ubicación es estratégica y de alta valorización, pero los costos de cimentación profunda aumentan la inversión inicial. Se requiere un análisis financiero cuidadoso para asegurar la rentabilidad a largo plazo.</span>
        </div>
        <div class="popup-item">
          <span class="popup-label">Estudio de Suelo Detallado:</span>
          <a href="docs/investigacion_suelo_cucuta.pdf" target="_blank" class="ver-mas-datos-link">Ver más datos (Estudio de suelo)</a>
        </div>
      </div>
    `;
  }

  function open(pin){
    popup.innerHTML = popupHtmlFor(pin);
    popup.classList.add('open');

    const closeBtn = root.querySelector('#mapPopupClose');
    closeBtn?.addEventListener('click', close);

    document.addEventListener('keydown', onKeyDown);
  }

  function close(){
    popup.classList.remove('open');
    popup.innerHTML = '';
    document.removeEventListener('keydown', onKeyDown);
  }

  function onKeyDown(e){
    if (e.key === 'Escape') close();
  }

  function createPins(){
    pinsContainer.innerHTML = '';

    const makePin = (pin) => {
      const el = document.createElement('div');
      el.className = 'map-pin';
      el.tabIndex = 0;
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', `Pin ${pin.label}`);
      el.title = `Ver análisis: ${pin.label}`;

      // Random slight jitter (aleatorio) alrededor de una posición base
      const jitterX = (Math.random() * 6 - 3); // -3..+3
      const jitterY = (Math.random() * 6 - 3);

      el.style.left = `${pin.x + jitterX}%`;
      el.style.top = `${pin.y + jitterY}%`;
      el.dataset.pinId = pin.id;

      el.addEventListener('click', (evt) => {
        evt.stopPropagation();
        open(pin);
      });
      el.addEventListener('keydown', (evt) => {
        if (evt.key === 'Enter' || evt.key === ' ') open(pin);
      });

      return el;
    };

    pinData.forEach(p => pinsContainer.appendChild(makePin(p)));
  }

  createPins();

  // close if click outside
  root.addEventListener('click', (e)=>{
    if (!popup.classList.contains('open')) return;

    const isInsidePopup = popup.contains(e.target);
    const isPin = e.target?.classList?.contains('map-pin');

    if (!isInsidePopup && !isPin) close();
  });
}

