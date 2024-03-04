// Set Toastr options
toastr.options.progressBar = true; // Enable progress bar
toastr.options.timeOut = 3000; // Timeout in milliseconds
toastr.options.positionClass = "toast-bottom-center"; // Position bottom middle
toastr.options.showMethod = "fadeIn"; // Animation for showing toast messages
toastr.options.hideMethod = "fadeOut"; // Animation for hiding toast messages
// toastr.options.maxItems = 3; // Maximum number of toasts visible at one time

// --- Handle Window Load ---
window.onload = function () {
    checkActiveTabFromUrl();
    window.artistModalClick = artistModalClick;
    // Retrieve the requestedArtists array from localStorage
    // window.requestedArtists = JSON.parse(localStorage.getItem('requestedArtists')) || [];
    window.requestedArtists = [];
    checkArtistBookingFromUrl();
    updateCounter();
    handleFormArtistCards();
};

// --- Process Document Ready ----
$(document).ready(function () {
    handleOtherInputs();
    handleSectionArtistScroll();
    handleTabScroll();
    handleFormSectionsDynamic();
    prepareAutocompleteForm();
    prepareStatsSectionAnimation();
    prepareDuplicateTags();
    handleTagsWrapperDisplay();
});

// --- DOM Content Loaded ---
document.addEventListener("DOMContentLoaded", function () {
    prepateCMSLoadFunctions();
    textVenueAnimation();
    $("[form-first-btn-enabled]").hide();
});

// -- Check artist booking from URL query parameter ---
function checkArtistBookingFromUrl() {
  console.log("Checking artist booking from URL");
    // Get the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const booking = urlParams.get("booking");
    console.log("Booking:", booking);
    // If the query parameter is not null, add the artist to the requestedArtists array
    if (booking !== null) {
        // get all fx-element="artistLink" instances
        const artistLinks = $('[fx-element="artistLink"]');
        // loop through each artist link, search for [fx=element="artistSlug"] as a child, with text value equal to booking
        var matchFound = false;
        artistLinks.each(function() {
            const artistLink = $(this);
            const artistSlug = artistLink.find('[fx-element="artistSlug"]').text();
            if(artistSlug === booking) {
                console.log("Match found for artist:", artistSlug);
                matchFound = true;
                artistLink.trigger('mousedown');
                // open the booking form modal
                $('[fx-element="makeEnquiry"]')[0].click();
            }
        });

        if(!matchFound) {
          alert("Artist not found with slug: " + booking);
        }

        // clear query params without reloading page
        window.history.replaceState({}, document.title, window.location.pathname);
        
    }
}


// --- Check Active Tab from URL Hash ---
function checkActiveTabFromUrl() {
    // Get the hash part of the URL (e.g., #tab1=1&tab2=2)
    const hashParams = window.location.hash.slice(1).split("&");

    const allTabs = $("[tab]");

    console.log("All Tabs:", allTabs);

    allTabs.each(function () {
        const tabName = $(this).attr("tab");

        console.log("Checking Tab:", tabName);

        // Check if the hash params contain the current tabName
        if (hashParams.includes(tabName)) {
            // Click the tab if the tabName matches a hash param
            console.log("Clicking Tab:", tabName);
            $(this).click();
            // If you want to handle multiple matches, remove the return statement
            return false;
        }
    });
}

// --- Handle form 'other' inputs ----
function handleOtherInputs(input, otherInput) {
    // Hide all divs with attribute 'data-other-reveal' on document load
    $("[data-other-reveal]").hide();

    // Handle radio button change
    $("input[type=radio]").on("change", function () {
        // Hide all divs with attribute 'data-other-reveal'
        $("[data-other-reveal]").hide();

        // Get the group name of the selected radio button
        var groupName = $(this).attr("name");

        // Find the div with the corresponding data-other-reveal attribute
        var targetDiv = $('[data-other-reveal="' + groupName + '"]');

        // If the selected radio button's value is "Other", show the corresponding div
        if ($(this).val() === "Other") {
            targetDiv.show();
        }
    });
}

