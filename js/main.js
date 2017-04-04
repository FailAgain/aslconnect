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
        if (video.textTracks[0].mode == "showing") {
            $('#j-welcome').removeClass('invisible');
            $('.AC_navbar').removeClass('sunken');
            video.textTracks[0].mode = "hidden";
        } else {
            $('#j-welcome').addClass('invisible');
            $('.AC_navbar').addClass('sunken');
            video.textTracks[0].mode = "showing";
        }
    }

    function toggleVideoMode(video) {
        if (!video.paused) {
            $('#j-video-play').addClass('invisible');
            $('#j-video-pause').removeClass('invisible');
        } else if (video.paused) {
            $('#j-video-play').removeClass('invisible');
            $('#j-video-pause').addClass('invisible');
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
            console.log(v.textTracks[0].mode);
            console.log("inital video texttrack mode: " + v.textTracks[0].mode);
            v.textTracks[0].mode = "hidden";
            console.log(v.textTracks[0].mode);

        }

        //SETUP: determine which video button should be shown
        if ($('#mainvideo').length) {
            v = $('#mainvideo').get(0);
            v.onplaying = function() {
                toggleVideoMode(v);
            }
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

    $(function() {
        $('#j-video-play').on('click', function() {
            var video = $('#mainvideo').get(0);
            video.play();
            toggleVideoMode(video);
        });

        $('#j-video-pause').on('click', function() {
            var video = $('#mainvideo').get(0);
            video.pause();
            toggleVideoMode(video);
        });
    });
