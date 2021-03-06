// from http://stackoverflow.com/a/979995
var QueryString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to QueryString!
  var query_string = {};
  var query = window.location.search.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
	var pair = vars[i].split("=");
		// If first entry with this name
	if (typeof query_string[pair[0]] === "undefined") {
	  query_string[pair[0]] = pair[1];
		// If second entry with this name
	} else if (typeof query_string[pair[0]] === "string") {
	  var arr = [ query_string[pair[0]], pair[1] ];
	  query_string[pair[0]] = arr;
		// If third or later entry with this name
	} else {
	  query_string[pair[0]].push(pair[1]);
	}
  } 
  return query_string;
} ();

// my variant
var HashString = function () {
  // This function is anonymous, is executed immediately and 
  // the return value is assigned to HashString!
  var result = {};
  var query = window.location.hash.substring(1);
  var vars = query.split("&");
  for (var i=0;i<vars.length;i++) {
	var pair = vars[i].split("=");
		// If first entry with this name
	if (typeof result[pair[0]] === "undefined") {
	  result[pair[0]] = pair[1];
		// If second entry with this name
	} else if (typeof result[pair[0]] === "string") {
	  var arr = [ result[pair[0]], pair[1] ];
	  result[pair[0]] = arr;
		// If third or later entry with this name
	} else {
	  result[pair[0]].push(pair[1]);
	}
  } 
  return result;
} ();
