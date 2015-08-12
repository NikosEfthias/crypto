# crypto
secures enries from user and produces hashes for front end 
####Including Into Page :
```javascript
//front end way
var crypto=new Crypto
```
```javascript
//node.js way
var crypto=require('crypto').Crypto;
```
####Methods :
```javascript
//we added crypto into our page/server already above
crypto
	|__crypto :function(len)//produces random string with given length
	|__encode :function(str)//produces a crypted version of given string
	|__decode :function(encoded)//decodes earlier encoded string
	|__noTag :function(str)//turns "<,>" into "&lt;,&gt;" 
	|__reverse :function(str)//reverses given string
	|__querify:function(obj)//makes a get query-string from fiven object
	|__objectify:function(urlString)//makes object from a get query-string
	|__parseGet:function(url(optional))//like objectify makes an object by one difference this accepts entire url if url is not given fetches the url of the current window

```
####Examples :
```javascript
crypto.crypto(5)//"H-@&g"
crypto.encode("Hello World")//"343i2n3f3c283c3f103c35"
crypto.decode("343i2n3f3c283c3f103c35")//"Hello World"
crypto.noTag("<script>alert('hi')</script>")//"&lt;script&gt;alert('hi')&lt;/script&gt;"
crypto.reverse("Hello World")//"dlroW olleH"
crypto.querify({hello:"all",understand:"isAllWeNeed"})//?hello=all&understand=isAllWeNeed
crypto.objectify("?hello=all&understand=isAllWeNeed")//{hello:"all",understand:"isAllWeNeed"}
crypto.parseGet("//github.com?hello=world&green=eyes")//{hello:"world",green:"eyes"}
```
