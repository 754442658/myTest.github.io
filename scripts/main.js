function multiply(num1, num2) {
  let result = num1 * num2;
  console.log(result);
  return result;
}

let img = document.querySelector("img");
img.onclick= function (){
	console.log("换个图片");
	let src = img.getAttribute("src");
	if(src === "images/img1.png"){
		img.setAttribute("src","images/img2.png");
	}else {
		img.setAttribute("src","images/img1.png");
	}
}


let bt = document.querySelector("button");
let hTitle = document.querySelector("h1");

function setUserName(){
	let myName = prompt("请输入你的名字");
	localStorage.setItem("name",myName);
	hTitle.textContent = myName+",今天天气不错啊！";
}

bt.onclick = function(){
	setUserName();
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let myName = localStorage.getItem('name');
  hTitle.textContent = myName+",今天天气不错啊！";
}

let home = document.getElementById("home");
let imgs = document.getElementById("imgs");

home.onclick = function(){
	alert("点击了首页");
}
imgs.onclick = function(){
	alert("点击了图片");
}
