// prendre l'item dans le DOM et la renvoyer
let cart = Date.parse(localStorage.getItem('cart')) || [];
const cartDOM = document.querySelector('.cart');
const addToCartButtonsDOM = document.querySelectorAll('[data-action="ADD_TO_CART"]');
// renvoie la longueur de cart

if (cart.length > 0) {
	cart.forEach(product => {
		insertItemToDOM(product);
		countCartTotal();

		addToCartButtonsDOM.forEach(addToCartButtonDOM => {
			const productDOM = addToCartButtonDOM.parentNode;

			if (productDOM.querySelector('.product__name').innerText === product.name) {
				handleActionButtons(addToCartButtonDOM, product);
			}
		});
	});
}

addToCartButtonsDOM.forEach(addToCartButtonDOM => {
	addToCartButtonDOM.addEventListener('click', () => {
		const productDOM = addToCartButtonDOM.parentNode;
		const product = {
			image: productDOM.querySelector('.product__image').getAttribute('src'),
			name: productDOM.querySelector('.product__name').innerText,
			price: productDOM.querySelector('.product__price').innerText,
			quantity: 1
		};

		const isInCart = cart.filter(cartItem => cartItem.name === product.name).length > 0;
		if (!isInCart) {
			insertItemToDOM(product);
			cart.push(product);
			saveCart();
			handleActionButtons(addToCartButtonDOM, product);
		}
	});
});

// Function pour mettre le code directement dans le DOM

// chekout prix
function insertItemToDOM(product) {
	cartDOM.insertAdjacentHTML(
		'beforeend',
		`
    
      
    </div>
  `
	);

	addCartFooter();
	notif();
	notifone();
	notiftwo()
}

function handleActionButtons(addToCartButtonDOM, product) {
	addToCartButtonDOM.innerText = 'In Cart';
	addToCartButtonDOM.disabled = true;

	const cartItemsDOM = cartDOM.querySelectorAll('.cart__item');
	cartItemsDOM.forEach(cartItemDOM => {
		if (cartItemDOM.querySelector('.cart__item__name').innerText === product.name) {
			cartItemDOM.querySelector('[data-action="INCREASE_ITEM"]').addEventListener('click', () => increaseItem(product, cartItemDOM));
			cartItemDOM
				.querySelector('[data-action="DECREASE_ITEM"]')
				.addEventListener('click', () => decreaseItem(product, cartItemDOM, addToCartButtonDOM));
			cartItemDOM.querySelector('[data-action="REMOVE_ITEM"]').addEventListener('click', () => removeItem(product, cartItemDOM, addToCartButtonDOM));
		}
	});
}

function increaseItem(product, cartItemDOM) {
	cart.forEach(cartItem => {
		if (cartItem.name === product.name) {
			cartItemDOM.querySelector('.cart__item__quantity').innerText = ++cartItem.quantity;
			cartItemDOM.querySelector('[data-action="DECREASE_ITEM"]').classList.remove('btn--danger');
			saveCart();
		}
	});
}


// Function qui retire l'item 
function removeItem(product, cartItemDOM, addToCartButtonDOM) {
	cartItemDOM.classList.add('cart__item--removed');
	setTimeout(() => cartItemDOM.remove(), 250);
	cart = cart.filter(cartItem => cartItem.name !== product.name);
	saveCart();
	addToCartButtonDOM.innerText = 'Add To Cart';
	addToCartButtonDOM.disabled = false;

	if (cart.length < 1) {
		document.querySelector('.cart-footer').remove();
	}
}

// ajouter une carte  au panier
function addCartFooter() {
	if (document.querySelector('.cart-footer') === null) {
		cartDOM.insertAdjacentHTML(
			'afterend',
			`
      <div class="cart-footer">
        <button class="btn btn--danger" data-action="CLEAR_CART">Clear Cart</button>
        <button class="btn btn--primary" data-action="CHECKOUT">Pay</button>
		
		</p>
      </div>
    `
		);
		document.querySelector('[data-action="CLEAR_CART"]').addEventListener('click', () => clearCart());
		document.querySelector('[data-action="CHECKOUT"]').addEventListener('click', () => checkout());
	}
}

function notif() {
	if (document.querySelector('.cart-footer') === null || cart.length == 0) {
		cartDOM.insertAdjacentHTML(
			'afterend',
			`
			<div class="cart-footer">
    
		<p class="test">Double Dose”</p>
		</div>
		
    `
		);

	}
	if (cart.length == 1) {
		document.querySelector('.cart-footer').remove();
	}
}

function notifone() {
	if (document.querySelector('.cart-footer') === null || cart.length == 1) {
		cartDOM.insertAdjacentHTML(
			'afterend',
			`
			<div class="cart-footer">
	
		<p class="test">1£50 de remise”</p>
		</div>
		
	`
		);

	}
	if (cart.length == 2) {
		document.querySelector('.cart-footer').remove();
	}

}

function notiftwo() {
	if (document.querySelector('.cart-footer') === null || cart.length == 3) {
		cartDOM.insertAdjacentHTML(
			'afterend',
			`
			<div class="cart-footer">
	
		<p class="test">+1$50 de suplement par ingredient ”</p>
		</div>
		
	`
		);

	}
	if (cart.length > 5 ) {
		document.querySelector('.cart-footer').remove();
	}

}
function clearCart() {
	document.querySelectorAll('.cart__item').forEach(cartItemDOM => {
		cartItemDOM.classList.add('cart__item--removed');
		setTimeout(() => cartItemDOM.remove(), 250);
	});

	cart = [];
	countCartTotal();
	document.querySelector('.cart-footer').remove();

	addToCartButtonsDOM.forEach(addToCartButtonDOM => {
		addToCartButtonDOM.innerText = 'Add To Cart';
		addToCartButtonDOM.disabled = false;
	});
}
// function qui va m'envoter sur une autre page html validation
function checkout() {
	let paypalFormHTML = `
    <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post">
      <input type="hidden" name="cmd" value="_cart">
      <input type="hidden" name="upload" value="1">
      <input type="hidden" name="business" value="garix928@gmail.com">
    `;

	cart.forEach((cartItem, index) => {
		++index;
		paypalFormHTML += `
        <input type="hidden" name="item_name_${index}" value="${cartItem.name}">
        <input type="hidden" name="amount_${index}" value="${cartItem.price}">
        <input type="hidden" name="quantity_${index}" value="${cartItem.quantity}">
      `;
	});

	paypalFormHTML += `
      <input type="submit" value="PayPal">
    </form>
    <div class="overlay"></div>
  `;

	document.querySelector('body').insertAdjacentHTML('beforeend', paypalFormHTML);
	document.getElementById('paypal-form').submit();
}

// Function to calculate total amount
function countCartTotal() {
	let cartTotal = 0;
	cart.forEach(cartItem => (cartTotal += cartItem.quantity * cartItem.price));
	document.querySelector('[data-action="CHECKOUT"]').innerText = `Pay $${cartTotal}`;
}

// Function to save cart on changes
function saveCart() {
	localStorage.setItem('cart', JSON.stringify(cart));
	countCartTotal();
}