function handleSectionArtistScroll() {
    var sectionArtistFilters = $("#section-artist-filters");
    var speed = 1000; // px per second

    $("[scroll-to-artist-filters]").click(function () {
        var sectionTop =
            sectionArtistFilters.offset().top -
            4.5 * parseFloat($("html").css("font-size"));
        var distance = Math.abs($(window).scrollTop() - sectionTop);
        var duration = (distance / speed) * 1000; // convert to milliseconds

        // maximum duration of 2 seconds
        if (duration > 2000) {
            duration = 2000;
        }

        // minimum duration of 0.5 seconds
        if (duration < 500) {
            duration = 500;
        }

        $("html, body").animate(
            {
                scrollTop: sectionTop,
            },
            duration
        );
    });
}

// --- Handle Scroll on Tab Click ---
function handleTabScroll() {
    var hero = $("#hero");
    var tabsSectionOffset = $("#tabs-section-offset");
    $("[tab]").click(function () {
        // Get the offset of the #hero section
        var heroBottom =
            hero.offset().top +
            hero.outerHeight() +
            (parseFloat(tabsSectionOffset.css("margin-top")) || 0) +
            5;
        // Scroll to the adjusted bottom of the #hero section with easing
        $("html, body").animate(
            {
                scrollTop: heroBottom,
            },
            1000
        );
    });
}

// --- Handles New Artist Cards Loading (BG Color, Backup Image) ---
function prepateCMSLoadFunctions() {
    // function that checks and applies backup image if main immage is missing
    // Function to check and apply backup image
    function checkAndApplyBackupImage(element) {
        // Find the backup image source from the element
        var backupImage = element.querySelector("[data-image-backup]");
        var backupSrc = backupImage ? backupImage.getAttribute("src") : null;

        // Find images with the data-image attribute
        var images = element.querySelectorAll("[data-image]");
        var placeholderUrl =
            "https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";

        // check each image
        images.forEach(function (image) {
            var src = image.getAttribute("src");

            // Check if the image has already loaded
            if (image.complete && src !== placeholderUrl) {
                console.log("Image already loaded");
                return; // Skip applying backup source if image is already loaded
            }

            if (src === placeholderUrl) {
                console.log("found placeholder image");
                if (!backupSrc || backupSrc === placeholderUrl) {
                    console.log(
                        "backup undefined, unable to apply. backup: ",
                        backupSrc,
                        " src: ",
                        src
                    );
                    return;
                }
                image.setAttribute("src", backupSrc);
                console.log(`Applied backup image src: ${backupSrc}`);
            }
        });
    }

    // Function to set background color based on data-artist-type
    function setBackgroundColor(element, type) {
        console.log(`Setting background color for type: ${type}`);
        switch (type) {
            case "Visual Artist":
                element.style.backgroundColor = "#10225e";
                break;
            case "Musician":
                element.style.backgroundColor = "#a7612a";
                break;
            case "DJ":
                element.style.backgroundColor = "#326747";
                break;
            case "Band":
                element.style.backgroundColor = "#282906";
                break;
            case "Dance":
                element.style.backgroundColor = "#f0dfb4";
                break;
            case "Other":
                element.style.backgroundColor = "#812438";
                break;
            default:
                // Default color or logic for handling unknown type
                break;
        }

        // Call the function to check and apply backup image
        checkAndApplyBackupImage(element);
    }

    // Function to observe mutations and apply background color
    function observeMutations(mutationsList, observer) {
        mutationsList.forEach(function (mutation) {
            if (mutation.type === "childList") {
                console.log("new child detected");
                // New child nodes were added, apply background color
                mutation.addedNodes.forEach(function (parentNode) {
                    if (parentNode.nodeType === 1) {
                        // Select only direct children with 'data-artist-type'
                        var directChildren = parentNode.children;
                        for (var i = 0; i < directChildren.length; i++) {
                            var element = directChildren[i];
                            if (
                                element.nodeType === 1 &&
                                element.hasAttribute("data-artist-type")
                            ) {
                                console.log("setting background");
                                var attr_artistType =
                                    element.getAttribute("data-artist-type");
                                setBackgroundColor(element, attr_artistType);
                            }
                        }
                    }
                });
            }
        });
    }

    // run for initial nodes
    var initialNodes = document.querySelectorAll("[data-artist-type]");
    for (var i = 0; i < initialNodes.length; i++) {
        var element = initialNodes[i];
        var attr_artistType = element.getAttribute("data-artist-type");
        setBackgroundColor(element, attr_artistType);
    }

    // Select the target nodes based on the 'data-artist-collection' attribute
    var targetNodes = document.querySelectorAll("[data-artist-collection]");

    // Options for the observer
    var config = { childList: true };

    // Create a MutationObserver for each target node
    targetNodes.forEach(function (targetNode) {
        var observer = new MutationObserver(function (mutationsList, observer) {
            observeMutations(mutationsList, observer);
        });

        // Start observing the target node for configured mutations
        observer.observe(targetNode, config);
    });
}

