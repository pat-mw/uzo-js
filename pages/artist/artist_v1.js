$(document).ready(function () {
    setArtistBookingButton();
});

function setArtistBookingButton() {
    // Constructing the new URL
    var artistSlug = getArtistSlug();
    var newUrl = window.location.origin + "/agency?booking=" + artistSlug;

    // Update button's src attribute
    $('[fx-element="btn-artist-booking"]').attr("href", newUrl);
    // Open in new tab: set button's target to _blank
    $('[fx-element="btn-artist-booking"]').attr("target", "_blank");
}

function getArtistSlug() {
    var pathArray = window.location.pathname.split("/");
    return pathArray[pathArray.indexOf("artist") + 1]; // Assuming artist slug is next to 'artist' in the path
}
