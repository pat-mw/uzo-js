window.addEventListener("DOMContentLoaded", (event) => {
    splitTextIntoSpans();
    handleScrollAnimations();
    // animateHeadings();
    animateHeadingsAlternate();
    // Avoid flash of unstyled content
    gsap.set("[text-split]", { opacity: 1 });
});

// Link timelines to scroll position
function createScrollTrigger(triggerElement, timeline) {
    // Reset tl when scroll out of view past bottom of screen
    ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
            timeline.progress(0);
            timeline.pause();
        },
    });
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 60%",
        onEnter: () => timeline.play(),
    });
}

function splitTextIntoSpans() {
    // Split text into spans
    let typeSplit = new SplitType("[text-split]", {
        types: "words, chars",
        reduceWhiteSpace:false,
        tagName: "span",
    });
}

function handleScrollAnimations() {
    $("[words-slide-up]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), {
            opacity: 0,
            yPercent: 100,
            duration: 0.5,
            ease: "back.out(2)",
            stagger: { amount: 0.5 },
        });
        createScrollTrigger($(this), tl);
    });

    $("[words-rotate-in]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.set($(this).find(".word"), { transformPerspective: 1000 });
        tl.from($(this).find(".word"), {
            rotationX: -90,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.6 },
        });
        createScrollTrigger($(this), tl);
    });

    $("[words-slide-from-right]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".word"), {
            opacity: 0,
            x: "1em",
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.2 },
        });
        createScrollTrigger($(this), tl);
    });

    $("[letters-slide-up]").each(function (index) {
        // check if attribute has value
        let stagger = $(this).attr("letters-slide-up");
        if (stagger === "") {
            stagger = 0.6;
        } else {
            stagger = parseFloat(stagger);
        }

        let chars = $(this).find(".char");
        let tl = gsap.timeline({ paused: true });
        tl.fromTo(chars, {
            yPercent: 100,
            opacity: 0, // Start from opacity 0
        }, {
            yPercent: 0,
            opacity: 1, // Animate to opacity 1
            duration: 0.2,
            ease: "power1.out",
            stagger: { amount: stagger },
        });
        createScrollTrigger($(this), tl);
    });

    $("[letters-slide-down]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), {
            yPercent: -120,
            duration: 0.3,
            ease: "power1.out",
            stagger: { amount: 0.7 },
        });
        createScrollTrigger($(this), tl);
    });

    $("[letters-fade-in]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), {
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
            stagger: { amount: 0.8 },
        });
        createScrollTrigger($(this), tl);
    });

    $("[letters-fade-in-random]").each(function (index) {
        let tl = gsap.timeline({ paused: true });
        tl.from($(this).find(".char"), {
            opacity: 0,
            duration: 0.05,
            ease: "power1.out",
            stagger: { amount: 0.4, from: "random" },
        });
        createScrollTrigger($(this), tl);
    });

    $("[scrub-each-word]").each(function (index) {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: $(this),
                start: "top 90%",
                end: "top center",
                scrub: true,
            },
        });
        tl.from($(this).find(".word"), {
            opacity: 0.2,
            duration: 0.2,
            ease: "power1.out",
            stagger: { each: 0.4 },
        });
    });
}

function animateHeadings() {
    $("[fx-element='headingWrap']").each(function (index) {
        let wrap = $(this);
        let headings = $(this).find("[fx-element='header']");
        console.log(`found ${headings.length} headings`);

        let maxHeight = 0;
        headings.each(function () {
            let originalDisplay = $(this).css("display");
            if (originalDisplay === "none") {
                $(this).css({ display: "block", visibility: "hidden" });
            }
            let height = $(this).outerHeight(); // Include margin
            console.log('height: ' + height);
            if (height > maxHeight) {
                maxHeight = height;
            }
            if (originalDisplay === "none") {
                $(this).css({ display: "none", visibility: "" });
            }
        });
        
        console.log("Max heading height: " + maxHeight);
        wrap.css("height", maxHeight);

        let tl = gsap.timeline({ repeat: -1 });
        tl.set($(this), { opacity: 1 });
        headings.each(function (index) {
            // set display to block to avoid flicker
            $(this).css("display", "block");

            // for all but the first heading, set position to absolute top
            if (index > 0) {
                $(this).css("position", "absolute");
                $(this).css("top", "0");
                // rest should be auto (left,right,bottom)
                $(this).css("left", "auto");
                $(this).css("right", "auto");
                $(this).css("bottom", "auto");
            }

            if (index > 0) {
                tl.from($(this).find(".char"), {
                    opacity: 0,
                    duration: 1, // Increase the duration to slow down the animation
                    ease: "power1.out",
                    stagger: { amount: 1 }, // Increase the stagger amount to slow down the animation
                });
            }
            if (index < headings.length - 1) {
                tl.to(
                    $(this).find(".char"),
                    {
                        opacity: 0,
                        duration: 0.5, // Increase the duration to slow down the animation
                        ease: "power1.out",
                        stagger: { amount: 0.5 }, // Increase the stagger amount to slow down the animation
                    },
                    "<5" // Increase the delay before the animation starts
                );
            }
        });
    });
}

function animateHeadingsAlternate() {
    $("[fx-element='headingWrap']").each(function (index) {
        let wrap = $(this);
        let headings = $(this).find("[fx-element='header']");
        console.log(`found ${headings.length} headings`);

        // set heading parent height to the max height of all headings
        let maxHeight = 0;
        headings.each(function () {
            let originalDisplay = $(this).css("display");
            if (originalDisplay === "none") {
                $(this).css({ display: "block", visibility: "hidden" });
            }
            let height = $(this).outerHeight(); // Include margin
            console.log('height: ' + height);
            if (height > maxHeight) {
                maxHeight = height;
            }
            if (originalDisplay === "none") {
                $(this).css({ display: "none", visibility: "" });
            }
        });
        
        console.log("Max heading height: " + maxHeight);
        wrap.css("height", maxHeight);

        // animate headings
        let tl = gsap.timeline({ repeat: -1 });
        tl.set($(this), { opacity: 1 });
        headings.each(function (index) {
            // set display to block to avoid flicker
            $(this).css("display", "block");

            // for all but the first heading, set position to absolute top
            if (index > 0) {
                $(this).css("position", "absolute");
                $(this).css("top", "0");
                // rest should be auto (left,right,bottom)
                $(this).css("left", "auto");
                $(this).css("right", "auto");
                $(this).css("bottom", "auto");
            }

            // $("[words-slide-from-right]").each(function (index) {
            //     let tl = gsap.timeline({ paused: true });
            //     tl.from($(this).find(".word"), {
            //         opacity: 0,
            //         x: "1em",
            //         duration: 0.6,
            //         ease: "power2.out",
            //         stagger: { amount: 0.2 },
            //     });
            //     createScrollTrigger($(this), tl);
            // });
            // animate in everything except the first
            if (index > 0) {
                tl.from($(this).find(".word"), {
                    opacity: 0,
                    y: "1em",
                    duration: 0.6,
                    ease: "power2.out",
                    stagger: { amount: 0.6 },
                });
            }
            // animate out everything except the last
            if (index < headings.length - 1) {
                tl.to(
                    $(this).find(".word"),
                    {
                        opacity: 0,
                        y: "-0.1em",
                        duration: 0.6,
                        ease: "power2.out",
                        stagger: { amount: 0.6 },
                    },
                    "<5" // Increase the delay before the animation starts
                );
            }
        });
    });
}

