var pos=0;
var speed=50;

var str=document.getElementById('str').innerText;
document.getElementById('str').innerText='';

function typeWriter(){
	if (pos<str.length) {
		document.getElementById('str').innerHTML += str.charAt(pos);
		pos++;
		setTimeout(typeWriter, speed); 
	}
}
setTimeout(typeWriter, speed);