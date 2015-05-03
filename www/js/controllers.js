angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	var sys = arbor.ParticleSystem(1000, 400,1);
	sys.parameters({gravity:true});
	sys.renderer = Renderer("#viewport");
	var kuperkeikka = sys.addNode('kuperkeikka',{'color':'red','shape':'dot','label':'kuperkeikka'});
	var lentokuperkeikka = sys.addNode('lentokuperkeikka',{'color':'green','shape':'dot','label':'lentokuperkeikka'});
	sys.addEdge(kuperkeikka, lentokuperkeikka);

	setTimeout(function() {
		var voltti = sys.addNode('voltti',{'color':'blue','shape':'dot','label':'voltti'});
	    sys.addEdge(lentokuperkeikka, voltti);
	}, 2000);
})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
