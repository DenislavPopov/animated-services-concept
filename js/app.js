$(document).foundation();
console.log('%c Made by Denislav Popov ', 'background: #2daebf; color: #ffffff; font-size: 28px;');

$(document).ready(function(){function a(){setTimeout(function(){$(".interactive-service-list").hasClass("active")||$(".interactive-service-list").each(function(a){var b=$(this);setTimeout(function(){b.removeClass("hidden");b.html()},800*a)}),$(".interactive-service-list").addClass("active")},800)}a(),$(".interactive-service-list").hoverIntent(function(){var a=$(this).data("service");$(".interactive-service-content").each(function(){var b=$(this);b.attr("id")==a?b.show():b.hide()})},function(){$(this).hasClass("current")?$(".interactive-service-list").removeClass("current"):$(".interactive-service-list").removeClass("current"),$(this).addClass("current")})});
