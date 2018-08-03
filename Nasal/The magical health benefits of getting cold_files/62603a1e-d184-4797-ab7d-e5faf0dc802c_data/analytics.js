(function (){

    var g = {
        ids: { 
                'breakout-box': 'UA-76044431-5',
            
                'counter': '',
            
                'grid': 'UA-76044431-38',
            
                'people-grid': 'UA-76044431-27',
            
                'pull-quote': 'UA-76044431-30',
            
                'puff': 'UA-76044431-8',
            
                'timeline': 'UA-76044431-4',
            
                'amazon-box': '',
            
                'animated-gif': 'UA-76044431-10',
            
                'animated-results': 'UA-76044431-11',
            
                'collection': 'UA-76044431-18',
            
                'car-lease-price': 'UA-76044431-17',
            
                'comparison-box': 'UA-76044431-19',
            
                'composite-image': 'UA-76044431-19',
            
                'embed': 'UA-76044431-21',
            
                'event-planner': 'UA-76044431-9',
            
                'f1-results': 'UA-76044431-22',
            
                'finance-gadget': 'UA-76044431-23',
            
                'finance-widget': 'UA-76044431-23',
            
                'flow': 'UA-76044431-41',
            
                'formation-builder': 'UA-76044431-37',
            
                'graphic-uploader': 'UA-76044431-7',
            
                'icon-graph': 'UA-76044431-12',
            
                'image-editor': '',
            
                'interactive-map': 'UA-76044431-6',
            
                'line-graph': '',
            
                'matrix': 'UA-76044431-24',
            
                'mind-changer': 'UA-76044431-25',
            
                'mini-widget-grid': 'UA-76044431-13',
            
                'number-quote': '',
            
                'parody-picture': 'UA-76044431-26',
            
                'phake-phisher': 'UA-76044431-28',
            
                'postcode-stats': 'UA-76044431-29',
            
                'quote-tool': '',
            
                'responsive-image': 'UA-76044431-39',
            
                'results-bar': 'UA-76044431-14',
            
                'revealer': '',
            
                'scraping-counter': '',
            
                'scrolling-timeline': 'UA-76044431-31',
            
                'shareable-scorecard': 'UA-76044431-32',
            
                'squad-selector': 'UA-76044431-33',
            
                'stock-and-digicurrencies': '',
            
                'table': 'UA-76044431-34',
            
                'team-grid': 'UA-76044431-35'
             },
        type: $('#particle').attr('data-widget-type'),
        title: $('#particle').attr('data-widget-title'),
        articleTitle: '',
        articleURL: '',
        articlePage: '',
        embedded: 0,

        init: function(){
            if(g.ids[g.type]){
                g.track(g.ids[g.type]);

                if(g.embedded){
                    g.customEvents(g.type);
                }
            }
        },

        getQueryVariable: function(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split('&');

            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split('=');
                if (decodeURIComponent(pair[0]) == variable) {
                    return decodeURIComponent(pair[1]);
                }
            }
        },

        track: function(id){
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
                    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            g.articleURL = ((g.getQueryVariable('ref')) ? g.getQueryVariable('ref').split('?')[0] : '');
            g.articleTitle = g.getQueryVariable('title');
            g.articlePage = ((g.getQueryVariable('ref')) ? g.getQueryVariable('ref').replace(/^.*\/\/[^\/]+/, '') : '');

            if(g.articleURL !== '' && g.articleTitle !== '' && g.articlePage !== '') {
                g.embedded = 1;
                ga('create', id, 'auto');

                // Dimensions:
                // dimension1 - Particle Type
                // dimension2 - Particle Title
                // dimension3 - Article Title
                // dimension4 - Article URL
                // dimension5 - Article Page

                if(g.type){ ga('set', 'dimension1', g.type); }
                if(g.title){ ga('set', 'dimension2', g.title); }
                if(g.articleTitle){ ga('set', 'dimension3', g.articleTitle); }
                if(g.articleURL){ ga('set', 'dimension4', g.articleURL); }
                if(g.articlePage){ ga('set', 'dimension5', g.articlePage); }

                ga('send', { hitType: 'pageview', title: g.articleTitle, location: g.articleURL, page: g.articlePage });
            }
        },

        customEvents: function(type){
            var el = {};

            switch (type) {

                // 'animated-gif'
                // 'breakout-box'
                // 'car-lease-price'
                // 'collection'
                // 'composite-image'
                // 'counter'
                // 'event-planner'
                // 'f1-results'
                // 'finance-gadget'

                case 'formation-builder':

                    // Events - UI Interaction:
                    //
                    // Shared on PLATFORM
                    // Shared Player - NAME - ID - TEAM
                    // Shared Team - TEAM
                    // Added at least one Player to the pitch - TEAM

                    el =  {
                        share: $('#particle .share a'),
                        addPlayer: $('#particle .players .player')
                    };

                    el.share.on("click", function(){
                        var platform = $(this).find('button').text();
                        var players = $('#particle .formation ul li');
                        var team = $('#particle').attr('data-team-clean');

                        ga('send', 'event', 'UI Interaction', 'Shared on ' + platform, 'Formation Builder');

                        $.each(players, function(i, v){
                            var name = $(v).find('h3').text();
                            var id = $(v).attr('data-id');
                            if ( name !== 'Player' ) ga('send', 'event', 'UI Interaction', 'Shared Player - ' + name + ' (' + id +  ( (team) ? ' - ' + team : '' )  + ')', 'Formation Builder');
                        });

                        if(team){
                            ga('send', 'event', 'UI Interaction', 'Shared Team - ' + team, 'Formation Builder');
                        }
                    });

                    el.addPlayer.on("click", function(){
                        var team = $('#particle').attr('data-team-clean');
                        var participation = $('#particle').attr('data-user-participation');
                        var complete = $('#particle').attr('data-user-formation-complete');

                        // fire participation event only once
                        if ( participation === 'false' ) {
                            $('#particle').attr('data-user-participation', 'true');
                            ga('send', 'event', 'UI Interaction', 'Added at least one Player to the pitch - ' + team, 'Formation Builder');
                        }

                        // fire formation complete event only once
                        setTimeout(function(){
                            var allAdded = $('#particle .formation-builder li.added').length === 11;
                            if ( allAdded && complete === 'false' ) {
                                $('#particle').attr('data-user-formation-complete', 'true');
                                ga('send', 'event', 'UI Interaction', 'Completed a formation - ' + team, 'Formation Builder');
                            }
                        },500);
                    });

                    break;
                // 'graphic-uploader'
                // 'icon-graph'
                // 'interactive-map'
                // 'matrix'
                // 'mind-changer'
                // 'mini-widget-grid'
                // 'parody-picture'
                // 'people-grid'
                // 'phake-phisher'
                // 'postcode-stats'
                // 'puff'
                // 'pull-quote'
                // 'scrolling-timeline'
                // 'shareable-scorecard'
                // 'squad-selector'
                // 'table'
                // 'timeline'
                // 'team-grid'

                case 'event-planner':

                    // Events - UI Interaction:
                    //
                    // Entered topic page
                    // Entered topic page - EVENT_NAME
                    // Entered category page
                    // Entered category page - CATEGORY_NAME
                    // Downloaded calendar
                    // Downloaded calendar - EVENT_NAME
                    // Downloaded entire diary

                    el =  {
                        topicLink: $('#particle .events .item footer h4 a'),
                        categoryLink: $('#particle .events .item footer h3 a'),
                        calendar: $('#particle .events .item header .calendar'),
                        allCalendar: $('#particle .download-all')
                    };

                    el.topicLink.on("click", function(){
                        var page = $(this).find('.title').text();

                        ga('send', 'event', 'UI Interaction', 'Entered topic page', 'Event Planner');
                        ga('send', 'event', 'UI Interaction', 'Entered topic page - ' + page, 'Event Planner');
                    });

                    el.categoryLink.on("click", function(){
                        var category = $(this).find('.category').text();

                        ga('send', 'event', 'UI Interaction', 'Entered category page', 'Event Planner');
                        ga('send', 'event', 'UI Interaction', 'Entered category page - ' + category, 'Event Planner');
                    });

                    el.calendar.on("click", function(){
                        var event = $(this).parent().parent().parent().find('footer .title').text();

                        ga('send', 'event', 'UI Interaction', 'Downloaded calendar', 'Event Planner');
                        ga('send', 'event', 'UI Interaction', 'Downloaded calendar - ' + event, 'Event Planner');
                    });

                    el.allCalendar.on("click", function(){
                        ga('send', 'event', 'UI Interaction', 'Downloaded entire diary', 'Event Planner');
                    });

                break;

                //case 'mind-changer':
                //    var el =  {
                //        start: {
                //            button: $('#particle .start button')
                //        },
                //        question: {
                //            button: $('#particle .question button')
                //        },
                //        social: {
                //            button: $('#particle .end button')
                //        }
                //    };
                //
                //    // Start
                //    el.start.button.on("click", function(){
                //        var answer = $(this).attr('class');
                //
                //        ga('send', 'event', 'Mind Changer test 5', 'Question 1: ' + answer , g.title, ((answer === 'yes') ? 1 : 0 ), { nonInteraction: true });
                //    });
                //
                //    // Questions
                //    el.question.button.on("click", function(){
                //        var answer = $(this).attr('class');
                //        var number = $(this).parent().parent().parent().parent().data("number") + 1;
                //
                //        ga('send', 'event', 'Mind Changer test 5', 'Question ' + number + ": "  + answer, g.title, ((answer === 'yes') ? 1 : 0 ), { nonInteraction: true });
                //    });
                //
                //    // Social
                //    el.social.button.on("click", function(){
                //        var answer = $(this).parent().attr('class');
                //
                //        ga('send', 'event', 'Mind Changer test 5', 'Shared on ' + ((answer === 'fb') ? 'Facebook' : 'Twitter' ), g.title, 1, { nonInteraction: true });
                //    });
                //
                //    // Changed Opinion
                //    window.addEventListener('decision-true', function () {
                //        ga('send', 'event', 'Mind Changer test 5', 'Decision: changed - on "' + g.title + "\"", g.title, 1, { nonInteraction: true });
                //    });
                //
                //    // Opinion Not Changed
                //    window.addEventListener('decision-false', function () {
                //        ga('send', 'event', 'Mind Changer test 5', 'Decision: not changed - on "' + g.title + "\"", g.title, 0, { nonInteraction: true });
                //    });
                //
                //    break;

                default:

            }
        }
    }

    g.init();

})();