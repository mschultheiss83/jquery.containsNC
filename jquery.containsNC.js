//@see https://css-tricks.com/snippets/jquery/make-jquery-contains-case-insensitive/

jQuery.expr[":"].containsNC = function(elem, i, match) {
    return jQuery(elem).text().toUpperCase().indexOf((match[3] || '').toUpperCase()) >= 0;
};
