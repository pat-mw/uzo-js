// Set Toastr options
toastr.options.progressBar = true; // Enable progress bar
toastr.options.timeOut = 3000; // Timeout in milliseconds
toastr.options.positionClass = "toast-bottom-center"; // Position bottom middle
toastr.options.showMethod = "fadeIn"; // Animation for showing toast messages
toastr.options.hideMethod = "fadeOut"; // Animation for hiding toast messages

// --- Handle Window Load ---
window.onload = function () {
    checkActiveTabFromUrl();
    window.artistModalClick = artistModalClick;
};

// --- Process Document Ready ----
$(document).ready(function () {
    handleOtherInputs();
    handleSectionArtistScroll();
    handleTabScroll();
});

// --- DOM Content Loaded ---
document.addEventListener("DOMContentLoaded", function () {
    prepateCMSLoadFunctions();
});

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

// --- Handle Scroll on Artist Tag click ---
function handleSectionArtistScroll() {
    var sectionArtistFilters = $("#section-artist-filters");
    $("[scroll-to-artist-filters]").click(function () {
        var sectionTop =
            sectionArtistFilters.offset().top -
            4.5 * parseFloat($("html").css("font-size"));
        $("html, body").animate(
            {
                scrollTop: sectionTop,
            },
            1000
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
) {
    let imageEl = $("[artist-modal-image]");
    let nameEl = $("[artist-modal-name]");
    let typeEl = $("[artist-modal-type]");
    let videoEmbedEl = $("[artist-modal-video-embed]");
	let videoIframeContainerEl = $("[artist-modal-video-embed-container]")
    let spotifyEmbedEl = $("[artist-modal-spotify-embed]");
    let soundcloudEmbedEl = $("[artist-modal-soundcloud-embed]");
    let bioEl = $("[artist-modal-bio]");
    let btnModalAddArtist = $("[data-btn-modal-add-artist]");
    let formFieldArtistRequests = $("[form-field-artist-requests]");

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
        spotifyEmbedEl.show();
        spotifyEmbedEl.attr("src", spotifyEmbed);
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
    // Add a click event handler using jQuery
    btnModalAddArtist.on("click", function () {
        console.log(`Adding artist: ${name} to booking form`);

        // Handle form field
        formFieldArtistRequests.val(
            formFieldArtistRequests.val() + `${name}, `
        );

        toastr.success(`Added artist: ${name} to booking form`);
    });

    // SHOW MODAL
    console.log(`clicking modal btn for: ${name}`);
    document.getElementById("artist-modal-open-btn").click();
}
