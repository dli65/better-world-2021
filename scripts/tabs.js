function show(day) {
	if (day == "friday") {
		$("#friday_tab").addClass("selected_tab");
		$("#saturday_tab").removeClass("selected_tab");
		$("#sunday_tab").removeClass("selected_tab");

		$("#friday_schedule").css("display", "table");
		$("#saturday_schedule").css("display", "none");
		$("#sunday_schedule").css("display", "none");
	} else if (day == "saturday") {
		$("#friday_tab").removeClass("selected_tab");
		$("#saturday_tab").addClass("selected_tab");
		$("#sunday_tab").removeClass("selected_tab");

		$("#friday_schedule").css("display", "none");
		$("#saturday_schedule").css("display", "table");
		$("#sunday_schedule").css("display", "none");
	} else if (day == "sunday") {
		$("#friday_tab").removeClass("selected_tab");
		$("#saturday_tab").removeClass("selected_tab");
		$("#sunday_tab").addClass("selected_tab");

		$("#friday_schedule").css("display", "none");
		$("#saturday_schedule").css("display", "none");
		$("#sunday_schedule").css("display", "table");
	}
	console.log(day);
}