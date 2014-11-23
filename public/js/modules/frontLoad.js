define([
	'jquery',
	'modernizr'
], function ($) {
	'use strict';

	var frontLoad = {
		variables: {
			$header 		: $('.home__page-header'),
			$body 			: $('body'),
			$wHeight 		: $(window).height(),
			$page__title	: $('.page__title'),
		},


		setBg: function() {
			var _this = this;
			this.variables.$page__title.addClass('slide__in');
			setTimeout(_this.transformBg, 500);
		},

		transformBg: function() {
			$('.home .wrapper').addClass('fade__in');

		},

		init: function() {
			this.setBg();
		},

	}

	if (Modernizr.csstransitions) {
		frontLoad.init();
	} else {
		console.log('something went horribly wrong')
	};



});
