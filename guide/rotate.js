/**
 * Created by LSH on 2015/1/25.
 */
define(function (require, exports, module) {
    /**
     * 角度转弧度
     * @param angle
     */
    function toRadian (angle) {
        return angle * (Math.PI /180);
    }
    module.exports = {
        toRadian: toRadian,
        rotate: function ($rotateBall, targetPosition, time, R) {
            var startPosition = 0;
            var distance = targetPosition - startPosition;
            var eachTickTime = 30;

            var totalCount = Math.round(time / eachTickTime);
            var count = 0;

            clearTimeout($rotateBall.timer);
            $rotateBall.timer = setInterval(function () {
                count++;

                var scale = count / totalCount;
                var cur = startPosition + distance * (1 - Math.pow(1 - scale, 3));

                var toLeft = R + R * Math.sin(toRadian(cur));
                var toTop = R - R * Math.cos(toRadian(cur));

                $rotateBall.css("left", toLeft + "px");
                $rotateBall.css("top", toTop + "px");

                if (count === totalCount) {
                    clearInterval($rotateBall.timer);
                }
            }, eachTickTime);
        }
    };
});
