_satellite.pushAsyncScript(function(event, target, $variables){
  //s._eventbID = _satellite.getVar('TMG Eventbrite ID');
try {
  var updateELinks = function() {
    if (typeof s != 'undefined' && typeof s._eventbID != 'undefined') {
      var eventLinks = document.querySelectorAll('a[href*="eventbrite.co"]');
      for (var i = 0; i < eventLinks.length; i++) {
        var oldHref = eventLinks[i].getAttribute('href');
        if (new RegExp("\\?").test(oldHref)) {
			if(new RegExp("aff=").test(oldHref))
			{
				eventLinks[i].setAttribute('href', oldHref.replace(/(aff=.*);?/, 'aff=' + s._eventbID));
			}
			else{
				eventLinks[i].setAttribute('href', oldHref+"&aff="+s._eventbID);
			}
		}
		else
		{
			eventLinks[i].setAttribute('href', oldHref+"?aff="+s._eventbID);
		}
      }
    }
  };
  setTimeout(updateELinks, 2000);
} catch (e) {}
});
