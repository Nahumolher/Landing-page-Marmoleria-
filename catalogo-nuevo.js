// Catálogo JavaScript Limpio - Marmolería Cesca

// Estructura de datos de piedras organizadas por categorías
const piedrasPorCategoria = {
    granitos: {
        nombre: 'Granitos',
        descripcion: 'Óptimo para mesadas de vanitory y cocinas, pisos de alto tránsito y revestimientos tanto internos como externos.',
        imagen: 'img/granito.jpg',
        variantes: [
            {
                id: 'negro-absoluto',
                nombre: 'Negro Absoluto',
                origen: 'Brasil',
                color: 'Negro',
                imagen: 'img/granito.jpg',
                descripcion: 'Granito negro intenso con cristales brillantes. Ideal para superficies de alto tráfico.',
                caracteristicas: [
                    'Dureza: 6-7 Mohs',
                    'Densidad: 2.75 g/cm³',
                    'Absorción: 0.1-0.2%',
                    'Resistencia al desgaste: Alta',
                    'Acabados: Pulido, Flameado, Apomazado'
                ],
                aplicaciones: ['Mesadas', 'Pisos', 'Fachadas', 'Monumentos']
            },
            {
                id: 'gris-mara',
                nombre: 'Gris Mara',
                origen: 'Brasil',
                color: 'Gris',
                imagen: 'img/2.jpg',
                descripcion: 'Granito gris con patrones únicos y gran durabilidad.',
                caracteristicas: [
                    'Dureza: 6-7 Mohs',
                    'Densidad: 2.75 g/cm³',
                    'Absorción: 0.1-0.2%',
                    'Resistencia al desgaste: Alta',
                    'Acabados: Pulido, Flameado'
                ],
                aplicaciones: ['Mesadas', 'Pisos', 'Barras', 'Revestimientos']
            },
            {
                id: 'verde-ubatuba',
                nombre: 'Verde Ubatuba',
                origen: 'Brasil',
                color: 'Verde',
                imagen: 'img/IMG-home-neolith.jpg',
                descripcion: 'Granito verde oscuro con puntos dorados.',
                caracteristicas: [
                    'Dureza: 6-7 Mohs',
                    'Densidad: 2.8 g/cm³',
                    'Absorción: 0.1-0.2%',
                    'Resistencia al desgaste: Alta',
                    'Acabados: Pulido, Flameado'
                ],
                aplicaciones: ['Mesadas', 'Pisos', 'Barras', 'Revestimientos']
            },
            {
                id: 'rojo-imperial',
                nombre: 'Rojo Imperial',
                origen: 'India',
                color: 'Rojo',
                imagen: 'img/cocina.jpg',
                descripcion: 'Granito rojo intenso con patrones únicos.',
                caracteristicas: [
                    'Dureza: 6-7 Mohs',
                    'Densidad: 2.75 g/cm³',
                    'Absorción: 0.1-0.2%',
                    'Resistencia al desgaste: Alta',
                    'Acabados: Pulido, Flameado'
                ],
                aplicaciones: ['Mesadas', 'Pisos', 'Elementos decorativos', 'Fachadas']
            }
        ]
    },
    marmoles: {
        nombre: 'Mármoles',
        descripcion: 'Elegancia atemporal con la más fina selección de mármoles naturales para proyectos distinguidos.',
        imagen: 'img/marmol.jpg',
        variantes: [
            {
                id: 'carrara',
                nombre: 'Carrara Elegante',
                origen: 'Italia',
                color: 'Blanco',
                imagen: 'img/marmol.jpg',
                descripcion: 'Mármol blanco clásico con vetas grises sutiles.',
                caracteristicas: [
                    'Dureza: 3-4 Mohs',
                    'Densidad: 2.7 g/cm³',
                    'Absorción: 0.2-0.4%',
                    'Resistencia al desgaste: Media',
                    'Acabados: Pulido, Apomazado, Flameado'
                ],
                aplicaciones: ['Cocinas', 'Baños', 'Escaleras', 'Revestimientos']
            },
            {
                id: 'thassos',
                nombre: 'Thassos Premium',
                origen: 'Grecia',
                color: 'Blanco',
                imagen: 'img/cuarcitas.jpg',
                descripcion: 'Mármol blanco puro de grano fino y uniforme.',
                caracteristicas: [
                    'Dureza: 3-4 Mohs',
                    'Densidad: 2.7 g/cm³',
                    'Absorción: 0.1-0.3%',
                    'Resistencia al desgaste: Media',
                    'Acabados: Pulido, Apomazado'
                ],
                aplicaciones: ['Baños', 'Cocinas', 'Esculturas', 'Revestimientos']
            },
            {
                id: 'nero-marquina',
                nombre: 'Nero Marquina',
                origen: 'España',
                color: 'Negro',
                imagen: 'img/granito.jpg',
                descripcion: 'Mármol negro elegante con vetas blancas.',
                caracteristicas: [
                    'Dureza: 3-4 Mohs',
                    'Densidad: 2.7 g/cm³',
                    'Absorción: 0.3-0.5%',
                    'Resistencia al desgaste: Media',
                    'Acabados: Pulido, Apomazado'
                ],
                aplicaciones: ['Cocinas', 'Baños', 'Pisos', 'Revestimientos']
            },
            {
                id: 'blanco-argentino',
                nombre: 'Blanco Argentino',
                origen: 'Argentina',
                color: 'Blanco Crema',
                imagen: 'img/2.jpg',
                descripcion: 'Mármol argentino con tonos crema.',
                caracteristicas: [
                    'Dureza: 3-4 Mohs',
                    'Densidad: 2.7 g/cm³',
                    'Absorción: 0.2-0.4%',
                    'Resistencia al desgaste: Media',
                    'Acabados: Pulido, Apomazado'
                ],
                aplicaciones: ['Cocinas', 'Baños', 'Pisos', 'Revestimientos']
            }
        ]
    },
    cuarcitas: {
        nombre: 'Cuarcitas',
        descripcion: 'Descubre nuestra exclusiva colección de cuarcitas con patrones únicos y colores excepcionales.',
        imagen: 'img/cuarcitas.jpg',
        variantes: [
            {
                id: 'mont-blanc',
                nombre: 'Mont Blanc',
                origen: 'Brasil',
                color: 'Blanco',
                imagen: 'img/IMG-home-puraprima.jpg',
                descripcion: 'Cuarcita blanca premium con vetas sutiles.',
                caracteristicas: [
                    'Dureza: 7 Mohs',
                    'Densidad: 2.65 g/cm³',
                    'Absorción: 0.1-0.3%',
                    'Resistencia al desgaste: Muy Alta',
                    'Acabados: Pulido, Natural, Cepillado'
                ],
                aplicaciones: ['Cocinas', 'Baños', 'Pisos', 'Revestimientos']
            },
            {
                id: 'azul-macaubas',
                nombre: 'Azul Macaubas',
                origen: 'Brasil',
                color: 'Azul',
                imagen: 'img/IMG-home-corian.jpg',
                descripcion: 'Cuarcita azul única con patrones excepcionales.',
                caracteristicas: [
                    'Dureza: 7 Mohs',
                    'Densidad: 2.65 g/cm³',
                    'Absorción: 0.1-0.3%',
                    'Resistencia al desgaste: Muy Alta',
                    'Acabados: Pulido, Natural'
                ],
                aplicaciones: ['Cocinas', 'Baños', 'Elementos decorativos', 'Revestimientos']
            },
            {
                id: 'beige-uruguayo',
                nombre: 'Beige Uruguayo',
                origen: 'Uruguay',
                color: 'Beige',
                imagen: 'img/IMG-home-neolith.jpg',
                descripcion: 'Cuarcita uruguaya con tonos beige naturales.',
                caracteristicas: [
                    'Dureza: 7 Mohs',
                    'Densidad: 2.65 g/cm³',
                    'Absorción: 0.1-0.3%',
                    'Resistencia al desgaste: Muy Alta',
                    'Acabados: Pulido, Natural'
                ],
                aplicaciones: ['Cocinas', 'Baños', 'Pisos', 'Revestimientos']
            }
        ]
    },
    travertinos: {
        nombre: 'Travertinos',
        descripcion: 'Calidez y textura natural que aporta sofisticación a cualquier espacio arquitectónico.',
        imagen: 'img/2.jpg',
        variantes: [
            {
                id: 'travertino-romano',
                nombre: 'Romano Classic',
                origen: 'Turquía',
                color: 'Beige',
                imagen: 'img/marmol.jpg',
                descripcion: 'Travertino clásico con tonos cálidos y naturales.',
                caracteristicas: [
                    'Dureza: 3-4 Mohs',
                    'Densidad: 2.5 g/cm³',
                    'Absorción: 2-6%',
                    'Resistencia al desgaste: Media',
                    'Acabados: Pulido, Tamboreado, Cepillado'
                ],
                aplicaciones: ['Pisos', 'Revestimientos', 'Piscinas', 'Fachadas']
            },
            {
                id: 'travertino-toscano',
                nombre: 'Travertino Toscano',
                origen: 'Italia',
                color: 'Marrón Claro',
                imagen: 'img/IMG-home-puraprima.jpg',
                descripcion: 'Travertino italiano premium con tonos marrones.',
                caracteristicas: [
                    'Dureza: 3-4 Mohs',
                    'Densidad: 2.5 g/cm³',
                    'Absorción: 2-6%',
                    'Resistencia al desgaste: Media',
                    'Acabados: Pulido, Natural, Cepillado'
                ],
                aplicaciones: ['Pisos', 'Revestimientos', 'Piscinas', 'Fachadas']
            }
        ]
    },
    calizas: {
        nombre: 'Calizas',
        descripcion: 'Versatilidad y durabilidad. Perfectas para proyectos arquitectónicos y decorativos.',
        imagen: 'img/2.jpg',
        variantes: [
            {
                id: 'caliza-provenzal',
                nombre: 'Caliza Provenzal',
                origen: 'Francia',
                color: 'Gris Claro',
                imagen: 'img/2.jpg',
                descripcion: 'Caliza francesa con acabado natural.',
                caracteristicas: [
                    'Dureza: 3-4 Mohs',
                    'Densidad: 2.6 g/cm³',
                    'Absorción: 1-3%',
                    'Resistencia al desgaste: Media',
                    'Acabados: Natural, Cepillado, Apomazado'
                ],
                aplicaciones: ['Pisos', 'Revestimientos', 'Fachadas', 'Jardines']
            }
        ]
    },
    onice: {
        nombre: 'Ónice',
        descripcion: 'Lujo y sofisticación. Piedras translúcidas con vetas únicas para espacios exclusivos.',
        imagen: 'img/IMG-home-neolith.jpg',
        variantes: [
            {
                id: 'onice-dorado',
                nombre: 'Ónice Dorado',
                origen: 'México',
                color: 'Dorado',
                imagen: 'img/granito.jpg',
                descripcion: 'Ónice translúcido con tonos dorados.',
                caracteristicas: [
                    'Dureza: 3-4 Mohs',
                    'Densidad: 2.6 g/cm³',
                    'Absorción: 0.5-1%',
                    'Resistencia al desgaste: Baja',
                    'Acabados: Pulido, Apomazado'
                ],
                aplicaciones: ['Barras', 'Revestimientos', 'Elementos decorativos', 'Iluminación']
            }
        ]
    }
};

