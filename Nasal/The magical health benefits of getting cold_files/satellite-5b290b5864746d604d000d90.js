_satellite.pushAsyncScript(function(event, target, $variables){
  if(window.location.pathname == "/financial-services/retirement-solutions/equity-release-service/" || window.location.pathname == "/financial-services/retirement-solutions/" || window.location.pathname == "/financial-services/")
{

	if(window.location.pathname == "/financial-services/retirement-solutions/equity-release-service/")
	{
		var gscript = document.createElement('script');
		gscript.src = "https://www.googletagmanager.com/gtag/js?id=DC-6260248";
		gscript.async = 1;
		document.getElementsByTagName('body')[0].appendChild(gscript);

		window.dataLayerGT = window.dataLayerGT || [];
		function gtag(){dataLayerGT.push(arguments);}
		gtag('js', new Date());

		gtag('config', 'DC-6260248');
		
		window.addEventListener('message', function(e) {
			try {
				var message = JSON.parse(e.data);
				if (message.name) {
					if(message.name == "tmg-fs-rll-er-main-calculator")
					{
            
            fbq('track', 'AddPaymentInfo');
						
						gtag('event', 'conversion', {
							'allow_custom_scripts': true,
							'send_to': 'DC-6260248/drtvu0/teleg0+standard'
						});
  
						var img = document.createElement('img');
						img.src = 'https://ad.doubleclick.net/ddm/activity/src=6260248;type=drtvu0;cat=teleg0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?';
						img.width = '1';
						img.height = '1';
						img.style.display = 'none';
						document.getElementsByTagName('body')[0].appendChild(img);
						
					}
				}
			} catch (error) {}
		});
		
		allCallbacklinks = document.querySelectorAll("[href*='www.responsibleequityrelease.co.uk/telegraph-consultation'");
		for(i=0; i < allCallbacklinks.length; i++)
		{
		
			allCallbacklinks[i].addEventListener('click', function(){
				if(this.text.includes("Appointment"))
				{
          
          fbq('track', 'AddToCart');
          
					gtag('event', 'conversion', {
						'allow_custom_scripts': true,
						'send_to': 'DC-6260248/drtvu0/teleg000+standard'
					});
  
					var img = document.createElement('img');
					img.src = 'https://ad.doubleclick.net/ddm/activity/src=6260248;type=drtvu0;cat=teleg000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?';
					img.width = '1';
					img.height = '1';
					img.style.display = 'none';
					document.getElementsByTagName('body')[0].appendChild(img);
				
				}
				else if(this.text.includes("callback"))
				{	
          
          fbq('track', 'AddToWishlist');
          
					gtag('event', 'conversion', {
						'allow_custom_scripts': true,
						'send_to': 'DC-6260248/drtvu0/teleg00+standard'
					});
  
					var img = document.createElement('img');
					img.src = 'https://ad.doubleclick.net/ddm/activity/src=6260248;type=drtvu0;cat=teleg00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;npa=;ord=1?';
					img.width = '1';
					img.height = '1';
					img.style.display = 'none';
					document.getElementsByTagName('body')[0].appendChild(img);
				}
			})
		}
	
	}

	(function(windowAlias, documentAlias, trackerName) {
		if (!windowAlias[trackerName]) {
			windowAlias.GlobalAdalyserNamespace = windowAlias.GlobalAdalyserNamespace
					|| [];
			windowAlias.GlobalAdalyserNamespace.push(trackerName);
			windowAlias[trackerName] = function() {
				(windowAlias[trackerName].q = windowAlias[trackerName].q || []).push(arguments)
			};
			windowAlias[trackerName].q = windowAlias[trackerName].q || [];
			var nel = documentAlias.createElement("script"),
				fel = documentAlias.getElementsByTagName("script")[0];
			nel.async = 1;
			nel.src = "//c5.adalyser.com/adalyser.js?cid=telegraphequityrelease";
			fel.parentNode.insertBefore(nel, fel)
		}
	}(window, document, "adalyserTracker"));

	window.adalyserTracker("create", {
		campaignCookieTimeout: 15552000,
		conversionCookieTimeout: 604800,
		clientId: "telegraphequityrelease",
		trafficSourceInternalReferrers: [
			"^(.*\\.)?telegraph.co.uk$"
		]
	});
	window.adalyserTracker("trackSession", "lce1", {});
	
  window.addEventListener('message', function(e) {
		try {
			var message = JSON.parse(e.data);
			if (message.name) {
				if(message.name == "tmg-fs-rll-er-main-calculator")
				{
					window.adalyserTracker("trackEvent", "lce2", {},true);
				}
			}
		} catch (error) {}
	});

	allCallbacklinks = document.querySelectorAll("[href*='www.responsibleequityrelease.co.uk/telegraph-consultation'");
	for(i=0; i < allCallbacklinks.length; i++)
	{
		aText = "";
		allCallbacklinks[i].addEventListener('click', function(){
			if(this.text.includes("Appointment"))
			{
				aText = "Appointment";
			}
			else if(this.text.includes("callback"))
			{	
				aText = "Callback";
			}
			window.adalyserTracker("trackEvent", "lce3", {a4:aText},true);
		})
	}
}
});
