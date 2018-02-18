/**
 * Created by swan on 15/9/22.
 */
var myFilter = angular.module('app.filter',[]);
app.filter({
    textEllipsis: function(){
        return function(value){
            if(value.length > 50){
                return value.slice(0,50)+'...';
            }else{
                return value;
            }
        }
    }
});