// Variables globales
let categoriaActual = null;
let varianteActual = null;

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
    configurarEventListeners();
    mostrarCategorias();
});

function configurarEventListeners() {
    // Event listeners para las tarjetas de categorías
    document.addEventListener('click', function(e) {
        if (e.target.closest('.category-card')) {
            const categoria = e.target.closest('.category-card').dataset.category;
            mostrarVariantes(categoria);
        }
        
        if (e.target.closest('.variant-card')) {
            const varianteId = e.target.closest('.variant-card').dataset.variant;
            abrirModalVariante(varianteId);
        }
        
        if (e.target.closest('.btn-back')) {
            mostrarCategorias();
        }
        
        if (e.target.closest('.modal-close') || e.target.classList.contains('modal')) {
            cerrarModal();
        }
    });
    
    // Escape para cerrar modal
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModal();
        }
    });
}

function mostrarCategorias() {
    categoriaActual = null;
    
    // Actualizar breadcrumb
    document.getElementById('breadcrumb-current').textContent = 'Catálogo de Piedras Naturales';
    
    // Actualizar hero
    document.getElementById('main-title').textContent = 'Catálogo de Piedras Naturales';
    document.getElementById('main-description').textContent = 'Descubre nuestra exclusiva selección de piedras naturales. Materiales nobles y de gran belleza, de distintas partes del mundo para todo tipo de proyectos y necesidades.';
    
    // Mostrar vista de categorías
    document.getElementById('categories-view').style.display = 'block';
    const variantsView = document.getElementById('variants-view');
    if (variantsView) {
        variantsView.style.display = 'none';
    }
}

