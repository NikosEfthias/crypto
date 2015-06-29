module.exports={
reverse:function(word){
		var a=[];
		for (i=0;i<word.length;i++){
			a.push(word[word.length-1-i]);
		}
		return a.join('');
	},
	encode: function(word) {
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
		return reversed.join('');
	},
	decode: function(enc) {
		var decd = [],
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
	},
	noTag:function(str){
		var str=str;
		str=str.replace(/</g,'&lt;');
		str=str.replace(/>/g,'&gt;');
return str;

	}}