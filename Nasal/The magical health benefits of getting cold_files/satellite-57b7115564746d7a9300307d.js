_satellite.pushAsyncScript(function(event, target, $variables){
  window.addEventListener('dtm:ooyala-player-initialised', function(e) {
    var oplayer = e.detail.oplayer;
    oplayer._status = 'start';
    oplayer.mb.subscribe('*', 'AdobeAnalytics', function(eventName) {
        var mediaName = "Ooyala|" + oplayer.getEmbedCode() + "|" + oplayer.getTitle().replace(/\|/g, ';');
        var mediaOffset = 0;
        var mediaLength = oplayer.parameters.actualDuration ? parseInt(oplayer.parameters.actualDuration) : Math.floor(oplayer.getDuration());
        var mediaPlayerName = 'Ooyala';
        var videoType = oplayer.parameters.videoType;
        var autoplay = oplayer.parameters.isAutoplay;
        switch (eventName) {
            case OO.EVENTS.WILL_PLAY_ADS:
                s.eVar70 = mediaName;
                s.eVar108 = videoType;
                s.eVar109 = autoplay;
                s.events = "event78";
                s.linkTrackVars = "events," + _satellite.getVar('TMG linkTrackVars');
                s.linkTrackEvents = "event78";
                s.tl(true, 'o', "Video Ad Start");
                break;
            case OO.EVENTS.ADS_PLAYED:
                s.eVar70 = mediaName;
                s.eVar108 = videoType;
                s.eVar109 = autoplay;
                s.events = "event79";
                s.linkTrackVars = "events," + _satellite.getVar('TMG linkTrackVars');
                s.linkTrackEvents = "event79";
                s.tl(true, 'o', "Video Ad End");
                break;
            case OO.EVENTS.PLAYING:
                if (!oplayer.adPlaying) {
                    if (oplayer._status == 'start') {
                        s.eVar108 = videoType;
                        s.eVar109 = autoplay;
                        s.Media.open(mediaName, mediaLength, mediaPlayerName);
                        s.Media.play(mediaName, mediaOffset);
                        oplayer._status = "play";
                    } else {
                        s.eVar108 = videoType;
                        s.eVar109 = autoplay;
                        mediaOffset = Math.floor(oplayer.getPlayheadTime());
                        s.Media.play(mediaName, mediaOffset);
                        oplayer._status = "play";
                    }
                }
                break;
            case OO.EVENTS.PAUSED:
                if (!oplayer.adPlaying && oplayer._status == 'play') {
                    s.eVar108 = videoType;
                    s.eVar109 = autoplay;
                    mediaOffset = Math.floor(oplayer.getPlayheadTime());
                    s.Media.stop(mediaName, mediaOffset);
                    oplayer._status = "pause";
                }
                break;
            case OO.EVENTS.PLAYED:
                if (!oplayer.adPlaying) {
                    s.eVar108 = videoType;
                    s.eVar109 = autoplay;
                    mediaOffset = Math.floor(oplayer.getPlayheadTime());
                    s.Media.stop(mediaName, mediaOffset);
                    s.Media.close(mediaName);
                }
                break;
        }
    });
});

});
