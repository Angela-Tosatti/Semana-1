window.onload = function (){
    document.getElementById ('hora').innerHTML = new Date().toLocaleString();
   document.getElementById ('titulo').onclick = function (e){
       this.innerHTML = "O Gênio do mal"
   }
   document.getElementById ('img-div').onclick = function(e){
       this.src="https://vignette.wikia.nocookie.net/dreamworksanimation/images/c/c0/Megamente_%28personagem%29.jpg/revision/latest/scale-to-width-down/340?cb=20111124005447&path-prefix=pt-br"
   }
}