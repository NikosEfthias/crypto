# crypto
secures enries from user and produces hashes for front end 
####Including Into Page :
```javascript
//front end way
var crypto=new Crypto
```
```javascript
//node.js way
var crypto=require('crypto');
crypto=new crypto.Crypto
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

```
####Examples :
```javascript
crypto.crypto(5)//"H-@&g"
crypto.encode("Hello World")//"343i2n3f3c283c3f103c35"
crypto.decode("343i2n3f3c283c3f103c35")//"Hello World"
crypto.noTag("<script>alert('hi')</script>")//"&lt;script&gt;alert('hi')&lt;/script&gt;"
crypto.reverse("Hello World")//"dlroW olleH"

```
<<<<<<< HEAD
deneme
=======
>>>>>>> bf8c13341cd19b648b17b80aa9489cf278085e4f
