import React from 'react'

const Products = () => {
  return (
    <div>
      <section class="products-section">
        <div class="products-container">
            <div class="product-card">
                <img src="product1.jpg" alt="Product 1" class="product-image" />
                <h3 class="product-title">Product One</h3>
                <p class="product-description">High-quality and reliable.</p>
                <button class="product-button">Buy Now</button>
            </div>
            <div class="product-card">
                <img src="product2.jpg" alt="Product 2" class="product-image" />
                <h3 class="product-title">Product Two</h3>
                <p class="product-description">Best in the market.</p>
                <button class="product-button">Buy Now</button>
            </div>
            <div class="product-card">
                <img src="product3.jpg" alt="Product 3" class="product-image" />
                <h3 class="product-title">Product Three</h3>
                <p class="product-description">Top-rated and popular choice.</p>
                <button class="product-button">Buy Now</button>
            </div>
        </div>
    </section>
    </div>
  )
}

export default Products
