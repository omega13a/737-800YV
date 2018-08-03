_satellite.pushAsyncScript(function(event, target, $variables){
  var ictDcmIntegration = function() {
  var dcmCookie = window._ictt.push(['_retrieveItem', 'dcm_gid']);
  if (dcmCookie) {
    return dcmCookie;
  }
  if (!window._ictt.push(['_get', 'infinityDcmScriptLoaded'])) {
    window._ictt.push(['_dropScriptTag', 'cm.g.doubleclick.net/pixel?google_nid=infinity_dmp&google_cm']);
    window._ictt.push(['_set', 'infinityDcmScriptLoaded', true]);
  }
};

// transactionID is being set in Infinity Integration DTM rule

window._ictt = window._ictt || [];
window._ictt.push(['_setIgrp', '2594']);
window._ictt.push(['_enableAutoDiscovery']);
window._ictt.push(['_includeExternal', [{
  'from': 'ictDcmIntegration',
  'to': '_setCustomVar',
  'as': 'dcm_gid'
}]]);
window._ictt.push(['_track']);

var ict = document.createElement('script');
ict.type = 'text/javascript';
ict.async = true;
ict.src = '//ict.infinity-tracking.net/js/nas.v1.min.js';
var scr = document.getElementsByTagName('script')[0];
scr.parentNode.insertBefore(ict, scr);

});
