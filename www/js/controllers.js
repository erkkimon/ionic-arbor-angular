angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	var sys = arbor.ParticleSystem(1000, 400,1);
	sys.parameters({gravity:true});
	sys.renderer = Renderer("#viewport");
	var kuperkeikka = sys.addNode('kuperkeikka',{'color':'red','shape':'dot','label':'kuperkeikka', 'x': 0, 'y': -1});
	var tiikeri = sys.addNode('tiikeri',{'color':'green','shape':'dot','label':'tiikeri', 'x': 0, 'y': -2});
	sys.addEdge(kuperkeikka, tiikeri);

	setTimeout(function() {
		var voltti = sys.addNode('voltti',{'color':'blue','shape':'dot','label':'voltti', 'x': 0, 'y': -3});
	    sys.addEdge(tiikeri, voltti);
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
