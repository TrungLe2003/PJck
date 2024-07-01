//Rang say
const frame1Item = document.getElementById("frame1-item");
const productInforFrame1 = JSON.parse(localStorage.getItem("frame1-item"));

for (let i = 0; i < productInforFrame1.length; i++) {
  frame1Item.innerHTML += `
    <div class="frame1-col" onClick="getDetail1(${productInforFrame1[i].Id})">
                            <div class="frame1-cate-item">
                                <div class="frame1-cate-img">
                                    <img src="${productInforFrame1[i].srcProduct}" alt="" class="frame1-img">
                                </div>

                                <div class="frame1-cate-item-info">
                                    <h3 class="frame1-cate-item-title">${productInforFrame1[i].frame1CateItemTitle}</h3>
                                    <div class="frame1-product-card-row">
                                        <p class="frame1-product-card-price">${productInforFrame1[i].frame1ProductCardPrice}</p>
                                        <p class="frame1-product-card-score">${productInforFrame1[i].frame1ProductCardScore}</p>
                                        <img src="${productInforFrame1[i].srcStar}" alt="" class="frame1-product-card-star">
                                    </div>
                                </div>
                            </div>
                    </div>
                        `;
}

function getDetail1(id) {
  localStorage.setItem("product1Number", `${id}`);
  window.location.href = "./components/product/product.html";
}

// Frame2, Sáng tạo
const productInforFrame2 = JSON.parse(localStorage.getItem("frame2-item"));
const frame2Item = document.getElementById("frame2-item");

for (let i = 0; i < productInforFrame2.length; i++) {
  frame2Item.innerHTML += `
  <div class="frame2-col" onClick="getDetail2(${productInforFrame2[i].Id})">
                            <div class="frame2-cate-item">
                                <img src="${productInforFrame2[i].srcProduct}" alt="" class="frame2-img">
                                <div class="frame2-cate-item-info">
                                    <h2 class="frame2-cate-item-title">${productInforFrame2[i].frame2CateItemTitle}</h2>
                                    <p class="frame2-cate-item-content">${productInforFrame2[i].frame2CateItemContent}</p>
                                    <div class="frame2-product-card-row">
                                        <p class="frame2-product-card-price">${productInforFrame2[i].frame2ProductCardPrice}</p>
                                        <p class="frame2-product-card-score">${productInforFrame2[i].frame2ProductCardScore}</p>
                                        <img src="${productInforFrame2[i].srcStar}" alt="" class="frame2-product-card-star">
                                    </div>
                                </div>
                            </div>
                    </div>
    `;
}
function getDetail2(id) {
  localStorage.setItem("product2Number", `${id}`);
  window.location.href = "./components/product/SangTao.html";
}

// frame3; chế phin

const productInforFrame3 = JSON.parse(localStorage.getItem("frame3-item"));
const frame3Item = document.getElementById("frame3-item");

for (let i = 0; i < productInforFrame3.length; i++) {
  frame3Item.innerHTML += `
  <div class="frame3-col" onClick="getDetail3(${productInforFrame3[i].Id})">
                            <div class="frame3-cate-item">
                                <img src="${productInforFrame3[i].srcProduct}" alt="" class="frame3-img">
                                <div class="frame3-cate-item-info">
                                    <h3 class="frame3-cate-item-title">${productInforFrame3[i].frame3CateItemTitle}</h3>
                                    <p class="frame3-cate-item-content">${productInforFrame3[i].frame3CateItemContent}</p>
                                    <div class="frame3-product-card-row">
                                        <p class="frame3-product-card-price">${productInforFrame3[i].frame3ProductCardPrice}</p>
                                        <p class="frame3-product-card-score">${productInforFrame3[i].frame3ProductCardScore}</p>
                                        <img src="${productInforFrame3[i].srcStar}" alt="" class="frame3-product-card-star">
                                    </div>
                                </div>
                            </div>
                    </div>
    `;
}
function getDetail3(id) {
  localStorage.setItem("product3Number", `${id}`);
  window.location.href = "./components/product/ChePhin.html";
}
