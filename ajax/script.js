$(document).ready(function(){
  $('form').submit(function(e){
    e.preventDefault(); // evitar que el submit se ejecutan 2 veces tanto por el evento jquery y el formulario post

    var data = $(this).serializeArray();
    data.push({name: 'tag', value:'login'}); // tag para identificar cada request en el lado del servidor

    $.ajax({
      url: 'process.php',
      type: 'post',
      dataType: 'json',
      data: data,
      beforeSend: function() {
        $('.fa').css('display', 'inline-block');
      }
    })
    .done(function() { // if true
      //console.log("success");
      $('span').html("correcto");
    })
    .fail(function(){  // if false
      //console.log("error");
      $('span').html("Falso");
    })
    .always(function() {
      //console.log("complete");
      setTimeout(function(){
        $('.fa').hide();
      }, 1000); // retardamos 1000 segundos para visualizar el efecto de espera
    })

  })
})
