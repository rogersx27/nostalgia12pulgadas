// La sala: una pieza en la alcoba (tokonoma), la colección en cajas (kura) y el disco en 3D.

const sinMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Texto oscuro sobre colores claros, claro sobre oscuros
const tintaPara = hex => {
  const n = parseInt(hex.slice(1), 16);
  return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 > 150 ? '#182f48' : '#f0efe8';
};
console.assert(tintaPara('#ffffff') === '#182f48' && tintaPara('#000000') === '#f0efe8', 'tintaPara');

const ESTADO_DISCO = {
  M: 'Nuevo, sin tocar.',
  NM: 'Casi perfecto; brilla como el primer día.',
  'VG+': 'Marcas leves que no se escuchan.',
  VG: 'Ruido de superficie en los pasajes suaves.',
  G: 'Suena completo, con crujido constante.',
};
const ESTADO_PORTADA = {
  M: 'Sin un rasguño.',
  NM: 'Como nueva.',
  'VG+': 'Desgaste leve, apenas visible.',
  VG: 'Esquinas y bordes gastados.',
  G: 'Desgaste marcado; cuenta su historia.',
};

const espera = v => new Date().getFullYear() - v.anio;
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// ---------- Disco 3D ----------

function caraDelDisco(v, lado) {
  const s = 1024, m = s / 2, c = document.createElement('canvas');
  c.width = c.height = s;
  const g = c.getContext('2d');
  const circulo = (r, color) => { g.fillStyle = color; g.beginPath(); g.arc(m, m, r, 0, Math.PI * 2); g.fill(); };

  circulo(m, '#0b0c0e');
  const pistas = Math.max(1, (lado === 'A' ? v.ladoA : v.ladoB)?.length || 1);
  const ext = m * 0.97, int = m * 0.36, paso = (ext - int) / pistas;
  g.lineWidth = 1.2;
  for (let r = ext; r > int; r -= 2.5) {
    const pausa = (ext - r) % paso < 5 && r < ext - 5; // espacio liso entre canciones
    g.strokeStyle = pausa ? '#000' : `rgba(240,239,232,${0.03 + Math.random() * 0.06})`;
    g.beginPath(); g.arc(m, m, r, 0, Math.PI * 2); g.stroke();
  }

  circulo(m * 0.33, v.color);
  g.fillStyle = tintaPara(v.color);
  g.textAlign = 'center';
  const texto = (t, y, px, fuente) => {
    do g.font = `${px}px ${fuente}`; while (g.measureText(t).width > 290 && --px > 10);
    g.fillText(t, m, y);
  };
  const gotica = '"Zen Kaku Gothic New", sans-serif', mincho = '"Shippori Mincho", serif';
  texto('NOSTALGIA 12"  ·  懐かしい', m - 105, 19, gotica);
  texto(v.artista.toUpperCase(), m - 45, 38, gotica);
  texto(v.titulo, m + 62, 34, mincho);
  texto(`LADO ${lado}  ·  33⅓ RPM  ·  ${v.anio}`, m + 108, 17, gotica);
  circulo(m * 0.025, '#111');

  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 8;
  return t;
}

