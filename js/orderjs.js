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
});



var planet = '.planet';
var holder = '.planet-holder';
var planets = 8;
var correct = 0;

$(planet).draggable({
    revert:true
})


$(holder).droppable({
    hoverClass: "ui-state-hover",
    drop:function(event, ui){
        var dropped = $(this).data('planet')
        if($(ui.draggable).data('planet') == dropped){
            $(ui.draggable).find('img').css('opacity','.12')
            $(this).find('.planet-answer img').addClass('scale');
            $(this).find('.planet-answer').parent().css('border','none');
            $(ui.draggable).next().addClass('answered')
            correct ++;
        }
    }
})

function show_modal(modal){
    $('.' + modal).show();
    $('.overlay').show();
}

function hide_modal(modal){
    $('.' + modal).hide();
    $('.overlay').hide();
}



