// js/pages/listar.js
document.addEventListener('DOMContentLoaded', () => {
    // Usa #listContainer si existe, si no, reutiliza #formContainer
    const cont = document.getElementById('listContainer')

    if (!Array.isArray(window.productos)) window.productos = [];

    cont.innerHTML = `
        <section class="container" style="max-width: 1100px;">
        <h2 class="mb-3 title">Listado de productos</h2>

        <div class="row g-2 align-items-end mb-3">
            <div class="col-sm-6">
            <label class="form-label" for="buscar">Buscar (Código / Nombre)</label>
            <input type="text" id="buscar" class="form-control" placeholder="JM001 o Catan">
            </div>
            <div class="col-sm-4">
            <label class="form-label" for="filtroCategoria">Categoría</label>
            <select id="filtroCategoria" class="form-control">
                <option value="">Todas</option>
            </select>
            </div>
            <div class="col-sm-2">
            <button id="btnClear" class="btn btn-secondary w-100">Limpiar</button>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table table-sm table-striped align-middle">
            <thead>
                <tr>
                <th style="min-width:110px;">Código</th>
                <th style="min-width:200px;">Nombre</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Stock</th>
                <th style="min-width:120px;">Imagen</th>
                </tr>
            </thead>
            <tbody id="tbodyProductos"></tbody>
            </table>
        </div>

        <div class="d-flex justify-content-between">
            <small id="totalInfo"></small>
            <button id="btnRefrescar" class="btn btn-outline-secondary btn-sm">Refrescar</button>
        </div>
        </section>
    `;

    const $  = (s) => document.querySelector(s);
    const $$ = (s) => document.querySelectorAll(s);

    const buscarInp   = $('#buscar');
    const catSel      = $('#filtroCategoria');
    const tbody       = $('#tbodyProductos');
    const totalInfo   = $('#totalInfo');
    const btnClear    = $('#btnClear');
    const btnRefres   = $('#btnRefrescar');

    // Construye opciones de categoría desde los datos
    const buildCategorias = () => {
        const set = new Set(
        window.productos
            .map(p => String(p['Categoría'] || '').trim())
            .filter(Boolean)
        );
        catSel.innerHTML = `<option value="">Todas</option>` +
        Array.from(set).sort().map(c => `<option value="${c}">${c}</option>`).join('');
    };

    // Filtro + render
    const getFiltrados = () => {
        const q = buscarInp.value.trim().toLowerCase();
        const c = catSel.value.trim();
        return window.productos.filter(p => {
        const codigo = String(p['Código'] || '').toLowerCase();
        const nombre = String(p['Nombre'] || '').toLowerCase();
        const cat    = String(p['Categoría'] || '');
        const matchQ = !q || codigo.includes(q) || nombre.includes(q);
        const matchC = !c || cat === c;
        return matchQ && matchC;
        });
    };

    const render = () => {
        const data = getFiltrados();
        if (!data.length) {
        tbody.innerHTML = `
            <tr>
            <td colspan="6" class="text-center text-muted py-4">Sin resultados</td>
            </tr>`;
        totalInfo.textContent = `0 de ${window.productos.length} productos`;
        return;
        }

        tbody.innerHTML = data.map(p => {
        const img = String(p.imgLink || '').trim();
        const safeImg = img ? `<img src="${img}" alt="${p['Nombre'] || ''}" style="height:48px" onerror="this.style.display='none'">` : '';
        return `
            <tr>
            <td>${p['Código'] ?? ''}</td>
            <td>${p['Nombre'] ?? ''}</td>
            <td>${p['Precio'] ?? ''}</td>
            <td>${p['Categoría'] ?? ''}</td>
            <td>${p['Stock'] ?? ''}</td>
            <td>${safeImg}</td>
            </tr>
        `;
        }).join('');

        totalInfo.textContent = `${data.length} de ${window.productos.length} productos`;
    };

    // Eventos
    buscarInp.addEventListener('input', render);
    catSel.addEventListener('change', render);
    btnClear.addEventListener('click', () => {
        buscarInp.value = '';
        catSel.value = '';
        render();
    });
    btnRefres.addEventListener('click', () => {
        buildCategorias();
        render();
    });

    // Si otro módulo avisa cambios (por ejemplo desde "crear"), nos actualizamos
    window.addEventListener('productos:change', () => {
        buildCategorias();
        render();
    });

    // Primer render
    buildCategorias();
    render();
});
