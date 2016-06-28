/**
 * Created by xiadong on 2016/6/28.
 */
define(function(require, exports, module) {

    var Test = require('component/test');

    var test = new Test('ttt1');

    exports.show = function() {

        test.alert();
        alert("aaa");

    }

});