/* Utility function */
/* remove element by index from array */
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};



/* global variables */

var canvas_in_object_fix;
var context_in_object;
var CANVAS_IN_OBJECT_WIDTH;
var CANVAS_IN_OBJECT_HEIGHT;

var dimension_store = [];

var lineCombo = [
    ["#c33120", "yellow", "#fff"],
    ["#e89507", "yellow", "#000"],
    ["yellow", "red", "#000"],
    ["#00f000", "yellow", "#000"],
    ["#289bb4", "yellow", "#fff"],
    ["blue", "yellow", "#fff"],
    ["#9448f9", "yellow", "#fff"]
];

var sensitivity = 5.0;


/* current drawing dimension */
var cx;
var cy;
var curr_x;
var curr_y;

var start_x = [-1];
var start_y = [-1];
var finish_x = [-1];
var finish_y = [-1];

var line_width = 4.0;
var bold_pt_size = 6.0;
var pt_color = 'red';
var lineComboNumber = 0;
var idx = 0;

var is_started = [false];
var is_finished = [false];
var is_mouse_down = [false];
var is_modifying_start = [false];
var is_modifying_finish = [false];


function init_canvas(){
    img = new Image();
    canvas_in_object_fix = $(".activeObj canvas.cropped-image")[0];
    context_in_object = canvas_in_object_fix.getContext('2d');

    // change the size of the canvas to the image size
    img.onload = function()
    {
        canvas_in_object_fix.width = this.width;
        canvas_in_object_fix.height = this.height;
        CANVAS_IN_OBJECT_WIDTH = this.width;
        CANVAS_IN_OBJECT_HEIGHT = this.height;
        draw_canvas();
    }
    img.src = "./static/images/toyota.png";

    // monitor user input
    canvas_in_object_fix.onmousemove = mousemove_canvas_rect;
    canvas_in_object_fix.onmousedown = mousedown_canvas_rect;
    canvas_in_object_fix.onmouseup = mouseup_canvas_rect;

}

function add_to_this_dimension() {
    start_x.push(-1);
    start_y.push(-1);
    finish_x.push(-1);
    finish_y.push(-1);
    is_started.push(false);
    is_finished.push(false);
    is_mouse_down.push(false);
    is_modifying_start.push(false);
    is_modifying_finish.push(false);

    idx = start_x.length - 1;
}

function remove_this_from_dimension(index) {
    start_x.remove(index);
    start_y.remove(index);
    finish_x.remove(index);
    finish_y.remove(index);
    is_started.remove(index);
    is_finished.remove(index);
    is_mouse_down.remove(index);
    is_modifying_start.remove(index);
    is_modifying_finish.remove(index);
}

// draw canvas
function draw_canvas(){
    //draw the image
    context_in_object.clearRect(0,0,CANVAS_IN_OBJECT_WIDTH,CANVAS_IN_OBJECT_HEIGHT);
    context_in_object.drawImage(img,0,0,CANVAS_IN_OBJECT_WIDTH, CANVAS_IN_OBJECT_HEIGHT);

    // console.log(dimension_store.length);

    store_current_dimension(lineComboNumber);

    for(var i = 0; i < dimension_store.length; i++) {
        if (i != lineComboNumber) {
            switch_to_dimension(i);
            for(var j = 0; j < start_x.length; j++) {
                if (is_started[j]) {
                    bold_the_point(start_x[j], start_y[j], bold_pt_size / 2);
                }

                if (is_finished[j]) {
                    bold_the_point(finish_x[j], finish_y[j], bold_pt_size / 2);
                }

                if (is_started[j] && is_finished[j]) {
                    draw_line(start_x[j], start_y[j], finish_x[j], finish_y[j], i, false);
                }
            }
        }
    }

    switch_to_dimension(lineComboNumber);
    for(var j = 0; j < start_x.length; j++) {
        if (j != idx) {
            if (is_started[j]) {
                bold_the_point(start_x[j], start_y[j], bold_pt_size / 2);
            }

            if (is_finished[j]) {
                bold_the_point(finish_x[j], finish_y[j], bold_pt_size / 2);
            }

            if (is_started[j] && is_finished[j]) {
                draw_line(start_x[j], start_y[j], finish_x[j], finish_y[j], lineComboNumber, false);
            }
        } else {
            if (is_started[j]) {
                bold_the_point(start_x[j], start_y[j], bold_pt_size / 2);
            }

            if (is_finished[j]) {
                bold_the_point(finish_x[j], finish_y[j], bold_pt_size / 2);
            }

            if (is_started[j] && is_finished[j]) {
                draw_line(start_x[j], start_y[j], finish_x[j], finish_y[j], lineComboNumber, true);
            }
        }
    }
}

