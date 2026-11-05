// Utilidades compartidas + disco de vinilo 3D (three.js)

const precio = n => n.toLocaleString('es-CO', { style: 'currency', currency: MARCA.moneda, maximumFractionDigits: 0 });

// Texto negro sobre etiquetas claras, blanco sobre oscuras
const tintaPara = hex => {
  const n = parseInt(hex.slice(1), 16);
  return ((n >> 16) * 299 + ((n >> 8) & 255) * 587 + (n & 255) * 114) / 1000 > 150 ? '#141110' : '#ffffff';
};
console.assert(tintaPara('#ffffff') === '#141110' && tintaPara('#000000') === '#ffffff', 'tintaPara');

const sinMovimiento = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Dibuja una cara del disco: surcos (con espacio liso entre canciones) + etiqueta central
function caraDelDisco(v, lado) {
  const s = 1024, m = s / 2, c = document.createElement('canvas');
  c.width = c.height = s;
  const g = c.getContext('2d');
  const circulo = (r, color) => { g.fillStyle = color; g.beginPath(); g.arc(m, m, r, 0, Math.PI * 2); g.fill(); };

  circulo(m, '#0a0a0a');
  const pistas = Math.max(1, (lado === 'A' ? v.ladoA : v.ladoB)?.length || 1);
  const ext = m * 0.97, int = m * 0.36, paso = (ext - int) / pistas;
  g.lineWidth = 1.2;
  for (let r = ext; r > int; r -= 2.5) {
    const pausa = (ext - r) % paso < 5 && r < ext - 5;
    g.strokeStyle = pausa ? '#000' : `rgba(255,255,255,${0.035 + Math.random() * 0.06})`;
    g.beginPath(); g.arc(m, m, r, 0, Math.PI * 2); g.stroke();
  }

  circulo(m * 0.33, v.color);
  g.fillStyle = tintaPara(v.color);
  g.textAlign = 'center';
  const texto = (t, y, px, fuente) => {
    do g.font = `${px}px ${fuente}`; while (g.measureText(t).width > 290 && --px > 10);
    g.fillText(t, m, y);
  };
  const mono = '"Space Mono", monospace', negra = '"Archivo Black", sans-serif';
  texto('NOSTALGIA 12"', m - 105, 20, mono);
  texto(v.artista.toUpperCase(), m - 45, 40, negra);
  texto(v.titulo, m + 62, 28, negra);
  texto(`LADO ${lado} · 33⅓ RPM${v.anio ? ' · ' + v.anio : ''}`, m + 108, 17, mono);
  circulo(m * 0.025, '#1a1a1a');

  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 8;
  return t;
}

// Monta un disco 3D en `el`. Devuelve { rpm } para cambiar la velocidad (0 = pausa).
async function disco3d(el, v) {
  await document.fonts.ready;
  const ctrl = { rpm: sinMovimiento ? 0 : 33.333 };
  const render = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  render.setPixelRatio(Math.min(devicePixelRatio, 2));
  el.prepend(render.domElement);

  const escena = new THREE.Scene();
  const cam = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  cam.position.set(0, 0, 7.6);
  escena.add(new THREE.AmbientLight(0xffffff, 0.8));
  const luz = new THREE.DirectionalLight(0xffffff, 0.6); luz.position.set(4, 6, 2); escena.add(luz);
  const calida = new THREE.PointLight(0xe8572a, 0.6); calida.position.set(-4, -2, 3); escena.add(calida);

  const mat = map => new THREE.MeshStandardMaterial({ map, roughness: 0.45, metalness: 0.05 });
  const disco = new THREE.Mesh(
    new THREE.CylinderGeometry(2, 2, 0.035, 160),
    [new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.4 }), mat(caraDelDisco(v, 'A')), mat(caraDelDisco(v, 'B'))]
  );
  const soporte = new THREE.Group();
  soporte.add(disco);
  soporte.rotation.set(1.05, 0, -0.25);
  escena.add(soporte);

  // Arrastrar para girar
  let ultimo = null;
  el.addEventListener('pointerdown', e => { ultimo = [e.clientX, e.clientY]; el.setPointerCapture(e.pointerId); });
  el.addEventListener('pointermove', e => {
    if (!ultimo) return;
    soporte.rotation.z -= (e.clientX - ultimo[0]) * 0.01;
    soporte.rotation.x += (e.clientY - ultimo[1]) * 0.01;
    ultimo = [e.clientX, e.clientY];
  });
  el.addEventListener('pointerup', () => (ultimo = null));
  el.addEventListener('pointercancel', () => (ultimo = null));

  new ResizeObserver(() => {
    const w = el.clientWidth, h = el.clientHeight;
    render.setSize(w, h); cam.aspect = w / h; cam.updateProjectionMatrix();
  }).observe(el);

  let antes = performance.now();
  (function cuadro(ahora) {
    disco.rotation.y -= (ctrl.rpm / 60) * Math.PI * 2 * ((ahora - antes) / 1000);
    if (!sinMovimiento) soporte.position.y = Math.sin(ahora / 900) * 0.06;
    antes = ahora;
    render.render(escena, cam);
    requestAnimationFrame(cuadro);
  })(antes);
  return ctrl;
}
