$(document).ready(function(){
    $("#menu-principal").prepend('<div id="menu-entrada">Menu</div>');
    $("#menu-entrada").on('click', function(){
        $('#menu').slideToggle();
    });
});