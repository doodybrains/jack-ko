var site = {
  debug: { console: true },
  client: { height: 0, width: 0, scrollPosition: $(window).scrollTop() },

  initialize: function() {

    $(window).load(function () {
      var width = $(window).width();
      var height = $(window).height();
    })

    site.bind();
  },

  bind: function() {

    var throttledResize = _.throttle(site.resizeHandler, 50);
    $(window).resize(throttledResize);
    site.resizeHandler();

    var throttledScroll = _.throttle(site.scrollHandler, 50);
    $(window).scroll(throttledScroll);
  },

  isMobile: function () {
    return $(window).width() < 768 ? true : false;
  },

  resizeHandler: function() {
    var width = $(window).width();
    var height = $(window).height();

    site.client.width = $(window).width();
    site.client.height = $(window).height();
  }
};
