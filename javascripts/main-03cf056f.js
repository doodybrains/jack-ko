var site={debug:{console:!0},client:{height:0,width:0,scrollPosition:$(window).scrollTop()},initialize:function(){$(window).load(function(){$(window).width(),$(window).height()}),site.bind()},bind:function(){var i=_.throttle(site.resizeHandler,50);$(window).resize(i),site.resizeHandler();var t=_.throttle(site.scrollHandler,50);$(window).scroll(t)},isMobile:function(){return $(window).width()<768?!0:!1},resizeHandler:function(){$(window).width(),$(window).height();site.client.width=$(window).width(),site.client.height=$(window).height();var i=$(".parallelogram").height(),t=parseInt(i/2);$("ul").css("margin-top",t-20)}};