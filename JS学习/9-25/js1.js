/*
* @Author: Administrator
* @Date:   2017-09-25 10:31:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-25 10:59:25
*/
let box = document.querySelector('.box');
/*box.onmouseover = function(){
	box.style.background = 'pink';
}
box.onmouseover = function(){
	box.style.borderRadius = '50%';
}*/
box.addEventListener('click',function(){
	this.style.background = 'purple';
},false);
box.addEventListener('click',fn,false);
function fn(){
	this.style.borderRadius = '50%';
}
box.removeEventListener('click',fn,false);