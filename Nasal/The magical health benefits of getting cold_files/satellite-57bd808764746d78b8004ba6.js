_satellite.pushAsyncScript(function(event, target, $variables){
  var trackExitLink = function() {
    var href =  this.href;
    s.events = '';
    s.eVar142 =  href.substr(0, 255);
    s.linkTrackEvents = '';
    s.linkTrackVars = 'events,eVar142,' + _satellite.getVar('TMG linkTrackVars');
    s.tl(this, 'e', this.href);

};
var links = document.links;
for (var i = 0; i < links.length; i++) {
    if (links[i].hostname.length && links[i].hostname.indexOf('telegraph.co.uk') == -1) {
        links[i].addEventListener('click', trackExitLink);
    }
}

});
