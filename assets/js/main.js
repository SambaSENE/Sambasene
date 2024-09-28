$(document).ready(function () {
    // Ouvrir le menu latéral
    $('#burger-menu').on('click', function () {
        $('#side-menu').css('left', '0');
        $('#burger-menu').hide(); // Masquer le bouton burger
        $('body').addClass('blur'); // Ajouter un flou de l'arrière-plan
    });

    // Fermer le menu latéral
    $('#close-menu').on('click', function () {
        $('#side-menu').css('left', '-300px');
        $('#burger-menu').show(); // Afficher à nouveau le bouton burger
        $('body').removeClass('blur'); // Retirer le flou de l'arrière-plan
    });

    // Smooth scrolling pour les liens du menu
    $('.nav-link').on('click', function (event) {
        event.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
        // Fermer le menu après un clic sur un lien
        $('#side-menu').css('left', '-300px');
        $('#burger-menu').show(); // Réafficher le bouton burger
        $('body').removeClass('blur'); // Supprimer l'effet de flou
    });

    // Effet d'apparition des éléments au scroll
    $(window).on('scroll', function () {
        $('.fade-in').each(function () {
            if ($(this).offset().top < $(window).scrollTop() + $(window).height() - 100) {
                $(this).addClass('visible');
            }
        });
    });
});
