_satellite.pushAsyncScript(function(event, target, $variables){
  s._dlEventsInit = function() {
    var events = typeof dataLayer != 'undefined' && dataLayer.event || [];
	var actionName = "";
    for (var i = 0; i < events.length; i++) {
		switch (events[i]) {
			case "registrationComplete":
				actionName = "registration";
				break;
			case "subscriptionConfirmation":
				actionName = "subscription";
				break;
		}
	}
  
  var _tvq = window._tvq = window._tvq || [];
  (function() {
  	var u = (("https:" == document.location.protocol) ? "https://collector-2794.tvsquared.com/" : "http://collector-2794.tvsquared.com/");
    _tvq.push(['setSiteId', "TV-72270954-1"]);
    _tvq.push(['setTrackerUrl', u + 'tv2track.php']);
    _tvq.push([function() {
    	this.deleteCustomVariable(5, 'page')
   	}]);
    _tvq.push(['trackPageView']);
    var d = document,
        g = d.createElement('script'),
        s = d.getElementsByTagName('script')[0];
    g.type = 'text/javascript';
    g.defer = true;
    g.async = true;
    g.src = u + 'tv2track.js';
    s.parentNode.insertBefore(g, s);
	})();
	
	if(actionName != ""){
		uid= _satellite.getVar("TMG Cookie customerID");
		var _tvq = window._tvq = window._tvq || [];
		(function() {
			var session = {
				'user': uid
			};
			var actionname = actionName;
			var action = {
				'rev': '',
				'prod': '',
				'id': '',
				'promo': ''
			};

			var u = (("https:" == document.location.protocol) ? "https://collector-2794.tvsquared.com/" : "http://collector-2794.tvsquared.com/");
			_tvq.push(['setSiteId', "TV-72270954-1"]);
			_tvq.push(['setTrackerUrl', u + 'tv2track.php']);
			_tvq.push([function() {
				this.setCustomVariable(5, 'session', JSON2.stringify(session), 'visit')
			}]);
			_tvq.push([function() {
				this.setCustomVariable(5, actionname, JSON2.stringify(action), 'page')
			}]);
			_tvq.push(['trackPageView']);
			var d = document,
			g = d.createElement('script'),
			s = d.getElementsByTagName('script')[0];
			g.type = 'text/javascript';
			g.defer = true;
			g.async = true;
			g.src = u + 'tv2track.js';
			s.parentNode.insertBefore(g, s);
		})();
	}
}();
});
