$(document).ready(function () {
    // Ouvrir le menu latéral
    $('#burger-menu').on('click', function () {
        $('#side-menu').css('left', '0');
        $('#burger-menu').hide(); // Masquer le bouton burger
        $('body').addClass('blur'); // Ajouter la classe pour flouter l'arrière-plan
    });

    // Fermer le menu latéral
    $('#close-menu').on('click', function () {
        $('#side-menu').css('left', '-300px');
        $('#burger-menu').show(); // Afficher à nouveau le bouton burger
        $('body').removeClass('blur'); // Retirer la classe pour le flou
    });

    // Smooth scrolling for links
    $('.nav-link').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
        // Fermer le menu après le clic
        $('#side-menu').css('left', '-300px');
        $('#burger-menu').show(); // Afficher à nouveau le bouton burger
        $('body').removeClass('blur'); // Retirer la classe pour le flou
    });
});

