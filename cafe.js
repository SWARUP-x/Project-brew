gsap.registerPlugin(ScrollToPlugin);

const menuContainer = document.querySelector(".MENU-cards")

function renderMenu(category) {
    menuContainer.innerHTML = "",
        category.forEach((item) => {
            console.log(item.name); const card = document.createElement("div")
            card.classList.add("MENU-card")

            menuContainer.appendChild(card)
            console.log(card)
            const img = document.createElement("img")
            img.classList.add("card-img")
            img.src = item.image
            img.alt = item.name
            card.appendChild(img)
            const title = document.createElement("h3")
            title.textContent = item.name;
            card.appendChild(title)
            const description = document.createElement("p")
            description.textContent = item.description
            card.appendChild(description)
            const footer = document.createElement("div")
            footer.classList.add("card-footer")
            const price = document.createElement("h4")
            price.classList.add("card-price")
            price.textContent = item.price
            footer.appendChild(price)
            const button = document.createElement("button")
            button.classList.add("card-btn")
            button.textContent = "View now"
            footer.appendChild(button)
            card.appendChild(footer)
        })
}
renderMenu(menu.favorites)

const buttons = document.querySelectorAll(".Category-btn");

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        buttons.forEach((btn) => {
            btn.classList.remove("active")
        }),
            button.classList.add("active")
        const category = button.dataset.category
        menuContainer.style.opacity = "0.2";
        menuContainer.style.transform = "translateY(8px)";

        setTimeout(() => {
            renderMenu(menu[category]);


            menuContainer.style.opacity = "1";
            menuContainer.style.transform = "translateY(0)";
        }, 300);
    })

})
const gallerytrack = document.querySelector(".gallery-track");

function renderGallery(gallery) {
    gallery.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("gallery-card")
        gallerytrack.appendChild(card)
        const img = document.createElement("img")
        img.classList.add("gallery-img")
        img.src = item.image
        img.alt = item.review
        card.appendChild(img)
        const reviewcard = document.createElement("div")
        reviewcard.classList.add("review-card")
        card.appendChild(reviewcard)
        const rating = document.createElement("h4")
        rating.classList.add("badge")
        rating.textContent = "⭐" + item.rating
        card.appendChild(rating)
        const review = document.createElement("h3")

        review.textContent = item.review
        reviewcard.appendChild(review)

    })

}
const doubleGallery = gallery.concat(gallery)
renderGallery(doubleGallery);


const MenuCta = document.querySelector(".full-menu-cta")
const CtaContent = document.createElement("div")
CtaContent.classList.add("cta-content")
MenuCta.appendChild(CtaContent)
const CtaHead = document.createElement("h2")
CtaHead.classList.add("cta-head")
CtaHead.textContent = "Discover Our Complete Collection ✨"
CtaContent.appendChild(CtaHead)
const Ctapara = document.createElement("p")
Ctapara.classList.add("cta-para")
Ctapara.textContent = "Explore seasonal drinks, exclusive desserts,and our entire café experience."
CtaContent.appendChild(Ctapara)
const Ctabtns = document.createElement("div")
Ctabtns.classList.add("cta-btns")
CtaContent.appendChild(Ctabtns)
const Ctabtn = document.createElement("button")
Ctabtn.classList.add("cta-btn")
Ctabtn.textContent = " Explore Full Menu → "
Ctabtns.appendChild(Ctabtn)
const orderBtn = document.createElement("a")
orderBtn.classList.add("order-btn")
orderBtn.textContent = "Order Online →"
orderBtn.href = "#"
Ctabtns.appendChild(orderBtn)

const popup = document.querySelector(".popup-model")
const overlay = document.querySelector(".overlay")
const previewBtn = document.querySelector(".preview-btn");

Ctabtn.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        e.preventDefault();
        window.location.href = "menu.html";
        return;
    }
    popup.classList.add("active")
    overlay.classList.add("active")
    previewBtn.classList.add("active")

})
const closepopup = document.querySelector(".close-btn")

closepopup.addEventListener("click", () => {
    popup.classList.remove("active")
    overlay.classList.remove("active")


})
const Contactlist = document.querySelector(".contact-list")
function renderContact(contact) {
    contact.forEach((item) => {

        const Concard = document.createElement("div")
        Concard.classList.add("con-card")
        Contactlist.appendChild(Concard)
        const Conicon = document.createElement("span")
        Conicon.classList.add("con-icon")
        Conicon.textContent = item.icon
        Concard.appendChild(Conicon)
        const Contitle = document.createElement("h2")
        Contitle.classList.add("con-title")
        Contitle.textContent = item.title
        Concard.appendChild(Contitle)
        const info = document.createElement("p")
        info.classList.add("con-info")
        info.textContent = item.info
        Concard.appendChild(info)
    })
}
renderContact(contact)


previewBtn.addEventListener("click", () => {
    console.log("clicked")
    popup.classList.remove("active");
    setTimeout(() => {
        gsap.to(window, {
            duration: 1,
            ease: "power2.inOut",
            scrollTo: {
                y: "#menu",
                offsetY: 90
            }
        });
    }, 50);
});

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a, .footer-links a,.mobile-nav a");

window.addEventListener("scroll", () => {

    let current = "";


    if (window.scrollY < 100) {
        current = "home";
    } else {


        const middle = window.scrollY + window.innerHeight / 3;

        sections.forEach((section) => {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;

            if (middle >= top && middle < bottom) {
                current = section.id;
            }
        });
        if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 5
        ) {
            current = "about";
        }
    }

    document.querySelectorAll(".nav-links a").forEach((link) => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${current}`
        );
    });

})
navLinks.forEach(link => {

    link.addEventListener("click", (e) => {

        e.preventDefault();

        const target = link.getAttribute("href");
        console.log("clicked", target);
        gsap.to(window, {
            duration: 0.9,
            scrollTo: {
                y: target,
                offsetY: 160
            },
            ease: "power2.inOut"
        });

    });

});
const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");

hamburger.addEventListener("click", () => {

    mobileNav.classList.toggle("active");

});
document.querySelectorAll(".mobile-nav a").forEach(link => {

    link.addEventListener("click", () => {

        mobileNav.classList.remove("active");

    });

});
document.addEventListener("click", (e) => {

    const menuBtn = e.target.closest(".cta-btn");

    if (!menuBtn) return;

    if (window.innerWidth <= 768) {
        e.preventDefault();
        e.stopImmediatePropagation();

        window.location.href = "menu.html";
    }

}, true);
const reserveBtn = document.querySelector(".nav-btn");

reserveBtn.addEventListener("click", () => {
    window.open(
        "https://wa.me/919XXXXXXXXX?text=Hi%2C%20I'd%20like%20to%20reserve%20a%20table.",
        "_blank"
    ); console.log("worked")
});