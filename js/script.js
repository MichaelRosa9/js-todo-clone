$(function(){

/* 
1` fare l'HTML con input e ul li
2nel JS creare un arrai con stringhe
3ciclo for dell['array per sampare a video gli elementi facendo un append dentro ul 
4 al click del cestino elminare il parent(O)
5 intercettare il heyup() dell'impunt ENTER per aggiungere l'elemnto della lista e ripulire l'imput
*/
var toDo_list = ["Go to the grocery store and buy food", "Practice daily work out", "Study your homework"];

//faccio un ciclo per estrarre le stringe individuali da appendere dentro un li contenuto in un div class="template" che sta in fondo al main ma che clono a sua volta per appendere dentro l' ul che sta dintro il div #to-do
for(var i = 0; i< toDo_list.length; i++){
  var list_item = toDo_list[i];
  //definisco dentro un var il clone dell' li che sta dentro il div template che sta in fondo al main
  var clone = $(".template li").clone();
  
  //appendo la lista clonata dentro l' ul
  $('#to-do ul').append(clone);
  
  //appendo la stringa dell'array dentro il clone
  $(clone).find('.text').append(list_item)
}

$('#to-do input').keyup(function(event){
  
  if(event.which === 13){
    var input = $('input').val();
    var clone = $(".template li").clone();

    $(".template li").clone();
    $('#to-do ul').append(clone);
    $(clone).find('.text').append(input)
    $(this).val('');
  }

})


});