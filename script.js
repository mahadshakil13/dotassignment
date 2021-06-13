document.addEventListener("DOMContentLoaded", function() {
    $("body").click(function(event) {
        addDot(event)
    });
    $(".clear-btn").click(function() {
        clearScreen();
    });
});

function addDot(e) {
    $('.clear-btn').click(false);
    // it getting X-axis and Y-axis position
    mouseX = e.pageX;
    mouseY = e.pageY;
    console.log(mouseX + ' ' + mouseY);

    $("body").append(
        $('<div id="dot-div" class="dotted-div-class"></div>')
        .css('position', 'absolute')
        .css('top', mouseY + 'px')
        .css('left', mouseX + 'px'));
}

function clearScreen() {

    $(".dotted-div-class").remove();
}