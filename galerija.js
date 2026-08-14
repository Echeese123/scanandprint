const galleryItems = [

    // ================= MAJICE =================

    {
        image: "Galerija/tekstil1.jpg",
        category: "majice",
    },

    {
        image: "Galerija/tekstil2.jpg",
        category: "majice",
    },

    {
        image: "Galerija/tekstil3.jpg",
        category: "majice",
    },

        {
        image: "Galerija/tekstil4.jpg",
        category: "majice",
    },

        {
        image: "Galerija/tekstil5.jpg",
        category: "majice",
    },

    {
        image: "Galerija/tekstil6.jpg",
        category: "majice",
    },

    {
        image: "Galerija/tekstil7.jpg",
        category: "majice",
    },

    {
        image: "Galerija/tekstil8.jpg",
        category: "majice",
    },

    // ================= VEZ =================

    {
        image: "Galerija/vez1.jpg",
        category: "vez",
    },

    {
        image: "Galerija/vez2.jpg",
        category: "vez",
    },

    {
        image: "Galerija/vez3.jpg",
        category: "vez",
    },

    {
        image: "Galerija/vez4.jpg",
        category: "vez",
    },
    
    {
        image: "Galerija/promo3.jpg",
        category: "vez",
    },

    {
        image: "Galerija/promo4.jpg",
        category: "vez",
    },

    {
        image: "Galerija/vez5.jpg",
        category: "vez",
    },

    // ================= GRAVIRANJE =================

    {
        image: "Galerija/graviranje1.jpg",
        category: "graviranje",
    },

    {
        image: "Galerija/graviranje2.jpg",
        category: "graviranje",
    },

    {
        image: "Galerija/graviranje3.jpg",
        category: "graviranje",
    },

    {
        image: "Galerija/graviranje4.jpg",
        category: "graviranje",
    },
    
    {
        image: "Galerija/graviranje5.jpg",
        category: "graviranje",
    },
    
    {
        image: "Galerija/graviranje6.jpg",
        category: "graviranje",
    },


    // ================= DIGITALNA ŠTAMPA =================

    {
        image: "Galerija/stampa1.jpg",
        category: "stampa",
    },

    {
        image: "Galerija/stampa2.jpg",
        category: "stampa",
    },

    {
        image: "Galerija/stampa3.jpg",
        category: "stampa",
    },

    {
        image: "Galerija/stampa4.jpg",
        category: "stampa",
    },

    {
        image: "Galerija/stampa.jpg",
        category: "stampa",
    },


    // ================= PROMO =================

    {
        image: "Galerija/promo1.jpg",
        category: "promo",
    },

    {
        image: "Galerija/promo2.jpg",
        category: "promo",
    },

    {
        image: "Galerija/promo3.jpg",
        category: "promo",
    },
    
    {
        image: "Galerija/promo4.jpg",
        category: "promo",
    },
    

];


const galleryGrid =
    document.getElementById("galleryGrid");

const filters =
    document.querySelectorAll(".gallery-filter");


// =========================================================
// LIGHTBOX ELEMENTS
// =========================================================

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightboxImage");

const lightboxCaption =
    document.getElementById("lightboxCaption");

const lightboxClose =
    document.getElementById("lightboxClose");

const lightboxPrev =
    document.getElementById("lightboxPrev");

const lightboxNext =
    document.getElementById("lightboxNext");


let currentItems = [];

let currentIndex = 0;


// =========================================================
// DISPLAY GALLERY
// =========================================================

function displayGallery(filter = "all") {

    galleryGrid.innerHTML = "";


    currentItems =
        filter === "all"
            ? galleryItems
            : galleryItems.filter(
                item => item.category === filter
            );


    currentItems.forEach((item, index) => {

        const galleryItem =
            document.createElement("article");

        galleryItem.className =
            "gallery-item";


        galleryItem.innerHTML = `

        <div class="gallery-image">

         <img
            src="${item.image}"
            alt=""
            loading="lazy"
             >

        </div>

            `;


        galleryGrid.appendChild(galleryItem);


        // KLIK NA SLIKU

        galleryItem
            .querySelector(".gallery-image")
            .addEventListener("click", () => {

                openLightbox(index);

            });

    });

}


// =========================================================
// OPEN LIGHTBOX
// =========================================================

function openLightbox(index) {

    currentIndex = index;

    updateLightbox();

    lightbox.classList.add("active");

    document.body.classList.add("lightbox-open");

}


// =========================================================
// UPDATE LIGHTBOX
// =========================================================

function updateLightbox() {

    const item =
        currentItems[currentIndex];


    lightboxImage.src =
        item.image;

    lightboxImage.alt =
        item.title;

    lightboxCaption.textContent =
        item.title;

}


// =========================================================
// CLOSE
// =========================================================

function closeLightbox() {

    lightbox.classList.remove("active");

    document.body.classList.remove("lightbox-open");

    lightboxImage.src = "";

}


// =========================================================
// PREVIOUS
// =========================================================

function previousImage() {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex =
            currentItems.length - 1;

    }

    updateLightbox();

}


// =========================================================
// NEXT
// =========================================================

function nextImage() {

    currentIndex++;

    if (
        currentIndex >=
        currentItems.length
    ) {

        currentIndex = 0;

    }

    updateLightbox();

}


// =========================================================
// BUTTONS
// =========================================================

lightboxClose.addEventListener(
    "click",
    closeLightbox
);

lightboxPrev.addEventListener(
    "click",
    previousImage
);

lightboxNext.addEventListener(
    "click",
    nextImage
);


// =========================================================
// CLICK OUTSIDE
// =========================================================

lightbox.addEventListener(
    "click",
    (event) => {

        if (
            event.target === lightbox
        ) {

            closeLightbox();

        }

    }
);


// =========================================================
// KEYBOARD
// =========================================================

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox.classList.contains("active")
        ) {

            return;

        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowLeft") {

            previousImage();

        }


        if (event.key === "ArrowRight") {

            nextImage();

        }

    }
);


// =========================================================
// FILTERS
// =========================================================

filters.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filters.forEach(btn =>
                btn.classList.remove("active")
            );

            button.classList.add("active");


            displayGallery(
                button.dataset.filter
            );

        }
    );

});


// =========================================================
// INITIAL GALLERY
// =========================================================

displayGallery();