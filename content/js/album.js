/**
 * Created by LSH on 2015/2/7.
 */
define(function (require, exports, module) {
    module.exports = {
        init: function ($container) {
            var colAmount = 10;
            var rowAmount = 5;

            for (var colIndex = 0; colIndex < colAmount; colIndex++) {
                for (var rowIndex = 0; rowIndex < rowAmount; rowIndex++) {
                    var $span = $("<span></span>");

                    $span.css("width", $container.width() / colAmount +"px");
                    $span.css("height", $container.height() / rowAmount +"px");
                    $span.css("left", $container.width() / colAmount * colIndex + "px" );
                    $span.css("top", $container.height() / rowAmount * rowIndex + "px" );
                    $span.css("background-position", "-" + $span.css("left") + " -" + $span.css("top"));

                    $span.appendTo($container);
                }
            }
        },
        next: function () {

        }
    };

});

