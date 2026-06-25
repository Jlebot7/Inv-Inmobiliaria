export function renderHome(root){
  const heroImg = 'https://images.unsplash.com/photo-1501183638710-841dd1904471?auto=format&fit=crop&w=1200&q=60';

  root.innerHTML = `
    <div class="container">
      <div class="hero">
        <section class="hero-left card">
          <div class="hero-kicker">INVERSION • TECNOLOGÍA • ACOMPAÑAMIENTO</div>
          <h1 class="hero-title">Invierte hoy, <span>asegura tu futuro</span></h1>
          <p class="hero-desc">
            Selecciona propiedades con datos, orientación y una visión de valorización a largo plazo.
            Nuestro enfoque integra análisis técnico y estrategia financiera.
          </p>
          <div class="hero-actions">
            <a class="btn btn-accent" href="propiedades.html">Ver propiedades</a>
            <a class="btn btn-secondary" href="invertir.html">Simular inversión</a>
          </div>
        </section>

        <aside class="hero-right card" aria-label="Estadísticas">
          <div class="stat-grid">
            <div class="stat"><div class="stat-num">+250</div><div class="stat-label">Propiedades</div></div>
            <div class="stat"><div class="stat-num">+10</div><div class="stat-label">Zonas priorizadas</div></div>
            <div class="stat"><div class="stat-num">98%</div><div class="stat-label">Clientes recurrentes</div></div>
            <div class="stat"><div class="stat-num">24/7</div><div class="stat-label">Seguimiento</div></div>
          </div>
          <div style="margin-top:10px; border-top:1px solid rgba(255,255,255,.10); padding-top:12px;">
            <div class="hero-kicker">Cúcuta</div>
            <p class="hero-desc" style="margin:8px 0 0; font-size:14px;">Estrategias de inversión y análisis geotécnico para decisiones seguras.</p>
          </div>
        </aside>
      </div>

      <div class="section-title">Destacados</div>
      <p class="section-subtitle">Una selección inicial (DB simulada) para que puedas explorar la interfaz.</p>

      <div class="card" style="padding:16px; display:grid; grid-template-columns: 1.1fr .9fr; gap:16px; align-items:center;">
        <div>
          <div class="hero-kicker">Análisis técnico</div>
          <div style="margin-top:8px; font-size:18px; font-weight:950;">Mapas y alertas en el punto exacto</div>
          <p class="hero-desc" style="margin-top:10px; font-size:14px;">
            Al hacer clic en el pin del mapa se muestra el popup con el análisis geotécnico y el estudio de inversión.
          </p>
          <div class="hero-actions" style="margin-top:14px;">
            <a class="btn btn-accent" href="mapa.html">Ir al mapa</a>
            <a class="btn btn-secondary" href="nosotros.html">Conocer equipo</a>
          </div>
        </div>
        <div class="about-photo" style="height:260px;">
          <img src="${heroImg}" alt="Equipo y estrategia inmobiliaria" />
        </div>
      </div>
    </div>
  `;
}

