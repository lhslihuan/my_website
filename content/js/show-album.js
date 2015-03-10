/**
 * Created by LSH on 2015/2/7.
 */
seajs.use(['./js/album'],
    function (album) {
        //var $allPic = $(".page2 ul li img");
        var iNow = 1;
        var $albumBox = $(".j_page2 .j_pic");
        var $nextButton = $(".j_page2 .j_next");
        album.init($albumBox);

        var isAnimating = false;
        function next () {
            if (isAnimating) {
                return;
            }
            isAnimating = true;
            iNow++;
            if (iNow === 9) {
                iNow = 1;
            }
            album.next("./img/page2img/" + iNow + ".jpg", function () {
                isAnimating = false;
            });
        }
        $nextButton.click(next);
        setInterval(next, 3000);
    });