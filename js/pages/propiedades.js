import { PROPERTY_TYPES, mockProperties, formatCOP } from '../data/mockProperties.js';

function escapeHtml(str){
  return String(str)
    .replaceAll('&','&amp;')
    .replaceAll('<','<')
    .replaceAll('>','>')
    .replaceAll('"','"')
    .replaceAll("'",'&#039;');
}

function getFilters(form){
  return {
    q: (form.elements['q']?.value || '').trim().toLowerCase(),
    type: form.elements['type']?.value || 'Todos',
    maxPrice: Number(form.elements['maxPrice']?.value || 0)
  };
}

function propertyMatches(p, {q, type, maxPrice}){
  const text = `${p.type} ${p.location}`.toLowerCase();
  const okText = !q || text.includes(q);
  const okType = type === 'Todos' || p.type === type;
  const okPrice = !maxPrice || p.priceCOP <= maxPrice;
  return okText && okType && okPrice;
}

export function renderPropiedades(root){
  root.innerHTML = `
    <div class="container">
      <div class="section-title">Propiedades</div>
      <p class="section-subtitle">Filtra por texto, tipo y precio máximo. Los datos provienen de una DB simulada.</p>

      <div class="prop-layout">
        <aside class="filter card" aria-label="Filtros">
          <div class="filter-title">Buscar</div>
          <form id="filtersForm">
            <div class="field">
              <label class="label" for="q">Búsqueda</label>
              <input id="q" name="q" class="input" type="text" placeholder="Ej: Centro, apartamento..." />
            </div>
            <div class="field">
              <label class="label" for="type">Tipo</label>
              <select id="type" name="type" class="select">
                <option value="Todos">Todos</option>
                ${PROPERTY_TYPES.map(t => `<option value="${t}">${escapeHtml(t)}</option>`).join('')}
              </select>
            </div>
            <div class="field">
              <label class="label" for="maxPrice">Precio máximo (COP)</label>
              <input id="maxPrice" name="maxPrice" class="input" type="number" min="0" step="1000000" placeholder="0 = sin límite" />
            </div>
            <button class="btn-filter" type="submit">Aplicar filtros</button>
          </form>

          <div style="margin-top:14px; color:var(--muted); font-size:13px; line-height:1.45;">
            Tip: prueba “apartamento” o filtra por “Casa” para ver el grid actualizar.
          </div>
        </aside>

        <section>
          <div class="card" style="padding:14px; margin-bottom:14px;">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
              <div>
                <div class="filter-title" style="margin-bottom:6px;">Resultados</div>
                <div id="resultsCount" style="color:var(--muted); font-weight:750;">—</div>
              </div>
              <a class="btn btn-secondary" href="invertir.html">Simular inversión</a>
            </div>
          </div>

          <div id="propsGrid" class="props-grid"></div>
        </section>
      </div>
    </div>
  `;

  const form = root.querySelector('#filtersForm');
  const grid = root.querySelector('#propsGrid');
  const countEl = root.querySelector('#resultsCount');

  function renderList(items){
    countEl.textContent = `${items.length} propiedad(es) encontrada(s)`;

    if (items.length === 0){
      grid.innerHTML = `
        <div class="card" style="grid-column: 1 / -1; padding:18px;">
          <div style="font-weight:950; color:var(--gold-2);">Sin resultados</div>
          <div style="color:var(--muted); margin-top:8px;">Ajusta tus filtros e inténtalo de nuevo.</div>
        </div>
      `;
      return;
    }

    grid.innerHTML = items.map(p => `
      <article class="prop-card card">
        <div class="prop-img">
          <img src="${p.image}" alt="${escapeHtml(p.type)}" style="width:100%; height:100%; object-fit:cover;" />
        </div>
        <div class="prop-body">
          <div class="prop-type">${escapeHtml(p.type)}</div>
          <div class="prop-loc">${escapeHtml(p.location)}</div>
          <div class="prop-meta">
            <span class="pill">${p.habitaciones} hab</span>
            <span class="pill">${p.baños} baños</span>
            <span class="pill">${p.areaM2} m²</span>
          </div>
          <div class="prop-price">
            <div class="price">${formatCOP(p.priceCOP)}</div>
            <a class="btn-outline" href="mapa.html">Ver análisis</a>
          </div>
        </div>
      </article>
    `).join('');
  }

  function apply(){
    const filters = getFilters(form);
    const filtered = mockProperties.filter(p => propertyMatches(p, filters));
    renderList(filtered);
  }

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    apply();
  });

  // initial
  renderList(mockProperties);
}

