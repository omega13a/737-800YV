_satellite.pushAsyncScript(function(event, target, $variables){
  // outbrain tag
!function(_window, _document) {
var OB_ADV_ID=['0001ff357b682b80214ec6c264a0b6b621','00eaf20a66cd025f190318edba18d8089b','0046b21a3899dd4833c96401d2b29acc8e'];
if (_window.obApi) { return; }
var api = _window.obApi = function() {api.dispatch ? api.dispatch.apply(api, arguments) : api.queue.push(arguments);};api.version = '1.0';api.loaded = true;api.marketerId = OB_ADV_ID;api.queue = [];var tag = _document.createElement('script');tag.async = true;tag.src = '//amplify.outbrain.com/cp/obtp.js';tag.type = 'text/javascript';var script = _document.getElementsByTagName('script')[0];script.parentNode.insertBefore(tag, script);}(window, document);
obApi('track', 'PAGE_VIEW');

// event specific tags
var events = typeof dataLayer != 'undefined' && dataLayer.event || [];
if (events.length > 0) {
  for (var i = 0; i < events.length; i++) {
    switch (events[i]) {
      case 'registrationComplete':
				obApi('track', 'Event Registration');
        break;
    }
  }
}

});
