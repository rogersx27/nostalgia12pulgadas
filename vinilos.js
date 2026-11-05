// ===== TU COLECCIÓN =====
// Agrega un objeto por vinilo. El "id" va dentro del QR: no lo cambies después de imprimirlo.
// estado: escala Goldmine (M, NM, VG+, VG, G). color: color de la etiqueta del disco en 3D.
// foto: ruta opcional a la foto de la portada, ej. "fotos/rumours.jpg" (cuadrada, ~1200 px).
// vendido: true lo deja visible con la nota "Ya encontró casa" (su QR sigue funcionando).
// ejemplo: true marca la pieza como "Pieza de ejemplo" en el sitio. Los cuatro de abajo lo son: reemplázalos por los tuyos y quita esa línea.

const MARCA = {
  instagram: 'https://www.instagram.com/nostalgia12pulgadas/',
  facebook: 'https://www.facebook.com/nostalgia12pulgadas/',
};

const VINILOS = [
  {
    id: 'dsotm-1973',
    artista: 'Pink Floyd',
    titulo: 'The Dark Side of the Moon',
    anio: 1973, sello: 'Harvest', genero: 'Rock progresivo', prensaje: 'Reedición',
    estado: { disco: 'NM', portada: 'VG+' },
    color: '#1d1d1f', foto: '', vendido: false, ejemplo: true,
    descripcion: 'El prisma más famoso del rock: un disco pensado para sonar de corrido, de Speak to Me a Eclipse, sin pausas entre canciones. Pide audífonos y la luz apagada.',
    ladoA: ['Speak to Me', 'Breathe', 'On the Run', 'Time', 'The Great Gig in the Sky'],
    ladoB: ['Money', 'Us and Them', 'Any Colour You Like', 'Brain Damage', 'Eclipse'],
  },
  {
    id: 'rumours-1977',
    artista: 'Fleetwood Mac',
    titulo: 'Rumours',
    anio: 1977, sello: 'Warner Bros.', genero: 'Soft rock', prensaje: 'Original',
    estado: { disco: 'VG+', portada: 'VG' },
    color: '#e9b343', foto: '', vendido: false, ejemplo: true,
    descripcion: 'Un disco hecho entre rupturas que suena a reconciliación. Cinco músicos que apenas se hablaban grabaron aquí sus canciones más luminosas.',
    ladoA: ['Second Hand News', 'Dreams', 'Never Going Back Again', "Don't Stop", 'Go Your Own Way', 'Songbird'],
    ladoB: ['The Chain', 'You Make Loving Fun', "I Don't Want to Know", 'Oh Daddy', 'Gold Dust Woman'],
  },
  {
    id: 'opera-1975',
    artista: 'Queen',
    titulo: 'A Night at the Opera',
    anio: 1975, sello: 'EMI', genero: 'Rock', prensaje: 'Original',
    estado: { disco: 'VG+', portada: 'VG+' },
    color: '#3f5a4a', foto: '', vendido: false, ejemplo: true,
    descripcion: 'Portada gatefold con el escudo de la banda. El Lado B cierra con Bohemian Rhapsody: déjala sonar completa.',
    ladoA: ['Death on Two Legs', 'Lazing on a Sunday Afternoon', "I'm in Love with My Car", "You're My Best Friend", "'39", 'Sweet Lady', 'Seaside Rendezvous'],
    ladoB: ["The Prophet's Song", 'Love of My Life', 'Good Company', 'Bohemian Rhapsody', 'God Save the Queen'],
  },
  {
    id: 'thriller-1982',
    artista: 'Michael Jackson',
    titulo: 'Thriller',
    anio: 1982, sello: 'Epic', genero: 'Pop', prensaje: 'Original',
    estado: { disco: 'VG', portada: 'VG' },
    color: '#f0efe8', foto: '', vendido: true, ejemplo: true,
    descripcion: 'El álbum más vendido de la historia. Siete de sus nueve canciones salieron como sencillo; escucharlo entero es otra cosa.',
    ladoA: ["Wanna Be Startin' Somethin'", 'Baby Be Mine', 'The Girl Is Mine', 'Thriller'],
    ladoB: ['Beat It', 'Billie Jean', 'Human Nature', 'P.Y.T. (Pretty Young Thing)', 'The Lady in My Life'],
  },
];
