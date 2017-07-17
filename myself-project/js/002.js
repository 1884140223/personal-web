//留言板js
function fa()
{
	var inpu=document.getElementById("liu").firstElementChild;
	var text=inpu.firstElementChild.value;
//	alert(text);
	var c=document.getElementById("cun");
	var s=document.createElement("p");
	c.appendChild(s);
	var day=new Date();
	var mon=day.getMonth()+1;
	c.lastElementChild.innerHTML="某网友的留言：&nbsp;"+text+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
		+day.getFullYear()+"年"+mon+"月"+day.getDate()+"日"+day.getHours()+":"+day.getMinutes();
	inpu.firstElementChild.value="";
}
function qin()
{
	location.reload();
}
function fan()
{
	history.back();
}

