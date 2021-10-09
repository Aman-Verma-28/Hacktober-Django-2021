var fgimginput=null;
var bgimginput=null;
var fgcan;
var bgcan;
function uploadfg(){
  var fgi=document.getElementById("fgimage");
  fgimginput=new SimpleImage(fgi);
fgcan=document.getElementById("fgcanvas");
  fgimginput.drawTo(fgcan);
}
function uploadbg(){
  var bgi=document.getElementById("bgimage");
  bgimginput=new SimpleImage(bgi);
bgcan=document.getElementById("bgcanvas");
  bgimginput.drawTo(bgcan);
}

function creatcomposition(){
fgcan=document.getElementById("fgcanvas");
bgcan=document.getElementById("bgcanvas");
  var output=new SimpleImage(fgimginput.getWidth(),fgimginput.getHeight());
  for(var px of fgimginput.values()){
    var x=px.getX();
    var y=px.getY();
    if(px.getGreen()>px.getRed()+px.getBlue()){
      bgpx=bgimginput.getPixel(x,y);
      output.setPixel(x,y,bgpx);
    }
    else{
      output.setPixel(px.getX(),px.getY(),px);
    }
  }
  return output;
}
function dogreenscreen(){
  if(fgimginput==null || ! fgimginput.complete()){
    alert("foreground image not found");
  }
  if(bgimginput==null || ! bgimginput.complete()){
    alert("background image not found");
  }
  clearCanvas();
  var finalimage=creatcomposition();
  finalimage.drawTo(fgcan);
}
function clearCanvas(){
  doClear(fgcan);
  doClear(bgcan);
}
function doClear(canvas) {
  var context = canvas.getContext("2d");
  context.clearRect(0,0,canvas.width,canvas.height);
}