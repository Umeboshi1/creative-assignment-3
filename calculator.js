$scope.updateOutput = function(btn) {
  if($scope.output == "0" || $scope.newNumber) {
    $scope.output = btn;
    $scope.newNumber = false;
  } else {
      $scope.output += String(btn);
  }
  $scope.pendingValue = toNumber($scope.output);
};

