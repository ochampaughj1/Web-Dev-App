function deleteFunction() {
    var authorLinks = document.getElementsByClassName('link-container');
    while(authorLinks.length > 0) {
        authorLinks[0].parentNode.removeChild(authorLinks[0]);
    }
}