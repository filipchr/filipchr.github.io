require([
  'jquery'
], function($) {
  var requestAnimationFrame = window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;


  var parallax = {
    height: $(window).height(),
    offset: ($(window).height() / 100) * 30,
    index: 1,
    getScrollPosition: function () {
      if (document.documentElement.scrollTop == 0) {
        return document.body.scrollTop;
      } else {
        return document.documentElement.scrollTop;
      }
    },
    reqAnim: function() {
       parallax.index = Math.floor((parallax.getScrollPosition() / (parallax.height - parallax.offset))) + 1;
      // Gets the index of the active image. The first image has the index 1, the second has 2 etc.

      var offsetHeight = (parallax.getScrollPosition() / (parallax.height - parallax.offset) - (parallax.index - 1)) * parallax.offset;
      // offsetHeight is a poor, and misleading, name. Change it!


      if (parallax.index != 0) {
        $('.work__header').css('transform', 'translate3d(0,' + offsetHeight + 'px,0)');
      };

      requestAnimationFrame(parallax.reqAnim)
    },
    init: function() {
      this.reqAnim();
    }
  }

  parallax.init()

});