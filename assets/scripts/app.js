const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "html",
				weight: 12.3
			}, {
				text: "css",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "ReactJS",
				weight: 3
			}, {
				text: "PHP",
				weight: 9
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "C++",
				weight: 15
			}, {
				text: "C",
				weight: 7
			},{
				text: "R",
				weight: 10
			},{
				text:"NodeJS",
				weight: 8
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Software Developer.", "love everything about coding.", "solve complex problems.", " am a nature lover."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
