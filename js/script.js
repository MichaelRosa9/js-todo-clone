$(function(){

/* 
1` fare l'HTML con input e ul li
2nel JS creare un arrai con stringhe
3ciclo for dell['array per sampare a video gli elementi facendo un append dentro ul 
4 al click del cestino elminare il parent(O)
5 intercettare il heyup() dell'impunt ENTER per aggiungere l'elemnto della lista e ripulire l'imput
*/
var toDo_list = ["Go to the grocery store and buy food", "Practice daily work out", "Study your homework"];

for(var i = 0; i< toDo_list.length; i++){
  var cloned = $("#to-do ul li").clone();
  
  var list_item = toDo_list[i];
  cloned.find('span').append(list_item)
  
  
  
  console.log(cloned);
}


});