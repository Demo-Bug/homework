/*
* @Author: Administrator
* @Date:   2017-09-25 18:40:59
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-25 22:18:07
*/
window.onload = function(){
	let tijiao = document.querySelector('.tijiao');
	let suoyou = document.querySelector('.suoyou');
	let first = suoyou.firstElementChild;
	tijiao.onclick = function(){
		let neirong = document.getElementsByTagName('textarea')[0].value;
		let div1 = document.createElement('div');
		let arr = new Array();
		arr.push('div1')
		div1.style.width = '400px';
		div1.style.height = '20px';
		div1.innerText = neirong;
		suoyou.appendChild(div1);
		document.getElementsByTagName('textarea')[0].value = '';
	}	
}