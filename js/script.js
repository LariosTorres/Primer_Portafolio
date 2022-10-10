function getid(obj) {
  var card1 = document.getElementById("1");
  var card2 = document.getElementById("2");
  var card3 = document.getElementById("3");
  var card4 = document.getElementById("4");
if(obj.id == '1'){
  let img1 = document.getElementById('img1');
  let hr1 = document.getElementById('hr1');
card1.addEventListener("mouseover", () => {
  img1.classList.replace('img-card','hoverimg');
  hr1.classList.replace('hrcard','hrcardjs');
}, false)
card1.addEventListener("mouseout", () => {
  img1.classList.replace('hoverimg','img-card');
  hr1.classList.replace('hrcardjs','hrcard');
}, false)
}
else if(obj.id == '2'){
  let img2 = document.getElementById('img2');
  let hr2 = document.getElementById('hr2');
card2.addEventListener("mouseover", () => {
  img2.classList.replace('img-card','hoverimg');
  hr2.classList.replace('hrcard','hrcardjs');
}, false)
card2.addEventListener("mouseout", () => {
  img2.classList.replace('hoverimg','img-card');
  hr2.classList.replace('hrcardjs','hrcard');
  }, false)
  }
else if(obj.id == '3'){
  let img3 = document.getElementById('img3');
  let hr3 = document.getElementById('hr3');
card3.addEventListener("mouseover", () => {
  img3.classList.replace('img-card','hoverimg');
  hr3.classList.replace('hrcard','hrcardjs');
  }, false)
  card3.addEventListener("mouseout", () => {
  img3.classList.replace('hoverimg','img-card');
  hr3.classList.replace('hrcardjs','hrcard');
    }, false)
    }
else if(obj.id == '4'){
  let img4 = document.getElementById('img4');
  let hr4 = document.getElementById('hr4');
card4.addEventListener("mouseover", () => {
  img4.classList.replace('img-card','hoverimg');
  hr4.classList.replace('hrcard','hrcardjs');
    }, false)
card4.addEventListener("mouseout", () => {
  img4.classList.replace('hoverimg','img-card');
  hr4.classList.replace('hrcardjs','hrcard');
    }, false)
}
else{
 return 0;
}
}
function reply_click(clicked_id)
  {
  switch(clicked_id){
    case '1':
      window.open("https://fami-pasteleria.000webhostapp.com/Pasteleria.html", "_blank");
    break;
    case '2':
      window.open("https://fami-pasteleria.000webhostapp.com/vacunacion.html", "_blank");
    break;
    case '3':
      window.open("http://fami-pasteleria.000webhostapp.com/pokedex.html", "_blank");
    break;
    default:
      alert("La direccion buscada no esta disponible")
    break;
  }
}