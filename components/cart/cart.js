const totalPriceElement = document.getElementById("total-price");
let totalPrice = 0;

//Lấy thông tin sản phẩm
const data = JSON.parse(localStorage.getItem("product-choice") || "[]");
console.log(data);
const product = document.getElementById("product");
console.log(data.length);
if (data.length === 0) {
  product.innerHTML = `<p>Giỏ hàng trống</p>`;
}
for (let i = 0; i < data.length; i++) {
  const itemTotalPrice =
    parseFloat(data[i].priceProduct) * parseInt(data[i].count); //chuyển đổi dạng string sang só thực và số nguyên
  totalPrice += itemTotalPrice;
  product.innerHTML += `
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
                                    <div class = "incr-decr-btn">
                                      <button class="increase-btn" data-id="${data[i].id}">+</button>
                                      <button class="decrease-btn" data-id="${data[i].id}">-</button>
                                    </div>                                               
                    </div>`;
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
totalPriceElement.innerHTML = `${totalPrice.toLocaleString()},000đ`; //định dạng số tiền thành chuỗi có dấu phân cách hàng nghìn.

// Nút tăng giảm số lượng sản phẩm
document.querySelectorAll(".increase-btn").forEach((button) => {
  //Lấy tất cả button có class increase-button //gắn sự kiện cho mỗi button
  button.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id"); // lấy giá trị của thuộc tính data-id từ phần tử e -e.target: trả về phần tử kích hoạt sự kiện click button-, biến id lưu trữ giá trị thuộc tính data-id
    const product = data.find((item) => item.id == id);
    product.count++;
    localStorage.setItem("product-choice", JSON.stringify(data));
    window.location.reload(); //Load lại trang để cập nhật lại product.count cho nhanh :))
  });
});

document.querySelectorAll(".decrease-btn").forEach((button) => {
  button.addEventListener("click", (e) => {
    const id = e.target.getAttribute("data-id");
    const product = data.find((item) => item.id == id);
    if (product.count > 1) {
      product.count--;
    } else {
      data.splice(data.indexOf(product), 1); //ở vị trí product có id đó, xóa đi 1 phần tử
    }
    localStorage.setItem("product-choice", JSON.stringify(data));
    window.location.reload();
  });
});
