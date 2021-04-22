$(function(){

/* 
1` fare l'HTML con input e ul li
2nel JS creare un arrai con stringhe
3ciclo for dell['array per sampare a video gli elementi facendo un append dentro ul 
4 al click del cestino elminare il parent(O)
5 intercettare il heyup() dell'impunt ENTER per aggiungere l'elemnto della lista e ripulire l'imput
*/
var toDo_list = ["Go to the grocery store and buy food", "Practice daily work out", "Study your homework"];

//faccio un ciclo per estrarre le stringe individuali da appendere dentro un li contenuto in un div class="template" che sta in fondo al documento HMTL ma che clono a sua volta per appendere dentro l' ul che sta dintro il div #to-do
for(var i = 0; i< toDo_list.length; i++){
  var list_item = toDo_list[i];
  var clone = $(".template li").clone();
  
  $('#to-do ul').append(clone);
  console.log(clone)
  
  $(clone).find('.text').append(list_item)


}


});