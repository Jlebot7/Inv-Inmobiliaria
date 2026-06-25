export function renderInvertir(root){
  root.innerHTML = `
    <div class="container">
      <div class="section-title">Invertir</div>
      <p class="section-subtitle">Simulador interactivo con cálculos en el navegador (JS puro). DB no requerida.</p>

      <div class="split">
        <section class="simulator card">
          <div class="filter-title">Simulador</div>
          <div class="sim-grid" style="margin-top:10px;">
            <div class="field">
              <label class="label" for="tipoProp">Tipo de propiedad</label>
              <select id="tipoProp" class="select">
                <option value="Apartamento">Apartamento</option>
                <option value="Casa">Casa</option>
                <option value="Local">Local</option>
              </select>
            </div>
            <div class="field">
              <label class="label" for="inversion">Valor de inversión (COP)</label>
              <input id="inversion" class="input" type="number" min="0" step="1000000" value="300000000" />
            </div>
            <div class="field">
              <label class="label" for="renta">Renta mensual estimada (COP)</label>
              <input id="renta" class="input" type="number" min="0" step="100000" value="3200000" />
            </div>
            <div class="field">
              <label class="label" for="valorizacion">Valorización anual estimada (%)</label>
              <input id="valorizacion" class="input" type="number" min="0" step="0.1" value="8" />
            </div>
          </div>

          <div class="sim-actions">
            <button id="btnSimular" class="btn btn-accent" type="button">Simula tu inversión</button>
            <button id="btnReset" class="btn btn-secondary" type="button">Restablecer</button>
          </div>

          <div style="margin-top:12px; color:var(--muted); font-size:13px; line-height:1.45;">
            Nota: el modelo es estimativo (renta + valorización anual). Puedes ajustar los valores para ver el impacto.
          </div>
        </section>

        <section class="results card">
          <div class="filter-title">Resultados</div>
          <div class="result-row"><div class="k">Renta anual estimada</div><div class="v" id="rentaAnual">—</div></div>
          <div class="result-row"><div class="k">Valorización anual estimada</div><div class="v" id="valAnual">—</div></div>
          <div class="result-row"><div class="k">Retorno anual estimado</div><div class="v" id="retAnual">—</div></div>
          <div class="result-row"><div class="k">Retorno % sobre inversión</div><div class="v" id="retPorc">—</div></div>

          <div style="margin-top:14px; padding-top:12px; border-top:1px solid rgba(255,255,255,.10); color:var(--muted); font-size:13px; line-height:1.5;">
            Consejo: revisa también el <a href="mapa.html" style="color:var(--orange-2); font-weight:900; text-decoration:underline; text-underline-offset:3px;">análisis del mapa</a> para entender el contexto geotécnico.
          </div>
        </section>
      </div>
    </div>
  `;

  const $ = (id)=>root.querySelector(id);
  const fmt = (n)=> new Intl.NumberFormat('es-CO', { style:'currency', currency:'COP', maximumFractionDigits:0 }).format(n);

  function compute(){
    const inversion = Number($('#inversion').value || 0);
    const rentaMensual = Number($('#renta').value || 0);
    const valorizacionPct = Number($('#valorizacion').value || 0);

    const rentaAnual = rentaMensual * 12;
    const valAnual = inversion * (valorizacionPct / 100);
    const retAnual = rentaAnual + valAnual;
    const retPorc = inversion > 0 ? (retAnual / inversion) * 100 : 0;

    $('#rentaAnual').textContent = fmt(rentaAnual);
    $('#valAnual').textContent = fmt(valAnual);
    $('#retAnual').textContent = fmt(retAnual);
    $('#retPorc').textContent = `${retPorc.toFixed(2)}%`;
  }

  $('#btnSimular').addEventListener('click', compute);
  $('#btnReset').addEventListener('click', ()=>{
    $('#tipoProp').value = 'Apartamento';
    $('#inversion').value = 300000000;
    $('#renta').value = 3200000;
    $('#valorizacion').value = 8;
    compute();
  });

  compute();
}

