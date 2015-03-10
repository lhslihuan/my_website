/**
 * Created by LSH on 2015/2/7.
 */
seajs.use(['./album'],
    function (album) {
        //var $allPic = $(".page2 ul li img");
        var iNow = 0;
        var $albumBox = $(".page2 .pic");
        var $nextButton = $(".page2 div input");
        $nextButton.click(function () {
            iNow++;
            debugger;
            album($albumBox);
        });
    });