    var $ = jQuery;

    function animateWelcomeBox() {
        $('#j-welcome').addClass('visible');
        console.log('animating welcome box');
    }

    function toggleMobileMenu() {
        $('#j-navmobilemenu').toggleClass('visible');
        console.log('toggling Mobile Menu Visiblity');
    }

    function toggleSubtitles(video) {
        $('#j-welcome').toggleClass('invisible');
        if (video.textTracks[0].mode == "showing") {
            video.textTracks[0].mode = "hidden";
        } else {
            video.textTracks[0].mode = "showing";
        }
    }

    //runs when the document is ready.
    $(function() {

        //SETUP: starts the welcome box animation
        window.setTimeout(animateWelcomeBox, 2000);

        //SETUP: intro video if it is available on the page
        if ($('#introvideo').length) {
            console.log($('#introvideo'));
            $('#introvideo').get(0).play();
        }

        //SETUP: hides main videos' subtitles if they are available
        if ($('#mainvideo').length) {
            v = $('#mainvideo').get(0);
            v.textTracks[0].mode = "hidden";
        }

        //EVENT: click subtitles button (show/hide subtitles)
        if ($('#subtitles').length) {
            $('#subtitles').click(function() {
                toggleSubtitles($('#mainvideo').get(0));
            })
        }

        //EVENT: click open menu button on navigation bar
        $('#j-navmobilemenu-open').click(function() {
            toggleMobileMenu();
            console.log('clicking open button');
        });

        //EVENT: click close button on mobile overlay menu
        $('#j-navmobilemenu-close').click(function() {
            toggleMobileMenu();
            console.log('clicking close button');
        });

    });

    //initalizes the topic video gallery
    $(function() {
        $(document).on('click', 'video', function() {
            if (this.paused) {
                this.play();
            } else {
                this.pause();
            }
        });
    });
