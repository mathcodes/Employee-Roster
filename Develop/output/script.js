var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

$('.box').each(function(i, box) {

    var width = $(box).width(),
        html = '<span style="white-space:nowrap">',
        line = $(box).wrapInner(html).children()[0],
        n = 100;

    $(box).css('font-size', n);

    while ($(line).width() > width) {
        $(box).css('font-size', --n);
    }

    $(box).text($(line).text());

});