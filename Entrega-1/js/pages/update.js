// js/pages/editar_simple.js
document.addEventListener('DOMContentLoaded', () => {
    const cont = document.getElementById('updateContainer')

    if (!Array.isArray(window.productos)) window.productos = [];

    cont.innerHTML = `
        <section class="container" style="max-width: 800px;">

        <div class="row g-2 align-items-end mb-3">
            <div class="col-sm-8">
            <label class="form-label" for="buscarCodigo">Código</label>
            <input type="text" id="buscarCodigo" class="form-control" placeholder="JM001">
            </div>
            <div class="col-sm-4">
            <button id="btnBuscar" class="botonPpal w-100" type="button">Buscar</button>
            </div>
        </div>

        <form id="formEditar" class="row g-3" style="display:none;">
            <div class="col-md-6">
            <label class="form-label" for="nombre">Nombre (deja vacío para no cambiar)</label>
            <input id="nombre" class="form-control" type="text">
            </div>

            <div class="col-md-6">
            <label class="form-label" for="precio">Precio (solo números)</label>
            <input id="precio" class="form-control" type="text" inputmode="numeric">
            </div>

            <div class="col-md-4">
            <label class="form-label" for="stock">Stock</label>
            <input id="stock" class="form-control" type="number" min="0" step="1">
            </div>

            <div class="col-md-8">
            <label class="form-label" for="categoria">Categoría</label>
            <input id="categoria" class="form-control" type="text" placeholder="">
            </div>

            <div class="col-12">
            <label class="form-label" for="descCorta">Descripción Corta</label>
            <textarea id="descCorta" class="form-control" rows="2"></textarea>
            </div>

            <div class="col-12">
            <label class="form-label" for="descLarga">Descripción Larga</label>
            <textarea id="descLarga" class="form-control" rows="3"></textarea>
            </div>

            <div class="col-12">
            <label class="form-label" for="imgLink">Imagen (URL)</label>
            <input id="imgLink" class="form-control" type="text">
            </div>

            <div class="col-12 d-flex gap-2 mt-2" id="botonesAbajo">
                <button class="botonPpal" type="submit">Guardar</button>
                <button class="botonScd" type="button" id="btnCancelar">Cancelar</button>
            </div>
        </form>
        </section>
    `;

    const $ = (s) => document.querySelector(s);
    const byCode = (c) => window.productos.find(p => String(p['Código']).toUpperCase() === String(c).toUpperCase());
    const toInt = (v) => parseInt(String(v).replace(/[^\d]/g, ''), 10) || 0;
    const formatCLP = (n) => new Intl.NumberFormat('es-CL').format(toInt(n)) + ' CLP';

    const buscarCodigo = $('#buscarCodigo');
    const btnBuscar    = $('#btnBuscar');
    const form         = $('#formEditar');

    // inputs
    const nombre    = $('#nombre');
    const precio    = $('#precio');
    const stock     = $('#stock');
    const categoria = $('#categoria');
    const descCorta = $('#descCorta');
    const descLarga = $('#descLarga');
    const imgLink   = $('#imgLink');

    let productoActual = null;

    btnBuscar.addEventListener('click', () => {
        const code = buscarCodigo.value.trim();
        if (!code) { alert('Ingresa un código'); return; }

        const p = byCode(code);
        if (!p) { alert('No se encontró el producto'); form.style.display = 'none'; return; }

        productoActual = p;

        nombre.placeholder    = p['Nombre'] ?? '';
        precio.placeholder    = (p['Precio'] ?? '').toString();
        stock.placeholder     = String(p['Stock'] ?? '');
        categoria.placeholder = p['Categoría'] ?? '';
        descCorta.placeholder = p['Descripción Corta'] ?? '';
        descLarga.placeholder = p['Descripción Larga'] ?? '';
        imgLink.placeholder   = p['imgLink'] ?? '';

        [nombre, precio, stock, categoria, descCorta, descLarga, imgLink].forEach(i => i.value = '');

        form.style.display = '';
    });

    $('#btnCancelar').addEventListener('click', () => {
        form.reset();
        form.style.display = 'none';
        productoActual = null;
    });

    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!productoActual) { alert('No hay producto cargado'); return; }

        
        const cambios = {};
        if (nombre.value.trim())    cambios['Nombre']            = nombre.value.trim();
        if (precio.value.trim())    cambios['Precio']            = formatCLP(precio.value);
        if (stock.value.trim())     cambios['Stock']             = String(toInt(stock.value));
        if (categoria.value.trim()) cambios['Categoría']         = categoria.value.trim();
        if (descCorta.value.trim()) cambios['Descripción Corta'] = descCorta.value.trim();
        if (descLarga.value.trim()) cambios['Descripción Larga'] = descLarga.value.trim();
        if (imgLink.value.trim())   cambios['imgLink']           = imgLink.value.trim();

        
        const hipotetico = { ...productoActual, ...cambios };

        console.log('ACTUALIZACIÓN DEMO - no se persiste', { original: productoActual, cambios, resultaria: hipotetico });
        alert('Actualizado correctamente (demo — no se guardó)');

        form.reset();
        form.style.display = 'none';
        productoActual = null;
    });
});
