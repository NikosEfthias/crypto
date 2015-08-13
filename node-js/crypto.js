function url(){
	this.querify=function(obj){
		var str="";
	try{
		for(i in obj){
			if(!i)continue;
			str+="&"+i+"="+obj[i];
		}
		str=str.replace(/^&/,"?");
		return str;
	}
	catch(e){
		console.error("Invalid Object");
		return !1;
	}};
	this.objectify=function(urlStr){
		var obj={};
		try{
			urlStr=urlStr.replace(/^\?/,"");
			var a=urlStr.split("&"),len=a.length;
			while(len--){
				obj[a[len].split("=")[0]]=a[len].split("=")[1];
			}
			return obj;
		}
		catch(err){
			console.error("Invalid Input");
			return !1;
		}};
		this.parseGet=function(url){
			var url=url||window.location.href,
			pattern=/\?(.*)/,
			match=pattern.exec(url)[1],
			couples=match.split("&"),obj={},len=couples.length;
		while(len--){
			obj[couples[len].split("=")[0]]=couples[len].split("=")[1];
		}
		return obj;
	}
}
function Crypto(){
var a= function(str) {
		var x = 0,
			y = [],
			a = str.length;
		while (a--) {
			y.push(str.charCodeAt(x).toString(32));
			x++;
		}
		return y.join('');
	};
	var b= function(enc) {
		var x = 0,
			y = enc.length,
			w = "";
		while (y--) {
			if (x % 2 != 0) {
				x++;
				continue;
			}
			w += String.fromCharCode(parseInt(enc.substr(x, 2), 32));
			x++;
		}
		return w;
	};
	this.crypto= function(num) {
		var chars = 'abcdefghijklmnoprstuvyzxqw$ABCDEFGHIJKLMNOPRSTUVYZXQW123456790'.split('');
		var crypto = [];
		if (num) num = (num == 'max') ? chars.length : num;
		else num = 7;

		for (i = 0; i < num; i++) {
			crypto.push(chars[Math.floor(Math.random() * chars.length)]);
		}
		return crypto.join('');
	},
	this.reverse= function(word) {
		var a = [];
		for (i = 0; i < word.length; i++) {
			a.push(word[word.length - 1 - i]);
		}
		return a.join('');
	};
	this.encode= function(word) {
		var splitted = word.split('');
		var reversed = [];
		for (i = 0; i < splitted.length; i++) {
			if (i === 0 || i % 2 === 0) {
				reversed.push(splitted[splitted.length - 1 - i]);
			}

		}
		for (i = 0; i < splitted.length; i++) {
			if (i % 2 === 1) {
				reversed.push(splitted[splitted.length - 1 - i]);
			}

		}
		return a(reversed.join(''));
	};
	this.decode= function(enc) {
		var decd = [],
			enc=b(enc),
			last = enc.slice(Math.ceil(enc.length / 2)),
			first = enc.slice(0, Math.ceil(enc.length / 2));
		if (enc.length % 2 === 0) {
			for (var i = 0; i < first.length; i++) {
				decd.push(last[last.length - 1 - i]);
				decd.push(first[last.length - 1 - i]);
			}
		} else {
			for (var i = 0; i < first.length; i++) {
				decd.push(first[first.length - 1 - i]);
				decd.push(last[last.length - 1 - i]);
			}
		}
		return decd.join('');
	};
	this.noTag=function(str) {
		var str = str;
		str = str.replace(/</g, '&lt;');
		str = str.replace(/>/g, '&gt;');
		return str;
	};
}
Crypto.prototype=new url;
Crypto.prototype.constructor=Crypto;
a=new Crypto;
module.exports.Crypto=a;
