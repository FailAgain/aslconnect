    function pauseAllVideos() {
        //pauses all videos on page
        $('video').each(function() {
            $(this).get(0).pause();
            var ispaused = $(this).get(0).paused;
            console.log('video is paused: ' + ispaused);
        });
    }

    function playSelectedVideo(element) {
        //starts only the current video
        $(element).find('.is-selected video').get(0).play(function() {
            var isplaying = $(this).get(0).playing;
            console.log('video is playing: ' + isplaying);
        });
    }


    function newGallery(value) {
        var gallery = new Flickity(value, {
            accessibility: true,
            contain: true,
            setGallerySize: false,
            draggable: false,
            pageDots: false
        });

        //creates new gallery instance
        return gallery;
    }

    // forEach method, could be shipped as part of an Object Literal/Module
    var forEach = function(array, callback, scope) {
        for (var i = 0; i < array.length; i++) {
            callback.call(scope, i, array[i]); // passes back stuff we need
        }
    };

    function initGalleryFunctions() {
        var galleries = document.querySelectorAll('.AC_library-gallery');

        forEach(galleries, function(index, value) {
            var tempIndex = index + 1;
            var id = $(value).data('gallery-id');
            var galleryAttribute = "[data-gallery-id='" + id + "']";

            console.log([value, 'running through #' + tempIndex + ' gallery', 'with id of: ' + id, galleryAttribute]);

            //initalize current gallery
            var gallery = new Flickity(value, {
                accessibility: true,
                contain: true,
                setGallerySize: false,
                draggable: false,
                pageDots: false
            });

            //ensures proper playthrough - when any video is selected, comes into view in the gallery, run these functions
            gallery.on('select', function() {
                console.log('a video is selected')
                    //a bit obvious what we're doing
                pauseAllVideos();

                //play the current selected video
                playSelectedVideo(value);
            });

            if ($('.j-closeGallery')) {

                $('.j-closeGallery' + galleryAttribute).click(function() {
                    pauseAllVideos();
                    $('.j-gallery-overlay').addClass('hidden');
                    console.log('closing this gallery');
                });

            } else {
                console.log('gallery close element not found');
            }

            $('.j-openGallery' + galleryAttribute).click(function() {
                console.log('opening gallery ' + $(this).data('gallery-id'));

                $('.j-gallery-overlay' + galleryAttribute).removeClass('hidden');
                gallery.resize();
                playSelectedVideo(value);
                console.log('opening this gallery');
            });

        });
    }

    $(function() {
        initGalleryFunctions();
    });
