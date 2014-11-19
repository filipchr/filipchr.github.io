require.config({
  paths: {
    jquery: '/public/assets/jquery/dist/jquery.min',
    modernizr: '/public/assets/modernizr/modernizr.js'
  }
});

require(['jquery', 'modules/menu', 'modules/pagei_nav', 'modules/parallax', 'modules/ajaxHandler'], function($, menu, page, parallax, ajaxHandler) {

  $('body').addClass('loaded');

});