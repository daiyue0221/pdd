//nav的滚动监听
$(document).ready(function(){
	var bool = true;
	$(window).scroll(function(){
		var topp = $(document).scrollTop();
		if(topp>90){
			if(bool == true){
				$(".nav").css("position","fixed").css("top","0").css("left","0").css("width","100%");
				$(".ban_navwidth>img").css("width","150px").css("height","41px");
				$(".nav").css("background","#202020");
				$(".nav li a").css("padding","32px 0 10px 0");
				$(".nav ul").css("float","right");
				$(".nav").hide();
				$(".nav").slideDown(300);
				$(".nav").css("z-index","20");
				bool=false;
				$(".return_top").css("display","block");
			}
		}else if(topp<90){
			if(bool == false){
				$(".nav").css("position","static").css("top","0").css("left","0");
				$(".ban_navwidth>img").css("width","230px").css("height","64px");
				$(".nav li a").css("padding","43px 0 15px 0");
				$(".nav").css("background","transparent");
				$(".nav").hide();
				$(".nav").slideDown(300);
				bool=true;
				$(".return_top").css("display","none");
			}
		}
		var $navLis = $(".ban_navwidth").children("ul").children("li");
		var col =  $(".ban_navwidth").children("img").attr("src");
		var bgColor = "rgb(231, 91, 30)";
		if(col=="img/logo.png"){//通过获取当前logo获得当前颜色
			bgColor = "rgb(231, 91, 30)";//橙色
		}else if(col=="img/logo2.png"){
			bgColor = "rgb(30, 105, 184)";//蓝色
		}else if(col=="img/logo3.png"){
			bgColor = "rgb(141, 198, 63)";//绿色
		}else if(col=="img/logo4.png"){
			bgColor = "rgb(253, 203, 3)";//黄色
		}
		$navLis.children("a").attr("class","rela");//清除所有nav li a的样式
		$navLis.children("a").css("color","");
		$navLis.children("a").children("div").attr("class","nav_linea");//清除所有nav li a div的样式
		$navLis.children("a").children("div").css("background","");//清除所有nav li a div的样式
		if(topp<631){
			$navLis[0].children[0].setAttribute("class","active rela");//设置当前的nav li a的样式
			$navLis[0].children[0].children[0].setAttribute("class","nav_line");//设置当前nav li a div的样式
			$navLis[0].children[0].style.color = bgColor;//给添加nav li a当前的颜色
			$navLis[0].children[0].children[0].style.background = bgColor;//给nav li a div添加当前的颜色
		}else if(topp<2060){
			$navLis[1].children[0].setAttribute("class","active rela");
			$navLis[1].children[0].children[0].setAttribute("class","nav_line");
			$navLis[1].children[0].style.color = bgColor;
			$navLis[1].children[0].children[0].style.background = bgColor;
		}else if(topp<2880){
			$navLis[2].children[0].setAttribute("class","active rela");
			$navLis[2].children[0].children[0].setAttribute("class","nav_line");
			$navLis[2].children[0].style.color = bgColor;
			$navLis[2].children[0].children[0].style.background = bgColor;
		}else if(topp<3832){
			$navLis[3].children[0].setAttribute("class","active rela");
			$navLis[3].children[0].children[0].setAttribute("class","nav_line");
			$navLis[3].children[0].style.color = bgColor;
			$navLis[3].children[0].children[0].style.background = bgColor;
		}else if(topp<5605){
			$navLis[4].children[0].setAttribute("class","active rela");
			$navLis[4].children[0].children[0].setAttribute("class","nav_line");
			$navLis[4].children[0].style.color = bgColor;
			$navLis[4].children[0].children[0].style.background = bgColor;
		}else if(topp<6533){
			$navLis[5].children[0].setAttribute("class","active rela");
			$navLis[5].children[0].children[0].setAttribute("class","nav_line");
			$navLis[5].children[0].style.color = bgColor;
			$navLis[5].children[0].children[0].style.background = bgColor;
		}else if(topp<7524){
			$navLis[6].children[0].setAttribute("class","active rela");
			$navLis[6].children[0].children[0].setAttribute("class","nav_line");
			$navLis[6].children[0].style.color = bgColor;
			$navLis[6].children[0].children[0].style.background = bgColor;
		}else if(topp<8242){
			$navLis[7].children[0].setAttribute("class","active rela");
			$navLis[7].children[0].children[0].setAttribute("class","nav_line");
			$navLis[7].children[0].style.color = bgColor;
			$navLis[7].children[0].children[0].style.background = bgColor;
		}else if(topp<9042){
			$navLis[8].children[0].setAttribute("class","active rela");
			$navLis[8].children[0].children[0].setAttribute("class","nav_line");
			$navLis[8].children[0].style.color = bgColor;
			$navLis[8].children[0].children[0].style.background = bgColor;
		}
	});
	
	});

