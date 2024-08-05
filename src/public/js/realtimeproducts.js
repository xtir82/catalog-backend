//const titleInput = document.querySelector('#title');
const newProdBtn = document.querySelector('#newProdBtn');

//Form Inputs
let titleInput;
let descriptionInput;

const productForm = {
    title: '',
}

newProdBtn.addEventListener('click', (event) => {
    Swal.fire({
        title: 'Agregar Nuevo Producto',
        text: 'Introduzca los datos del producto que desea agregar:',
        icon: 'info',
        showCloseButton: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#2ecc71',
        showCancelButton: true,
        cancelButtonColor: '#e74c3c',
        cancelButtonText: 'Cancelar',
        html: `
        <input type="text" id="title" class="swal2-input" placeholder="Title" required>
        <input type="text" id="description" class="swal2-input" placeholder="Descripcion" required>
        <input type="number" id="code" class="swal2-input" placeholder="Codigo" required>
        <input type="number" id="price" class="swal2-input" placeholder="Precio" required>
        <input type="number" id="stock" class="swal2-input" placeholder="Inventario" required>
        <input type="text" id="category" class="swal2-input" placeholder="Categoria" required>
        `,
        didOpen: () => {
            const popup = Swal.getPopup();
            titleInput = popup.querySelector('#title');
            descriptionInput = popup.querySelector('#description');
            codeInput = popup.querySelector('#code');
            priceInput = popup.querySelector('#price');
            stockInput = popup.querySelector('#stock');
            categoryInput = popup.querySelector('#category');
            titleInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
            descriptionInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
            codeInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
            priceInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
            stockInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
            categoryInput.onkeyup = (event) => event.key === 'Enter' && Swal.clickConfirm();
          },
          preConfirm: () => {
            const title = document.querySelector('#title').value;
            const description = document.querySelector('#description').value;
            const code = document.querySelector('#code').value;
            const price = document.querySelector('#price').value;
            const stock = document.querySelector('#stock').value;
            const category = document.querySelector('#category').value;
            if (!title || !description || !code || !price || !stock || !category ) {
              Swal.showValidationMessage(`Por favor complete todos los campos`);
            }
            return { title, description, code, price, stock, category };
          }
      })
})

titleInput.addEventListener('input', (event) => {
    product.title = event.target.value; //Obtiene el valor de input title
})

sendButton.addEventListener('click', () => {
    fetch('http:localhost:8080/api/product', {
        method: 'POST',
        body: JSON.stringify(productForm),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(result => console.log(result))
})

socket.on('answer', (data) => {
    console.log(data);
})