// return the current point of the cursor
function grab_xy(event){
    var ev = event || window.event;
    var IE = document.all ? true : false;
    if (IE) {	// grab the x-y pos if browser is IE
        cx = ev.clientX + document.body.scrollLeft;
        cy = ev.clientY + document.body.scrollTop;
    }
    else {	// grab the x-y pos if browser is NS
        cx = ev.pageX;
        cy = ev.pageY;
    }

    cx = cx - canvas_in_object_fix.offsetLeft;
    cy = cy - canvas_in_object_fix.offsetTop;
    if (cx < 0){cx = 0;}
    if (cy < 0){cy = 0;}
    if (cx > CANVAS_IN_OBJECT_WIDTH) {cx = CANVAS_IN_OBJECT_WIDTH};
    if (cy > CANVAS_IN_OBJECT_HEIGHT){cy = CANVAS_IN_OBJECT_HEIGHT};

    cx = Math.floor(cx);
    cy = Math.floor(cy);
    return [cx,cy];
}

// bold point when in proximity
function proximity_sensor(x, y) {
    for (var i = 0; i < start_x.length; i++) {
        if (Math.abs(x - start_x[i]) <= sensitivity && Math.abs(y - start_y[i]) <= sensitivity) {
            bold_the_point(start_x[i], start_y[i], bold_pt_size);
            // console.log("near: [" + i + "] (" + x + ", " + y + ")");
            return [i, 0];
        } else if (Math.abs(x - finish_x[i]) <= sensitivity && Math.abs(y - finish_y[i]) <= sensitivity) {
            bold_the_point(finish_x[i], finish_y[i], bold_pt_size);
            // console.log("near: [" + i + "] (" + x + ", " + y + ")");
            return [i, 1];
        }
    }
    return [-1, -1];
}

// highlight line when in proximity
function proximity_sensor_for_line(x, y) {
    for (var i = 0; i < start_x.length; i++) {
        var slope = ((finish_y[i] - start_y[i]) * 1.0) / ((finish_x[i] - start_x[i]) * 1.0);
        // console.log("slope: " + slope);
        // calculate distance from line
        var dx = finish_x[i] - start_x[i];
        var dy = finish_y[i] - start_y[i];
        var distance = Math.abs(dx * (start_y[i] - y) - dy * (start_x[i] - x)) / Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));
        var x1 = Math.min(start_x[i], finish_x[i]);
        var x2 = Math.max(start_x[i], finish_x[i]);
        var y1 = Math.min(start_y[i], finish_y[i]);
        var y2 = Math.max(start_y[i], finish_y[i]);
        if(distance <= sensitivity * 2 && x1 <= x && x <= x2 && y1 <= y && y <= y2 ) {
            draw_line(start_x[i], start_y[i], finish_x[i],finish_y[i], lineComboNumber, true);
            return i;
        }
    }
    return -1;
}

