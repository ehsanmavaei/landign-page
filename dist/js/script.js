const hamburger=document.querySelector('#btnHamburger')
hamburger.addEventListener('click',function(){
  


if(hamburger.classList.contains('open')){
    this.classList.remove('open');
}else{
    this.classList.add('open')

}
})
