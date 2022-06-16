const root = document.getElementById("root")
console.log(root);
const button = document.getElementsByClassName("button");
console.log(button);
const search =document.getElementById("search");
console.log(search);




button[0].addEventListener("click",function(){
	alert("재료 소개 창");
})
search.addEventListener("click",function(){
	alert("검색창");
})