// make the selected point become bigger
function bold_the_point(x, y, size){
    // circle version
    context_in_object.beginPath();
    context_in_object.arc(x, y, size, 0, 2 * Math.PI, false);
    context_in_object.fillStyle = pt_color;
    context_in_object.fill();
    context_in_object.lineWidth = size;
    context_in_object.strokeStyle = pt_color;
    context_in_object.stroke();

    // rect version
    /*
     context_in_object.fillStyle = pt_color;
     context_in_object.fillRect(x - bold_pt_size, y - bold_pt_size, 2 * bold_pt_size, 2 * bold_pt_size);
     */
}

// do something as the cursor moves across the canvas
function mousemove_canvas_rect(event){
    var xy = grab_xy(event);
    curr_x = xy[0];
    curr_y = xy[1];

    if (is_started[idx] && !is_finished[idx]) {
        // console.log(is_started[idx] + " " + is_finished[idx]);
        draw_canvas();
        draw_line(start_x[idx], start_y[idx], curr_x, curr_y, lineComboNumber, true);
    } else if (is_started[idx] && is_finished[idx]) {
        draw_canvas();
        proximity_sensor(curr_x, curr_y);
        proximity_sensor_for_line(curr_x, curr_y);
        if(is_mouse_down[idx]) {
            draw_canvas();
            if (is_modifying_start[idx]) {
                start_x[idx] = curr_x;
                start_y[idx] = curr_y;

            } else if (is_modifying_finish[idx]) {
                finish_x[idx] = curr_x;
                finish_y[idx] = curr_y;
            }
        }
    }
}

// do something when the left key of the mouse is hit
function mousedown_canvas_rect(event){
    if (!is_started[idx] && !is_finished[idx]) { 	// haven't started yet
        start_x[idx] = curr_x;
        start_y[idx] = curr_y;
        bold_the_point(start_x[idx], start_y[idx], bold_pt_size / 2);
        is_started[idx] = true;
        // console.log("Starting point set to : (" + start_x[idx] + ", " + start_y[idx] + ")");
    } else if (is_started[idx] && !is_finished[idx]) { 	// start point selected
        is_mouse_down[idx] = true;

    } else if (is_started[idx] && is_finished[idx]) {
        var ret = proximity_sensor(curr_x, curr_y);
        if(ret[0] >= 0) {
            idx = ret[0];
            if(ret[1] == 0) {
                is_mouse_down[idx] = true;
                is_modifying_start[idx] = true;

            } else if (ret[1]== 1) {
                is_mouse_down[idx] = true;
                is_modifying_finish[idx] = true;
            }
        } else if (ret[0] == -1) {
            var ret_line = proximity_sensor_for_line(curr_x, curr_y);
            if(ret_line > -1) {
                idx = ret_line;
                draw_canvas();
            } else if (ret_line == -1){
                add_to_this_dimension();
                start_x[idx] = curr_x;
                start_y[idx] = curr_y;
                bold_the_point(start_x[idx], start_y[idx], bold_pt_size / 2);
                is_started[idx] = true;
            }

        }
    }
}

// do something when the left key of the mouse is lifted
function mouseup_canvas_rect(event) {
    store_current_dimension(lineComboNumber);
    if (is_started[idx] && !is_finished[idx]) {
        is_mouse_down[idx] = false;
        finish_x[idx] = curr_x;
        finish_y[idx] = curr_y;
        is_finished[idx] = true;
        bold_the_point(finish_x[idx], finish_y[idx], bold_pt_size / 2);
        // console.log("Finishing point set to : (" + finish_x[idx] + ", " + finish_y[idx] + ")");

    }
    else if (is_started[idx] && is_finished[idx]) {
        is_mouse_down[idx] = false;
        is_modifying_start[idx] = false;
        is_modifying_finish[idx] = false;
    }
}


function draw_line(start_x, start_y, end_x, end_y, index, is_border) {

    index = index % lineCombo.length;


    context_in_object.beginPath();
    context_in_object.moveTo(start_x, start_y);
    context_in_object.lineTo(end_x, end_y);
    context_in_object.lineCap = 'round';


    if (is_border) { // border
        context_in_object.strokeStyle = lineCombo[index][1];
        context_in_object.lineWidth = line_width + 3.0;
        context_in_object.stroke();
    }

    // inner
    context_in_object.strokeStyle = lineCombo[index][0];
    context_in_object.lineWidth = line_width;
    context_in_object.stroke();
}

