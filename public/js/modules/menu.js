define(['jquery'], function($){

  var App = {
    elements: {
      $trigger : $('.menu__trigger'),
      $main    : $('#main__content'),
      $nav     : $('#main__nav'),
      $shadow  : $('.shadow__layer'),
      $closer  : $('.close__menu')
    },

    openMenu: function(e) {
      e.preventDefault();
      var h = $(window).height();
      var d = $(document).scrollTop();
      var res = ( h - d );
      console.log(res);
      if (res < 300 ) {
        setTimeout(function() {
          $('body').scrollTop(h - 400)
        }, 100);
      }
      App.elements.$main.addClass('move-out');
      App.elements.$nav.addClass('is-visible');
      App.elements.$shadow.addClass('is-visible');

    },

    closeMenu: function(e) {

      e.preventDefault();
      App.elements.$main.removeClass('move-out');
      App.elements.$nav.removeClass('is-visible');
      App.elements.$shadow.removeClass('is-visible');

    },

    listeners: function() {
      var _this = this;

      this.elements.$trigger.on('click', function(e) {
        _this.openMenu(e);
      });

      this.elements.$closer.on('click', function(e) {
        _this.closeMenu(e);
      });

      if (!Modernizr.touch) {
        $(document).keyup(function(e) {
          if (e.keyCode == 27 ) {
            if (App.elements.$nav.hasClass('is-visible')) {
              App.closeMenu(e);
            } else {
              App.openMenu(e);
            }
          }
        });
      };

    },

    init: function() {
      this.listeners();
    }

  }

  App.init()
});
