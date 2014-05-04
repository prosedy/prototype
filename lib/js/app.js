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
			var $piece = $(".pf--done");
			var $cp = $(".pf__control");
			
			function done(para) {
				$output.prepend("<div class='pf--done'><div class='pf__control'><button class='pf__edit'>edit</button><button class='pf__delete'>delete</button></div><p>" + para + "</p><small>" + time + "</small></div>");
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
			
			function showControl(element) {
				element.find(".pf__control").fadeIn();
				return;
			}
			
			function hideControl(element) {
				element.find(".pf__control").fadeOut();
				return;
			}

			function editFinished($control) {
				var fText = $control.closest(".pf--done").find("p").text();
				$input.val(fText);
				$input.trigger("focus");
			}
			
			function deleteFinished($control) {
				$control.closest(".pf--done").remove();
			}

			$input.on("change", function() {
				done($(this).val());
			});
			
			$("body").on("mouseenter", ".pf--done", function() {
				showControl($(this));
			});
			
			$("body").on("mouseleave", ".pf--done", function() {
				hideControl($(this));
			});
			
			$("body").on("click", ".pf__edit", function() {
				editFinished($(this));
			});
			
			$("body").on("click", ".pf__delete", function() {
				deleteFinished($(this));
			});
		}         
	};
	$(document).ready( function() {
		prototype.init();
	});
}(jQuery));