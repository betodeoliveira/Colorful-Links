let originalTextColor;
let originalBackgroundColor;

$("a.colorful-link-block").mouseenter(function () {
    originalTextColor = $(this).css("color");
    originalBackgroundColor = $(this).css("background-color");

    let availableColors = $(".colorful-link-block-list").children().length;
    let randomNum = Math.floor(Math.random() * availableColors);
    let selectedTextColor = $(".colorful-link-block-item").eq(randomNum).css("color");
    let selectedBackgroundColor = $(".colorful-link-block-item").eq(randomNum).css("background-color");

    $(this).css("color", selectedTextColor);
    $(this).css("background-color", selectedBackgroundColor);
    
}).mouseleave(function () {
    $(this).css("color", originalTextColor);
    $(this).css("background-color", originalBackgroundColor);
});