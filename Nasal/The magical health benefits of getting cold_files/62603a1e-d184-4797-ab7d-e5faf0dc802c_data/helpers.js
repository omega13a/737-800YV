/////////////////// PostMessage Resizer ///////////////////
( function () {
    var widgetHeight = 0;
    var resizeTimer = 0;
    var wrapper = document.getElementById ( "particle" );
    var events = [ "resize", "orientationchange", "load" ];

    document.addEventListener ( 'mousedown', function () {
        window.parent.postMessage ( JSON.stringify ( {
            event: 'click',
            id: document.querySelector ( "html" ).getAttribute ( 'data-widget-id' )
        } ), '*' );
    }, true )

    function resizer () {
        var wh = wrapper.offsetHeight;
        if ( wh !== widgetHeight ) {
            widgetHeight = wh;
            window.parent.postMessage ( JSON.stringify ( {
                height: widgetHeight,
                id: document.querySelector ( "html" ).getAttribute ( 'data-widget-id' )
            } ), '*' );
            window.parent.postMessage ( {
                sentinel: 'amp',
                type: 'embed-size',
                height: Math.max ( 100, widgetHeight )
            }, '*' );
        }
    }

    events.forEach ( function ( e ) {
        window.addEventListener ( e, function () {
            clearTimeout ( resizeTimer );
            resizeTimer = setTimeout ( resizer, 250 );
        }, false );
    } );

    resizer ();

    window.addEventListener ( 'message', function ( message ) {
        var data;
        var elements;

        if ( message.origin.match ( /telegraph\.co\.uk/ ) ) {
            try {
                data = ( typeof message.data === "string" ) ? JSON.parse ( message.data ) : message.data;
                if ( data.channelId ) {
                    elements = document.querySelectorAll ( '[data-widget-section]' );
                    for ( var i = 0, len = elements.length; i < len; i++ ) {
                        elements[ i ].dataset.widgetSection = data.channelId;
                    }
                }
            } catch ( e ) {
            }
        }
    } );

    window.onload = function () {
        window.parent.postMessage ( JSON.stringify ( {
            analyticsEvent: {
                id: document.querySelector ( 'html' ).getAttribute ( 'data-widget-id' ),
                model: {
                    id: document.querySelector ( 'html' ).getAttribute ( 'data-widget-id' ),
                    title: document.getElementById ( 'particle' ).getAttribute ( 'data-widget-title' ),
                    type: document.getElementById ( 'particle' ).getAttribute ( 'data-widget-type' ),
                    version: document.getElementById ( 'particle' ).getAttribute ( 'data-widget-version' ),
                    action: 'load'
                }
            }
        } ), '*' );
    };

} ) ();