(function() {
  angular.module('App')
  .component('kobe', {
    bindings: {
      name= '@'
    }
    templateUrl: './components/kobe/kobe.html',
    controller: KobeCtrl,
    controllerAs: 'kobe'
  });

  function KobeCtrl() {
    var kobe = this;
  }
})()