async function disco3d(el, v) {
  await document.fonts.ready;
  const ctrl = { rpm: sinMovimiento ? 0 : 33.333 };
  if (!window.THREE) return ctrl; // sin conexión al CDN: la funda sigue sola en la alcoba

  const render = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  render.setPixelRatio(Math.min(devicePixelRatio, 2));
  render.domElement.setAttribute('aria-hidden', 'true');
  el.prepend(render.domElement);

  const escena = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  cam.position.set(0, 0, 7.4);
  escena.add(new THREE.AmbientLight(0xffffff, 0.75));
  const ventana = new THREE.DirectionalLight(0xfff4e6, 0.7); ventana.position.set(-4, 5, 4); escena.add(ventana);
  const reflejo = new THREE.DirectionalLight(0x9fb4d0, 0.35); reflejo.position.set(5, -2, 3); escena.add(reflejo);

  const mat = () => new THREE.MeshStandardMaterial({ roughness: 0.42, metalness: 0.08 });
  const caras = [new THREE.MeshStandardMaterial({ color: 0x0b0c0e, roughness: 0.5 }), mat(), mat()];
  const disco = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 0.035, 160), caras);
  const soporte = new THREE.Group();
  soporte.add(disco);
  soporte.rotation.set(Math.PI / 2 - 0.14, -0.32, 0); // de pie, mirando hacia la sala
  escena.add(soporte);

  ctrl.cambiar = nuevo => {
    caras[1].map?.dispose(); caras[2].map?.dispose();
    caras[1].map = caraDelDisco(nuevo, 'A'); caras[2].map = caraDelDisco(nuevo, 'B');
    caras[1].needsUpdate = caras[2].needsUpdate = true;
  };
  ctrl.cambiar(v);

  let ultimo = null;
  el.addEventListener('pointerdown', e => { ultimo = [e.clientX, e.clientY]; el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove', e => {
    if (!ultimo) return;
    soporte.rotation.y += (e.clientX - ultimo[0]) * 0.01;
    soporte.rotation.x += (e.clientY - ultimo[1]) * 0.006;
    ultimo = [e.clientX, e.clientY];
  });
  const soltar = () => (ultimo = null);
  el.addEventListener('pointerup', soltar);
  el.addEventListener('pointercancel', soltar);

  new ResizeObserver(() => {
    const w = el.clientWidth, h = el.clientHeight;
    render.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix();
  }).observe(el);

  let antes = performance.now();
  (function cuadro(ahora) {
    disco.rotation.y -= (ctrl.rpm / 60) * Math.PI * 2 * ((ahora - antes) / 1000);
    antes = ahora;
    render.render(escena, cam);
    requestAnimationFrame(cuadro);
  })(antes);
  return ctrl;
}

// ---------- La sala ----------

const $ = s => document.querySelector(s);

function portada(v) {
  return v.foto
    ? `<img src="${esc(v.foto)}" alt="Portada de ${esc(v.titulo)}, de ${esc(v.artista)}">`
    : `<div class="portada-muestra" style="--c:${v.color};--t:${tintaPara(v.color)}" role="img" aria-label="Portada de ${esc(v.titulo)}, de ${esc(v.artista)}">
         <span>${esc(v.artista)}</span><b>${esc(v.titulo)}</b></div>`;
}

function lista(canciones = []) {
  return `<ol>${canciones.map((c, i) => `<li><span>${String(i + 1).padStart(2, '0')}</span>${esc(c)}</li>`).join('')}</ol>`;
}

function pintar(v) {
  document.title = `${v.titulo} · ${v.artista} — Nostalgia 12"`;
  $('#funda').innerHTML = portada(v);

  const titulo = $('#titulo');
  titulo.textContent = v.titulo;
  // el título vertical llena el rollo: más corto, más grande
  titulo.style.setProperty('--largo', Math.max(8, v.titulo.length));
  $('#artista').textContent = v.artista;

  $('#estado').innerHTML = `
    <p><b>Disco ${esc(v.estado.disco)}.</b> ${ESTADO_DISCO[v.estado.disco] || ''}</p>
    <p><b>Portada ${esc(v.estado.portada)}.</b> ${ESTADO_PORTADA[v.estado.portada] || ''}</p>`;
  $('#descripcion').textContent = v.descripcion;
  $('#ficha').innerHTML = `
    <dt>Año</dt><dd>${v.anio}</dd>
    <dt>Sello</dt><dd>${esc(v.sello)}</dd>
    <dt>Prensaje</dt><dd>${esc(v.prensaje)}</dd>
    <dt>Género</dt><dd>${esc(v.genero)}</dd>
    <dt>Espera</dt><dd>${espera(v)} años</dd>
    ${v.vendido ? '<dt>Hoy</dt><dd>Ya encontró casa</dd>' : ''}
    ${v.ejemplo ? '<dt>Nota</dt><dd>Pieza de ejemplo: datos ilustrativos</dd>' : ''}`;
  $('#ladoA').innerHTML = lista(v.ladoA);
  $('#ladoB').innerHTML = lista(v.ladoB);

  document.querySelectorAll('.caja').forEach(a => a.toggleAttribute('aria-current', a.dataset.id === v.id));
  // deja a la vista, en la repisa, la caja abierta (sin mover la página)
  const repisa = $('#cajas'), abierta = repisa.querySelector('[aria-current]');
  if (abierta) {
    const r = abierta.getBoundingClientRect(), p = repisa.getBoundingClientRect();
    repisa.scrollTo({ left: repisa.scrollLeft + r.left - p.left - (p.width - r.width) / 2, behavior: sinMovimiento ? 'auto' : 'smooth' });
  }
  if (window.discoCtrl?.cambiar) window.discoCtrl.cambiar(v);
}

