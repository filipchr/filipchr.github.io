require.config({
    paths: {
        jquery: '/public/assets/jquery/dist/jquery.min',
        modernizr: '/public/assets/modernizr/modernizr'
    }
});

require(['jquery', 'modernizr', 'modules/frontLoad', 'modules/menu', 'modules/pagei_nav', 'modules/parallax', 'modules/ajaxHandler'], function($, modernizr, frontLoad, menu, page, parallax, ajaxHandler) {

    frontLoad;
    $('body').addClass('loaded');

});