//banner的文字动画
var add=[["F","r","i","e","n","d","s"],["F","a","m","i","l","y"],["O","f","f","i","c","e","m","a","t","e","s"]];
var cow=0,row=0;
var str="";
function append(){
	var $sp1=$(".ban_titlebian");
	var value=add[cow][row];
	var deleta=false;
	$sp1.next().toggle();
	
	if(value==undefined){
		str=str.substring(0,str.length-1);
		if(str.length==0){
			cow++;
			row=0;
		}
		$sp1.html(str);
		if(cow==3){
			cow=0;
		}
	}
	else{
		row++;
		str+=value;
		$sp1.html(str);
		}
	}
setInterval(append,300);

//点击弹出图片
$(function(){
	$(".con5_imgmtk").click(function(){

		var $img = $(this).prev().clone();
		$(".con5_tanchuimg").css("display","block");
		$(".con5_tanchuimg2").append($img);
		var closew = parseInt($img.css("width"))/2;
		console.log(closew)
		$(".con5_close").css('margin-right',"-"+closew+"px")
		$(".con5_close").click(function(){
			$(".con5_tanchuimg").css("display","none");
			$img.remove()
		});
	});
});
//点击设置弹出颜色框
$(".change_img").click(function(){
	if($(".changeColor").css("right") == "-206px"){
		$(".changeColor").css("right","0px")
	}else{
		$(".changeColor").css("right","-206px")
	}
})

var $yansevalue=0;
var $navvalue=0;

