$(document).ready(function (){
  $("#loading").remove();
  $("body").css('visibility', 'visible');

  var name = " Sayan_Das"
  var len = 0;
  var timer = setInterval(function (){
    $("#name").append(name[len+1]);
    len = $("#name").text().length;
    if(len == 9) clearInterval(timer);
  }, 250);

  $.ajax({
    url: "http://localhost:3500/getContent",
    type: 'text/html',
    method: 'GET',
  }).done(function (msg){
    $(".my_works_container").append(msg);
  });

  window.sr = ScrollReveal()
        .reveal("#slogan_dev", {
          delay    : 250*7 + 0,
          distance : '90px',
          easing   : 'ease-in',
          scale    : 1.1,
          mobile   : true,
        })
        .reveal("#slogan_des", {
          delay    : 250*7 + 620,
          distance : '90px',
          easing   : 'ease-in',
          scale    : 1.1,
          mobile   : true,
        })
        .reveal("#slogan_foo", {
          delay    : 250*7 + 1240,
          distance : '90px',
          easing   : 'ease-in',
          scale    : 1.1,
          mobile   : true,
        });

  window.sr = ScrollReveal()
        .reveal(".reveal", {
          easing   : 'ease-in-out',
          origin   : 'right',
        });

});
