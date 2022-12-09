const cardContainer = document.querySelector('.cards');
const card = document.querySelector('.card');
const reload = document.querySelector('.refresh');

const change1 = document.querySelector('.back .symbol');

card.addEventListener('click', (e) => {
    const random1 = Math.round(Math.random() * (10 - 1) + 1);
    change1.innerText = random1;


    // let x = e.clientX - e.target.offsetLeft;
    let x = e.layerX;
    // let y = e.clientY - e.target.offsetTop;
    let y = e.layerY;
    console.log(e);

    let ripple = document.createElement('span');
    ripple.className = "wave";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    card.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
        cardContainer.classList.add('cards-hover');
    }, 700)
});

reload.addEventListener('click', () => {
    // window.open("http://127.0.0.1:5500/");
    cardContainer.classList.remove('cards-hover');
})