//变色
$(function(){
	//导航条点击
	$(function(){
		$('.ban_navwidth a').click(function(){
		    //根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
			$('html,body').animate({scrollTop: ($($(this).attr('href')).offset().top -40 )},1000);
			var $colorLogo = $(".logo").attr("src");
			if($colorLogo == "img/logo.png"){
				$(this).attr("class","active rela");
				$(this).children().attr("class","nav_line");
				$(this).parent().siblings().children().children().attr("class","nav_linea");
				$(this).parent().siblings().children().css("color","");
				$(this).parent().siblings().children().attr("class","rela");
				$(".nav_line").css("background","#E75B1E");
			}else if($colorLogo == "img/logo2.png"){
				$(this).attr("class","activeb rela");
				$(this).children().attr("class","nav_line");
				$(this).parent().siblings().children().children().attr("class","nav_linea");
				$(this).parent().siblings().children().css("color","");
				$(this).parent().siblings().children().attr("class","rela");
				$(".nav_line").css("background","#1E69B8");
			}else if($colorLogo == "img/logo3.png"){
				$(this).attr("class","activeg rela");
				$(this).children().attr("class","nav_line");
				$(this).parent().siblings().children().children().attr("class","nav_linea");
				$(this).parent().siblings().children().css("color","");
				$(this).parent().siblings().children().attr("class","rela");
				$(".nav_line").css("background","#8DC63F");
			}else if($colorLogo == "img/logo4.png"){
				$(this).attr("class","activey rela");	
				$(this).children().attr("class","nav_line");
				$(this).parent().siblings().children().children().attr("class","nav_linea");
				$(this).parent().siblings().children().attr("class","rela");
				$(this).parent().siblings().children().css("color","");
				$(".nav_line").css("background","#FDCB03");
			}
			$(".nav_linea").css("background","");
			var $value = parseInt($(this).attr("value"));
			$navvalue = $value;
		});
	});
	
	//Our Menu的切换
	$(".con3_topa").click(function(){
		var $colorLogo = $(".logo").attr("src");
		if($colorLogo == "img/logo.png"){
//			console.log(1)
			$(this).siblings().removeClass("con3_active")
			$(this).attr("class","con3_topa con3_active");
		}else if($colorLogo == "img/logo2.png"){
			$(this).siblings().removeClass("con3_activeb")
			$(this).attr("class","con3_topa con3_activeb");
		}else if($colorLogo == "img/logo3.png"){
			$(this).siblings().removeClass("con3_activeg")
			$(this).attr("class","con3_topa con3_activeg");
		}else if($colorLogo == "img/logo4.png"){
			$(this).siblings().removeClass("con3_activey")
			$(this).attr("class","con3_topa con3_activey");
		}
		var $value = parseInt($(this).attr("value"));
		$(".con3_gundong").css("margin-left",($value*-1140)+"px");
		
		$yansevalue =$value;
	})
});
	$(".changeColor ul li").click(function(){
		var $color = $(this).attr("class");
		var nav_lis = $(".ban_navwidth").children("ul").children("li").children("a");
		var x = 0;
		for(var f=0;f<nav_lis.length;f++){
			var cl = $(nav_lis[f]).css("color");
			if(cl=="rgb(231, 91, 30)"||cl=="rgb(30, 105, 184)"||cl=="rgb(141, 198, 63)"||cl=="rgb(253, 203, 3)"){
				x=f;
				break;
			}
		}
		var Lcol = $($(".con2_lb li")[0]).css("background-color");
		var is;
		if(Lcol=="rgb(231, 91, 30)"||Lcol=="rgb(30, 105, 184)"||Lcol=="rgb(141, 198, 63)"||Lcol=="rgb(253, 203, 3)"){
			is = 0;
		}else{
			is = 1;
		}
		if($color == "orange"){
			$(".logo").attr("src","img/logo.png"); //logo变色
			$("[class*=textColor]").css("color","#e75b1e"); //文字变色
			$("[class*=bgColor]").css("background","#e75b1e"); //背景色变色
			$("[class*=borderColor]").css("border","1px solid #e75b1e"); //边框变色
			$("[class*=con2_imgmtk]").css("background","rgba(231,91,30,0.5)"); //Today's Special的hover背景色
			$("[class*=hoverbg]").css("background","#e75b1e"); //Our Team下面hover的背景色
			$(".con5_imgmtk").css("background","rgba(231,91,30,0.75)"); //好多图片一块的hover
			$(".con6_imtk i").mouseover(function(){
				$(this).css("color","#e75b1e"); //Our Blog里面hover中间的search的时候会变色
			});
			
			$(".con3_topa")[$yansevalue].setAttribute("class","con3_topa con3_active");//滚动的地方的颜色
			$(".ban_navwidth a")[x].style.color = "#E75B1E"; //导航条字体颜色
			$(".nav_line").css("background","#e75b1e"); //导航条下划线颜色
			$(".container9 form button").css("border-color","#e75b1e"); //最下面的飞机按钮的border
			$(".con10_sec1 i").mouseover(function(){
				$(this).css("color","#E75B1E");
			});
			$(".con10_changeli li").mouseover(function(){
				$(this).css("color","#E75B1E");
			});
			$(".con2_lb li").removeAttr("style");
			$($(".con2_lb li")[is]).css("background","#E75B1E");
			
		}else if($color == "blue"){
			$(".logo").attr("src","img/logo2.png");
			$("[class*=textColor]").css("color","#1E69B8");
			$("[class*=bgColor]").css("background","#1E69B8");
			$("[class*=borderColor]").css("border","1px solid #1E69B8");
			$("[class*=con2_imgmtk]").css("background","rgba(30,105,184,0.5)");
			$("[class*=hoverbg]").css("background","#1E69B8");
			$(".con5_imgmtk").css("background","rgba(30,105,184,0.75)");
			$(".con6_imtk i").mouseover(function(){
				$(this).css("color","#1E69B8");
			})
			
			$(".con3_topa")[$yansevalue].setAttribute("class","con3_topa con3_activeb");
			$(".ban_navwidth a")[x].style.color = "#1E69B8"; //导航条字体颜色
			$(".nav_line").css("background","#1E69B8");
			$(".container9 form button").css("border-color","#1E69B8");
			$(".con10_sec1 i").mouseover(function(){
				$(this).css("color","#1E69B8");
			});
			$(".con10_changeli li").mouseover(function(){
				$(this).css("color","#1E69B8");
			});
			$(".con2_lb li").removeAttr("style");
			$($(".con2_lb li")[is]).css("background","#1E69B8");
		}else if($color == "green"){
			$(".logo").attr("src","img/logo3.png");
			$("[class*=textColor]").css("color","#8dc63f");
			$("[class*=bgColor]").css("background","#8dc63f");
			$("[class*=borderColor]").css("border","1px solid #8dc63f");
			$("[class*=con2_imgmtk]").css("background","rgba(141,198,63,0.5)");
			$("[class*=hoverbg]").css("background","#8dc63f");
			$(".con5_imgmtk").css("background","rgba(141,198,63,0.75)");
			$(".con6_imtk i").mouseover(function(){
				$(this).css("color","#8dc63f");
			})
			$(".con3_topa")[$yansevalue].setAttribute("class","con3_topa con3_activeg");
			$(".ban_navwidth a")[x].style.color = "#8dc63f"; //导航条字体颜色
			$(".nav_line").css("background","#8dc63f");
			$(".container9 form button").css("border-color","#8dc63f");
			$(".con10_sec1 i").mouseover(function(){
				$(this).css("color","#8dc63f");
			});
			$(".con10_changeli li").mouseover(function(){
				$(this).css("color","#8dc63f");
			});
			$(".con2_lb li").removeAttr("style");
			$($(".con2_lb li")[is]).css("background","#8dc63f");
		}else if($color == "yellow"){
			$(".logo").attr("src","img/logo4.png");
			$("[class*=textColor]").css("color","#fdcb03");
			$("[class*=bgColor]").css("background","#fdcb03");
			$("[class*=borderColor]").css("border","1px solid #fdcb03");
			$("[class*=con2_imgmtk]").css("background","rgba(253,203,3,0.5)");
			$("[class*=hoverbg]").css("background","#fdcb03");			
			$(".con5_imgmtk").css("background","rgba(253,203,3,0.75)");
			$(".con6_imtk i").mouseover(function(){
				$(this).css("color","#fdcb03");
			})
			$(".con3_topa")[$yansevalue].setAttribute("class","con3_topa con3_activey");	
			$(".ban_navwidth a")[x].style.color = "#fdcb03";
			$(".nav_line").css("background","#fdcb03");
			$(".container9 form button").css("border-color","#fdcb03");
			$(".con10_sec1 i").mouseover(function(){
				$(this).css("color","#fdcb03");
			});
			$(".con10_changeli li").mouseover(function(){
				$(this).css("color","#fdcb03");
			});
			$(".con2_lb li").removeAttr("style");
			$($(".con2_lb li")[is]).css("background","#fdcb03");
		}
	})
	$(".con6_imtk i").mouseout(function(){
		$(this).css("color","#FFFFFF");
	})
	$(".con10ula i").mouseout(function(){
		$(this).css("color","#FFFFFF");
	})
	$(".con10_changeli li").mouseout(function(){
		$(this).css("color","#FFFFFF");
	})
