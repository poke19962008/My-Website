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
    url: "http://sayandas.xyz/getContent",
    type: 'text/html',
    method: 'GET',
  }).done(function (msg){
    $(".my_works_container").append(msg);
    window.sr = ScrollReveal()
                .reveal([
                  ".my_works_title", ".my_works_desc",
                  ".content_left", ".title_left", ".img_left"
                ], {
                  easing  : "ease-in",
                  origin  : "left",
                })

                .reveal([
                  ".my_works_title_img",
                  ".content_right", ".title_right", ".img_right"
                ], {
                  easing  : "ease-in",
                  origin  : "right"
                });


  });

  window.sr = ScrollReveal()
        .reveal("#slogan_1", {
          delay    : 250*7 + 0,
          distance : '90px',
          easing   : 'ease-in',
          scale    : 1.1,
          mobile   : true,
        })
        .reveal("#slogan_2", {
          delay    : 250*7 + 620,
          distance : '90px',
          easing   : 'ease-in',
          scale    : 1.1,
          mobile   : true,
        })
        .reveal("#slogan_3", {
          delay    : 250*7 + 1240,
          distance : '90px',
          easing   : 'ease-in',
          scale    : 1.1,
          mobile   : true,
        })
	.reveal(".reveal", {
          easing   : 'ease-in-out',
          origin   : 'right',
        });
});
