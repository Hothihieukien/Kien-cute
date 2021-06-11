function live_newsSearch() {
	var x = document.getElementById("big-search");
	if (x.style.display == "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function live_newsCloseSearch () {
	var close = document.getElementById("big-search"); 
	  if (close.style.display == "block") {
		close.style.display = "none";
	} 
}

function live_newsSearchMobile() {
	var x = document.getElementById("big-search-mobile");
	if (x.style.display == "none") {
		x.style.display = "block";
	} else {
		x.style.display = "none";
	}
}

function live_newsCloseSearchMobile () {
	var close = document.getElementById("big-search-mobile"); 
	  if (close.style.display == "block") {
		close.style.display = "none";
	} 
}