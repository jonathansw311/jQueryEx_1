//question 1

$(document).ready(function(){
    console.log('lets get ready to party with jQuery')
})
//question 2
$('img').addClass('image-center')
//question 3
let $para = $('p')

$para.eq(($para.length-1)).remove();
//questoin 4
$('#title').css('font-size', (Math.random()*500)+'px')


//question 5
$('ol').append('<li>I am an add to the list!!!</li>');


//question 6
$('ol').children().remove()

$('ol').append('<p>Sorry we all know lists are stupid</p>');
//question 7
$('input').on("keypress click", function(){
   const bg= $('input').val();
   const bg1=$('input').eq(1).val();
   const bg2=$('input').eq(2).val();
   $('body').css('background-color', 'rgb('+bg+','+bg1+","+bg2+")")
})
//question 8
$('img').on('click', function(){
$(this).remove();
})