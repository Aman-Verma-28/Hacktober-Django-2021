var image;
function upload() {
  var fileinput=document.getElementById("finput");
  image=new SimpleImage(fileinput);
}
function makegray(){
var imgcanvas=document.getElementById("can");
  for(var px of image.values()){
    var avg=(px.getRed()+px.getGreen()+px.getBlue()/3);
    px.setRed(avg);
    px.setGreen(avg);
    px.setBlue(avg);
  }
  image.drawTo(imgcanvas);
}