/*
* @Author: Administrator
* @Date:   2017-09-27 11:10:10
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-27 17:42:59
*/
class storage{
	constructor(data){
		this.data = data;
	}
	_init(){
		let arr = [
			{name:'高捷',sex:'女',call:12345,dizhi:'太原'},
			{name:'朱玉康',sex:'男',call:123451,dizhi:'平遥'}
		]
		localStorage.setItem('students',JSON.stringify(arr));
	}
	getData(){
		let data = localStorage.getItem('students');
		if(!data){
			this._init();
		}
		return this.data = JSON.parse(localStorage.getItem('students'));
	}
	update(row,type,value){
		let data = this.getData();
		//data[row][type] = save();;
		this.data[row][type] = value;
		this.save();
	}
	save(){
		localStorage.setItem('students',JSON.stringify(this.data));
	}
	add(obj){
		this.data.push(obj);
		this.save();
	}
	cancel(index){
		this.data.splice(index,1);
		this.save();
	}
}