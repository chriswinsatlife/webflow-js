// original credit for this snippet: https://github.com/brettpthomas


// This creates an all-lowercase, hypenated slug with no special characters for each string, and creates a link around each substring in the string separated by a comma

	function getLinkFromTagText(tagText) {
		var slug = tagText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
				.replace(/ /g, "-")
				.toLowerCase();
		return "<a class='sidebar-tag-link blue big-tag' href='/tags/" + slug + "'>" + tagText + "</a>";
	}

function getLinkFromPaperText(paperText) {
	var slug = paperText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
			.replace(/ /g, "-")
			.toLowerCase();
	return "<a href='/papers/"+slug+"' class='margin-bottom help-category-card w-inline-block'><div class='_48'><img src='https://global-uploads.webflow.com/5df525c935688c0af50a9c57/5dfa8621f8d0d37b310dbb11_NoteIcon.png' alt=''></div><div class=feature-info-right'><div class='comma-space serif small-text-2' style='margin-left: 16px; margin-top: 4px;'>"+paperText+"</div></div></a>"
	;
}

function getLinkFromProductText(productText) {
	var slug = productText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
			.replace(/ /g, "-")
			.toLowerCase();
	return "<a class='sidebar-tag-link blue big-tag' href='/products/" + slug + "'>" + productText + "</a>";
}

function getLinkFromTacticText(tacticText) {
	var slug = tacticText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
			.replace(/ /g, "-")
			.toLowerCase();
	return "<div class='w-dyn-item w-col w-col-3'><a href='/tactics/"+slug+"' class='help-category-card vertical w-inline-block'><img src='https://global-uploads.webflow.com/5df525c935688c0af50a9c57/5e16948ccb9d510239dd0ed8_tbi-mark-dark%403x.png' width='42' alt='' class='image-7'><h5 class='heading-17'>"+tacticText+"</h5><div class='text-small-2 splitter w-condition-invisible'><span style='display: none;'>Products Go Here</span></div><div class='text-small-2 splitter'><span style='display: none;'>Papers Go Here</span></div></a></div>"
	;
}

function getLinkFromBehaviorText(behaviorText) {
	var slug = behaviorText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
			.replace(/ /g, "-")
			.toLowerCase();
	return "<a href='/behaviors/"+slug+"' class='help-category-card product-card tactic-card w-inline-block'><div class='feature-icon-left _48'><img src='https://global-uploads.webflow.com/5df525c935688c0af50a9c57/5e16948ccb9d510239dd0ed8_tbi-mark-dark%403x.png' alt='' class='image-8'></div><div class='feature-info-right'><div class='comma-space product-name tactic-name'>"+behaviorText+"</div></div></a>"
	;
}



function besci1(besciText) {
	var slug = besciText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
			.replace(/ /g, "-")
			.toLowerCase();
	return "<span class='besci-level blue "+slug+"'>" + besciText + "</span>";
}

// This separates the new link items into separate array items and rejoins them together, separating with a space

	function getLinksHtmlFromTagsString(tagsString) {
		var linksList = tagsString.split(',').map(getLinkFromTagText);
		return linksList.join(' ');
	}

function getLinksHtmlFromPapersString(papersString) {
	var linksList = papersString.split(',').map(getLinkFromPaperText);
	return linksList.join(' ');
}

function getLinksHtmlFromProductsString(productsString) {
	var linksList = productsString.split(',').map(getLinkFromProductText);
	return linksList.join(' ');
}

function getLinksHtmlFromTacticsString(tacticsString) {
	var linksList = tacticsString.split(',').map(getLinkFromTacticText);
	return linksList.join(' ');
}

function getLinksHtmlFromBehaviorString(behaviorssString) {
	var linksList = behaviorsString.split(',').map(getLinkFromBehaviorText);
	return linksList.join(' ');
}

function besci2(besciString) {
	var besciList = besciString.split(',').map(besci1);
	return besciList.join(' ');
}


// This wraps the link HTML around each item

	function addLinksToTagsStringElement() {
	    var tagsString = $(this).html();
	    $(this).html(getLinksHtmlFromTagsString(tagsString));
	}

function addLinksToPapersStringElement() {
    var papersString = $(this).html();
    $(this).html(getLinksHtmlFromPapersString(papersString));
}

function addLinksToProductsStringElement() {
    var productsString = $(this).html();
    $(this).html(getLinksHtmlFromProductsString(productsString));
}

function addLinksToTacticsStringElement() {
    var tacticsString = $(this).html();
    $(this).html(getLinksHtmlFromTacticsString(tacticsString));
}

function addLinksToBehaviorsStringElement() {
    var behaviorsString = $(this).html();
    $(this).html(getLinksHtmlFromBehaviorsString(behaviorsString));
}

function besci3() {
    var besciString = $(this).html();
    $(this).html(besci2(besciString));
}


// This does all the stuff above to any strings within divs with the classes specified in quotes

$(".tag-array").each(addLinksToTagsStringElement);
$(".paper-array").each(addLinksToPapersStringElement);
$(".product-array").each(addLinksToProductsStringElement);
$(".tactic-array").each(addLinksToTacticsStringElement);
$(".behavior-array").each(addLinksToTacticsStringElement);
$(".besci-array").each(besci3);


// This does some other cleaning up of ugly strings
                                    
$(".comma-space").text(function(i, val) {
    return val.replace(/,/g, ", ");
});

$(".comma-split").text(function(i, val) {
    return val.split(/,/g).join(" ");
});

$(".comma-amp").text(function(i, val) {
    return val.replace(/,/g, " & ");
});



// ↓ enter the string hack functions

function step1(txt1) {
    var slug = txt1.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
                    .replace(/ /g, "-")
                    .toLowerCase();
    return "<span>"+ txt1 +"</span>";
}

// This separates the new link items into separate array items and rejoins them together, separating with a space

function step2(txt2) {
	var txt3 = txt2.split(',').map(step1);
	return txt3.join(', ');
}

// This wraps the link HTML around each item

function step3() {
	var txt4 = $(this).html();
	$(this).html(step2(txt4));
}


$(".splitter").each(step3);
