function TypeaheadHandler(inputId, data) {
    var that = this;
    var $input = $("#" + (inputId || "txtSearch"));
    var postData = data;

    var getDataByFieldValue = function(field, value, firstOnly) {
        var matches = [];
        value = (value || "").toLocaleLowerCase();
        if(value) {
            field = (field || "title");
            var fields = field.split('|');
            for (var i = 0; i < postData.length; i++) {
                if(fields.some(function(element, index, array){ return postData[i][element].toLowerCase().includes(value); })) {
                    matches.push(postData[i]);
                    if (firstOnly) {
                        break;
                    }
                }
            }
        }
        return matches;
    };

    that.getDataByUrl = function(url) {
        return getDataByFieldValue("url", url, true);
    };

    that.getData = function(substring) {
        return getDataByFieldValue("title|tags|keywords|excerpt", substring);
    };

    if($input && data) {
        $input.typeahead({
            autoSelect: false,
            source: data,
            displayText: function(item) { return item.title; },
            matcher: function(post) {
                var text = (this.query || "").toLowerCase();
                var match =
                    post.title.toLowerCase().includes(text) ||
                    post.tags.toLowerCase().includes(text) ||
                    post.keywords.toLowerCase().includes(text) ||
                    post.excerpt.toLowerCase().includes(text);
                return match;
            }
        }).change(function(){
            var $input = $(this);
            var current = $input.typeahead("getActive");
            if(current) {
                if(current.title.toLowerCase() == $input.val().toLowerCase()) {
                    // active element is exact match
                    //console.log(current);
                } else {
                    // active element is partial match
                }
            } else {
                // nothing is active
            }
        });
    }
}

var typeaheadHandler = typeaheadHandler || new TypeaheadHandler();

$(document).ready(function() {
	$.ajax({
	  dataType: "json",
	  url: BASE_URL + "/search.json",
	  data: null,
	  success: function (data) {
        typeaheadHandler = new TypeaheadHandler("txtSearch", data);
		if(whenSearchTermsReady) { whenSearchTermsReady(); }
	  }
	});
});
