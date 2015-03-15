/**
 * Created by LSH on 2015/1/25.
 */
seajs.use(['./js/rotate-show'], function (rotateShowModule) {
    $(function () {
        var $innerCircle = $('.j_inner_circle');

        rotateShowModule.rotateShow(6, function () {
            $innerCircle.fadeIn();
        });
    })
});
