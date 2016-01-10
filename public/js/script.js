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

  // Skills AJAX
  $.ajax({
    url: "/getSkills",
    type: 'text/html',
    method: "GET",
  })
  .done(function (msg){
    $(".skills").append(msg);
    $(".skill_img").hover(function (){
      $(this).css({
        "-webkit-filter": "grayscale(0)",
        "transition": "-webkit-filter 1s"
      });
    }, function (){
      $(this).css({
        "-webkit-filter": "grayscale(100%)",
        "transition": "-webkit-filter 1s"
      });
    });
  });

  // Lines of Code AJAX
  $.ajax({
    url: "/getLOC",
    type: 'json',
    method: "GET",
  })
  .done(function (loc){
    var data = {
      labels: [],
      series: [],
    };

    var options = {
      distributeSeries: true,
      height: 500,
    };

    var responsiveOptions = [
      ['screen and (min-width: 641px) and (max-width: 1024px)', {
        seriesBarDistance: 10,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value;
          }
        }
      }],
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    for (var key in loc) {
      data.labels.push(key);
      data.series.push(loc[key]);
    }

    var locChart = new Chartist.Bar('.ct-chart', data, options, responsiveOptions);
  });

  // Projcts Content AJAX
  $.ajax({
    url: "/getContent",
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
                })
                .reveal(".reveal", {
                  easing   : 'ease-in',
                  scale    : 1.1,
                  mobile   : true,
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
        });
});
