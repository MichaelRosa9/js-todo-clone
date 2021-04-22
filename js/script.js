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

//funzione che scatta quando permo il tasto enter dentro l'input text
$('#to-do input').keyup(function(event){

  //l'event.which mi indica il valore numerico del tasto premuto. in questo caso il tasto enter e' 13 e ogni qualvolta che lo si preme, parte l'if statement
  if(event.which === 13){

    //definisco con una variabile il valore dell'input messo dentro
    var input = $('input').val();

    //definisco con una variabile il clone di un li dentro un div con classse tamplate che sta in fondo al main
    var clone = $(".template li").clone();

    //definisco dentro un var il clone dell' li che sta dentro il div template che sta in fondo al main
    $(".template li").clone();

    //appendo la lista clonata dentro l' ul
    $('#to-do ul').append(clone);

    //appendo il testo scritto nell'input e lo salvo nella lista clonata
    $(clone).find('.text').append(input);

    //una volta appeso il testo scritto nell'input cancello il contenuto
    $(this).val('');
  }

})


});