var url_wang = "https://wanwang.aliyun.com/domain/searchresult/";
var cq=['a','b','c','d','e','f','g','h','i','j',
				'k','l','m','n','o','p','q','r','s','t',
				'u','v','w','x','y','z'];
				
var a=2;
var b=6;
var c=-1;
var result = "";
 
function go_on(){
	c++;
	if(c>=26){
		c=0;
		b++;
		if(b>=26){
			b=0;
			a++;
			if(a>=26){
				console.log( result );
				return 0;	
			}	
		}	
	}
	console.log(a+"-"+b+"-"+c+"           :"+result);
	
	var req = cq[a]+cq[b]+cq[c];
	$("#J_iptSingleLine").val(req);
 
	$("#J_searchResBox").bind('DOMNodeInserted', function(){
		var ret = $(this).find("li[data-domain-suffix='.com']").html();
		if(!ret){
			return 0;	
		}
		if(ret.indexOf("注册")>0){
			$(this).unbind();	
			if(ret.indexOf("未注册")>0){
				var req = cq[a]+cq[b]+cq[c];
				result += req + "\n";	
				console.log("[*********************"+result+"]");
			}
			setTimeout(go_on, 1000);
		}
	});	
 
	$("#J_btnSubmitSchDomain").click();
 
	return 1;
}
 
$(function(){	
	go_on();
});