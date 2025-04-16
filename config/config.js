
/* Config Sample
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 *
 * You can use environment variables using a `config.js.template` file instead of `config.js`
 * which will be converted to `config.js` while starting. For more information
 * see https://docs.magicmirror.builders/configuration/introduction.html#enviromnent-variables
 */
let config = {
	address: "localhost",	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/",	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
									// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],	// Set [] to allow all IP addresses
									// or add a specific IPv4 of 192.168.1.5 :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
									// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
									// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false,			// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "",	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "",	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",   // this variable is provided as a consistent location
			   // it is currently only used by 3rd party modules. no MagicMirror code uses this value
			   // as we have no usage, we  have no constraints on what this field holds
			   // see https://en.wikipedia.org/wiki/Locale_(computer_software) for the possibilities

	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 12,
	units: "metric",

	modules: [
		
		// {
		// 	disabled: false,
		//   module: "MMM-PopulationClock",
		//   position: "top_right",
		//   config: {
		// 	size: "large", // small, medium or large
		// 	textColor: "white", // only names, not codes
		//   }
		// },
		/*
			{
				module: "MMM-RadarPresence",
				position: "top_right",  // Choose the position where you want the info to appear
				config: {
					updateInterval: 1000,  // Check for radar data every second
				}
			},*/
		
			
				// {
				// 	module: 'MMM-IQAir',
				// 	position: "bottom_right",
				// 	isColored: true,
				// 	config: {
				// 		key: "34173938d45859c96df86d573e86fcbb"
						
				// 	}
				// },
			
		
		  
		{
			module: "MMM-Cursor",
			config: {
			  timeout: 1500
			}
		  },
		 
		  
			// {
			//   module: 'MMM-BackgroundSlideshow',
			//   position: 'fullscreen_below',
			//   config: {
			// 	imagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/'],
			// 	transitionImages: true,
			// 	randomizeImageOrder: true
			//   }
			// },
		{
			module: 'MMM-SmartTouch', 
			position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
			config: {
				buttonText: "Shutdown",     // Text for the shutdown button
				buttonStyle: {
				  width: "200px",           // Adjust the width of the button
				  height: "50px",           // Adjust the height of the button
				  backgroundColor: "red",   // Button background color (red for shutdown)
				  color: "white",           // Text color
				  fontSize: "20px",         // Font size of the button text
				  borderRadius: "10px",     // Rounded corners
				  textAlign: "center",      // Center the text inside the button
				  display: "flex",          // Use flexbox for centering
				  justifyContent: "center", // Center horizontally
				  alignItems: "center"      // Center vertically
				}
			  }
		  },
		  
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "IN Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						fetchInterval: 7 * 24 * 60 * 60 * 1000,
						symbol: "calendar-check",
						url: "https://ics.calendarlabs.com/33/8193029c/India_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openmeteo",
				type: "current",
				lat: 15.399944907606523, 
				lon: 75.07461823620389 
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			classes: "weather-forecast",
			config: {
				weatherProvider: "openmeteo",
				type: "forecast",
				lat: 15.399944907606523, 
				lon: 75.07461823620389
			}
		},
		{
			module: "newsfeed",
    position: "bottom_bar",
    config: {
        feeds: [
            {
                title: "Daily News",
                url: "https://timesofindia.indiatimes.com/rssfeedstopstories.cms"
            }
        ],
        showSourceTitle: true,
        showPublishDate: true,
        broadcastNewsFeeds: true,
        broadcastNewsUpdates: true
    }
},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
