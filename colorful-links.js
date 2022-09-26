// LINK TEXT
$(".colorful-text-link").each(function (index) {
    $(this).attr("original-text-color", $(this).css("color"));
});

$(".colorful-text-link").mouseenter(function () {
    let availableColors = $(".colorful-text-link-list").children().length;
    let randomNum = Math.floor(Math.random() * availableColors);
    let selectedTextColor = $(".colorful-text-link-item").eq(randomNum).css("color");

    $(this).css("color", selectedTextColor);
})
.mouseleave(function () {
    $(this).css("color", $(this).attr("original-text-color"));
});

// LIK BLOCK
$(".colorful-link-block").each(function (index) {
    $(this).attr("original-text-color", $(this).css("color"));
    $(this).attr("original-background-color", $(this).css("background-color"));
});

$(".colorful-link-block").mouseenter(function () {
    let availableColors = $(".colorful-link-block-list").children().length;
    let randomNum = Math.floor(Math.random() * availableColors);
    let selectedTextColor = $(".colorful-link-block-item").eq(randomNum).css("color");
    let selectedBackgroundColor = $(".colorful-link-block-item").eq(randomNum).css("background-color");

    $(this).css("color", selectedTextColor);
    $(this).css("background-color", selectedBackgroundColor);
})
.mouseleave(function () {
    $(this).css("color", $(this).attr("original-text-color"));
    $(this).css("background-color", $(this).attr("original-background-color"));
});