$(function(){
    $('button').on('click', function(){
       $.ajax({
         url: 'https://api.icndb.com/jokes/random',
         success: function(data){
           $('div').html('<p>' + data.value.joke + '</p>');
         }
       });
    });
  });