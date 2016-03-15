var i = 0;

window.setInterval(function() {
		var text = "Hello World!";

		var heading = document.getElementsByTagName("h1")[0];
		heading.innerText = text.substring(0, i);
		i++;

		if (i == text.length+1) i = 0;
}, 500);