// creating app
var app = angular.module("contact",[]);

// creating form controller 

app.controller("contactCtrl", function($scope){

  // validating phone number
  $scope.nums = /^\+?\d{8,10}|\d{3}-\d{3}-\d{4}|\d{2}\s\d{2}\s\d{2}\s\d{2}|\d{4}\s\d{4}|\d{4}-\d{2}\s\d{2}\s\d{2}|\+\d{2}\s\d{3}-\d{3}-\d{3}|\d{2}-\d{3}\s\d{2}\s\d{2}$/;
  $scope.email= /^\S+@\S+\.\S+$/;
  $scope.submitForm = function(isValid) {
    alert("Form has been submitted")

  };
});
