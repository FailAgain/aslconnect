    function closeGallery() {
        $('.j-closeGallery').click(function() {
            $('#j-gallery-overlay-family').toggleClass('hidden');
        });
    }

    function pauseAllVideos() {
        //pauses all videos on page
        $('video').each(function() {
            $(this).get(0).pause();
            var ispaused = $(this).get(0).paused;
            console.log('video is paused: ' + ispaused);
        });
    }

    function autoplaySelectedVideo() {
        //starts only the current video
        $('.is-selected video').get(0).play(function() {
            var isplaying = $(this).get(0).playing;
            console.log('video is playing: ' + isplaying);
        });
    }

    function initGalleryFunctions() {
        var gallery = new Flickity('#j_library-gallery-family', {
            accessibility: true,
            contain: true,
            setGallerySize: false,
            draggable: false,
            pageDots: false
        });


        $('#j-closeGallery').click(function() {
            $('#j-gallery-overlay-family').toggleClass('hidden');


        });

        $('.j-openGallery').click(function() {

            $('#j-gallery-overlay-family').toggleClass('hidden');
            gallery.resize();
        });

        //autoplays & pauses each video when selected.
        gallery.on('select', function() {

           pauseAllVideos();
           autoplaySelectedVideo();

        })
    }

    $(function() {
        initGalleryFunctions();
    });
