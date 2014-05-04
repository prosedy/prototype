(function($){
	var prototype = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function () {
			var main = prototype.mainMethods();
			main.setup();
			
			prototype.pictureFrame();
		},
		'mainMethods' : function () {
		
			function sanityCheck() {
				console.log("you're wonderful keep up the good work")
			}
			
			return {
				setup: function () {
					sanityCheck();
				},
      
			};
		},
		'pictureFrame' : function () {
			var $input = $(".picture-frame");
			var $output = $(".pf__finished");
			var time = formatTimeOfDay($.now());
			
			function done(para) {
				$output.append("<div class='pf--done'><p>" + para + "</p><small>" + time + "</small></div>");
				$input.val("");
				$input.trigger("focus");
			}
			
			function formatTimeOfDay(millisSinceEpoch) {
			  var secondsSinceEpoch = (millisSinceEpoch / 1000) | 0;
			  var secondsInDay = ((secondsSinceEpoch % 86400) + 86400) % 86400;
			  var seconds = secondsInDay % 60;
			  var minutes = ((secondsInDay / 60) | 0) % 60;
			  var hours = (secondsInDay / 3600) | 0;
			  return hours - 4 + (minutes < 10 ? ":0" : ":")
			      + minutes + (seconds < 10 ? ":0" : ":")
			      + seconds;
			}
			
			$input.on("change", function() {
				done($(this).val());
			});
		}         
	};
	$(document).ready( function() {
		prototype.init();
	});
}(jQuery));