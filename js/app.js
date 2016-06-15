var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="typewrite_wrapper">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
        delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function() {
        that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .typewrite_wrapper { border-right: 0.08em solid #58C9B9; padding-right: 2px;}";
    document.body.appendChild(css);
};

$('.flip').on('click', function() {
    $(".card", this).toggleClass("flipped");
});

var imgGal = $(function(img, e) {
    var $overlay = $('<div id="gallery_overlay"></div>'),
        $image = $("<img>")

    $overlay.append($image);

    $("body").append($overlay);

    var imgLinks = $('#imageGallery a');

    imgLinks.click(function(e) {
        e.preventDefault();
        var imgLoc = $(this).attr('href');
        $image.attr('src', imgLoc);
        $overlay.slideDown();

    });

    $overlay.click(function() {
        $overlay.slideUp();
    });
});