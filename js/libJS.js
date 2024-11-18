$(function () {
// 全局-常用：前后页、返回顶部
    $(".winNext").click(function () {window.history.forward(1) });
    $(".winBack").click(function () {window.history.back(-1) });
    $(".winTop").click(function () {$("body,html").animate({scrollTop: 0 }, 1000); return false });
// 全局-头部-热门推荐：超出一行隐藏
    $(".keyWords .keysList").each(function(index, el) {
        if ( $(this).height() > 17 ) {
            $(this).addClass('h20').find('.more').show().click(function() {
                $(this).parent().toggleClass('keysAll h20').find('.more').hide().siblings('.del').show();
            });
        };
    });
// 全局-头部-热门推荐：关闭更多
    $(".keyWords .keysList .del").click(function() {
        $(this).hide().siblings('.more').show().parent().removeClass('keysAll').addClass('h20');
    });
// 全局-顶部-Nav：下拉菜单
    $(".Nav").slide({ type:"menu",  titCell:".m", targetCell:".sub",effect:"slideDown", delayTime:300, triggerTime:0,returnDefault:true  });   
// 组件-下拉-dropMenu：划过显示
    $(".dropMenu").hover(function() {$(this).find('.dropList').stop().slideToggle('fast');});
    $(".clickMenu").click(function() {$(this).find('.dropList').slideToggle('fast');});
// 组件-placeholder：隐藏、显示
    $("input[type='text']").each(function(index, el) {
        var originalvalue = $(this).val(); var oPlaceHolder = $(this).attr('placeholder');
        $(this).focus( function(){ $(this).attr('placeholder', ''); });
        $(this).blur( function(){if( $.trim($(this).val()) == '' ) {$(this).attr('placeholder', oPlaceHolder); }; });
    });
// 组件-分类搜索：条件列表超出一行 收起
    $(".optAll").add('.optLev3').each(function(index, el) {
        if( $(this).height() > 28 ) {
            $(this).addClass('h28').find('.optMore').click(function() {
                $(this).parent().toggleClass('h28');
            });
        } else {$(this).find('.optMore').hide(); }
    });
// 分类选项：状态切换
    $(".optAll > span").click(function() {$(this).addClass('on').siblings('span').removeClass('on'); });
// 分类搜索：2级菜单显示、隐藏
    $(".optLev2_span").click(function() {$(this).parent().next(".optLev2_div").toggle(); });
// 分类搜索：3级菜单显示、隐藏
    $(".optLev3_div").hide();
    $(".optLev3_span").click(function() {
        var $optLev3_index = $(this).index();
        $(".optLev3_div").eq($optLev3_index-1).toggle().siblings('.optLev3_div').hide();
    });

// 弹窗：open pop
    $(document).on("click",".openpop",function(){
    	var $targetname = $(this).attr('href').substring(1);
        if ($targetname!='') {
            $('.popwin').hide();
            $('.popwin-'+$targetname).show().animate({opacity:"show",top:""},"fast");
        } else {$('.popwin-default').show().animate({opacity:"hide",top:""},"fast"); } return false;
    });
    // 关闭弹窗
    $(document).on("click",".close",function(){$(this).parents('.popwin').animate({top:"",opacity:"hide"},"fast"); });

// 跟踪定位
    $(".spy a").each(function(){var e=$(this);var t=e.closest(".spy");var target=t.attr("data-spy-target");var top=t.attr("data-spy-offset");var thistarget="";var thistop="";if(top==null){top=0};if(target==null){thistarget=$(window)}else{thistarget=$(target)};thistarget.bind("scroll",function(){if(target==null){thistop=$(e.attr("href")).offset().top-$(window).scrollTop()-parseInt(top)}else{thistop=$(e.attr("href")).offset().top-thistarget.offset().top-parseInt(top)};if(thistop<0){t.find('li').removeClass("on");e.parents('li').addClass("on")}})});
// 固定定位（头部+顶部）
    $(".fixed").each(function(){var e=$(this);var style=e.attr("data-fix-style");var top=e.attr("data-fix-offset");if(top==null){top=e.offset().top}else{top=e.offset().top-parseInt(top)}if(style==null){style="fixTop"}$(window).bind("scroll",function(){var thistop=top-$(window).scrollTop();if(style=="fixTop"&&thistop<0){e.addClass("fixTop")}else{e.removeClass("fixTop")}var thisbottom=top-$(window).scrollTop()-$(window).height();if(style=="fixBtm"&&thisbottom>0){e.addClass("fixBtm")}else{e.removeClass("fixBtm")}})});
// 注释
// 注释
// 注释
// 注释

});

// jquery.anchor：锚点跳转
(function($){$.fn.zxxAnchor=function(options){var defaults={ieFreshFix:true,anchorSmooth:true,anchortag:"anchor",animateTime:1000};var sets=$.extend({},defaults,options||{});if(sets.ieFreshFix){var url=window.location.toString();var id=url.split("#")[1];if(id){var t=$("#"+id).offset().top;$(window).scrollTop(t)}}$(this).each(function(){$(this).click(function(){var aim=$(this).attr(sets.anchortag).replace(/#/g,"");var pos=$("#"+aim).offset().top;if(sets.anchorSmooth){$("html,body").animate({scrollTop:pos},sets.animateTime)}else{$(window).scrollTop(pos)}return false})})}})(jQuery);
// jquery.pin：钉住元素
(function(e){"use strict";e.fn.pin=function(t){var n=0,r=[],i=false,s=e(window);t=t||{};var o=function(){for(var n=0,o=r.length;n<o;n++){var u=r[n];if(t.minWidth&&s.width()<=t.minWidth){if(u.parent().is(".pin-wrapper")){u.unwrap()}u.css({width:"",left:"",top:"",position:""});if(t.activeClass){u.removeClass(t.activeClass)}i=true;continue}else{i=false}var a=t.containerSelector?u.closest(t.containerSelector):e(document.body);var f=u.offset();var l=a.offset();var c=u.offsetParent().offset();if(!u.parent().is(".pin-wrapper")){u.wrap("<div class='pin-wrapper'>")}var h=e.extend({top:0,bottom:0},t.padding||{});u.data("pin",{pad:h,from:(t.containerSelector?l.top:f.top)-h.top,to:l.top+a.height()-u.outerHeight()-h.bottom,end:l.top+a.height(),parentTop:c.top});u.css({width:u.outerWidth()});u.parent().css("height",u.outerHeight())}};var u=function(){if(i){return}n=s.scrollTop();var o=[];for(var u=0,a=r.length;u<a;u++){var f=e(r[u]),l=f.data("pin");if(!l){continue}o.push(f);var c=l.from-l.pad.bottom,h=l.to-l.pad.top;if(c+f.outerHeight()>l.end){f.css("position","");continue}if(c<n&&h>n){!(f.css("position")=="fixed")&&f.css({left:f.offset().left,top:l.pad.top}).css("position","fixed");if(t.activeClass){f.addClass(t.activeClass)}}else if(n>=h){f.css({left:"",top:h-l.parentTop+l.pad.top}).css("position","absolute");if(t.activeClass){f.addClass(t.activeClass)}}else{f.css({position:"",top:"",left:""});if(t.activeClass){f.removeClass(t.activeClass)}}}r=o};var a=function(){o();u()};this.each(function(){var t=e(this),n=e(this).data("pin")||{};if(n&&n.update){return}r.push(t);e("img",this).one("load",o);n.update=a;e(this).data("pin",n)});s.scroll(u);s.resize(function(){o()});o();s.load(a);return this}})(jQuery)
