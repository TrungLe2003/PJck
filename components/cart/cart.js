//Lấy thông tin sản phẩm
const data = JSON.parse(localStorage.getItem("product-choice") || "[]");
console.log(data);
const product = document.getElementById("product");
console.log(data.length);
if (data.length === 0) {
  product.innerHTML = `<p>Giỏ hàng trống</p>`;
}
for (let i = 0; i < data.length; i++) {
  product.innerHTML += `
                <div class="frame1-item">
                    <div class="frame1-col">
                        <div class="frame1-cate-item">
                                <div class="frame1-cate-img">
                                    <img src="../${data[i].imgProduct}" alt="" class="frame1-img">
                                </div>

                                <div class="frame1-cate-item-info">
                                    <h3 class="frame1-cate-item-title">${data[i].nameProduct}</h3>
                                    <div class="frame1-product-card-row">
                                        <p class="frame1-product-card-price">${data[i].priceProduct}đ x ${data[i].count}</p>                                                                                       
                                    </div>
                                </div>
                                               
                    </div>
                    <button>+</button>
                    <button>-</button>
                        
                </div> `;
}

//Phần giỏ hàng
let currentSignIn = localStorage.getItem("currentSignIn");
console.log(currentSignIn);
const act = document.getElementById("act");
if (currentSignIn) {
  currentSignIn = JSON.parse(currentSignIn);
  act.innerHTML = `
        <div class="cart">
            <a href="../../components/cart/cart.html">
                <img src="../../public/icon/cart-shopping-svgrepo-com.svg" alt="" class="act-icon act-icon-cart">
                <div class="total" id="total-product">0</div>
            </a>
        </div>

        <div class="account">
            <img src="../../public/icon/user-svgrepo-com.svg" alt="" class="act-icon">
            <div>${currentSignIn.username}</div>
        </div>
    `;
} else {
  act.innerHTML = `
        <div class="cart">
            <img src="../../public/icon/cart-shopping-svgrepo-com.svg" alt="" class="act-icon act-icon-cart">
            <div class="total" id="total">0</div>
        </div>

        <a href="../sign-in/sign-in.html">
            <button class="act-button sign-in">Sign In</button>
        </a>
        
        <a href="../sign-up/sign-up.html">
            <button class="act-button sign-up">Sign Up</button>
        </a>
    `;
}

function getTotal() {
  const totalProduct = document.getElementById("total-product");
  const productCount = data.reduce((number, item) => {
    number += item.count;
    return number;
  }, 0);
  totalProduct.innerHTML = `${productCount}`;
}
getTotal();

//Tổng số tiền
const totalPrice = document.getElementById("total-price");
