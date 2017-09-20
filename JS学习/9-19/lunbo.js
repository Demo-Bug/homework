/*
* @Author: Administrator
* @Date:   2017-09-18 17:21:15
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-19 17:13:16
*/

/*第一种方法*/
/*let a = document.getElementsByClassName('ceban')[0];
let b = a.getElementsByTagName('li');
let js = document.getElementsByClassName('js');
for(let i = 0 ; i < b.length ; i++){
	b[i].onmouseover = function(){
		js[i].style.display = 'block';	
	}
	b[i].onmouseout = function(){
		js[i].style.display = 'none';	
	}
}*/

/*类名获取*/
/*let a = document.getElementsByClassName('ceban')[0];
let b = a.getElementsByTagName('li');
let js = document.getElementsByClassName('js');
for(let i = 0 ; i < b.length ; i++){
	b[i].onmouseover = function(){
		js[i].className = 'js disblock';	
	}
	b[i].onmouseout = function(){
		js[i].className = 'js';	
	}
}*/

/*第二种方法*/
/*let a = document.getElementsByClassName('ceban')[0];
let b = a.getElementsByTagName('li');
for(let i = 0 ; i < b.length ; i++){
	b[i].onmouseover = function(){
		let js = this.getElementsByClassName('js')[0];
		js.style.display = 'block';	
	}
	b[i].onmouseout = function(){
		let js = this.getElementsByClassName('js')[0];
		js.style.display = 'none';		
	}
}*/


/*let ban = document.getElementsByClassName('ban')[0];
let banl = ban.getElementsByTagName('li');
let dian = document.getElementsByClassName('dian')[0];
let dianl = dian.getElementsByTagName('li');
for(let i = 0 ; i < dianl.length ; i++){
	dianl[i].onmouseover = function(){
		for(let j = 0 ; j < 6 ; j++){
			banl[j].style.display = 'none';
		}
		banl[i].style.display = 'block';
	}	
}*/



/*let now = 5;
let ban = document.getElementsByClassName('ban')[0];
let banl = ban.getElementsByTagName('li');
let dian = document.getElementsByClassName('dian')[0];
let dianl = dian.getElementsByTagName('li');
for(let i = 0 ; i < dianl.length ; i++){
	dianl[i].onmouseover = function(){
		banl[now].style.display = 'none';
		banl[i].style.display = 'block';
		now = i;
	}	
}*/

/*let now = 5;
let ban = document.getElementsByClassName('ban')[0];
let banl = ban.getElementsByTagName('li');
let dian = document.getElementsByClassName('dian')[0];
let dianl = dian.getElementsByTagName('li');
for(var i = 0 ; i < dianl.length ; i++){
	dianl[i].index = i;
	dianl[i].onmouseover = function(){
		banl[now].style.display = 'none';
		banl[this.index].style.display = 'block';
		now = this.index;
	}	
}*/


let now = 5;
let ban = document.getElementsByClassName('ban')[0];
let banl = ban.getElementsByTagName('li');
let dian = document.getElementsByClassName('dian')[0];
let dianl = dian.getElementsByTagName('li');
for(var i = 0 ; i < dianl.length ; i++){
	dianl[i].index = i;
	dianl[i].onmouseover = (function(i){
		return function(){
			banl[now].style.display = 'none';
		    banl[i].style.display = 'block';
		    now = i;
		}
	})(i)
}