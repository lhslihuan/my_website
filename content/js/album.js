/**
 * Created by LSH on 2015/2/7.
 */
define(function (require, exports, module) {
    module.exports = {
        init: function ($container) {
            this._spans = []; //通过this._spans[colIndex][rowIndex]访问
            this._colAmount = 20;
            this._rowAmount = 10;
            this._$container = $container;

            for (var colIndex = 0; colIndex < this._colAmount; colIndex++) {
                this._spans[colIndex] = [];
                for (var rowIndex = 0; rowIndex < this._rowAmount; rowIndex++) {
                    var $span = $("<span></span>");
                    this._spans[colIndex][rowIndex] = $span;

                    $span.css("width", $container.width() / this._colAmount +"px");
                    $span.css("height", $container.height() / this._rowAmount +"px");
                    $span.css("left", $container.width() / this._colAmount * colIndex + "px" );
                    $span.css("top", $container.height() / this._rowAmount * rowIndex + "px" );
                    $span.css("background-position", "-" + $span.css("left") + " -" + $span.css("top"));

                    $span.appendTo($container);
                }
            }
        },
        next: function (imgUrl, doneCallback) {
            var self = this;
            //新图
            this._$container.css("background-image", "url(" + imgUrl + ")");

            for (var colIndex = 0; colIndex < this._colAmount; colIndex++) {
                for (var rowIndex = 0; rowIndex < this._rowAmount; rowIndex++) {
                    var $span = this._spans[colIndex][rowIndex];
                    //通过闭包的形参保存当下的span 供setTimeout回调中使用
                    (function ($span, colIndex, rowIndex) {
                        setTimeout(function () {
                            $span.animate({opacity: 0}, "fast", function () {
                                //为了下一次再次使用
                                $span.css("opacity",1);
                                $span.css('background-image', "url(" + imgUrl + ")");
                                if (colIndex === (self._colAmount - 1 ) && rowIndex === (self._rowAmount - 1)) {
                                    doneCallback();
                                }
                            });
                        }, (colIndex + rowIndex) * 50);
                    })($span, colIndex, rowIndex);
                }
            }
        }
    };
});

