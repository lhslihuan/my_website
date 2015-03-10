/**
 * Created by LSH on 2015/2/7.
 */
seajs.use(['./js/album'],
    function (album) {
        //var $allPic = $(".page2 ul li img");
        var iNow = 0;
        var $albumBox = $(".j_page2 .j_pic");
        var $nextButton = $(".j_page2 .j_next");
        album.init($albumBox);

        $nextButton.click(function () {
            iNow++;
            debugger;
            album.next($albumBox);
        });
    });