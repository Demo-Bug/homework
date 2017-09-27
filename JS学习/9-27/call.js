/*
* @Author: Administrator
* @Date:   2017-09-27 17:03:39
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-27 18:17:26
*/
window.addEventListener('load', function(){
	let dl = document.querySelector('dl');
	/*let dataObj = new storage(arr);*/
	let info = [
					{name:'刘帅',tell:18035806350,pinyin:'liushuai'},
					{name:'赵路',tell:18035806351,pinyin:'zhaolu'},
					{name:'高捷',tell:18035806352,pinyin:'gaojie'},
					{name:'陈保铭',tell:18035806353,pinyin:'chenbaoming'},
					{name:'李泽路',tell:18035806354,pinyin:'lizelu'},
					{name:'张建东',tell:18035806355,pinyin:'zhangjiandong'},
					{name:'吴福磊',tell:18035806356,pinyin:'wufulei'},
					{name:'刘志伟',tell:18035806357,pinyin:'liuzhiwei'},
					{name:'王方方',tell:18035806358,pinyin:'wangfangfan'},
					{name:'朱玉康',tell:18035806359,pinyin:'zhuyukang'}
				]
	render(info);
	function render(data){
		/*按照首字母顺序排序*/
		dl.innerHTML = '';
		let obj = {};
		data.forEach(function(element){
			let first = element.pinyin.charAt(0).toUpperCase();
			if(!obj[first]){
				obj[first] = [];
			}
			obj[first].push(element);
		})
		/*获取到某一个对象所有的属性，并且打包成一个数组   let char = Object.keys(obj)*/
		let char = Object.keys(obj).sort();
		char.forEach(element => {
			dl.innerHTML += `<dt>${element}</dt>`;
			obj[element].forEach(value => {
				dl.innerHTML += `<dd><a href="tel:${value.tell}">${value.name}</a></dd>`
			})
		})
	}
})