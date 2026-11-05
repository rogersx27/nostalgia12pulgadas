// ===== TU CATÁLOGO =====
// Agrega un objeto por vinilo. El "id" va dentro del QR: no lo cambies después de imprimirlo.
// estado: escala Goldmine (M, NM, VG+, VG, G). foto: ruta opcional, ej. "fotos/rumours.jpg".
// vendido: true muestra el sello "Vendido" (el QR pegado al disco sigue funcionando).

const MARCA = {
  nombre: 'Nostalgia 12"',
  instagram: 'https://www.instagram.com/nostalgia12pulgadas/',
  facebook: 'https://www.facebook.com/nostalgia12pulgadas/',
  mensaje: 'https://ig.me/m/nostalgia12pulgadas',
  moneda: 'COP',
};

const VINILOS = [
  {
    id: 'dsotm-1973',
    artista: 'Pink Floyd',
    titulo: 'The Dark Side of the Moon',
    anio: 1973, sello: 'Harvest', genero: 'Rock progresivo', prensaje: 'Reedición',
    estado: { disco: 'NM', portada: 'VG+' },
    precio: 220000, color: '#1d1d1f', foto: '', vendido: false,
    descripcion: 'El prisma más famoso del rock. Disco limpio, sin saltos, con su póster original. Ideal para la primera escucha con audífonos y la luz apagada.',
    ladoA: ['Speak to Me', 'Breathe', 'On the Run', 'Time', 'The Great Gig in the Sky'],
    ladoB: ['Money', 'Us and Them', 'Any Colour You Like', 'Brain Damage', 'Eclipse'],
  },
  {
    id: 'rumours-1977',
    artista: 'Fleetwood Mac',
    titulo: 'Rumours',
    anio: 1977, sello: 'Warner Bros.', genero: 'Soft rock', prensaje: 'Original',
    estado: { disco: 'VG+', portada: 'VG' },
    precio: 180000, color: '#e9b343', foto: '', vendido: false,
    descripcion: 'Un disco hecho entre rupturas que suena a reconciliación. Marcas leves de uso que no se escuchan; portada con desgaste en las esquinas.',
    ladoA: ['Second Hand News', 'Dreams', 'Never Going Back Again', "Don't Stop", 'Go Your Own Way', 'Songbird'],
    ladoB: ['The Chain', 'You Make Loving Fun', "I Don't Want to Know", 'Oh Daddy', 'Gold Dust Woman'],
  },
  {
    id: 'opera-1975',
    artista: 'Queen',
    titulo: 'A Night at the Opera',
    anio: 1975, sello: 'EMI', genero: 'Rock', prensaje: 'Original',
    estado: { disco: 'VG+', portada: 'VG+' },
    precio: 240000, color: '#b8322a', foto: '', vendido: false,
    descripcion: 'Portada gatefold con el escudo de la banda. El Lado B cierra con Bohemian Rhapsody: déjalo sonar completo.',
    ladoA: ['Death on Two Legs', 'Lazing on a Sunday Afternoon', "I'm in Love with My Car", "You're My Best Friend", "'39", 'Sweet Lady', 'Seaside Rendezvous'],
    ladoB: ["The Prophet's Song", 'Love of My Life', 'Good Company', 'Bohemian Rhapsody', 'God Save the Queen'],
  },
  {
    id: 'thriller-1982',
    artista: 'Michael Jackson',
    titulo: 'Thriller',
    anio: 1982, sello: 'Epic', genero: 'Pop', prensaje: 'Original',
    estado: { disco: 'VG', portada: 'VG' },
    precio: 150000, color: '#f3ead8', foto: '', vendido: true,
    descripcion: 'El álbum más vendido de la historia. Ruido de superficie suave entre canciones; con funda interna original.',
    ladoA: ["Wanna Be Startin' Somethin'", 'Baby Be Mine', 'The Girl Is Mine', 'Thriller'],
    ladoB: ['Beat It', 'Billie Jean', 'Human Nature', 'P.Y.T. (Pretty Young Thing)', 'The Lady in My Life'],
  },
];
