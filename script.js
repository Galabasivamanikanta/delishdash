// --- COOKIE HELPERS ---

// Function to set a cookie
function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie
function getCookie(name) {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Function to delete a cookie
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

// --- LOCAL STORAGE HELPERS ---

// Function to save data to local storage
function setLocalData(key, value) {
    let dataAsString = JSON.stringify(value);
    localStorage.setItem(key, dataAsString);
}

// Function to get data from local storage
function getLocalData(key) {
    let data = localStorage.getItem(key);
    if (data !== null) {
        return JSON.parse(data);
    } else {
        return null;
    }
}

// Function to scroll to Explore Menu section
function ViewMenubar() {
    let element = document.getElementById("exploreMenuSection");
    element.scrollIntoView({ behavior: 'smooth' });
}

// Data for menu categories 
let menuData = {
    "Non-Veg Starters": [
        { name: "Chicken Tikka", restaurant: "Tandoori Nights", price: "250", rating: "4.8", image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=600&q=80" },
        { name: "Fish Fry", restaurant: "Coastal Delights", price: "300", rating: "4.5", image: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Indian_Style_Fish_Fry.jpg" },
        { name: "Mutton Kebab", restaurant: "Royal Grill", price: "350", rating: "4.7", image: "https://upload.wikimedia.org/wikipedia/commons/5/57/Mutton_Seekh_Kebabs.jpg" }
    ],
    "Veg Starters": [
        { name: "Paneer 65", restaurant: "Paneer Paradise", price: "180", rating: "4.5", image: "https://upload.wikimedia.org/wikipedia/commons/2/26/Paneer_65_plate.jpg" },
        { name: "Veg Manchurian", restaurant: "Indo-Chinese Hub", price: "150", rating: "4.2", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
        { name: "Crispy Corn", restaurant: "Corn Corner", price: "140", rating: "4.5", image: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=600&q=80" }
    ],
    "Soups": [
        { name: "Hot & Sour Soup", restaurant: "Soup Station", price: "120", rating: "4.1", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80" },
        { name: "Sweet Corn Soup", restaurant: "Soup Station", price: "110", rating: "4.3", image: "https://www.kitchensanctuary.com/wp-content/uploads/2023/06/Chicken-and-Sweetcorn-Soup-square-FS.jpg" },
        { name: "Manchow Soup", restaurant: "Dragon Bowl", price: "130", rating: "4.6", image: "https://images.unsplash.com/photo-1603105037880-880cd4edfb0d?w=600&q=80" }
    ],
    "Fish & Sea food": [
        { name: "Grilled Salmon", restaurant: "Ocean Fresh", price: "550", rating: "4.9", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
        { name: "Prawns Masala", restaurant: "Coastal Delights", price: "450", rating: "4.7", image: "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80" },
        { name: "Fish Curry", restaurant: "Fisherman's Wharf", price: "400", rating: "4.4", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" }
    ],
    "Main Course": [
        { name: "Butter Chicken", restaurant: "Pind Balluchi", price: "320", rating: "4.8", image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&q=80" },
        { name: "Paneer Butter Masala", restaurant: "Shanti Sweets", price: "280", rating: "4.6", image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&q=80" },
        { name: "Mutton Rogan Josh", restaurant: "Kashmir House", price: "450", rating: "4.9", image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&q=80" }
    ],
    "Noodles": [
        { name: "Hakka Noodles", restaurant: "Wok Hei", price: "180", rating: "4.3", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=600&q=80" },
        { name: "Schezwan Noodles", restaurant: "Dragon Bowl", price: "200", rating: "4.5", image: "https://www.cookwithmanali.com/wp-content/uploads/2021/08/Schezwan-Noodles-1014x1536.jpg" },
        { name: "Chicken Noodles", restaurant: "Wok Hei", price: "220", rating: "4.6", image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=600&q=80" }
    ],
    "Salads": [
        { name: "Greek Salad", restaurant: "Green Garden", price: "150", rating: "4.4", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" },
        { name: "Caesar Salad", restaurant: "Green Garden", price: "180", rating: "4.5", image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=600&q=80" },
        { name: "Fruit Salad", restaurant: "Frutta", price: "140", rating: "4.2", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80" }
    ],
    "Desserts": [
        { name: "Gulab Jamun", restaurant: "Sweet Treats", price: "80", rating: "4.8", image: "https://images.unsplash.com/photo-1589119908995-c6837fa14848?w=600&q=80" },
        { name: "Ice Cream", restaurant: "Cold Zone", price: "100", rating: "4.5", image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUSExIWFRUVFRUXFhUXFxcYGRUWFxUXFhUXFRUYHSggGBolHRUVITEhJSkrLy4uFx8zODMtNygtLisBCgoKDg0OFxAQFy0dHR0tLS0tLS0tLS0tLS0rLSstKystLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0rLS0tLf/AABEIALEBHQMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBAUGBwj/xABAEAABAwIEAwUHAQYFAwUAAAABAAIRAyEEEjFBBVFhBiJxgZETMqGxWDf8UgcUI0Lh8VNicpKyFYKiJDODk8L/xAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAdEQEBAQEAAwEBAQAAAAAAAAAAARECEiExA0FR/9oADAMBAAIRAxEAPwDxROnhJaQySdMgSSSSBJJQnhAkkoToEknTgIGTwnATwoBhKFIGowxFQ5UsqsCmnbSmw+LXvy8U0xWyoSFZcyDG4239ELmIYrwlCmLEBaqiOEoRkJiEAJIoTQgZMnSQMkkkgSSSSBIgUKJA+ZLMhTqB0kklQoSTp0UMJQiToYGEoTwlCIaE8J4TgIpgE4CIBEGqBmhSNYiYxdh2K7D1sa4PPcw4dDqh1MaimD7x2nQeULNuNSOd4TwatiH+zoUnVHartNGg5uOjR1JC9J4L+yZuUOxdYh2vs6UW6Go4XPgPMrv8FgaGDpinQpBjZuBdzjoHPcbuPUrQMkX5dIXG/pvx0nDncB2L4dR93CtcRvVmqfR5IHkFtUw0CGMDWjRoAAALQANAocPhmUWMpU25WCGNDR7vjzJvJ5lS0nuzEEaHTpGoXn6611kxUxboLGRmMi5HMj4K9XOo0IuPsAlUgHQyRryhDUqe8JBsL+cXCzJioPaZe7c3G+g3tsFWqgEHcADnc2uRtBT16DXObUDrtvaInl8EOKpzAFnEe8DHhfx20UUOMGocbwOp1Gm0wquLxDpcAyGCBpFo29VHisQ8PHtSAwNguBMEkibazbw0UrCHB" },
        { name: "Brownie with Ice Cream", restaurant: "Dessert Parlour", price: "180", rating: "4.9", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80" }
    ],
    "Today's Special": [
        { name: "Pongal", restaurant: "Traditional Sweets", price: "120", rating: "4.9", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Ven_Pongal_with_cashew.jpg" },
        { name: "Haleem", restaurant: "Royal Grill", price: "250", rating: "4.8", image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?w=600&q=80" },
        { name: "Paratha Chicken", restaurant: "Pind Balluchi", price: "280", rating: "4.7", image: "https://images.unsplash.com/photo-1626074353765-517a681e40be?w=600&q=80" },
        { name: "Fish Fry", restaurant: "Coastal Delights", price: "300", rating: "4.5", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
        { name: "Bamboo Chicken", restaurant: "Forest Flavors", price: "350", rating: "4.9", image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&q=80" }
    ]
};

// Function for Today's Special button
function showTodaySpecial() {
    showMenuDetails("Today's Special");
}

// GLOBAL VARIABLES
let currentSelectedItem = null;
let currentQuantity = 1;

// Use cookies for session management now
let loginSession = getCookie("delishDashSession");
let isLoggedIn = loginSession !== null;

// Use the helper to get saved data
let cart = getLocalData("delishDashCart");
if (cart === null) {
    cart = [];
}

let orderHistory = getLocalData("delishDashHistory");
if (orderHistory === null) {
    orderHistory = [];
}

// This runs when the page is loaded
window.onload = function () {
    updateCartUI();
    if (cart.length > 0) {
        let floatingCart = document.getElementById("floatingCart");
        if (floatingCart) floatingCart.classList.remove("d-none");
    }
    updateLoginButton();

    // Check if user has already accepted/declined cookies
    if (!getCookie("cookies_consent")) {
        let banner = document.getElementById("cookieBanner");
        if (banner) banner.classList.remove("d-none");
    }
};

function acceptCookies() {
    setCookie("cookies_consent", "accepted", 30); // Valid for 30 days
    let banner = document.getElementById("cookieBanner");
    if (banner) banner.classList.add("d-none");
}

function dismissCookies() {
    let banner = document.getElementById("cookieBanner");
    if (banner) banner.classList.add("d-none");
}

function updateLoginButton() {
    let btn = document.getElementById("loginNavBtn");
    let userSect = document.getElementById("userNameSect");
    let userLabel = document.getElementById("userDisplayName");

    if (btn && userSect && userLabel) {
        if (isLoggedIn) {
            btn.innerText = "Logout";
            userSect.classList.remove("d-none");
            // Pull name from session (cookie plain text email)
            let email = getCookie("delishDashSession");
            if (email) {
                let emailParts = email.split("@");
                userLabel.innerText = emailParts[0];
            }
        } else {
            btn.innerText = "Login";
            userSect.classList.add("d-none");
        }
    }
}

function toggleSession() {
    if (isLoggedIn) {
        isLoggedIn = false;
        eraseCookie("delishDashSession");
        updateLoginButton();
        alert("Logged out successfully!");
    } else {
        $("#loginModal").modal("show");
    }
}

function handleLogin() {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    if (email === "" || pass === "") {
        alert("Please enter valid credentials.");
        return;
    }

    isLoggedIn = true;
    // Set a session cookie valid for 1 day
    setCookie("delishDashSession", email, 1);

    updateLoginButton();
    $("#loginModal").modal("hide");
    alert("Welcome back " + email.split("@")[0] + "! Ready for some delicious food?");

    // Clear inputs
    document.getElementById("loginEmail").value = "";
    document.getElementById("loginPassword").value = "";
}

// Modal Switching Functions
function openSignupModal() {
    $("#loginModal").modal("hide");
    $("#signupModal").modal("show");
}

function openForgotModal() {
    $("#loginModal").modal("hide");
    $("#forgotModal").modal("show");
}

function openLoginModal() {
    $("#signupModal").modal("hide");
    $("#forgotModal").modal("hide");
    $("#loginModal").modal("show");
}

// Registration Handler
function handleSignup() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let pass = document.getElementById("signupPass").value;

    if (name === "" || email === "" || pass === "") {
        alert("Please fill in all registration fields.");
        return;
    }

    // Auto-login after successful signup
    isLoggedIn = true;
    setCookie("delishDashSession", email, 1);
    updateLoginButton();

    $("#signupModal").modal("hide");
    alert("Welcome to Delish Dash, " + name + "! Your account is ready.");
}

// Password Reset Handler
function handleForgot() {
    let email = document.getElementById("forgotEmail").value;
    if (email === "") {
        alert("Please enter your account email.");
        return;
    }

    alert("Reset link sent! Please check your email inbox: " + email);
    $("#forgotModal").modal("hide");
    openLoginModal();
}

// Function to show menu items for a category
function showMenuDetails(category) {
    let items = menuData[category];
    let categoryView = document.getElementById("categoryView");
    let mainContent = document.getElementById("mainContent");
    let container = document.getElementById("categoryItemsContainer");
    let title = document.getElementById("categoryTitle");
    let historyView = document.getElementById("orderHistoryView");

    title.innerText = category;
    container.innerHTML = "";

    if (items !== undefined && items.length > 0) {
        for (let i = 0; i < items.length; i++) {
            let item = items[i];

            // Create Column
            let colDiv = document.createElement("div");
            colDiv.className = "col-12 col-md-6 col-lg-3 mb-4 d-flex align-items-stretch";

            // Create Card
            let cardDiv = document.createElement("div");
            cardDiv.className = "shadow menu-item-card p-3 w-100 d-flex flex-column justify-content-between";

            // Top section of card
            let topSection = document.createElement("div");

            // Image
            let img = document.createElement("img");
            img.src = item.image;
            img.className = "menu-item-image w-100";
            img.alt = item.name;
            topSection.appendChild(img);

            // Title
            let h1 = document.createElement("h1");
            h1.className = "menu-card-title";
            h1.innerText = item.name;
            topSection.appendChild(h1);

            // Restaurant
            let p = document.createElement("p");
            p.className = "text-muted small mb-2";
            let utensilIcon = document.createElement("i");
            utensilIcon.className = "fas fa-utensils mr-1";
            p.appendChild(utensilIcon);
            let restaurantName = document.createTextNode(item.restaurant);
            p.appendChild(restaurantName);
            topSection.appendChild(p);

            // Rating/Price Row
            let rowDiv = document.createElement("div");
            rowDiv.className = "d-flex justify-content-between align-items-center mb-2";

            let ratingDiv = document.createElement("div");
            ratingDiv.className = "rating-row";
            let starSpan = document.createElement("span");
            starSpan.className = "star-icon";
            let starIcon = document.createElement("i");
            starIcon.className = "fas fa-star";
            starSpan.appendChild(starIcon);
            ratingDiv.appendChild(starSpan);
            let ratingText = document.createElement("span");
            ratingText.style.fontSize = "0.9rem";
            ratingText.style.fontWeight = "500";
            ratingText.innerText = item.rating;
            ratingDiv.appendChild(ratingText);
            rowDiv.appendChild(ratingDiv);

            let priceSpan = document.createElement("span");
            priceSpan.className = "font-weight-bold";
            priceSpan.style.color = "#d0b200";
            priceSpan.style.fontSize = "1.1rem";
            priceSpan.innerText = "₹" + item.price;
            rowDiv.appendChild(priceSpan);

            topSection.appendChild(rowDiv);
            cardDiv.appendChild(topSection);

            // Order Button
            let orderBtn = document.createElement("button");
            orderBtn.className = "custom-button btn-sm w-100";
            orderBtn.style.height = "35px";
            orderBtn.style.fontSize = "0.85rem";
            orderBtn.style.marginRight = "0";
            orderBtn.innerText = "Order Now";

            // We use a separate function to handle the click and keep 'item' data safe
            let createClickHandler = function (itemData) {
                return function () {
                    openOrderSection(itemData);
                };
            };
            orderBtn.onclick = createClickHandler(item);

            cardDiv.appendChild(orderBtn);
            colDiv.appendChild(cardDiv);
            container.appendChild(colDiv);
        }
    }

    mainContent.classList.add("d-none");
    if (historyView !== null) {
        historyView.classList.add("d-none");
    }
    categoryView.classList.remove("d-none");
    window.scrollTo(0, 0);
}

// Function to open the order modal
function openOrderSection(item) {
    currentSelectedItem = item;
    currentQuantity = 1;

    document.getElementById("orderItemImage").src = item.image;
    document.getElementById("orderItemName").innerText = item.name;
    document.getElementById("orderRestaurantName").innerText = item.restaurant;
    document.getElementById("orderItemPrice").innerText = "₹" + item.price;
    document.getElementById("orderQuantity").innerText = currentQuantity;
    document.getElementById("orderTotalPrice").innerText = "₹" + item.price;

    $("#orderModal").modal("show");
}

// Increase or decrease quantity
function updateOrderQuantity(change) {
    currentQuantity = currentQuantity + change;
    if (currentQuantity < 1) {
        currentQuantity = 1;
    }
    document.getElementById("orderQuantity").innerText = currentQuantity;
    let total = currentQuantity * parseInt(currentSelectedItem.price);
    document.getElementById("orderTotalPrice").innerText = "₹" + total;
}

// When user clicks Add to Cart
function addToCart() {
    let orderItem = {
        name: currentSelectedItem.name,
        restaurant: currentSelectedItem.restaurant,
        price: currentSelectedItem.price,
        image: currentSelectedItem.image,
        quantity: currentQuantity,
        totalPrice: currentQuantity * parseInt(currentSelectedItem.price)
    };

    cart.push(orderItem);
    setLocalData("delishDashCart", cart); // Store it

    updateCartUI();
    $("#orderModal").modal("hide");

    document.getElementById("floatingCart").classList.remove("d-none");
}

// When user clicks Buy Now
function buyNow() {
    if (!isLoggedIn) {
        $("#orderModal").modal("hide");
        $("#loginModal").modal("show");
        return;
    }
    let orderItem = {
        name: currentSelectedItem.name,
        restaurant: currentSelectedItem.restaurant,
        price: currentSelectedItem.price,
        image: currentSelectedItem.image,
        quantity: currentQuantity,
        totalPrice: currentQuantity * parseInt(currentSelectedItem.price)
    };

    let totalText = "₹" + orderItem.totalPrice;

    let orderRecord = {
        date: new Date().toLocaleString(),
        items: [orderItem],
        total: totalText,
        id: "ORD" + Math.floor(Math.random() * 1000000)
    };

    orderHistory.unshift(orderRecord);
    setLocalData("delishDashHistory", orderHistory); // Save history

    $("#orderModal").modal("hide");
    backToHome();

    // Jump to the history view
    setTimeout(function () {
        showHistory();
    }, 500);
}

// Update the shopping tray (cart) UI
function updateCartUI() {
    let badge = document.getElementById("cartCountBadge");
    let cartBody = document.getElementById("cartBody");
    let totalBill = document.getElementById("cartTotalBill");

    if (badge === null || cartBody === null) {
        return;
    }

    // Count total items
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
        count = count + cart[i].quantity;
    }
    badge.innerText = count;

    // Clear the cart body
    cartBody.innerHTML = "";

    if (cart.length === 0) {
        cartBody.innerHTML = '<div class="text-center py-5">' +
            '<i class="fas fa-shopping-basket fa-3x text-light mb-3"></i>' +
            '<p class="text-muted">Your tray is empty.</p>' +
            '</div>';
    } else {
        let itemsHtml = "";
        for (let j = 0; j < cart.length; j++) {
            let item = cart[j];
            itemsHtml += '<div class="cart-item">' +
                '<img src="' + item.image + '" class="cart-item-img">' +
                '<div class="cart-item-info flex-grow-1">' +
                '<h4 class="mb-0">' + item.name + '</h4>' +
                '<p class="text-muted small mb-1">' + item.quantity + ' x ₹' + item.price + '</p>' +
                '<span class="cart-item-price">₹' + item.totalPrice + '</span>' +
                '</div>' +
                '<button class="btn btn-sm text-danger" onclick="removeFromCart(' + j + ')">' +
                '<i class="fas fa-trash"></i>' +
                '</button>' +
                '</div>';
        }
        cartBody.innerHTML = itemsHtml;
    }

    // Calculate total price
    let finalTotal = 0;
    for (let k = 0; k < cart.length; k++) {
        finalTotal = finalTotal + cart[k].totalPrice;
    }
    totalBill.innerText = "₹" + finalTotal;
}

// Delete item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    setLocalData("delishDashCart", cart);
    updateCartUI();

    if (cart.length === 0) {
        document.getElementById("floatingCart").classList.add("d-none");
        toggleCart();
    }
}

// Side drawer logic
function toggleCart() {
    let sidebar = document.getElementById("cartSidebar");
    let overlay = document.getElementById("cartOverlay");
    sidebar.classList.toggle("open");
    overlay.classList.toggle("show");
}

// Final purchase from cart
function finalCheckout() {
    if (!isLoggedIn) {
        toggleCart(); // Close the sidebar
        $("#loginModal").modal("show");
        return;
    }
    if (cart.length === 0) {
        return;
    }

    let billText = document.getElementById("cartTotalBill").innerText;
    alert("Thank you! Your order is placed. Total: " + billText);

    let orderRecord = {
        date: new Date().toLocaleString(),
        items: cart,
        total: billText,
        id: "ORD" + Math.floor(Math.random() * 1000000)
    };

    orderHistory.unshift(orderRecord);
    setLocalData("delishDashHistory", orderHistory);

    // Clear everything
    cart = [];
    setLocalData("delishDashCart", []);

    updateCartUI();
    toggleCart();
    document.getElementById("floatingCart").classList.add("d-none");
    backToHome();
}

// Show the History Page
function showHistory() {
    let historyView = document.getElementById("orderHistoryView");
    let mainContent = document.getElementById("mainContent");
    let container = document.getElementById("historyItemsContainer");
    let categoryView = document.getElementById("categoryView");

    container.innerHTML = "";

    if (orderHistory.length === 0) {
        container.innerHTML = '<div class="col-12 text-center py-5">' +
            '<i class="fas fa-history fa-4x text-light mb-3"></i>' +
            '<p class="text-muted">You haven\'t placed any orders yet.</p>' +
            '</div>';
    } else {
        for (let i = 0; i < orderHistory.length; i++) {
            let order = orderHistory[i];

            // Build items list
            let itemsListHtml = "";
            for (let j = 0; j < order.items.length; j++) {
                let itm = order.items[j];
                itemsListHtml += '<div class="d-flex align-items-center mb-2">' +
                    '<img src="' + itm.image + '" style="width: 40px; height: 40px; border-radius: 8px; object-fit: cover; margin-right: 12px;">' +
                    '<div>' +
                    '<span class="font-weight-bold" style="font-size: 0.95rem;">' + itm.name + '</span>' +
                    '<div class="text-muted" style="font-size: 0.75rem;">' + itm.restaurant + ' | Qty: ' + itm.quantity + '</div>' +
                    '</div>' +
                    '</div>';
            }

            let cardHtml = '<div class="col-12 mb-4">' +
                '<div class="order-history-card p-4 shadow-sm border-0" style="border-left: 5px solid #d0b200;">' +
                '<div class="d-flex justify-content-between align-items-start mb-3">' +
                '<div>' +
                '<h5 class="font-weight-bold mb-1" style="color: #1e293b;">Order #' + order.id + '</h5>' +
                '<p class="text-muted small mb-0"><i class="far fa-clock mr-1"></i>' + order.date + '</p>' +
                '</div>' +
                '<span class="status-paid">Paid Full</span>' +
                '</div>' +
                '<div class="py-3 border-top border-bottom mb-3">' +
                itemsListHtml +
                '</div>' +
                '<div class="d-flex justify-content-between align-items-center">' +
                '<span class="text-muted font-weight-bold">Amount Paid:</span>' +
                '<span class="h4 font-weight-bold mb-0" style="color: #d0b200;">' + order.total + '</span>' +
                '</div>' +
                '</div>' +
                '</div>';
            container.innerHTML += cardHtml;
        }
    }

    if (categoryView !== null) {
        categoryView.classList.add("d-none");
    }
    mainContent.classList.add("d-none");
    historyView.classList.remove("d-none");
    window.scrollTo(0, 0);
}

// Function to go back to Home
function backToHome() {
    let categoryView = document.getElementById("categoryView");
    let historyView = document.getElementById("orderHistoryView");
    let mainContent = document.getElementById("mainContent");

    if (categoryView !== null) {
        categoryView.classList.add("d-none");
    }
    if (historyView !== null) {
        historyView.classList.add("d-none");
    }
    mainContent.classList.remove("d-none");
}

// Click listener to open a category
function openMenuCategory(category) {
    showMenuDetails(category);
}
