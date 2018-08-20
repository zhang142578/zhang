/**
 * Created by Administrator on 2018/8/14.
 */
var app=angular.module("myApp",["ngRoute"]);
app.filter("aaa",function(){
    return function(value,a,b){
        return value-a-b;
    }
})
app.config(["$routeProvider",function($routeProvider){
    $routeProvider.when("/",{templateUrl:"./m1.html"})
}])
app.service("myservice",function(){
    this.sortdata=function(){
    console.log(1);
}
})
app.factory("myclass",function(myservice,$http){
    return {
        ajax:function(){
            return $http({
                method:"get",
                url:"./data.txt",
                async:false
                }).then(function(res){return res.data})
        }
    }
})