// --- Handle Artist Modal Click ---
function artistModalClick(
    slug = "",
    name = "",
    type = "",
    image = "",
    imageBackup = "",
    spotifyEmbed = "",
    soundcloudEmbed = "",
    videoEmbed = "",
    spotifyLink = "",
) {
    let imageEl = $("[artist-modal-image]");
    let nameEl = $("[artist-modal-name]");
    let typeEl = $("[artist-modal-type]");
    let videoEmbedEl = $("[artist-modal-video-embed]");
    let videoIframeContainerEl = $("[artist-modal-video-embed-container]");
    let spotifyEmbedEl = $("[artist-modal-spotify-embed]");
    let soundcloudEmbedEl = $("[artist-modal-soundcloud-embed]");
    let bioEl = $("[artist-modal-bio]");
    let btnModalAddArtist = $("[btn-modal-add-artist]");
    let btnModalRemoveArtist = $("[btn-modal-remove-artist]");
    
    // Reset embeds
    // spotifyEmbedEl.attr("src", spotifyEmbedEl.attr("src"));
    // soundcloudEmbedEl.attr("src", "");
    videoEmbedEl.attr("srcdoc", "");

    var placeholderUrl =
        "https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";
    console.log(`opening artist modal for: ${name}`);
    var imageChoice = "";
    if (image === "" || image === placeholderUrl) {
        if (!imageBackup === "" || imageBackup === placeholderUrl) {
            imageChoice = imageBackup;
        } else {
            imageChoice = "";
        }
    } else {
        imageChoice = image;
    }

    console.log(`image choice: ${imageChoice}`);

    imageEl.attr("src", imageChoice);

    // handle embeds
    if (spotifyEmbed === "") {
        spotifyEmbedEl.hide();
    } else {
        console.log(`spotifyEmbed: ${spotifyEmbed}`);
        spotifyEmbedEl.attr("src", spotifyEmbed);
        spotifyEmbedEl.show();
    }

    if (soundcloudEmbed === "") {
        soundcloudEmbedEl.hide();
    } else {
        console.log(`soundcloudEmbed: ${soundcloudEmbed}`);
        soundcloudEmbedEl.show();
        soundcloudEmbedEl.attr("src", soundcloudEmbed);
    }

    nameEl.text(name);
    typeEl.text(type);

    // Handle Bio
    // need to pull bio from rich text field with attribute [artist-bio] = "slug"
    let selector = `[artist-bio="${slug}"]`;
    let bioExtracted = $(selector).text();

    console.log(`Bio: ${bioExtracted}`);

    bioEl.text(bioExtracted);

    // Handle Video Embed
    // Check if attr_videoId is set or empty
    if (videoEmbed !== "") {
        let attr_videoId = videoEmbed;
        // If attr_videoId is set, show the iframe container
        videoIframeContainerEl.show();
        // Set the srcdoc attribute for the iframe
        let srcDoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href="https://www.youtube.com/embed/${attr_videoId}?autoplay=0"><img src="https://img.youtube.com/vi/${attr_videoId}/hqdefault.jpg"><span>▶</span></a>`;
        // let srcDoc = `<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}.aspect-ratio-container{position:relative;padding-bottom:56.25%; /* 16:9 aspect ratio (9 / 16 * 100) */}.responsive-iframe{position:absolute;width:100%;height:100%;top:0;left:0;}</style><div class="aspect-ratio-container"><iframe src="https://www.youtube.com/embed/${attr_videoId}?autoplay=1" allowfullscreen class="responsive-iframe"></iframe></div>`;

        videoEmbedEl.attr("srcdoc", srcDoc);
    } else {
        // If attr_videoId is empty, hide the iframe container

        videoIframeContainerEl.hide();
    }

    // Remove any previously attached click event handlers
    btnModalAddArtist.off("click");
    btnModalRemoveArtist.off("click");

    // Add a click event handler using jQuery
    btnModalRemoveArtist.on("click", function () {
        console.log(`Removing artist: ${name} from booking form`);
        // Remove artist from requestedArtists
        removeArtist(slug);
        btnModalRemoveArtist.hide();
        btnModalAddArtist.show();
    });

    // Add a click event handler using jQuery
    btnModalAddArtist.on("click", function () {
        console.log(`Adding artist: ${name} to booking form`);
        // Add artist to requestedArtists
        addArtist(name, imageChoice, bioExtracted, type, slug);
        btnModalAddArtist.hide();
        btnModalRemoveArtist.show();
    });

    // Handle Remove Artist Button
    // Check if the artist is already in the array
    let artistExists = window.requestedArtists.some(
        (artist) => artist.slug === slug
    );

    if (artistExists) {
        btnModalAddArtist.hide();
        btnModalRemoveArtist.show();
    } else {
        btnModalAddArtist.show();
        btnModalRemoveArtist.hide();
    }

    // SHOW MODAL
    console.log(`clicking modal btn for: ${name}`);
    document.getElementById("artist-modal-open-btn").click();
}

// --- Handle Artist Request Variable ---

// Function to add an artist
function addArtist(name, image_url, bio, type, slug) {
    // Check if the artist is already in the array
    let artistExists = window.requestedArtists.some(
        (artist) => artist.slug === slug
    );

    if (artistExists) {
        toastr.error(`Artist: ${name} is already added to the booking form`);
    } else {
        window.requestedArtists.push({
            name: name,
            image_url: image_url,
            bio: bio,
            type: type,
            slug: slug,
        });
        updateCounter();
        syncFormWithRequestedArtists();
        handleFormArtistCards();

        toastr.success(`Added artist: ${name} to booking form`);
    }

    let radioButton = $('input[name="Type-of-Enquiry"][value="Artist Booking"]');
    radioButton.click();
}

// Function to remove an artist
function removeArtist(slug) {
    window.requestedArtists = window.requestedArtists.filter(
        (artist) => artist.slug !== slug
    );
    updateCounter();
    syncFormWithRequestedArtists();
    handleFormArtistCards();
    toastr.warning(`Removed artist from booking form`);
}

// Function to clear all artists
function clearArtists() {
    window.requestedArtists = [];
    updateCounter();
    syncFormWithRequestedArtists();
    handleFormArtistCards();
    toastr.warning(`Cleared all artists from booking form`);
}

// Function to sync form field with requestedArtists
function syncFormWithRequestedArtists() {
    let formFieldArtistRequests = $("[form-field-artist-requests]");
    let artistNames = window.requestedArtists.map((artist) => artist.name);
    formFieldArtistRequests.val(artistNames.join(", "));
}

// count number of selected artists
// Function to update the counter
function updateCounter() {
    let count = window.requestedArtists.length;
    let pills = $("[btn-agency-pill]");
    let pillTexts = $("[btn-agency-pill-text]");

    // Update the text in each pill
    pillTexts.text(count);

    // Show or hide the pills based on the count
    if (count > 0) {
        pills.css("display", "flex");
    } else {
        pills.css("display", "none");
    }

    // // Save the requestedArtists array to localStorage
    // localStorage.setItem('requestedArtists', JSON.stringify(window.requestedArtists));
}

// --- Form Artists Auto-Complete ---
// --- Function to get all artist names from CMS collection ---
// Get all the artist names from the document
let allDisplayedArtists = $("[artist-collection-item]")
    .map(function () {
        return $(this);
    })
    .get();

// --- Handle Form Sections Reveal / Hide ---
function handleFormSectionsDynamic() {
    // Handle 'clear' button click
    $("[fx-element='clearRequestedArtists']").on("click", function () {
        console.log("Clearing requested artists");
        clearArtists();
        $('[fx-element="agencyErrorWrapper"]').css('display', 'none');
        let radioButton = $('input[name="Type-of-Enquiry"][value="Event Services"]');
        radioButton.click();
        $("[form-first-btn]").hide();
        $("[form-first-btn-enabled]").show();
    });
    // Add an event listener to the radio group
    $('input[name="Type-of-Enquiry"]').change(function (event) {
        console.log("Type of Enquiry changed. value: ", $(this).val());
        let value = $(this).val();

        $('[fx-element="agencyErrorWrapper"]').css('display', 'none');

        if (value === "Artist Booking") {
            console.log("Artist Booking selected");
            $("[form-section-artist-bookings]").show();
            $("[form-section-event-services]").hide();
        } else if (value === "Event Services") {
            console.log("Event Services selected");
            $("[form-section-artist-bookings]").hide();
            $("[form-section-event-services]").show();
            // Check if the window.requestedArtists array contains any items
            if (window.requestedArtists.length > 0) {
                // Prevent the radio item from being checked
                event.preventDefault();

                // Display an error message
                $('[fx-element="agencyErrorWrapper"]').css('display', 'block');
                $('[fx-element="agencyErrorText"]').text('Error: Cannot select "Event Services" when there are artists in the booking form. Either remove the artists using the link below or select "Both" to proceed.');
                $("[form-first-btn]").show();
                $("[form-first-btn-enabled]").hide();
                return;
            }
        } else if (value === "Both") {
            console.log("Both selected");
            $("[form-section-artist-bookings]").show();
            $("[form-section-event-services]").show();
        }

        $("[form-first-btn]").hide();
        $("[form-first-btn-enabled]").show();
    });
}

// --- Text Venue Animation ---
function textVenueAnimation() {
    const words = document.querySelectorAll(".dynamic-text h3");
    let currentIndex = 0;

    function updateText() {
        words.forEach((word) => word.classList.remove("active"));
        words[currentIndex].classList.add("active");

        currentIndex = (currentIndex + 1) % words.length;
    }

    setInterval(updateText, 2000);
}

// --- Syncs artist cards in form with window.requestedArtists ---
function handleFormArtistCards() {
     // Clear the [form-artist-wrapper]
    $("[form-artist-wrapper]").empty();

    // For each artist in requestedArtists
    window.requestedArtists.forEach(function(artist) {
        // Make a copy of the element with attribute [form-artist-template]
        let template = $("[form-artist-template]").first().clone();

        // Remove the [form-artist-template] attribute from the copy
        template.removeAttr("form-artist-template");

        // Search within this copy for attributes and set their values
        template.find("[form-artist-template-image]").attr("src", artist.image_url);
        template.find("[form-artist-template-name]").text(artist.name);
        template.find("[form-artist-template-type]").text(artist.type);

        // Add event listener to remove button
        template.find("[form-artist-template-remove]").on("click", function() {
            removeArtist(artist.slug);
        });

        // Set display: block on the template
        template.css("display", "grid");

        // Append the template to the DOM
        $("[form-artist-wrapper]").append(template);

    });

    // Set display: none on the first template
    $("[form-artist-template]").first().css("display", "none");
}


// ---- Artist Form Auto-Complete ---- 
function prepareAutocompleteForm() {
    // Collection List Wrapper
    const listWrap = $('[fx-element="listWrap"]');
    // Search Input Field
    const searchBar = $('[fx-element="searchBar"]');
    // search items
    const searchItems = $('[fx-element="listItem"]');

    const placeholderUrl =
    "https://assets-global.website-files.com/plugins/Basic/assets/placeholder.60f9b1840c.svg";

    // Add artists to state on item click
    searchItems.find('[fx-element="artistLink"]').on('mousedown', function() {
        console.log('selected artist: ', $(this).find('[fx-element="artistName"]').text());
        
        // Get the artist details from the children of the clicked item
        const artistName = $(this).find('[fx-element="artistName"]').text();
        const artistType = $(this).find('[fx-element="artistType"]').text();
        const artistSlug = $(this).find('[fx-element="artistSlug"]').text();
        const artistImage = $(this).find('[fx-element="artistImage"]').attr('src');
        const artistImageBackup = $(this).find('[fx-element="artistImageBackup"]').attr('src');

        var selectedImage = "";
        if (artistImage === "" || artistImage === placeholderUrl) {
            if (artistImageBackup === "" || artistImageBackup === placeholderUrl) {
                selectedImage = "";
            } else {
                selectedImage = artistImageBackup;
            }
        } else {
            selectedImage = artistImage;
        }

        // Call the 'addArtist' function to add the artist to the selected artists
        addArtist(
            artistName,
            selectedImage,
            "",
            artistType,
            artistSlug
        );

        // clear search bar
        searchBar.val('');
        // all items visible
        searchItems.each(function() {
            $(this).css('display', 'block');
        });
    });

    // Search bar function
    searchBar.on('keyup', function() {
        const term = $(this).val().toLowerCase();

        searchItems.each(function() {
            const text = $(this).find('[fx-element="artistName"]').first().text();
            console.log('text:', text, 'term:', term, 'index:', text.toLowerCase().indexOf(term));
            if(text.toLowerCase().indexOf(term) != -1) {
                $(this).css('display', 'block');
            } else {
                $(this).css('display', 'none');
            }
        });
    });

    // Open list when search bar is focused
    searchBar.on('focusin', function() {
        listWrap.css({
            'maxHeight': '400px',
            'paddingTop': '36px',
            'paddingBottom': '24px'
        });
    });

    // Close list when search bar is focused
    searchBar.on('focusout', function() {
        listWrap.css({
            'maxHeight': '0',
            'paddingTop': '0',
            'paddingBottom': '0'
        });
    });
}


// --- Stats Section Animation ---
function prepareStatsSectionAnimation() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Adjust as needed, this controls when the animation triggers
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            startCounting(entry.target);
            observer.unobserve(entry.target);
        }
        });
    }, observerOptions);

    $('.percentage-count-animation').each(function() {
        observer.observe(this);
    });

    function startCounting(element) {
        $(element).prop('Counter', 0).animate({
        Counter: $(element).text()
        }, {
        duration: 4000,
        easing: 'swing',
        step: function(now) {
            $(element).text(Math.ceil(now));
        }
        });
    }
};

// --- Prepare Duplicate Tags ---
function prepareDuplicateTags(){
    // fetch all duplicate tags
    const duplicateTags = $('[fx-tag]');
    // loop through each tag
    duplicateTags.each(function() {
        var tag = $(this);
        // get tag value by attribute [fx-tag] value
        const tagValue = tag.attr('fx-tag');
        // find original tag with same value
        const tagTarget = $(`[fx-tag-target="${tagValue}"]`);

        // add event listener to tag, on click - click the original tag
        tag.on('click', () => {
            tagTarget.click();
        });
    });
}

// --- Handle Tags Wrapper Display ---
function handleTagsWrapperDisplay() {
    const tagsWrappers = $('.filters-tags-wrapper')

    tagsWrappers.each(function() {
        const wrapper = $(this);
        const wrapperWidth = wrapper.width();
        let childrenWidth = 0;

        // Calculate total width of all children
        wrapper.children().each(function() {
            childrenWidth += $(this).outerWidth(true); // Include margins
        });

        console.log('childrenWidth:', childrenWidth, 'wrapperWidth:', wrapperWidth);
        if(childrenWidth > wrapperWidth) {
            wrapper.css('justify-content', 'flex-start');
        } else {
            wrapper.css('justify-content', 'center');
        }
    });
}