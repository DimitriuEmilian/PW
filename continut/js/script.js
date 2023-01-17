console.log("Hello");

function f1(){
    let e = document.getElementById("dataMea");
    e.innerHTML = new Date();

}

function g(){
    setInterval(f1,1000);
    document.getElementById("locMea").innerHTML=window.location.href;
    var x = document.getElementById("taraMea");
    x.innerHTML= getLocation();

}

var x=null;
var y=null;
function h(event){
    if(x==null){
        x=event.offsetX;
        if(y==null){
            y=event.offsetY;
        }
    }

}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

function schimbaContinut(resursa, jsFisier, jsFunctie){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function(){
    if (this.readyState==4 && this.status == 200){
      document.getElementById("continut").innerHTML = this.responseText;
      
      if (jsFisier) {
        var elementScript = document.createElement('script');
        elementScript.onload = function () {
          console.log("hello");
          if (jsFunctie) {
            window[jsFunctie]();
          }
        };
        elementScript.src = jsFisier;
        document.head.appendChild(elementScript);
      } else {
        if (jsFunctie) {
          window[jsFunctie]();
        }
      }
    }
  };
  xhttp.open("GET",resursa+".html",true);
  xhttp.send();
}