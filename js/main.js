const moreBtn =document.querySelector('.info .metadate .downbutton');
const title=document.querySelector('.info .metadate .title1');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title.classList.toggle('clamp');
});