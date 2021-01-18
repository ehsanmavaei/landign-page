const hamburger=document.querySelector('#btnHamburger')
const overlay=document.querySelector('#overlay')
hamburger.addEventListener('click',function(){
  


if(hamburger.classList.contains('open')){
    this.classList.remove('open')
    overlay.classList.remove('overlay-open');
}else{
    this.classList.add('open');
    overlay.classList.add('overlay-open');

}
})
