export function renderContacto(root){
  root.innerHTML = `
    <div class="container">
      <div class="section-title">Contacto</div>
      <p class="section-subtitle">Agenda una cita y te contactaremos para asesorarte.</p>

      <div class="split">
        <section class="card" style="padding:18px;">
          <div class="filter-title">Agendar cita</div>
          <form id="contactForm" style="margin-top:10px;">
            <div class="field">
              <label class="label" for="nombre">Nombre</label>
              <input id="nombre" name="nombre" class="input" type="text" placeholder="Tu nombre" />
            </div>
            <div class="field">
              <label class="label" for="telefono">Teléfono</label>
              <input id="telefono" name="telefono" class="input" type="tel" placeholder="+57" />
            </div>
            <div class="field">
              <label class="label" for="mensaje">Mensaje</label>
              <textarea id="mensaje" name="mensaje" class="input" rows="5" placeholder="¿Qué estás buscando?" style="resize:vertical;"></textarea>
            </div>
            <button class="btn btn-accent" type="submit">Enviar solicitud</button>
          </form>
          <div id="contactMsg" style="margin-top:12px; color:var(--muted); font-size:13px;"></div>
        </section>

        <section class="card" style="padding:18px;">
          <div class="filter-title">Información</div>
          <div style="margin-top:10px; color:var(--muted); font-size:14px; line-height:1.6;">
            <div><b style="color:var(--text);">Dirección:</b> Cúcuta, Norte de Santander</div>
            <div style="margin-top:8px;"><b style="color:var(--text);">WhatsApp:</b> +57 300 000 0000</div>
            <div style="margin-top:8px;"><b style="color:var(--text);">Email:</b> contacto@inmobiliariacucuta.com</div>
          </div>

          <div style="margin-top:16px; padding-top:14px; border-top:1px solid rgba(255,255,255,.10);">
            <a class="btn btn-secondary" href="mapa.html">Ver análisis del mapa</a>
          </div>
        </section>
      </div>
    </div>
  `;

  const form = root.querySelector('#contactForm');
  const msg = root.querySelector('#contactMsg');

  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const nombre = (form.elements['nombre']?.value || '').trim();
    msg.innerHTML = `Solicitud recibida${nombre ? `, ${nombre}` : ''}. (Demo UI: no se envía a servidor).`;
    form.reset();
  });
}

