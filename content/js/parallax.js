/**
 * Created by LSH on 2015/2/3.
 */
$(function () {
    $(document).scroll(function () {
        var $layers = $(".j_scene .j_layer");
        var scrollTop = $(document).scrollTop();
        $layers.each(function (index) {
            var $layer = $(this);
            var scale = 0.98;
            $layer.css("top", scrollTop * (scale - scale / $layers.length * index) + "px");
        });
    });
});