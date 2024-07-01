const detail = document.getElementById("detail");
const product2Number = +localStorage.getItem("product2Number");
const productInforFrame2 = JSON.parse(
  localStorage.getItem("frame2-item") || "[]"
);
const findProduct = productInforFrame2.find(
  (item) => +item.Id === product2Number
);

if (findProduct) {
  detail.innerHTML = `
    <div class="banner">
      <a href="../homepage/homepage.html">Trang chủ </a>
      <img src="../product/product.img/right-arrow-svgrepo-com.svg" alt="">
      <a href="../product/product.html">${findProduct.frame2CateItemTitle}</a>
    </div>
    <div class="frame1">
      <div class="frame1_product-img">
        <img src="../.${findProduct.srcProduct}" alt="">
      </div>
      <div class="frame1-act">
        <div class="name-product">
          <h1>${findProduct.frame2CateItemTitle}</h1>
        </div>
        <div class="frame1-product-infor">
          <div class="product-infor_card1">
            <div class="product-property">
              <h2>Đặc tính</h2>
             <ul>${findProduct.frame2ProductDescribe}</ul>
        
            </div>
            <div class="product-rate">
              <p>${findProduct.frame2ProductCardScore}</p>
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
                <span class="product-infor_total-price">${findProduct.frame2ProductCardPrice}</span>
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
      ${findProduct.frame2ProductMoreDescribe}
      </div>
    </div>
  `;
} else {
  detail.innerHTML = "<p>Sản phẩm không tồn tại.</p>";
}
