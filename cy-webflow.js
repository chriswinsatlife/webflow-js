

function getLinkFromTagText(tagText) {
var slug = tagText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
return "<a class='sidebar-tag-link blue big-tag' href='/tag/" + slug + "'>" + tagText + "</a>";
}

function getLinkFromPaperText(paperText) {
var slug = paperText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
return "<a class='sidebar-tag-link blue big-tag' href='/paper/" + slug + "'>" + paperText + "</a>";
}

function getLinkFromProductText(productText) {
var slug = productText.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '');
return "<a class='sidebar-tag-link blue big-tag' href='/product/" + slug + "'>" + productText + "</a>";
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

$(".tag-array").each(addLinksToTagsStringElement);
$(".paper-array").each(addLinksToTagsStringElement);
$(".product-array").each(addLinksToProductsStringElement);
