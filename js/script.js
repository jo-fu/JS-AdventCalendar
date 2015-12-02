var n = 24
var today = checkTime()

function openDoor(t){
	// Clicked door's day
	var day = parseInt(t.split("_")[1])

	// If it's not the day yet - don't open
	if(today>=day) $("#"+t).toggleClass("opendoor")
	else alert("meep")
	}

function checkTime(t){
	var start = 1448928000; // 1.Dez
	var oneday = 24*60*60;
	var now = parseInt(new Date().getTime()/1000);
	var today = parseInt((now-start)/oneday) + 1
	return today;
}

function createCalendar(){
	for(var i=1; i<=n; i++){
		var door = "<div class='day'>"

		// Load content only if day is there yet
				
		if(i>today) door += "<div id='content_" + i + "' class='content' style='background-image:url(img/nothn.jpg)'></div>"
		else door += "<div id='content_" + i + "' class='content' style='background-image:url(img/"+i+"dec.jpg)'></div>"
				
		// Door
		door += "<div id='tuer_" + i + "' class='tuerchen' onclick='openDoor(this.id)'>"+
				"<p>" + i + "</p>"+
				"</div>" +
			"</div>";

		$("body").append(door)
	}
}

$(document).ready(function() {
	console.log(today)
	createCalendar()
	

})