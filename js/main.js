    var $ = jQuery;

    function animateWelcomeBox() {
        $('#j-welcome').addClass('visible');
        console.log('animating welcome box');
    }

    function toggleMobileMenu() {
        $('#j-navmobilemenu').toggleClass('visible');
        console.log('toggling Mobile Menu Visiblity');
    }

    function animateBody() {
        $('body').addClass('visible');
        console.log('animating welcome box');
    }

    function animateWelcomeBox() {
        $('#j-welcome').addClass('visible');
        console.log('animating welcome box');
    }

    //jquery's condensed document.ready format
    $(function() {
        console.log('script init');
        window.setTimeout(animateWelcomeBox, 2000);

        animateBody();

        $('#j-navmobilemenu-open').click(function() {
            toggleMobileMenu();
            console.log('clicking open button');
        });

        $('#j-navmobilemenu-close').click(function() {
            toggleMobileMenu();
            console.log('clicking close button');
        });

        $('#introvideo').get(0).play();
    });
