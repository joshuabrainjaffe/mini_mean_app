app.factory('bookData', ['$http',function( $http ){
  return {
    get : function(){
     var self = this;
     $http.get('/chars').then(function( response ){
       self.chars = response.data;
     });
   },
  }]);
