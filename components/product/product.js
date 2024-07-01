const detail = document.getElementById("detail");
const product1Number = +localStorage.getItem("product1Number");
const productInforFrame1 = JSON.parse(
  localStorage.getItem("frame1-item") || "[]"
);
const findProduct = productInforFrame1.find(
  (item) => +item.Id === product1Number
);
// ${findProduct.srcProduct}
// ../../public/img/chephin4.png
if (findProduct) {
  detail.innerHTML = `
    <div class="banner">
      <a href="../homepage/homepage.html">Trang chủ </a>
      <img src="../product/product.img/right-arrow-svgrepo-com.svg" alt="">
      <a href="../product/product.html">${findProduct.frame1CateItemTitle}</a>
    </div>
    <div class="frame1">
      <div class="frame1_product-img"> 
      <img src="../.${findProduct.srcProduct}" alt="">
      </div>
      <div class="frame1-act">
        <div class="name-product">
          <h1>${findProduct.frame1CateItemTitle}</h1>
        </div>
        <div class="frame1-product-infor">
          <div class="product-infor_card1">
            <div class="product-property">
              <h2>Đặc tính</h2>
              <ul>${findProduct.frame1ProductDescribe}</ul>
            </div>
            <div class="product-rate">
              <p>${findProduct.frame1ProductCardScore}</p>
              <img src="../.${findProduct.srcStar}" alt="">
            </div>
            <div class="product-weight">
              <h2>Khối lượng/Weight</h2>
              <select name="" id="pick-weight">
                <option value="">500 G</option>
                <option value="">380 G</option>
              </select>
            </div>
          </div>
          <div class="product-infor_card2">
            <div class="product-infor_add-to-cart">
              <div class="product-infor_row product-infor-price">
                <span class="product-infor_total-price">${findProduct.frame1ProductCardPrice}</span>
                <del>100.000đ</del>
              </div>
              <div class="product-infor_row frame-add-to-cart">
                <button class="btn product-infor_add-to-cart-btn">Add to cart</button>
                <button class="btn product-infor_like-btn">
                  <img src="../product/product.img/heart-svgrepo-com.svg" alt="" class="icon">
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="frame2">
      <div class="frame2-title">
        <div class="frame2-title1 title">Mô tả sản phẩm</div>
      </div>
      <div class="frame2-describe">
      ${findProduct.frame1ProductMoreDescribe}
      </div>
    </div>
  `;
} else {
  detail.innerHTML = "<p>Sản phẩm không tồn tại.</p>";
}
