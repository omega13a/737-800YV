_satellite.pushAsyncScript(function(event, target, $variables){
  // taboola remarketing tag
var fireTaboolaRemarketing = function(tagType) {
    encodedURL = encodeURIComponent(window.location.href);
    var img = document.createElement('img');
    img.src = '//trc.taboola.com/' + tagType + '/log/3/mark?marking-type=retargeting&item-url=' + encodedURL;
    img.width = '0';
    img.height = '0';
    img.style.display = 'none';
    document.getElementsByTagName('body')[0].appendChild(img);
};

var fireTaboolaTag = function(actionType) {
    window._tfa = window._tfa || [];
    var script = document.createElement('script');
    script.src = '//cdn.taboola.com/libtrc/'+actionType+'/tfa.js';
    document.head.appendChild(script);
    _tfa.push({
        notify: 'action',
        name: 'conversion'
    });
};

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

if (actionName == "subscription") {
    fireTaboolaTag("thetelegraph-subscriptions-sc");
} else if(actionName == "registration"){
		fireTaboolaTag("thetelegraph-registrations-sc");
} else {
    fireTaboolaRemarketing('thetelegraph-subscriptions-sc');
	fireTaboolaRemarketing('thetelegraph-registrations-sc');
    if (window.location.pathname.startsWith('/travel/')){
      fireTaboolaRemarketing('thetelegraph-travel-sc');
    }
}

});