function mostrarVariantes(categoria) {
    categoriaActual = categoria;
    const piedra = piedrasPorCategoria[categoria];
    
    if (!piedra) {
        console.error('Categoría no encontrada:', categoria);
        return;
    }
    
    // Actualizar breadcrumb
    document.getElementById('breadcrumb-current').innerHTML = `
        <a href="#" onclick="mostrarCategorias(); return false;">Catálogo de Piedras Naturales</a>
        <span class="separator">›</span>
        <span>${piedra.nombre}</span>
    `;
    
    // Actualizar hero
    document.getElementById('main-title').textContent = piedra.nombre;
    document.getElementById('main-description').textContent = piedra.descripcion;
    
    // Crear vista de variantes si no existe
    let variantsView = document.getElementById('variants-view');
    if (!variantsView) {
        variantsView = document.createElement('section');
        variantsView.id = 'variants-view';
        variantsView.className = 'variants-section';
        document.querySelector('.categories-section').insertAdjacentElement('afterend', variantsView);
    }
    
    // Generar HTML de variantes
    variantsView.innerHTML = `
        <div class="container">
            <div class="back-button">
                <button class="btn-back">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="m12 19-7-7 7-7"></path>
                        <path d="m19 12-7 7-7-7"></path>
                    </svg>
                    Volver a Categorías
                </button>
            </div>
            
            <div class="variants-grid">
                ${piedra.variantes.map(variante => `
                    <div class="variant-card" data-variant="${variante.id}">
                        <div class="variant-image">
                            <img src="${variante.imagen}" alt="${variante.nombre}" loading="lazy">
                            <div class="variant-overlay">
                                <button class="btn-quick-view">Vista Rápida</button>
                            </div>
                        </div>
                        <div class="variant-info">
                            <h3 class="variant-name">${variante.nombre}</h3>
                            <p class="variant-origin">${variante.origen}</p>
                            <div class="variant-color">
                                <span class="color-indicator" style="background: ${getColorValue(variante.color)}"></span>
                                <span class="color-name">${variante.color}</span>
                            </div>
                            <p class="variant-description">${variante.descripcion}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    // Mostrar vista de variantes
    document.getElementById('categories-view').style.display = 'none';
    variantsView.style.display = 'block';
    
    // Scroll suave al inicio
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function abrirModalVariante(varianteId) {
    // Buscar la variante en todas las categorías
    let variante = null;
    let categoria = null;
    
    for (const [cat, data] of Object.entries(piedrasPorCategoria)) {
        const found = data.variantes.find(v => v.id === varianteId);
        if (found) {
            variante = found;
            categoria = cat;
            break;
        }
    }
    
    if (!variante) {
        console.error('Variante no encontrada:', varianteId);
        return;
    }
    
    // Crear modal si no existe
    let modal = document.getElementById('productModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'productModal';
        modal.className = 'modal';
        document.body.appendChild(modal);
    }
    
    // Generar contenido del modal
    modal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>${variante.nombre}</h2>
                <button class="modal-close">&times;</button>
            </div>
            <div class="modal-body">
                <div class="modal-image">
                    <img src="${variante.imagen}" alt="${variante.nombre}">
                </div>
                <div class="modal-info">
                    <div class="modal-meta">
                        <span class="modal-category">${piedrasPorCategoria[categoria].nombre}</span>
                        <p class="modal-origin">Origen: ${variante.origen}</p>
                        <div class="modal-color">
                            <span class="color-indicator" style="background: ${getColorValue(variante.color)}"></span>
                            <span class="color-name">${variante.color}</span>
                        </div>
                    </div>
                    <p class="modal-description">${variante.descripcion}</p>
                    
                    <div class="modal-details">
                        <h3>Características Técnicas</h3>
                        <ul>
                            ${variante.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-details">
                        <h3>Aplicaciones</h3>
                        <ul>
                            ${variante.aplicaciones.map(aplicacion => `<li>${aplicacion}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="modal-actions">
                        <button class="btn-primary" onclick="solicitarCotizacion('${variante.id}')">Solicitar Cotización</button>
                        <button class="btn-secondary" onclick="descargarCatalogo()">Descargar Catálogo</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Mostrar modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function getColorValue(color) {
    const colores = {
        'Blanco': '#f8f9fa',
        'Negro': '#1a1a1a',
        'Gris': '#6b7280',
        'Gris Claro': '#9ca3af',
        'Beige': '#f3e8d3',
        'Marrón': '#8b4513',
        'Marrón Claro': '#d4a574',
        'Verde': '#2d5a27',
        'Azul': '#1e40af',
        'Rojo': '#dc2626',
        'Dorado': '#d4af37',
        'Blanco Crema': '#f7fafc'
    };
    return colores[color] || '#e5e7eb';
}

function solicitarCotizacion(varianteId) {
    // Redirigir al formulario de contacto
    window.location.href = 'index.html#contacto';
}

function descargarCatalogo() {
    // Simulación de descarga
    alert('El catálogo se descargará en breve. Esta funcionalidad se implementará próximamente.');
}

// Funciones de utilidad
function capitalizarPrimera(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
