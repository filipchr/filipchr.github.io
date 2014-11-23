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

            var yPosition = (parallax.getScrollPosition() / (parallax.height - parallax.offset) - (parallax.index - 1)) * parallax.offset;

            if (parallax.index != 0) {
                $('.work__header').css('transform', 'translate3d(0,' + yPosition  + 'px,0)');
            };

            requestAnimationFrame(parallax.reqAnim)
        },
        init: function() {
            this.reqAnim();
        }
    }

    parallax.init()

});
