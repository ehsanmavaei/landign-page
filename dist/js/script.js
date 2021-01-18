const hamburger=document.querySelector('#btnHamburger')
const overlay=document.querySelector('#overlay')
const samllmenu=document.querySelector('#smallmenu');
const body=document.querySelector('body')
hamburger.addEventListener('click',function(){
  


if(hamburger.classList.contains('open')){
    this.classList.remove('open')
    overlay.classList.remove('overlay-open');
    samllmenu.classList.add('hasfade');
    body.classList.remove('noscroll')
}else{
    this.classList.add('open');
    overlay.classList.add('overlay-open');
    samllmenu.classList.remove('hasfade');
    body.classList.add('noscroll')
   
   
  

}
})
