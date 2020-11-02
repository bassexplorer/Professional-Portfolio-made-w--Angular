window.onload = function(e){ 
    let navWrapper = document.querySelector('.appear-menu'), // amiben van a menu
        navToogler =  document.querySelector('.hamburger'), //amire rá nyomok
        burgericon = document.querySelector('.hamburger');
        
        

    navToogler.addEventListener('click', function (event) {
        navWrapper.classList.toggle('active');
        burgericon.classList.toggle('change');

        
    })
}