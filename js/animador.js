const mov = document.getElementById('mov');

function movimiento(){
    const input = document.getElementById('input').value;
    const h1 = document.createElement('h1');
    console.log(input);
    h1.textContent = input;
    mov.appendChild(h1);
    mov.classList.add('rotar');
}
