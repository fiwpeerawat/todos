
angular.module('todoApp' , [])
.service('todoService', function () {
  // body...
  var self = this

   self.todolist = [
	   
  ];

  self.list = function () {
    return self.todolist;
  }

  self.Add = function (contact) {
     self.todolist.push(contact);
  }
  self.Set = function(index){
	
		if( self.todolist[index].done  === true){
			self.todolist[index].done = false;
		}
		else {
		self.todolist[index].done = true;	
		}
	
  }


})
  .controller('ListtodoController', function($scope , todoService){

    $scope.todolist = todoService.list();
	
	$scope.setDone = function(contact){
		todoService.Set( todoService.todolist.indexOf(contact)  )
	}

  })
  .controller('Addtodocontroller' , function($scope , todoService) {


    $scope.save = function () {

      var contact = {}
		
		console.log($scope.inputtitle)
      if($scope.inputtitle != undefined && $scope.inputtitle != ''  ){

             contact = {
				
              title : $scope.inputtitle ,
              done : false ,

              }
              todoService.Add(contact);
      }



       $scope.inputtitle = '';

    }


  })
  
