const navbar = document.getElementsByClassName('mynav')[0];
window.addEventListener('scroll', function() {
    if (window.pageYOffset <= 0 ) {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = '0px 4px 24px rgba(105, 105, 105, 0)'
    } else if (window.pageYOffset > 0) {
        navbar.style.background = '#242424';
        navbar.style.boxShadow = '0px 4px 24px rgba(105, 105, 105, 0.1)'
    }
});


function whatsapp() {
    window.location.href ="https://api.whatsapp.com/send?phone=85722234393&text=Hallo%20Saya%20tertarik%20dengan%20jasa%20dan%20produk%20anda%2C%20saya%20ingin%20order%20sesuatu";
}

function email() {
    window.location.href = "mailto:faizmarchendise@gmail.com"
}