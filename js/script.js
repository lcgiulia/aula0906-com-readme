const cartList = document.getElementById('cart-list');
    const totalSpan = document.getElementById('total');
    let total = 0;

    function addToCart(name, price) {
      const li = document.createElement('li');
      li.textContent = `${name} - R$${price.toFixed(2)}`;
      cartList.appendChild(li);

      total += price;
      totalSpan.textContent = total.toFixed(2);
    }