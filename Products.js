document.addEventListener("DOMContentLoaded", function() {
    // Quick View Modal
    const modal = document.querySelector(".modal");
    const modalContent = document.querySelector(".modal-content");
    const closeModal = document.querySelector(".close-modal");

    document.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", function() {
            const productName = this.querySelector("h3").innerText;
            const productImage = this.querySelector("img").src;
            const productPrice = this.querySelector(".price").innerText;

            modalContent.innerHTML = `
                <span class="close-modal">&times;</span>
                <img src="${productImage}" alt="${productName}">
                <h2>${productName}</h2>
                <p class="price">${productPrice}</p>
            `;
            modal.style.display = "flex";

            modal.querySelector(".close-modal").addEventListener("click", () => {
                modal.style.display = "none";
            });
        });
    });
})

    // Filtering System
document.addEventListener("DOMContentLoaded", function() {
        // Get the category filter, price filter, and all product cards
        const categoryFilter = document.getElementById("categoryFilter");
        const priceFilter = document.getElementById("priceFilter");
        const productCards = document.querySelectorAll(".product-card");

        // Function to filter and sort products
        function filterProducts(category, sortOrder) {
            // Filter products by category
            let filteredProducts = Array.from(productCards).filter(card => {
                const productCategory = card.getAttribute("data-category");
                // Show product if it matches the selected category or if "all" is selected
                return category === "all" || category === productCategory;
            });

            // Sort filtered products by price
            if (sortOrder !== "default") {
                filteredProducts = filteredProducts.sort((a, b) => {
                    const priceA = parseFloat(a.getAttribute("data-price"));
                    const priceB = parseFloat(b.getAttribute("data-price"));

                    if (sortOrder === "low-to-high") {
                        return priceA - priceB;
                    } else if (sortOrder === "high-to-low") {
                        return priceB - priceA;
                    }
                    return 0; // Default case: no sorting
                });
            }

            // Re-render the products in the filtered and sorted order
            const parent = document.querySelector('.products .row');
            // First, hide all products
            productCards.forEach(card => {
                card.style.display = "none";
            });
            // Show the filtered and sorted products
            filteredProducts.forEach(card => {
                parent.appendChild(card);
                card.style.display = "block"; // Make sure visible products are shown
            });
        }

        // Apply category and price filter changes
        categoryFilter.addEventListener("change", function() {
            const selectedCategory = categoryFilter.value;
            const selectedSortOrder = priceFilter.value;
            filterProducts(selectedCategory, selectedSortOrder);
        });

        priceFilter.addEventListener("change", function() {
            const selectedSortOrder = priceFilter.value;
            const selectedCategory = categoryFilter.value;
            filterProducts(selectedCategory, selectedSortOrder);
        });

        // Initial call to filter all products when the page loads
        filterProducts("all", "default");
    });

const search = document.querySelector('.search')
const btn = document.querySelector('.search-btn')
const input = document.querySelector('.input')

btn.addEventListener("click", () =>{
    search.classList.toggle('active')
    input.focus()
})

document.body.addEventListener('touchstart', function(e) {
    e.preventDefault();
  }, { passive: false });
