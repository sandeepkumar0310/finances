$(document).ready(function () {
    $.fn.jQuerySimpleCounter = function (options) {
        var settings = $.extend({
            start: 0,
            end: 100,
            easing: "swing",
            duration: 400,
            complete: ""
        }, options);

        var thisElement = $(this);
        $({ count: settings.start }).animate({ count: settings.end }, {
            duration: settings.duration,
            easing: settings.easing,
            step: function () {
                var mathCount = Math.ceil(this.count);
                thisElement.text(mathCount);
            },
            complete: settings.complete
        });
    };

    $("#number1").jQuerySimpleCounter({ end: 7, duration: 3000 });
    $("#number2").jQuerySimpleCounter({ end: 33, duration: 3000 });
    $("#number3").jQuerySimpleCounter({ end: 100, duration: 2000 });
    $("#number4").jQuerySimpleCounter({ end: 650, duration: 2500 });
});


// 
document.addEventListener('DOMContentLoaded', function() {
    let initialMinutes = 15; // Initial countdown time in minutes
    let initialSeconds = 0;  // Initial countdown time in seconds
    let minutes = initialMinutes;
    let seconds = initialSeconds;

    function updateTimer() {
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    function countdown() {
        if (minutes === 0 && seconds === 0) {
            // Reset the timer when it reaches zero
            minutes = initialMinutes;
            seconds = initialSeconds;
        } else {
            // Decrement the time
            if (seconds === 0) {
                minutes--;
                seconds = 59;
            } else {
                seconds--;
            }
        }

        updateTimer();
    }

    updateTimer(); // Initialize the timer display

    // Run the countdown function every second
    setInterval(countdown, 1000);
});