//})

//地图
// 百度地图API功能
    var map = new BMap.Map('allmap');
    var poi = new BMap.Point(106.4912723060,29.5379399960);
    map.centerAndZoom(poi, 16);
    map.enableScrollWheelZoom();

    var content = '<div style="margin:0;line-height:20px;padding:2px;">' +
                    '<img src="../img/baidu.jpg" alt="" style="float:right;zoom:1;overflow:hidden;width:100px;height:100px;margin-left:3px;"/>' +
                    '地址：中国香港特别行政区香港特别行政区油尖旺区弥敦道101号<br/>电话：(xxx)59928888<br/>简介：维多利亚港。' +
                  '</div>';

    //创建检索信息窗口对象
    var searchInfoWindow = null;
	searchInfoWindow = new BMapLib.SearchInfoWindow(map, content, {
			title  : "维多利亚港",      //标题
			width  : 290,             //宽度
			height : 105,              //高度
			panel  : "panel",         //检索结果面板
			enableAutoPan : true,     //自动平移
			searchTypes   :[
				BMAPLIB_TAB_SEARCH,   //周边检索
				BMAPLIB_TAB_TO_HERE,  //到这里去
				BMAPLIB_TAB_FROM_HERE //从这里出发
			]
		});
    var marker = new BMap.Marker(poi); //创建marker对象
    marker.enableDragging(); //marker可拖拽
    marker.addEventListener("click", function(e){
	    searchInfoWindow.open(marker);
    })
    map.addOverlay(marker); //在地图中添加marker
	//样式1
	var searchInfoWindow1 = new BMapLib.SearchInfoWindow(map, "信息框1内容", {
		title: "信息框1", //标题
		panel : "panel", //检索结果面板
		enableAutoPan : true, //自动平移
		searchTypes :[
			BMAPLIB_TAB_FROM_HERE, //从这里出发
			BMAPLIB_TAB_SEARCH   //周边检索
		]
	});
	

