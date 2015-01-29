/**
 * Created by LSH on 2015/1/25.
 */
define(function (require, exports, module) {
    exports.rotateShow = function (n, callback) {
        var $outCircle = $(".j_outer_circle"),
            time = 1000;
        for (var i = 0 ; i < n * 2; i++) {
            var $circleSpan = $("<span>");
            $circleSpan.css("backgroundImage", "url(" + "img/"+ 0 + i % n + ".jpg)");
            $circleSpan.addClass("rotate_circle");
            if (i >= n) {
                $circleSpan.addClass('top-layer');
            }
            $outCircle.append($circleSpan);

            //require("./rotate").rotate($circleSpan, 360 / n * (i % n) + 360, 1000, $outCircle.width() / 2);
            require("./rotate").rotate($circleSpan, 360 / n * (i % n) + (i >= n ? 360 : 0), time, $outCircle.width() / 2);
        }

        setTimeout(callback, time);
    };
});

