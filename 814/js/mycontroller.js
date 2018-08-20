/**
 * Created by Administrator on 2018/8/14.
 */
app.controller("mycontroller",function($scope,$interval,$http,myservice,myclass){
    $scope.msg="123";
    $scope.count=0;
    $interval(function(){
        $scope.count++
    },1000)
    $scope.dataall=null;
    $http({
        method:"get",
        url:"./data.txt"
    }).then(function(res){
        $scope.dataall=res.data;
    })
    myservice.sortdata();
    myclass.ajax().then(function(res){
        $scope.txt=res;
    })

})