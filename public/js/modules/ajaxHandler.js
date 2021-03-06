define([
  'jquery'
], function($) {
    'use strict';
    var ajaxHandler = {

        fire: function(e) {
            e.preventDefault();
            var url = $(this).attr('href');

            $.ajax({
                url: url,
                beforeSend: function() {
                    $('body').removeClass('loaded');
                },
                success: function(res) {
                    location.href = url;
                },
                dataType: 'html'
            });

            ga('send', 'pageview', {
                'page': url,
                'title': document.title
            });
        },
        listner: function() {
            $('a:not([href^="#"], .skip__ajax, .work__wrapper a)').on('click', this.fire)
        },

        init: function() {
            this.listner();
        }
    }

    ajaxHandler.init();
});
