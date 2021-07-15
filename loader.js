
var full=false;

function fill(){
  full=!full;
  document.getElementById("logocontainer").style.backgroundColor=full?"#3ebffa":"transparent";
}
setTimeout(
function disappear(){
 
    document.getElementById("background").style.display="none";
 
},1000);
