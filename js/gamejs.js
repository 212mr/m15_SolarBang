// $(document).ready(function(){
$(function() {
    var inOne = false;
    var inTwo = false;
    var inThree = false;

    //
    $(".onePlanet").draggable({ revert: 'invalid' });
    $(".twoPlanet").draggable({ revert: 'invalid' });
    $(".threePlanet").draggable({
        revert:'invalid'
    });

    // $(".NO").draggable({ revert: 'invalid'});


    // $('.twoPlanet').droppable({
    //     greedy: true,
    //     tolerance:'touch',
    //     drop: function(event,ui){
    //         ui.draggable.draggable('option','revert',true);
    //     }
    // });


    // $('#twoPlanet').draggable({
    //     revert: function() {
    //         if ($(this).hasClass('No')) {
    //             console.log('ClassNo');
    //             $(this).draggable({ revert: 'invalid'});
    //         }
    //     }
    // });


    $("#threeOrbit").droppable({
        accept: function(d) {
            inThree = true;
            if (d.hasClass("threePlanet")) {
                console.log("#threeOrbit accept #threePlanet");
                return true;
            } else {
                console.log("#threeOrbit deny " + d.attr("class"));
                return true;
            }
        },
        snapTolerance:0,
        drop:function (event,ui) {
            console.log(">>>>>drop in #threeOrbit " + ui.draggable.attr("class"));
            var cur_draggable = ui.draggable;
            if (!cur_draggable.hasClass("threePlanet")) {
                cur_draggable.draggable({revert: 'invalid'});
                return;
            }
            $(".threePlanet").addClass("purple");
            console.log('.threePlanet gets in threeOrbit')
        }
    })



    $("#twoOrbit").droppable({
        accept: function(d) {
            inTwo = true;
            if (d.hasClass("twoPlanet")) {
                console.log("#twoOrbit accept .twoPlanet");
                return true;
            } else {
                console.log("#twoOrbit deny " + d.attr("class"));
                return true;
            }
        },
        snapTolerance: 0,
        drop: function (event, ui) {
            console.log(">>>>>drop in #twoOrbit " + ui.draggable.attr("class"));
            var cur_draggable = ui.draggable;
            if (!cur_draggable.hasClass("twoPlanet")) {
                cur_draggable.draggable({revert: 'invalid'});
                return;
            }
            $("#twoPlanet").removeClass('NO');
            $("#twoPlanet").hide();
            $("#two").addClass("twoBall");
            //.oneBall show up
            console.log('twoBall')
        }
    });




    $("#oneOrbit").droppable({
        accept: function(d) {
            inOne = true;
            if (d.hasClass("onePlanet")) {
                console.log("#oneOrbit accept .onePlanet");
                return true;
            } else {
                console.log("#oneOrbit deny " + d.attr("class"));
                return true;
            }
        },
        snapTolerance: 0,
        drop: function (event, ui) {
            console.log(">>>>>drop in #oneOrbit " + ui.draggable.attr("class"));
            var cur_draggable = ui.draggable;
            if (!cur_draggable.hasClass("onePlanet")) {
                cur_draggable.draggable({revert: 'invalid'});
                return;
            }
            // $(".onePlanet").draggable({revert:true})
            //$(".threePlanet").addClass("red");
            //console.log('three gets into One')
            //$(".threePlanet").draggable.draggable('option','revert',true);
            var canDrop = false;

            //if you need more calculations for
            //validation, like me, put them here

            // if ()
            //     canDrop = true;

            // if (!canDrop) {
            //     ui.draggable.remove();
            // }
            // else{
            //     //you can put whatever else you need here
            //     //in case you needed the drop anyway
            // }
        }


    })















    // JQuery end here
});