function reset_drawing() {
    is_started = [false];
    is_finished = [false];
    is_modifying_start = [false];
    is_modifying_finish = [false];
    is_mouse_down = [false];
    draw_canvas();
    console.log("Reset!");
}

function reset_all() {
    for(var i = 0; i < dimension_store.length; i++) {
        switch_to_dimension(i);
        for(var j = 0; j < dimension_store[i].start_x.length; j++) {
            remove_this_from_dimension(j);
        }
    }
    dimension_store = [];
    $(".dims .btn").each(function(index) {
        // initialize dimension store
        dimension_store.push({
            'start_x': [-1],
            'start_y': [-1],
            'finish_x': [-1],
            'finish_y': [-1],
            'is_started': [false],
            'is_finished': [false],
            'is_mouse_down': [false],
            'is_modifying_start': [false],
            'is_modifying_finish': [false]
        });
        // console.log(dimension_store);
    });

    idx = 0;
    lineComboNumber = 0;
    draw_canvas();
    console.log("Reset all!");
}

function switch_to_dimension(index) {
    start_x = dimension_store[index].start_x;
    finish_x = dimension_store[index].finish_x;
    start_y = dimension_store[index].start_y;
    finish_y = dimension_store[index].finish_y;
    is_started = dimension_store[index].is_started;
    is_finished = dimension_store[index].is_finished;
    is_mouse_down = dimension_store[index].is_mouse_down;
    is_modifying_start = dimension_store[index].is_modifying_start;
    is_modifying_finish = dimension_store[index].is_modifying_finish;
}

function store_current_dimension(index) {
    dimension_store[index].start_x = start_x;
    dimension_store[index].start_y = start_y;
    dimension_store[index].finish_x = finish_x;
    dimension_store[index].finish_y = finish_y;
    dimension_store[index].is_started = is_started;
    dimension_store[index].is_finished = is_finished;
    dimension_store[index].is_mouse_down = is_mouse_down;
    dimension_store[index].is_modifying_start = is_modifying_start;
    dimension_store[index].is_modifying_finish = is_modifying_finish;
}


$(document).ready(function() {
    init_canvas();

    // enable reset button
    $(".options .reset-annotation").click(function() {
        reset_drawing();
    });

    $(".options .reset-annotation-all").click(function() {
       reset_all();
    });

    // enable selection
    $(".dims .btn").each(function(index) {
        $(this).css('background-color', lineCombo[index % lineCombo.length][0]);
        $(this).css('color', lineCombo[index % lineCombo.length][2]);

        if(index == 0) {
            $(this).addClass("active");
        }

        // initialize dimension store
        dimension_store.push({
            'start_x': [-1],
            'start_y': [-1],
            'finish_x': [-1],
            'finish_y': [-1],
            'is_started': [false],
            'is_finished': [false],
            'is_mouse_down': [false],
            'is_modifying_start': [false],
            'is_modifying_finish': [false]
        });
        // console.log(dimension_store);


        $(this).click(function() {
            $(this).parent().find(".btn").each(function() {
                $(this).removeClass("active");
            });
            $(this).addClass("active");
            store_current_dimension(lineComboNumber);
            lineComboNumber = index;
            switch_to_dimension(lineComboNumber);
            idx = 0;
            draw_canvas();
        });
    });

    $('html').keyup(function(e){
        if((e.keyCode == 46) || (e.keyCode == 8)) {
            console.log('Delete Key Pressed');
            remove_this_from_dimension(idx);
            idx = 0;
            draw_canvas();
        }
    });

    $(".options .delete-current").click(function() {
        remove_this_from_dimension(idx);
        idx = 0;
        draw_canvas();
    });

});

