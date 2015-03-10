/**
 * Created by LSH on 2015/2/4.
 */
seajs.use([
    './js/date'
], function (date) {
    var $timeBox = $(".j_date .j_cur_time");
    date($timeBox);
});