//滚动监听
var q = 0;
var marginL = 0;
var lis = $(".con2_lb").children("ul").children("li");
var $lbimg = $(".con2_lbimg");
for(var p=0;p<lis.length;p++){
	lis[p].setAttribute("value",p);
}
function right(){
	q++;
	var col = $(".ban_navwidth").children("img").attr("src");
	var bgColor = "rgb(231, 91, 30)";
	if(col=="img/logo.png"){//通过获取当前logo获得当前颜色
		bgColor = "rgb(231, 91, 30)";
	}else if(col=="img/logo2.png"){
		bgColor = "rgb(30, 105, 184)";
	}else if(col=="img/logo3.png"){
		bgColor = "rgb(141, 198, 63)";
	}else if(col=="img/logo4.png"){
		bgColor = "rgb(253, 203, 3)";
	}
	if(q==4){	//判断滚动另一页结束则回到最初
		q=0;
		$lbimg.css("margin-left","0px");
		lis.removeAttr("style");
		lis[0].style.background = bgColor;
	}else{
		marginL = (-q*380)+"px";
		$lbimg.css("margin-left",marginL);
	}
	if(q==3){
		lis.removeAttr("style");
		lis[1].style.background = bgColor;
	}
}
//滚动时间：圆点移入事件
lis.mouseover(function(){
	var value = $(this).val();
	var col = $(".ban_navwidth").children("img").attr("src");
	var bgColor = "rgb(231, 91, 30)";
	if(col=="img/logo.png"){//通过获取当前logo获得当前颜色
		bgColor = "rgb(231, 91, 30)";
	}else if(col=="img/logo2.png"){
		bgColor = "rgb(30, 105, 184)";
	}else if(col=="img/logo3.png"){
		bgColor = "rgb(141, 198, 63)";
	}else if(col=="img/logo4.png"){
		bgColor = "rgb(253, 203, 3)";
	}
	if(value==0){
		$lbimg.css("margin-left","0px");
		lis.removeAttr("style");
		lis[0].style.background = bgColor;
		q=0;
	}else{
		$lbimg.css("margin-left","-1140px");
		lis.removeAttr("style");
		lis[1].style.background = bgColor;
		q=3;
	}
});
var timer = setInterval(right,3000);

$(".change_img img").mouseover(function(){
	var col = $(".ban_navwidth").children("img").attr("src");
	if(col=="img/logo.png"){//通过获取当前logo获得当前颜色
		$(this).attr("src","img/chilunO.png");
	}else if(col=="img/logo2.png"){
		$(this).attr("src","img/chilunB.png");
	}else if(col=="img/logo3.png"){
		$(this).attr("src","img/chilunG.png");
	}else if(col=="img/logo4.png"){
		$(this).attr("src","img/chilunY.png");
	}
}).mouseout(function(){
	$(this).attr("src","img/chilun.png");
});

