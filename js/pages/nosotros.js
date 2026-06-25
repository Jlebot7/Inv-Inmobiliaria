export function renderNosotros(root){
  const img = 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=60';
  root.innerHTML = `
    <div class="container">
      <div class="section-title">Nosotros</div>
      <p class="section-subtitle">Un equipo que combina estrategia inmobiliaria y criterio técnico.</p>

      <div class="about-grid">
        <div class="about-photo">
          <img src="${img}" alt="Equipo de trabajo" />
        </div>
        <div class="about-card card">
          <div class="filter-title">INMOBILIARIA CÚCUTA</div>
          <div style="margin-top:10px; font-size:18px; font-weight:950;">Enfoque en decisiones seguras</div>
          <p class="hero-desc" style="margin-top:10px; font-size:14px;">
            Acompañamos desde la selección y evaluación hasta la inversión final, integrando análisis para reducir riesgos
            y maximizar oportunidades.
          </p>

          <div style="margin-top:14px; border-top:1px solid rgba(255,255,255,.10); padding-top:14px;">
            <div class="about-role">Dirección</div>
            <div style="margin-top:6px; color:var(--muted); font-weight:750;">Equipo multidisciplinario</div>
            <div style="margin-top:10px; color:var(--muted); font-size:13px; line-height:1.5;">
              Trabajo basado en datos, comunicación clara y seguimiento continuo.
            </div>
          </div>
        </div>
      </div>

      <div class="section-title" style="margin-top:22px;">Ventajas de Ubicación</div>
      <div class="advantages card">
        <div class="adv-grid">
          <div class="adv-item">
            <div class="adv-icon">🛡️</div>
            <div class="adv-title">Zona residencial segura</div>
            <div class="adv-desc">Entornos con demanda estable y crecimiento sostenido.</div>
          </div>
          <div class="adv-item">
            <div class="adv-icon">🏫</div>
            <div class="adv-title">Escuelas y universidades</div>
            <div class="adv-desc">Alta preferencia por cercanía educativa y movilidad.</div>
          </div>
          <div class="adv-item">
            <div class="adv-icon">🏥</div>
            <div class="adv-title">Servicios de salud</div>
            <div class="adv-desc">Accesibilidad a clínicas, hospitales y atención local.</div>
          </div>
          <div class="adv-item">
            <div class="adv-icon">🚆</div>
            <div class="adv-title">Vías de acceso</div>
            <div class="adv-desc">Conectividad que impulsa valorización a mediano plazo.</div>
          </div>
        </div>
      </div>
    </div>
  `;
}

