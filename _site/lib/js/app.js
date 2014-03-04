(function($){
	var prototype = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function () {
			var main = prototype.mainMethods();
			main.setup();
			
			main.sanity();
		},
		'mainMethods' : function () {
		
			function sanityCheck() {
				console.log("you're wonderful keep up the good work")
			}
			
			return {
				setup: function () {
					fittype();
				},
            	sanity: function() {
            		sanityCheck();
            	}
			};
		}         
	};
	$(document).ready( function() {
		prototype.init();
	});
}(jQuery));