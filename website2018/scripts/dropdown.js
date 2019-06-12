function dropdown(id, id2) {
	if ($(id).hasClass("shown")) {
		$(id).css("display", "none");
		$(id).removeClass("shown");
	} else {
		$(id).css("display", "block");
		$(id).addClass("shown");
	}

	if ($(id).hasClass("shown")) {
		$(id2).addClass("shown");
	} else {
		$(id2).removeClass("shown");
	}
}