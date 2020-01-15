// original credit for this snippet: https://github.com/brettpthomas


// This creates an all-lowercase, hypenated slug with no special characters for each string, and creates a link around each substring in the string separated by a comma

function getLinkFromTagText(tagText) {
var slug = tagText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '').replace(/ /g, "-").toLowerCase();
return "<a class='sidebar-tag-link blue big-tag' href='/tags/" + slug + "'>" + tagText + "</a>";
}

function getLinkFromPaperText(paperText) {
var slug = paperText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '').replace(/ /g, "-").toLowerCase();
return "<a class='sidebar-tag-link blue big-tag' href='/papers/" + slug + "'>" + paperText + "</a>";
}

function getLinkFromProductText(productText) {
var slug = productText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '').replace(/ /g, "-").toLowerCase();
return "<a class='sidebar-tag-link blue big-tag' href='/products/" + slug + "'>" + productText + "</a>";
}

function getLinkFromTacticText(tacticText) {
var slug = tacticText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '').replace(/ /g, "-").toLowerCase();
return "<a class='sidebar-tag-link blue big-tag' href='/tactics/" + slug + "'>" + tacticText + "</a>";
}

function besci1(bescitext) {
var slug = bescitext.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '').replace(/ /g, "-").toLowerCase();
return "<span class='sidebar-tag-link blue'" + bescitext + "</span>";
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

function besci2(bescistring) {
var linksList = bescistring.split(',').map(besci1);
return linksList.join(' ');
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

function besci3() {
    var bescistring = $(this).html();
    $(this).html(besci2(bescistring));
}


// This does all the stuff above to any strings within divs with the classes specified in quotes

$(".tag-array").each(addLinksToTagsStringElement);
$(".paper-array").each(addLinksToPapersStringElement);
$(".product-array").each(addLinksToProductsStringElement);
$(".tactic-array").each(addLinksToTacticsStringElement);
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
	var slug = txt1.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '').replace(/ /g, "-").toLowerCase();
	return "<span>"+ txt1 +"</span>";
  ;
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

// The classic conv function to slugify strings

var conv = function (str) {
    if (!str) {
        str = 'empty';
    }  return str.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, ' ')
				.replace(/, /g, ",")
				.replace(/ /g, "-")
			    .replace(/,/g, " ")
			    .toLowerCase()
    			.trim();
};
