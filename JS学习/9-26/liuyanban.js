/*
* @Author: Administrator
* @Date:   2017-09-26 10:47:13
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-26 11:19:20
*/
function addLoadEvent(func){
	var oldonload = window.onload; //得到上一个onload事件的函数
	if(typeof window.onload != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload(); //调用之前覆盖的onload事件的函数
			func(); //调用当前事件函数
      }
   }
}
function getMessage(){
	var btn = document.getElementById("btn1");
	var message = document.getElementById("message");
    var name = document.getElementById("name");
    var nameValue = "";
    var messageValue = "";
    var text = document.getElementsByClassName('.text');
    var yijing = document.getElementsByClassName('yijing')[0];
    var haiyou = document.getElementsByClassName('haiyou')[0];
    name.onfocus = function(){
    	name.value="";
    }
    message.onfocus = function(){
    	message.value="";
    }
    btn.onclick = function(){
  		messageValue =  message.value || "我的小站：www.wuif1707.com" ; //设置默认值
        nameValue = name.value || "赵路";
	  	var msgList = document.getElementById("messageList");
	  	var msgDiv = document.createElement("div");
	  	var msgTxt = document.createTextNode(nameValue+"说："+messageValue);
	  	msgDiv.appendChild(msgTxt); 
	    msgList.appendChild(msgDiv); 
	}
	/*text.onkeyup = function(){
		let value = this.value;
	    yijing.innerText = value.length;
	    haiyou.innerText = 100 - value.length;
	}*/
}
addLoadEvent(getMessage);