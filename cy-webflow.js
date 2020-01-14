// original credit for this snippet: https://github.com/brettpthomas

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



$(".tag-array").each(addLinksToTagsStringElement);
$(".paper-array").each(addLinksToPapersStringElement);
$(".product-array").each(addLinksToProductsStringElement);
$(".tactic-array").each(addLinksToTacticsStringElement);
