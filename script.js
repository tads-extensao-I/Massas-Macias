let menubar = document.querySelector('#menu-bar')
let nav = document.querySelector('.navegacao')


menubar.onclick = () =>{
    menubar.classList.toggle('fa-times')
    nav.classList.toggle('active')
  
    
}


const sr = ScrollReveal ({
    distance : '45px',
    duration : 2700,
    reset : true,
  })

  sr.reveal('.myimageabout',{ delay:350, origin:'left' })
  sr.reveal('.sobre-nos-texto',{ delay:350, origin:'right' })
  sr.reveal('.imagem-principal',{ delay:350, origin:'left' })
  sr.reveal('.texto-principal',{ delay:350, origin:'right' })
  sr.reveal('.mariaimg',{ delay:350, origin:'right' })
  sr.reveal('.sobre-text-content',{ delay:350, origin:'left' })

  sr.reveal('.qualidade-container',{ delay:350, origin:'left' })
  sr.reveal('.qualidade-imagem',{ delay:350, origin:'right' })
  sr.reveal('.galeria-imagem',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-content',{ delay:350, origin:'top' })
  sr.reveal('.menu-food-text',{ delay:350, origin:'bottom' })
  sr.reveal('.food-main-content',{ delay:350, origin:'bottom' })
  sr.reveal('.before',{ delay:350, origin:'bottom' })
  sr.reveal('.rodape-logo',{ delay:350, origin:'bottom' })
