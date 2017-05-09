angular.module('app', [])
.controller('appCtrl', function($scope, appFact) {
  appFact.reset($scope);

  $scope.current = 'cover';

  $scope.b1 = 'explain';
  $scope.b2 = 'pleasure';
  $scope.b3 = 'human';
  $scope.b4 = 'consequences';

  $scope.change = (type) => {
    console.log(type);
    $scope.current = type;
  }

  $scope.copy = () => {
    appFact.copy($scope.current);
  };

  $scope.reset = () => {
    appFact.reset($scope);
  };
})
.factory('appFact', function() {
  const copy = (type) => {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(() => `${$(`.${type}`).text()}`).select();
    document.execCommand("copy");
    $temp.remove();
  };

  const reset = (object) => {
    object.person = 'hiring manager';
    object.job = null;
    object.company = null;
    object.connection = null;
    object.skill1 = 'Javascript';
    object.skill2 = 'HTML';
    object.skill3 = 'CSS';
    object.tool1 = null;
    object.tool2 = null;
    object.framework = 'Angular';
    object.frameworkExplanation = null;
    object.personal1 = null;
    object.personal2 = null;
    object.personal3 = null;
    object.salutation = 'Best regards';
  };

  return {
    copy,
    reset,
  };
});
