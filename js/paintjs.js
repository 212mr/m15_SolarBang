(function() {

    /* == GLOBAL DECLERATIONS == */
    TouchMouseEvent = {
        DOWN: "touchmousedown",
        UP: "touchmouseup",
        MOVE: "touchmousemove"
    }

    /* == EVENT LISTENERS == */
    var onMouseEvent = function(event) {
        var type;

        switch (event.type) {
            case "mousedown": type = TouchMouseEvent.DOWN; break;
            case "mouseup":   type = TouchMouseEvent.UP;   break;
            case "mousemove": type = TouchMouseEvent.MOVE; break;
            default:
                return;
        }

        var touchMouseEvent = normalizeEvent(type, event, event.pageX, event.pageY);
        $(event.target).trigger(touchMouseEvent);
    }

    var onTouchEvent = function(event) {
        var type;

        switch (event.type) {
            case "touchstart": type = TouchMouseEvent.DOWN; break;
            case "touchend":   type = TouchMouseEvent.UP;   break;
            case "touchmove":  type = TouchMouseEvent.MOVE; break;
            default:
                return;
        }

        var touch = event.originalEvent.touches[0];
        var touchMouseEvent;

        if (type == TouchMouseEvent.UP)
            touchMouseEvent = normalizeEvent(type, event, null, null);
        else
            touchMouseEvent = normalizeEvent(type, event, touch.pageX, touch.pageY);

        $(event.target).trigger(touchMouseEvent);
    }

    /* == NORMALIZE == */
    var normalizeEvent = function(type, original, x, y) {
        return $.Event(type, {
            pageX: x,
            pageY: y,
            originalEvent: original
        });
    }

    /* == LISTEN TO ORIGINAL EVENT == */
    var jQueryDocument = $(document);

    if ("ontouchstart" in window) {
        jQueryDocument.on("touchstart", onTouchEvent);
        jQueryDocument.on("touchmove", onTouchEvent);
        jQueryDocument.on("touchend", onTouchEvent);
    } else {
        jQueryDocument.on("mousedown", onMouseEvent);
        jQueryDocument.on("mouseup", onMouseEvent);
        jQueryDocument.on("mousemove", onMouseEvent);
    }

})();




//Problem: No user interaction capability
//Solution: When user interacts, cause changes appropriately
var color = $(".selected").css("background-color");;
var $canvas = $("#myCanvas");
var context = $canvas[0].getContext("2d");
var imageObj = new Image();
      imageObj.onload = function() {
        context.drawImage(imageObj, 0, 0);
      };
      imageObj.src = 'img/qq_ai_jpg.jpg';
var lastEvent;
var mouseDown = false;




//When clicking on control list items
$(".controls").on("click", "li", function(){
  //Deselect sibling elements
  $(this).siblings().removeClass("selected");
  //Select clicked element
  $(this).addClass("selected");
  //cache current color
  color = $(this).css("background-color");
});


//When "New Color" is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();

  $("#newColor").css("background-color", "rgb(" + r + "," + g + ", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor)

//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();
});

//* Clears the canvas.

$('#clear').click(function() {
    location.reload();
});


//On mouse events on the canvas
$canvas.mousedown(function(e){
  lastEvent = e;
   mouseDown = true;
}).mousemove(function(e){
  //Draw lines
  if(mouseDown) {
    context.beginPath();
    context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
    context.lineTo(e.offsetX, e.offsetY);
    context.strokeStyle = color;
    context.lineWidth=10;
    context.stroke();
    lastEvent = e;

  }
}).mouseup(function(){
  mouseDown = false;
}).mouseleave(function(){
  $canvas.mouseup();

});


