var press1 = 0;
var press2 = 0;
var press3 = 0;

function fix1(){
	if (press1==0){
		press1=1;
		document.getElementById("button1").innerText = "완료";
		for (var i=1; i<15; i++){
			document.querySelector(`#subject${i} a`).style.display="none";
			document.querySelector(`#subject${i} input`).style.display="inline-block";
		}
	}
	else{
		press1=0;
		document.getElementById("button1").innerText = "수정";
		for (var i=1; i<15; i++){
			document.querySelector(`#subject${i} a`).style.display="inline-block";
			document.querySelector(`#subject${i} input`).style.display="none";
			document.querySelector(`#subject${i} a`).innerText=document.querySelector(`#subject${i} input`).value;
		}
	}
}

function fix2(){
	if (press2==0){
		press2=1;
		document.getElementById("button1").innerText = "완료";
		for (var i=15; i<29; i++){
			document.querySelector(`#subject${i} a`).style.display="none";
			document.querySelector(`#subject${i} input`).style.display="inline-block";
		}
	}
	else{
		press2=0;
		document.getElementById("button1").innerText = "수정";
		for (var i=15; i<29; i++){
			document.querySelector(`#subject${i} a`).style.display="inline-block";
			document.querySelector(`#subject${i} input`).style.display="none";
			document.querySelector(`#subject${i} a`).innerText=document.querySelector(`#subject${i} input`).value;
		}
	}
}

function fix3(){
	if (press3==0){
		press3=1;
		document.getElementById("button1").innerText = "완료";
		for (var i=29; i<43; i++){
			document.querySelector(`#subject${i} a`).style.display="none";
			document.querySelector(`#subject${i} input`).style.display="inline-block";
		}
	}
	else{
		press3=0;
		document.getElementById("button1").innerText = "수정";
		for (var i=29; i<43; i++){
			document.querySelector(`#subject${i} a`).style.display="inline-block";
			document.querySelector(`#subject${i} input`).style.display="none";
			document.querySelector(`#subject${i} a`).innerText=document.querySelector(`#subject${i} input`).value;
		}
	}
}