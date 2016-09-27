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
        var element = document.querySelector('#j_library-gallery');

        if (element) {
            var gallery = new Flickity(element, {
                accessibility: true,
                contain: true,
                setGallerySize: false,
                draggable: false,
                pageDots: false
            });
        } else {
            console.log('gallery element not found');
        }

        if ($('#j-closeGallery')) {

            $('#j-closeGallery').click(function() {
                pauseAllVideos();
                $('#j-gallery-overlay').toggleClass('hidden');
            });

        } else {
            console.log('gallery close element not found');
        }


        $('.j-openGallery').click(function() {

            $('#j-gallery-overlay').toggleClass('hidden');
            gallery.resize();
            autoplaySelectedVideo();
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
