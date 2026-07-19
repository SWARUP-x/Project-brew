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
const Ctabtn = document.createElement("button")
Ctabtn.classList.add("cta-btn")
Ctabtn.textContent = "[ Explore Full Menu → ]"
CtaContent.appendChild(Ctabtn)

const popup = document.querySelector(".popup-model")
const overlay = document.querySelector(".overlay")

Ctabtn.addEventListener("click", () => {
    popup.classList.add("active")
    overlay.classList.add("active")

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