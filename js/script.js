mi = 0;
miniright.onclick = function(){
  if (mi == 0) {
    mi -= 1105;
    minislider.style.left = mi + "px";
  } else if (mi == -1105) {
    mi -= 1020;
    minislider.style.left = mi + "px";
  } else if (mi == -2125) {
    mi -= 1200;
    minislider.style.left = mi + "px";
  } else if (mi == -3325){
    mi -= 430;
    minislider.style.left = mi + "px";
  }else if (mi == -2605){ 
    mi -= 1150;
    minislider.style.left = mi + "px";
  }else if (mi == -1585){ 
    mi -= 1020;
    minislider.style.left = mi + "px"; 
  }else if (mi == -495){
    mi = -1585;
    minislider.style.left = mi + "px";
  }
}

minileft.onclick = function(){
  if (mi == -3755) {
    mi += 1150;
    minislider.style.left = mi + "px";
  } else if (mi == -2605){ 
    mi += 1020;
    minislider.style.left = mi + "px";
  }else if (mi == -1585){ 
    mi += 1090;
    minislider.style.left = mi + "px"; 
  } else if (mi == -495){
    mi = 0;
    minislider.style.left = mi + "px";
  } else if (mi == -1105){
    mi = 0;
    minislider.style.left = mi + "px";
  } else if (mi == -2125) {
    mi += 1020;
    minislider.style.left = mi + "px";
  } else if (mi == -3325){
    mi += 1200;
    minislider.style.left = mi + "px";
	}
}

i = 0;
right.onclick = function(){
	if(i > -300){
	i -= 100;
	galery.style.left = i + "%";
	}else{
		i = 0;
		galery.style.left = i + "%";
	}
}
left.onclick = function(){
	if(i < 0){
	i += 100;
	galery.style.left = i + "%";
	}
}

function show(){
  blackback.className="show";

flag1.onmouseout = function(){
  blackback.className="hide";
}

account1.onmouseout = function(){
  blackback.className="hide";
}
}

function listAllShow(){
  allList.className="show";

ListAll.onmouseout = function(){
    allList.className="hide";
}
}

function listAllClose(){
  allList.className="show";

allList.onmouseout = function(){
  allList.className="hide";
}
}

function listOn(){
  blackbackall.className = "show";
  menuAll.style.right= "0";
  menuAll.style.visibility= "visible";

blackbackall.onclick = function(){
  blackbackall.className = "hide";
  menuAll.style.right= "-350px";
  menuAll.style.visibility= "hidden";
  scrollMenu.className = "show";
}
}

node = document.querySelectorAll("#detailsMenu");
function showMenuDetails(n){
  for(j=0;j<node.length;j++){
    node[j].className = "hide";
  }
  node[n].className = "show";
  scrollMenu.className = "hide";
}

function close2(){
  for(j=0;j<node.length;j++){
    node[j].className = "hide";
  }
  scrollMenu.className = "show";
}


