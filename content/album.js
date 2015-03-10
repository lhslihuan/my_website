/**
 * Created by LSH on 2015/2/7.
 */
define(function (require, exports, module) {
    module.exports = function ($element) {
        var wide = 10;
        var high = 5;

       for (var r = 0; r < wide; r++) {
           for (var c = 0; c < high; c++) {
               var $eleSpan = $("<span></span>");
               alert(1)
               $eleSpan.css("width",'$element.width()/wide +"px"');
               $eleSpan.css("height",'$element.height()/high +"px"');
               $eleSpan.appendTo($element);

               console.log($eleSpan.width());
           }
       }


                //$(this).css("display","block");
                //this.addClass("active");
                //$(this).attr("src", "page2img/"+ i +".jpg");
                //$(this).css("background","red");
                //$(this).attr("display","block");
                //$(this).addClass("active");
        };
    }

