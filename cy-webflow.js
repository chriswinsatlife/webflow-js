  var products = function (str) {
    if (!str) {
        str = 'empty';
    }
    var names = str.split(',');
    return str.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
        .replace(/ /g, "-")
        .replace(/,/g, " ")
        .toLowerCase()
        .trim()
        .split(' ')
        .map(function (slug, index) {
            return "<a class='sidebar-tag-link blue big-tag' href='/products/" + slug + "'>" + names[index] + "</a> ";
        })
        ;
};

$(".product-array").each(function() {
    var html = $(this).html();
    $(this).html(products(html));
});


 var papers = function (str) {
    if (!str) {
        str = 'empty';
    }
    var strings = str.split(',');
    return str.replace(/[!\"#$%&'\(\)\*\+\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
        .replace(/ /g, "-")
        .replace(/,/g, " ")
        .toLowerCase()
        .trim()
        .split(' ')
        .map(function (x, index) {
            return "<a class='help-category-card w-inline-block' href='/papers/" + x 
                        + '"><div class='48'><img src='"
                        + encodeURI('https://global-uploads.webflow.com/5df525c935688c0af50a9c57/5dfa8621f8d0d37b310dbb11_NoteIcon.png')
                        + "'></div><div class='feature-info-right'><div class='comma-space serif small-text-2'>"
                        + strings + "</div></div></a>";
        })
        ;
};

$(".paper-array").each(function() {
    var html = $(this).html();
    $(this).html(papers(html));
});
