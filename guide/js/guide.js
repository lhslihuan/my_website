/**
 * Created by LSH on 2015/1/25.
 */
seajs.use(['./js/rotate-show'], function (rotateShow) {
    $(function () {
        var $innerCircle = $('.j_inner_circle');

        rotateShow.rotateShow(6, function () {
            $innerCircle.fadeIn();
        });
    })
});