function mostrar(v, { historial = true } = {}) {
  if (historial) history.pushState({ id: v.id }, '', `?id=${encodeURIComponent(v.id)}`);
  if (document.startViewTransition && !sinMovimiento && !document.hidden) document.startViewTransition(() => pintar(v)).ready.catch(() => {}); // si se interrumpe, la pieza ya quedó pintada
  else pintar(v);
}

function piezaInicial() {
  const id = new URLSearchParams(location.search).get('id');
  const pedida = VINILOS.find(x => x.id === id);
  if (pedida) return pedida;
  // sin QR: la pieza del día, como en una alcoba que cambia con el tiempo
  const disponibles = VINILOS.filter(x => !x.vendido);
  const lista = disponibles.length ? disponibles : VINILOS;
  return lista[Math.floor(Date.now() / 864e5) % lista.length];
}

function montarSala() {
  document.querySelectorAll('[data-ig]').forEach(a => (a.href = MARCA.instagram));
  document.querySelectorAll('[data-fb]').forEach(a => (a.href = MARCA.facebook));

  $('#cajas').innerHTML = VINILOS.map(v => `
    <li><a class="caja" href="?id=${encodeURIComponent(v.id)}" data-id="${esc(v.id)}">
      <span class="tapa">
        <span class="hakogaki"><b>${esc(v.titulo)}</b><span>${esc(v.artista)}</span>${v.ejemplo ? '<em class="ejemplo">Pieza de ejemplo</em>' : ''}</span>
        <span class="fecha">${v.anio} · ${espera(v)} años de espera</span>
        ${v.vendido ? '<span class="nota">Ya encontró casa</span>' : ''}
      </span>
      <span class="aviso">En la alcoba</span>
    </a></li>`).join('');
  $('#conteo').textContent = `${VINILOS.length} discos`;

  $('#cajas').addEventListener('click', e => {
    const a = e.target.closest('.caja');
    if (!a || e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    const v = VINILOS.find(x => x.id === a.dataset.id);
    if (a.hasAttribute('aria-current')) return;
    mostrar(v);
    $('#sala').scrollIntoView({ behavior: sinMovimiento ? 'auto' : 'smooth' });
  });

  addEventListener('popstate', () => pintar(piezaInicial()));
  addEventListener('keydown', e => {
    if (e.target.closest('input, textarea') || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
    const i = VINILOS.findIndex(x => x.id === new URLSearchParams(location.search).get('id'));
    const actual = i < 0 ? VINILOS.indexOf(piezaInicial()) : i;
    mostrar(VINILOS[(actual + (e.key === 'ArrowRight' ? 1 : -1) + VINILOS.length) % VINILOS.length]);
  });

  const v = piezaInicial();
  pintar(v);

  disco3d($('#disco'), v).then(ctrl => {
    window.discoCtrl = ctrl;
    const botones = document.querySelectorAll('[data-rpm]');
    const marcar = () => botones.forEach(b => b.setAttribute('aria-pressed', +b.dataset.rpm === ctrl.rpm));
    botones.forEach(b => b.addEventListener('click', () => { ctrl.rpm = +b.dataset.rpm; marcar(); }));
    marcar();
  });
}
