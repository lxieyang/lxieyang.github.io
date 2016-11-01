/* GLOBAL VARIABLES */

var imageCount = 7;

var currentImageIdx = 0;

var image_dimension_store = [];

var digits = 2;


/* UTIL FUNCTIONS */

$.fn.hasAttr = function(name) {
    return this.attr(name) !== undefined;
};

function deepCopy (original) {
    /*
    var out = [];
    for (var i = 0, len = arr.length; i < len; i++) {
        var item = arr[i];
        var obj = {};
        for (var k in item) {
            obj[k] = item[k];
        }
        out.push(obj);
    }
    return out;
    */

    var temp = { arr : original };
    var obj = $.extend(true, {}, temp);
    return obj.arr;
}

function regulateDigits(inn) {
    var out = "";
    var compensate = 0;
    if(0 <= inn <= 9) {
        compensate = digits - 1;
    } else if (10 <= inn <= 99) {
        compensate = digits - 2;
    } else if (100 <= inn <= 999) {
        compensate = digits - 3;
    } else {
        compensate = 0;
    }
    for(var i = 0; i < compensate; ++i) {
        out = "0" + out;
    }
    out = out + inn.toString();
    return out;
}

function setButtonStatus() {
    if (currentImageIdx == 0) {
        $("#prev-btn").attr("disabled", "disabled");
        $("#next-btn").removeAttr('disabled');
    } else if (currentImageIdx == imageCount - 1) {
        $("#next-btn").attr("disabled", "disabled");
        $("#prev-btn").removeAttr('disabled');
        $("#submit-btn").removeAttr('disabled');
    } else {
        $("#prev-btn").removeAttr('disabled');
        $("#next-btn").removeAttr('disabled');
    }

    setCounterTop();
}

function setCounterTop() {
    $(".counter-top").each(function() {
        $(this).text(regulateDigits(currentImageIdx + 1));
    });
}
function setCounterBottom() {
    $(".counter-bottom").each(function() {
        $(this).text(regulateDigits(imageCount));
    });
}

$(document).ready(function() {
    setTimeout(function(){
        setButtonStatus();
        setCounterBottom();
    }, 300);

    $("#prev-btn").click(function(event) {
        event.preventDefault();
        var idx = currentImageIdx - 1;
        setImageIdx(idx);
        setButtonStatus();
    });
    $("#next-btn").click(function(event) {
        event.preventDefault();
        var idx = currentImageIdx + 1;
        setImageIdx(idx);
        setButtonStatus();
    });

    $("#submit-btn").attr("disabled", "disabled");

    $("#submit-btn").click(function(event) {
        event.preventDefault();
       submit_button_pressed();
    });
});