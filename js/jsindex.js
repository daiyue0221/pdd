//Our Menu的切换
//var con3_topa = document.getElementsByClassName("con3_topa");
//var con3_gundong = document.getElementsByClassName("con3_gundong")[0];
////console.log(con3_gundong)
//for(var i=0;i<con3_topa.length;i++){
//	con3_topa[i].onclick=function(){
//		for(var j=0;j<con3_topa.length;j++){
//			con3_topa[j].setAttribute("class","con3_topa")
//		}
//		this.setAttribute("class","con3_topa bgColor");
//		var value = this.getAttribute("value");
//		console.log(value)
//		con3_gundong.style.marginLeft = (value*-1140)+"px";
//	}
//}


//var add=[["F","r","i","e","n","d","s"],["F","a","m","i","l","y"],["O","f","f","i","c","e","m","a","t","e","s"]];
//
//var cow=0,row=0;
//var str="";
//function append(){
//	var $sp1=$(".ban_titlebian");
//	var value=add[cow][row];
//	var deleta=false;
//	$sp1.next().toggle();
//	
//	if(value==undefined){
//		str=str.substring(0,str.length-1);
//		if(str.length==0){
//			cow++;
//			row=0;
//		}
//		$sp1.html(str);
//		if(cow==3){
//			cow=0;
//		}
//	}
//	else{
//		row++;
//		str+=value;
//		$sp1.html(str);
//		}
//	}
//setInterval(append,300);