// JavaScript Document
$(function () {

    $("#userBadge").html(userInfo.badge);
    $("#userName").html(userInfo.userName);
    $("#roleName").html(userInfo.roleName);
    SizeLayout();


    //resize layout
    $(window).resize(function () {
        SizeLayout();
    });



    //Navigation (.navigation > 1st /.nav2 > 2nd)
    $(".navigation > ul > span").click(function () {

        $(".nav2 > a").hide();
        $(".nav2 > span > a").css("background-position", "0px -102px");

        if ($(this).parent().children('li').is(":hidden")) {
            $(".navigation li").hide();
            $(this).parent().children('li').show();
            $(".navigation").find('.nav_icon').css("background-position", "top")
        }
        else {
            $(this).parent().children('li').hide();
        }
    });

    $(".nav2 > span ").click(function () {
        if ($(this).parent().children('.nav2 > a').is(":hidden")) {
            $(".navigation li > a").hide();
            $(".nav2 > span > a").css("background-position", "0px -102px");
            $(this).parent().children('a').show();
            $(this).find('a').css("background-position", "0px -136px");
        }
        else {
            $(this).parent().children('a').hide();
            $(this).find('a').css("background-position", "0px -102px");
        }
    });

    //framelinkurl 
    $(".navigation li > a").click(function () {
        var linkurl = $(this).attr("linkurl");
        $("#frame").attr("src", linkurl);
    });
    $(".navigation span > a").click(function () {
        if ($(this).attr("linkurl")) {
            var linkurl = $(this).attr("linkurl");
            $("#frame").attr("src", linkurl);
        }
    });


    //switch_off
    $(".switch_off").click(function () {
        $(".navigation").hide();
        $(".switch_off").hide();
        var win = $(window);
        var winWidth = win.width();
        var switchWidth = $(".switch_box").width();
        var mainWidth = winWidth - switchWidth;
        $(".mainframe").width(mainWidth);
        $(".frame").width(mainWidth);
    });


    //switch_on
    $(".switch_on").click(function () {
        $(".navigation").show();
        $(".switch_off").show();
        var win = $(window);
        var winWidth = win.width();
        var navigationWidth = $(".navigation").width();
        var switchWidth = $(".switch_box").width();
        var mainWidth = winWidth - switchWidth - navigationWidth;
        $(".mainframe").width(mainWidth);
        $(".frame").width(mainWidth);
    });

    //navigation li a 
    $(".navigation li > a").click(function () {
        $(".navigation li > a").css("color", "#3E424A");
        $(".navigation li > a").css("background-position", "left top");
        $(this).css("color", "#008CD6");
        $(this).css("background-position", "left bottom");
    });

})
	
	
	
	
//layout height width
function SizeLayout() {
    //return; 
	var win=$(window);
	var winHeight=win.height();
	var winWidth=win.width();

	var headerHeight=$(".header").height();  
	var navigationWidth=$(".navigation").width();
	var switchWidth=$(".switch_box").width();
	//var footerHeight=$("#footer").height();
	$("#wrapper").height(winHeight);	
	var mainHeight = winHeight-headerHeight;
	var mainWidth = winWidth-navigationWidth-switchWidth;
	$(".navigation").height(mainHeight);
	$(".mainframe").height(mainHeight);
	$(".mainframe").width(mainWidth*0.9);//modified by dongbingbin 2013-11-26 修改chrome浏览器第一次加载后div掉下去的问题
	$(".frame").height(mainHeight);
	$(".frame").width(mainWidth);
	$(".switch_on").css("top",mainHeight/2-40);
	$(".switch_off").css("top",mainHeight/2-40);
	
	
   }





