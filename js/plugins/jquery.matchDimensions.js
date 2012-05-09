/**
* jQuery.matchDimensions - jQuery plugin that equalizes the heights and/or widths of a set of elements
* based on their tallest (or widest) sibling
* Released into the public domain
* Date: 15 July 2010
* @author Rich Sturim
* @version 1.0 -- http://github.com/rsturim/jquery-match-dimensions-plugin
*
* @optional plugin parameters
*    $("div").matchDimensions({
*        matchHeight: true,
*        matchWidth: false,
*        minHeight: 120,
*        minWidth: 120
*    });
*
* @example jQuery("div").matchDimensions();
* @example jQuery("div").matchDimensions({maxWidth:200, matchWidth:true, matchHeight:false});
*/

(function($) {
    $.fn.matchDimensions = function(customOptions) {
        var options = $.extend({}, $.fn.matchDimensions.defaultOptions, customOptions);
        var minHeight = options.minHeight;
        var minWidth = options.minWidth;
        var matchHeight = options.matchHeight;
        var matchWidth = options.matchWidth;

        this.each(function() {
            var h = $(this).height();
            var w = $(this).width();
            minHeight = (h > minHeight) ? h : minHeight;
            minWidth = (w > minWidth) ? w : minWidth;
        });
        if (matchHeight) { this.height(minHeight); }
        if (matchWidth) { this.width(minWidth); }
    };

    $.fn.matchDimensions.defaultOptions = {
        matchHeight: true,
        matchWidth: false,
        minHeight: 120,
        minWidth: 120
    };
})(jQuery);