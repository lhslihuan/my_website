/**
 * Created by LSH on 2015/1/25.
 */
define(function (require, exports, module) {
    exports.rotateShow = function (n) {
        var $outCircle = $(".j_outer_circle");
        for (var i = 0 ; i < n; i++) {
            var $circleSpan = $("<span>");
            $circleSpan.addClass("rotate_circle");
            $outCircle.append($circleSpan);

            require("./rotate").rotate($circleSpan, 360 / n * i, 1000, $outCircle.width() / 2);
        }
    };
});

