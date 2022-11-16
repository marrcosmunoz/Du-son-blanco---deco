const div = document.getElementById('div');

function movimiento(){
    const input = document.getElementById('input');
    const h1 = document.createElement('h1');
    console.log(input);
    h1.textContent = input;
    div.appendChild(h1);
    div.classList.add('rotation');
}