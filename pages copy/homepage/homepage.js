const productInforFrame1 = [
  {
    id: 1,
    srcProduct: "../img-pages/rangsayi.png",
    frame1CateItemTitle: "Cà Phê I - Khát Vọng Khởi Nghiệp",
    frame1ProductCardPrice: "80.000đ",
    frame1ProductCardScore: "4.8",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
  {
    id: 2,
    srcProduct: "../img-pages/rangsaynau.png",
    frame1CateItemTitle: "Cà Phê S - Chinh Phục Thành Công",
    frame1ProductCardPrice: "90.000đ",
    frame1ProductCardScore: "4.9",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
  {
    id: 3,
    srcProduct: "../img-pages/rangsays.png",
    frame1CateItemTitle: "Cà Phê Nâu - Sức Sống Đại Ngàn",
    frame1ProductCardPrice: "100.000đ",
    frame1ProductCardScore: "5.0",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
];
const frame1Item = document.getElementById("frame1-item");

for (let i = 0; i < productInforFrame1.length; i++) {
  frame1Item.innerHTML += `
    <div class="frame1-col">
                        <a href="">
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
                        </a>
                    </div>
                        `;
}

// Frame2
const productInforFrame2 = [
  {
    id: 4,
    srcProduct: "../img-pages/sangtao1.png",
    frame2CateItemTitle: "Sáng Tạo 1",
    frame2CateItemContent: "Thơm dịu nhẹ, vị đậm đà",
    frame2ProductCardPrice: "85.000 VNĐ",
    frame2ProductCardScore: "4.7",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
  {
    id: 5,
    srcProduct: "../img-pages/sangtao2.png",
    frame2CateItemTitle: "Sáng Tạo 2",
    frame2CateItemContent: "Thơm dịu nhẹ, vị hài hòa",
    frame2ProductCardPrice: "90.000 VNĐ",
    frame2ProductCardScore: "4.9",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
  {
    id: 6,
    srcProduct: "../img-pages/sangtao3.png",
    frame2CateItemTitle: "Sáng Tạo 3",
    frame2CateItemContent: "Rất thơm, vị đắng nhẹ, chua thanh",
    frame2ProductCardPrice: "95.000 VNĐ",
    frame2ProductCardScore: "4.8",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
  {
    id: 7,
    srcProduct: "../img-pages/sangtao4.png",
    frame2CateItemTitle: "Sáng Tạo 4",
    frame2CateItemContent: "Thơm lâu, vị cân bằng, thế chất đậm",
    frame2ProductCardPrice: "100.000 VNĐ",
    frame2ProductCardScore: "5.0",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
];
const frame2Item = document.getElementById("frame2-item");

for (let i = 0; i < productInforFrame2.length; i++) {
  frame2Item.innerHTML += `
  <div class="frame2-col">
                        <a href="">
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
                        </a>
                    </div>
    `;
}

// frame3;
const productInforFrame3 = [
  {
    id: 8,
    srcProduct: "../img-pages/chephin1.png",
    frame3CateItemTitle: "Chế Phin 1",
    frame3CateItemContent: "Thơm dịu nhẹ, vị đậm đà",
    frame3ProductCardPrice: "85.000 VNĐ",
    frame3ProductCardScore: "4.7",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
  {
    id: 9,
    srcProduct: "../img-pages/chephin2.png",
    frame3CateItemTitle: "Chế Phin 2",
    frame3CateItemContent: "Thơm dịu nhẹ, vị hài hòa",
    frame3ProductCardPrice: "90.000 VNĐ",
    frame3ProductCardScore: "4.9",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
  {
    id: 10,
    srcProduct: "../img-pages/chephin3.png",
    frame3CateItemTitle: "Chế Phin 3",
    frame3CateItemContent: "Rất thơm, vị đắng nhẹ, chua thanh",
    frame3ProductCardPrice: "95.000 VNĐ",
    frame3ProductCardScore: "4.8",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
  {
    id: 11,
    srcProduct: "../img-pages/chephin4.png",
    frame3CateItemTitle: "Chế phin 4",
    frame3CateItemContent: "Thơm lâu, vị cân bằng, thế chất đậm",
    frame3ProductCardPrice: "100.000 VNĐ",
    frame3ProductCardScore: "5.0",
    srcStar: "../icon-pages/star-svgrepo-com.svg",
  },
];
const frame3Item = document.getElementById("frame3-item");

for (let i = 0; i < productInforFrame3.length; i++) {
  frame3Item.innerHTML += `
  <div class="frame3-col">
                        <a href="">
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
                        </a>
                    </div>
    `;
}