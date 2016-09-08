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

    function toggleSubtitles(video){
        $('#j-welcome').toggleClass('invisible');
        if(video.textTracks[0].mode == "showing"){
            video.textTracks[0].mode = "hidden";
        }else{
            video.textTracks[0].mode = "showing";
        }
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

        if($('#introvideo').length) {
            console.log($('#introvideo'));
            $('#introvideo').get(0).play();
        }

        if($('#mainvideo').length){
            v = $('#mainvideo').get(0);
            v.textTracks[0].mode = "hidden";
        }

        if($('#subtitles').length){
            $('#subtitles').click(function(){
                toggleSubtitles($('#mainvideo').get(0));
            })
        }
    });
