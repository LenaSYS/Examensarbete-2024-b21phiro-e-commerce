import './assets/css/style.css'; // Go with style ;)
import Types from "./assets/js/types.js";
import media from "./assets/js/media.js";

// Sets the type of rendering that is wished.
// Either 2D or 3D rendered products.
const type = Types.two_d;

// The grid that holds the products.
const productsList = document.getElementById('products');
const amountOfProducts = 9; // <- Sets the amount of products to render.

// Creates and renders each product.
for (let i = 0; i < amountOfProducts; i++) {

    media(type, (item) => {

        // Inserts each product into the list.
        productsList.insertAdjacentHTML('afterbegin', `
            <li>
            <article class="product">
                <a href="#product" title="View product"></a>
                ${ item }
                <section class="product-section">
                    <h4>Lorem Ipsum</h4>
                    <p>9.99 SEK</p>
                    <button class="product-button">
                        <svg xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             class="feather feather-plus">
                            <line x1="12" y1="5" x2="12" y2="19"/>
                            <line x1="5" y1="12" x2="19" y2="12"/>
                        </svg>
                        <span>Add</span>
                    </button>
                </section>
            </article>
            </li>
        `);

    });

}