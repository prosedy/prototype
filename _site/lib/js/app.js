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
			var $piece = $(".pf--done");
			var $cp = $(".pf__control");
			
			function processLinebreaks(text) {
				var check = /\n\n/g;
				return text.replace(check, "</p><p>");
			}
			
			function done(para) {
				$output.prepend("<div class='pf--done'><div class='pf__control'><button class='pf__edit'>edit</button><button class='pf__delete'>delete</button></div><p>" + processLinebreaks(para) + "</p><small>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</small></div>");
				$input.val("");
				$input.trigger("focus");
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
			
			function checkEnter(e, $element) {
				var keydown = e.which || e.keyCode;
				var currentText = $element.val();
				
				if (keydown === 13) {
					$element.val(currentText + "\n")
				} else {
					return;
				}
			}
			
			$(window).on('beforeunload', function(){
				return 'Save your changes!';
			});

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
			
			$("body").on("keydown", ".picture-frame", function(e) {
				checkEnter(e, $(this));
			});
		}         
	};
	$(document).ready( function() {
		prototype.init();
	});
}(jQuery));