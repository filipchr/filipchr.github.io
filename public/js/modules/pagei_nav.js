define([
    'jquery'
    ], function($) {

        var Pageignation = {

            nextArticle: function(){
                console.log('next article loading');
                var url = $('a.btn__next').attr('href');

                console.log(url);

                if (url != undefined) {
                    /*$.ajax({
                    type: 'GET',
                    url: url,
                    success: function(data) {
                    $('html').html(data);
                    window.location = url;
                }
            });*/
            $('body').load( url, 'body');
        };

    },

    prevArticle: function(){
        console.log('previous article loading');
        var url = $('a.btn__prev').attr('href');

        console.log(url);

        if (url != undefined) {
            $.ajax({
                type: 'GET',
                url: url,
                success: function(data) {
                    $('html').html(data);
                    window.location = url;
                }
            });

        };
    },

    listner: function() {
        var self = this;
        $(document).keyup(function(e) {
            if (e.keyCode == 80 ) {
                self.prevArticle();
            }
            if (e.keyCode == 78) {
                self.nextArticle();
            };
        });
    },

    init: function() {
        //this.listner();
    }
}

Pageignation.init();
});
