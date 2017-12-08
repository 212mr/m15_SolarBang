
// Call & init
$(document).ready(function () {
    $("div.menu-bar").click(function () {
        $("div.nav").toggle("slide");
    });


    $('.ba-slider').each(function () {
        var cur = $(this);
        // Adjust the slider
        var width = cur.width() + 'px';
        cur.find('.resize img').css('width', width);
        // Bind dragging events
        drags(cur.find('.handle'), cur.find('.resize'), cur);
    });

    $('#refreshBtn').click(function() {
        location.reload();
    });
});



$(document).ready(function(){


    $(".two").draggable({ revert: 'invalid' });
    $(".three").draggable({revert:'invalid'});
    $(".four").draggable({ revert: 'invalid' });
    $(".five").draggable({ revert: 'invalid' });
    $(".six").draggable({revert:'invalid'});
    $(".seven").draggable({ revert: 'invalid' });
    $(".eight").draggable({ revert: 'invalid' });
    $(".nine").draggable({revert:'invalid'});


    $(".twoPlanet").droppable({
        accept:(".two"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("mercury").html("Mercury");
            $(".two").hide();
        }
    });

    $(".threePlanet").droppable({
        accept:(".three"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("venus").html("Venus");
            $(".three").hide();
        }
    });

    $(".fourPlanet").droppable({
        accept:(".four"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("earth").html("Earth");
            $(".four").hide();
        }
    });

    $(".fivePlanet").droppable({
        accept:(".five"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("mars").html("Mars");
            $(".five").hide();
        }
    });

    $(".sixPlanet").droppable({
        accept:(".six"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("jupiter").html("Jupiter");
            $(".six").hide();
        }
    });

    $(".sevenPlanet").droppable({
        accept:(".seven"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("saturn").html("Saturn");
            $(".seven").hide();
        }
    });

    $(".eightPlanet").droppable({
        accept:(".eight"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("uranus").html("Uranus");
            $(".eight").hide();
        }
    });

    $(".ninePlanet").droppable({
        accept:(".nine"),
        //greedy: true,
        tolerance:'touch',
        drop: function(event,ui){
            $(this).addClass("neptune").html("Neptune");
            $(".nine").hide();
        }
    });


});