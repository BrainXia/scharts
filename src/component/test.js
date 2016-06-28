/**
 * Created by xiadong on 2016/6/28.
 */
define(function(){

    function Test(param){
        this.param = param;
    }

    Test.prototype = {

        alert : function(){
            alert(this.param);
        }

    }

    return Test;
})