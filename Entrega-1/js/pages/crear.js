// js/pages/crear.js
document.addEventListener('DOMContentLoaded', () => {
  const cont = document.getElementById('formContainer');
  if (!cont) {
    console.error('No existe #formContainer en el DOM.');
    return;
  }

  // IMPORTANTE: aquí el HTML está corregido (cerré el </div>)
  cont.innerHTML = `
    <form id="formProducto" class="container" style="max-width: 800px;">

        <div class="row g-3">
            <div class="col-md-4">
                <label for="codigo" class="form-label">Código *</label>
                <input type="text" id="codigo" class="form-control" placeholder="JM999" required>
            </div>

            <div class="col-md-8">
                <label for="nombre" class="form-label">Nombre *</label>
                <input type="text" id="nombre" class="form-control" placeholder="Catan" required>
            </div>

            <div class="col-md-4">
                <label for="precio" class="form-label">Precio (CLP) *</label>
                <input type="text" id="precio" class="form-control" inputmode="numeric" placeholder="29990" required>
            </div>

            <div class="col-md-4">
                <label for="stock" class="form-label">Stock *</label>
                <input type="number" id="stock" class="form-control" min="0" step="1" placeholder="100" required>
            </div>

            <div class="col-md-4">
                <label for="categoria" class="form-label">Categoría *</label>
                <select id="categoria" class="form-control" required>
                    <option value="">-- Selecciona --</option>
                    <option value="Juegos de Mesa">Juegos de Mesa</option>
                    <option value="Accesorios">Accesorios</option>
                    <option value="Consolas">Consolas</option>
                    <option value="Computadores Gamers">Computadores Gamers</option>
                    <option value="Sillas Gamers">Sillas Gamers</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Mousepad">Mousepad</option>
                    <option value="Poleras Personalizadas">Poleras Personalizadas</option>
                    <option value="Polerones Gamers Personalizados">Polerones Gamers Personalizados</option>
                </select>
            </div>

            <div class="col-12">
                <label for="descCorta" class="form-label">Descripción Corta *</label>
                <textarea id="descCorta" class="form-control" rows="2" required></textarea>
            </div>

            <div class="col-12">
                <label for="descLarga" class="form-label">Descripción Larga *</label>
                <textarea id="descLarga" class="form-control" rows="4" required></textarea>
            </div>

            <div class="col-12">
                <label for="especificaciones" class="form-label">Especificaciones</label>
                <textarea id="especificaciones" class="form-control" rows="3"
                    placeholder="Una por línea&#10;Tiempo de juego 45–90 min&#10;Incluye instrucciones en español"></textarea>
                
            </div>

            <div class="col-12">
                <label for="comentarios" class="form-label">Comentarios</label>
                <textarea id="comentarios" class="form-control" rows="3" placeholder="Una por línea"></textarea>
            </div>

            <div class="col-md-12">
                <label for="imgLink" class="form-label">Imagen (URL) *</label>
                <input type="text" id="imgLink" class="form-control" placeholder="Web url" required>
                
                </div>
                <div class="col-md-4 d-flex align-items-end">
                <img id="previewImg" src="" alt="preview" style="max-height:80px; display:none; margin-left:12px;">
                </div>
            </div>

            <div class="mt-4 d-flex gap-2">
                <button type="submit" class="botonPpal">Guardar</button>
                <button type="reset" class="botonScd">Limpiar</button>
            </div>
        <div id="msg" class="mt-3"></div>
    </form>
    `;

    // Lógica mínima: validar vacíos y mostrar nombre
    const form = document.getElementById('formProducto');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const requiredIds = ['codigo','nombre','precio','stock','categoria','descCorta','descLarga','imgLink'];
        const values = Object.fromEntries(requiredIds.map(id => [id, document.getElementById(id)?.value.trim() || '']));

        
        if (Object.values(values).some(v => !v)) {
        alert('Por favor completa todos los campos obligatorios (*)');
        return;
        }

        alert(`Producto ingresado: ${values.nombre}`);
        form.reset();
    });
});
