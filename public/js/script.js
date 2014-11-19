console.log('jquery version: ' + $.fn.jquery);

var portf = {
  elements: {
    $body: $('body'),
    $ajaxLink: $('.ajax__link'),
    siteUrl: 'http://'+(document.location.hostname||document.location.host),
  },

  ajaxreq: function(e) {
    e.preventsDefault();
    /*var url = this.pathname;
    history.pushState({ href: url }, null, url );
    this.loadURL(url);*/
    console.log(this);
  },

  loadURL: function(url) {
      var that = this;
      $body.addClass('loading');
      console.log(url);
      $.ajax({
          'type': 'GET',
          'url': url + '?ajaxcall=true', // ajaxcall parameter prevents header load
          'dataType': 'html',
          'timeout': 5000,
          'error': function(jqXHR, textStatus, errorThrown ) {
              // error handling
              switch (textStatus) {
                  case "timeout":
                  break;
                  case "error":
                  break;
                  case "abort":
                  break;
                  case "parsererror":
                  break;
                  default: // null
              }
              // redirect to page if ajax fucks up
              window.location.href = url;
          },
          'success': that.pageLoaded
      });

  },

  pageLoaded: function() {
    this.elements.$body.scrollTop(0);
  },

  listner: function() {
     this.elements.$ajaxLink.click( this.ajaxreq, event );
  },

  init: function() {
    this.listner();
  }
}

portf.init();


/*
function windowLoaded(){
    //resizeAction();
    if (window.FastClick) {
        window.FastClick.attach(document.body);
    }
}
$window.on('load', windowLoaded);
 */