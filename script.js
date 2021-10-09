var img=null;
var baseimage=document.getElementById("input");
 var canvas=document.getElementById("can");
function upload(){
  var file=document.getElementById("input");
  img=new SimpleImage(file);
  img.drawTo(canvas);
}
function dogray(){
  var grayimg=new SimpleImage(img);
  for(var px of grayimg.values()){
    var avg=(px.getRed()+px.getGreen()+px.getBlue())/3;
    px.setRed(avg);
    px.setGreen(avg);
    px.setBlue(avg);
  }
  grayimg.drawTo(canvas);
}
function dorainbow(){
  var rainbow=new SimpleImage(img);
  for(var px of rainbow.values()){
    var y=px.getY();
    var x=px.getX();
   if(px.getY()<=240){
     px.setRed(200);
   } 
    if(240<px.getY()<=480){
      px.setGreen(200);
    }
    if(480<px.getY()<=720){
      px.setBlue(200);
    }
    if(px.getY()>720){
      px.setRed(200);
    }
  }
  rainbow.drawTo(canvas);
}
function doclear(){
  var base=new SimpleImage(baseimage);
  base.drawTo(canvas);
}