/**
 * Created by LSH on 2015/2/4.
 */
define(function (require, exports, module) {
    /**
     * @param $element {object} 显示时间的dom对应的jQuery对象
     */
    module.exports = function ($element) {
        var timer = null;
        function addZero(num) {
            if(num < 10) {
                return "0" + num;
            }else{
                return num;
            }
        }
        function refreshTime () {
            var currentDate = new Date();
            var hours = currentDate.getHours();
            var minutes = currentDate.getMinutes();
            $element.html(addZero(hours) + ":"+ addZero(minutes));
        }
        timer = setInterval(refreshTime,1000);
        refreshTime();
    };
});