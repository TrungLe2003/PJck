// Đẩy thông tin sản phẩm lên local
const productsInfor = [
  {
    id: "1",
    imgProduct: "../public/img/sangtao1.png",
    nameProduct: "Cà Phê Sáng Tạo 1",
    subtitleProduct: "Thơm dịu nhẹ, vị đậm đà",
    codeProduct: "5000119",
    priceProduct: "85.000",
    scoreProduct: "4.7",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián đậm.</li> <li>Mùi thơm dịu nhẹ.</li> <li>Vị đậm đà.</li> <li>Hàm lượng Caffeine: Khoảng 2.5%.</li> <li>Rất ngon khi uống nóng.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Những hạt cà phê Culi Rubusta được chọn lọc một cách kỹ lưỡng, cùng với bí quyết Đông Phương, công thức không thể sao chép, sản xuất trên công nghệ hàng đầu thế giới, Trung Nguyên đã mang đến cho những người yêu thích cà phê dòng Cà phê sáng tạo 1 chất lượng nhất.</p> <p>Với Trung Nguyên, cà phê không chỉ là ngon mà nó còn phải đem lại một năng lượng tràn đầy cho sự sáng tạo của não. Vì lịch sử đã chứng minh, có những ý tưởng điên rồ, không tưởng đã làm thay đổi hoàn toàn thế giới, và nó được khơi lên từ cà phê. Những ý tưởng sáng tạo tiếp theo tại sao không thể bắt đầu từ chính bạn? Bởi sáng tạo là giá trị và sức mạnh vĩ đại tiềm ẩn bên trong mỗi chúng ta.</p> <p>Thật tuyệt vời khi bắt đầu ngày mới bằng một ly cà phê có thể khơi lên cảm hứng và những cảm xúc rất mới mẻ trong bạn.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000119</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>500gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>2 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤5 % Hàm lượng cafeine ≥ 2%</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Rất ngon khi dùng nóng hoặc uống với sữa</td>",
  },
  {
    id: "2",
    imgProduct: "../public/img/sangtao2.png",
    nameProduct: "Cà Phê Sáng Tạo 2",
    subtitleProduct: "Thơm dịu nhẹ, vị hài hòa",
    codeProduct: "5000256",
    priceProduct: "90.000",
    scoreProduct: "4.9",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián nhạt.</li> <li>Mùi thơm nhẹ.</li> <li>Vị đắng êm, đậm đà.</li> <li>Hàm lượng Caffeine: Khoảng 2.0%.</li> <li>Ngon nhất khi uống nóng.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Cà phê Sáng Tạo 2 là nơi khởi nguồn các sáng tạo mới. Với lòng đam mê sống chết với cà phê, Trung Nguyên tạo ra loại cà phê đặc biệt nhất thế giới, đem đến những ý tưởng đột phá giúp bạn thành công hơn trong cuộc sống. Sự kết hợp cà phê Robusta và Arabica xanh, sạch, thuần khiết từ vùng đất bazan nên tạo hương thơm quyến rũ, vị dịu nhẹ.</p> <p>Bao bì của cà phê Sáng Tạo 2 là hình ảnh đầu máy xe lửa đầu tiên để tạo nên những những con tàu siêu tốc ngày nay, khẳng định về những ý tưởng và sự sáng tạo, có thể làm thay đổi, tạo ra những bước ngoặt trong lịch sử nhân loại.</p> <p>Sáng tạo 2 có thể dùng để tặng những người yêu và am hiểu về cà phê.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000256</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>500gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>2 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≤ 2%</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Rất ngon khi dùng nóng hoặc uống với sữa</td>",
  },
  {
    id: "3",
    imgProduct: "../public/img/sangtao3.png",
    nameProduct: "Cà Phê Sáng Tạo 3",
    subtitleProduct: "Rất thơm, vị đắng nhẹ, chua thanh",
    codeProduct: "5000257",
    priceProduct: "95.000",
    scoreProduct: "4.8",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián nhạt.</li> <li>Mùi thơm nồng.</li> <li>Vị đắng hơi chua, thể chất nhẹ vừa phải.</li> <li>Hàm lượng Caffeine: Khoảng 1.7%.</li> <li>Ngon nhất khi uống với sữa.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Cà phê sáng tạo 3 là sự kết hợp giữa những hạt cà phê Arabica sẻ đến từ vùng đất trồng cà phê nổi tiếng Buôn Ma Thuột, được chọn lựa kỹ lưỡng và sản xuất trên công nghệ hàng đầu và bí quyết phối trộn không thể sao chép để tạo ra một sản phẩm cà phê có màu nâu nhạt, mùi rất thơm. Lịch sử thế giới đã minh chứng, có những ý tưởng sáng tạo trước đây được coi là điên rồ, không tưởng thì nay đã thành hiện thực và làm thay đổi hoàn toàn thế giới và nó được khơi lên từ cà phê.</p> <p>Bao bì cà phê Sáng Tạo 3 là phát kiến về chiếc xe hơi đầu tiên để tạo nên những siêu xe đẳng cấp nhất của ngày nay để khẳng định về những ý tưởng và sự sáng tạo, có thể làm thay đổi, tạo ra những bước ngoặt trong lịch sử nhân loại.</p> <p>Cà phê Sáng tạo 3 thích hợp với nữ giới vì hương vị nhẹ nhàng nhưng rất quyến rũ.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000257</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>500gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>2 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 1%</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Pha với sữa để thưởng thức một ly cà phê thơm ngon</td>",
  },
  {
    id: "4",
    imgProduct: "../public/img/sangtao4.png",
    nameProduct: "Cà Phê Sáng Tạo 4",
    subtitleProduct: "Thơm lâu, vị cân bằng, thế chất đậm",
    codeProduct: "5000258",
    priceProduct: "100.000",
    scoreProduct: "5.0",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián đậm.</li> <li>Mùi thơm bền.</li> <li>Vị rất đặc biệt, thể chất đậm.</li> <li>Hàm lượng Caffeine: Khoảng 2.4%.</li> <li>Ngon hơn khi dùng chung với sữa và đá.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Lịch sử thế giới đã minh chứng, có những ý tưởng sáng tạo trước đây được coi là điên rồ, không tưởng thì nay đã thành hiện thực và làm thay đổi hoàn toàn thế giới. Một trong số các ý tưởng vĩ đại đó đã được truyền tải qua hình ảnh của bao bì Cà Phê Sáng Tạo, chuyên cho não sáng tạo.</p> <p>Bao bì cà phê Sáng Tạo 4 là phát kiến về chiếc máy bay đầu tiên để tạo nên những máy bay sang trọng, mạnh nhất của ngày nay. Được lựa chọn từ những hạt cà phê Culi Arabica, Robusta, Excelsa, Catimor tốt nhất thế giới, sản xuất trên công nghệ hàng đầu và bí quyết phối trộn không thể sao chép, cà phê Sáng tạo 4 dành cho những người rất sành, am hiểu về cà phê, gu cà phên mạnh và thói quen uống cà phê mỗi ngày.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000258</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>500gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>2 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 2%</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Dùng chung với đá và sữa sẽ rất ngon</td>",
  },
  {
    id: "5",
    imgProduct: "../public/img/chephin1.png",
    nameProduct: "Cà Phê Chế Phin 1",
    subtitleProduct: "Thơm dịu nhẹ, vị đậm đà",
    codeProduct: "5000104",
    priceProduct: "85.000",
    scoreProduct: "4.7",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián đậm.</li> <li>Mùi thơm dịu nhẹ.</li> <li>Vị đậm đà.</li> <li>Hàm lượng Caffeine: Khoảng 2.5%.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Cà phê Chế Phin của Trung Nguyên đặc chế để mang lại những tách cà phê tuyệt hảo và những ý tưởng sáng tạo đột phá để thay đổi đời người.</p> <p>Được chế biến từ những hạt cà phê Culi Robusta ngon nhất của vùng đất Thánh địa cà phê Buôn Ma Thuột cùng những công nghệ hiện đại nhất thế giới và bí quyết riêng không thể sao chép, Chế Phin Số 1 mang hương thơm dịu lưu luyến, vị đậm đà mân mê vị giác chuyên dành cho những người sành cà phê và các quán cà phê muốn sở hữu gu cà phê riêng biệt.</p> <p>Đặc biệt, phối trộn các loại Chế Phin theo công thức và hướng dẫn đặc biệt từ các chuyên gia cà phê Trung Nguyên còn có thể giúp tạo ra gu uống cà phê riêng, mang hương vị đặc trưng chỉ có ở quán bạn.</p> <p>Sản phẩm chuyên cho kênh quán, thích hợp với nhiều cách pha chế khác nhau.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000104</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>500gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>1 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 1%. 98,9% Cà phê Robusta, bơ, hương liệu tổng hợp dùng trong thực phẩm (hương cà phê và hương chocolate).</td>",
    trRow7: "<td>Hướng dẫn sử dụng</td> <td>Ngon nhất khi uống đá</td>",
  },
  {
    id: "6",
    imgProduct: "../public/img/chephin2.png",
    nameProduct: "Cà Phê Chế Phin 2",
    subtitleProduct: "Thơm dịu nhẹ, vị hài hòa",
    codeProduct: "5000106",
    priceProduct: "90.000",
    scoreProduct: "4.9",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián nhạt.</li> <li>Mùi thơm nhẹ.</li> <li>Vị đắng êm, đậm đà.</li> <li>Hàm lượng Caffeine: Khoảng 2.0%.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Cà phê Chế Phin của Trung Nguyên đặc chế để mang lại những tách cà phê tuyệt hảo và những ý tưởng sáng tạo đột phá để thay đổi đời người.</p> <p>Cà phê chế phin số 2 được chế biến từ những hạt cà phê Arabica và Robusta ngon nhất thế giới. Được sản xuất trên công ngệ hàng đầu và bí quyết phối trộn không thể sao chép, Chế phin số 2 là loại cà phê chuyên dành cho những người muốn thưởng thức những hương vị sáng tạo, độc đáo, do chính mình lựa chọn. Đặc biệt, nếu bạn pha chế theo công thức và hướng dẫn đặc biệt từ các chuyên gia cà phê Trung Nguyên còn có thể giúp tạo ra gu uống cà phê riêng, mang hương vị đặc trưng chỉ riêng bạn có được.</p> <p>Sản phẩm chuyên cho kênh quán, thích hợp với nhiều cách pha chế khác nhau.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000106</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>500gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>1 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 1%. 59,3% Cà phê Arabica, 39,6% Cà phê Robusta, bơ, hương liệu tổng hợp dùng trong thực phẩm (hương cà phê và hương chocolate)</td>",
    trRow7: "<td>Hướng dẫn sử dụng</td> <td>Ngon nhất khi uống với sữa đá</td>",
  },
  {
    id: "7",
    imgProduct: "../public/img/chephin3.png",
    nameProduct: "Cà Phê Chế Phin 3",
    subtitleProduct: "Rất thơm, vị đắng nhẹ, chua thanh",
    codeProduct: "5000108",
    priceProduct: "95.000",
    scoreProduct: "4.8",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián nhạt.</li> <li>Mùi thơm nồng.</li> <li>Vị đắng hơi chua, thể chất nhẹ vừa phải.</li> <li>Hàm lượng Caffeine: Khoảng 1.7%.</li> <li>Ngon nhất khi uống với sữa.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Với cà phê Chế Phin loại 3 này, bạn có thể phối trộn các loại Chế phin khác theo công thức và hướng dẫn đặc biệt từ các chuyên gia cà phê Trung Nguyên để tạo ra gu uống cà phê riêng, mang hương vị đặc trưng chỉ có ở quán bạn. Vì các loại cà phê rang xay của Trung Nguyên đặc chế để mang lại những tách cà phê tuyệt hảo và những ý tưởng sáng tạo đột phá để thay đổi đời người, đem lại những thành công.</p> <p>Được chế biến từ những hạt cà phê Arabica sẻ ngon nhất thế giới, công nghệ hàng đầu và bí quyết riêng không thể sao chép, Chế Phin 3 mang hương thơm dịu lưu luyến, vị đậm đà mân mê vị giác chuyên dành cho những người sành cà phê & các quán cà phê muốn sở hữu gu cà phê riêng biệt.</p> <p>Sản phẩm chuyên cho quán cà phê, thích hợp với nhiều cách pha chế khác nhau.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000108</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>500gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>1 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 1%. 98,9% Cà phê Arabica, bơ, hương liệu tổng hợp dùng trong thực phẩm (hương cà phê và hương chocolate)</td>",
    trRow7: "<td>Hướng dẫn sử dụng</td> <td>Ngon nhất khi uống với sữa đá</td>",
  },
  {
    id: "8",
    imgProduct: "../public/img/chephin4.png",
    nameProduct: "Cà Phê Chế Phin 4",
    subtitleProduct: "Thơm lâu, vị cân bằng, thế chất đậm",
    codeProduct: "5000110",
    priceProduct: "100.000",
    scoreProduct: "5.0",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián đậm.</li> <li>Mùi thơm bền.</li> <li>Vị rất đặc biệt, thể chất đậm.</li> <li>Hàm lượng Caffeine: Khoảng 2.4%.</li> <li>Ngon hơn khi dùng chung với sữa và đá.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Được chế biến từ hạt Arabica, Robusta, Catimor và Excelsa ngon nhất thế giới nên cà phê Chế Phin số 4 của Trung Nguyên có mùi thơm bền, đầm và nước pha màu nâu đậm, mang lại những tách cà phê tuyệt hảo và những ý tưởng sáng tạo đột phá để thay đổi đời người.</p> <p>Đặc biệt, khi bạn phối trộn các loại Chế phin theo công thức và hướng dẫn đặc biệt từ các chuyên gia cà phê Trung Nguyên sẽ tạo ra những ly cà phê tuyệt hảo, ngoài ra mỗi người còn có thể tạo ra gu uống cà phê riêng, mang hương vị đặc trưng cho mỗi người pha chế.</p> <p>Sản phẩm chuyên cho kênh quán, thích hợp với nhiều cách pha chế khác nhau.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000110</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>500gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>1 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 2%. 49,45% Cà phê Arabica, 49,45% Cà phê Robusta, bơ, hương liệu tổng hợp dùng trong thực phẩm (hương cà phê và hương chocolate)</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Thích hợp cho nhiều phong cách uống</td>",
  },
  {
    id: "9",
    imgProduct: "../public/img/hat-culi-arabica.png",
    nameProduct: "Hạt Cà Phê Culi Arabica",
    subtitleProduct: "Thơm đặc trưng, vị đắng dịu",
    codeProduct: "5000627",
    priceProduct: "85.000",
    scoreProduct: "4.7",
    characteristicProduct:
      "<li>Culi Arabica có vị êm nhẹ.</li> <li>Ít đắng và mùi thơm rất đặc trưng.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Từ những hạt Culi Arabica ngon nhất thế giới, bí quyết Phương Đông huyền bí, và sản xuất trên công nghệ hàng đầu, cà phê hạt xay Drip-Culi Arabica có mùi thơm rất độc đáo và vị êm nhẹ, ít đắng.</p> <p>Cu-li Arabica có tính a-xít cao hơn nên vị cũng chua mạnh hơn và ngon hơn so với Arabica thường. Tuy nhiên khi pha độ dày và sánh của lớp crema ít hơn.</p> <p>Đây là loại cà phê thượng hạng dành cho những người yêu cà phê.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000627</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>250gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>1 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 1%</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Sản phẩm ngon nhất khi uống nóng</td>",
  },
  {
    id: "10",
    imgProduct: "../public/img/hat-culi-premium.png",
    nameProduct: "Hạt Cà Phê Culi Premium",
    subtitleProduct: "Thơm lâu, vị cân bằng, thể chất đậm",
    codeProduct: "5000626",
    priceProduct: "90.000",
    scoreProduct: "4.9",
    characteristicProduct:
      "<li>Nước pha màu nâu cánh gián đậm.</li> <li>Mùi thơm đầm và rất lâu.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Một loại cà phê tuyệt vời với dân sành café, dù bận rộn đến mấy, dù quán có xa đến đâu thì họ cũng sẵn sàng “cất công, mất sức” để đến thưởng thức cái hương vị café đặc trưng. Cà phê ở đây không chỉ là một loại thức uống mà là sự tận hưởng, trải nghiệm những hạt cà phê ngon nhất thế giới.</p> <p>Cà phê hạt xay Drip - Premium Culi gồm những hạt Culi thượng hạng được của tất cả các loại cà phê Arabica, Robusta, Excelsa và Catimor, được Trung Nguyên sản xuất trên công nghệ hàng đầu và bí quyết không thể sao chép từ các chuyên gia trung nguyên nên có mùi vị rất thơm ngon, quyến rũ.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000626</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>250gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>1 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 1%</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Dùng chung với đá và sữa sẽ rất ngon</td>",
  },
  {
    id: "11",
    imgProduct: "../public/img/hat-culi-robusta.png",
    nameProduct: "Hạt Cà Phê Culi Robusta",
    subtitleProduct: "Thơm dịu nhẹ, vị đậm đà",
    codeProduct: "5000624",
    priceProduct: "95.000",
    scoreProduct: "4.8",
    characteristicProduct:
      "<li>Nước pha có màu nâu đen.</li> <li>Mùi thơm nhẹ, vị đắng hơi gắt.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Culi Robusta có hương thơm tốt hơn, thiên về mùi hoa quả chín, mùi thảo dược, mùi mạch nha xen lẫn rất nhẹ và tinh tế nên mùi thơm khá hấp dẫn.</p> <p>Đối với dân sành café, dù bận rộn đến mấy, dù quán có xa đến đâu thì họ cũng sẵn sàng “cất công, mất sức” để đến thưởng thức cái hương vị café đặc trưng. Café ở đây không chỉ là một loại thức uống mà là sự tận hưởng, trải nghiệm. Vì thế, bên cạnh những gói café hòa tan chất lượng và tiện lợi thì người tiêu dùng vẫn có nhiều lựa chọn khác với cà phê hạt rang Trung Nguyên.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000624</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>250gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>1 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 2.5%</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Rất ngon khi dùng nóng hoặc uống với sữa</td>",
  },
  {
    id: "12",
    imgProduct: "../public/img/hat-arabica-robusta.png",
    nameProduct: "Hạt Cà Phê Arabica Robusta",
    subtitleProduct: "Thơm dịu nhẹ, vị hài hòa",
    codeProduct: "5000625",
    priceProduct: "100.000",
    scoreProduct: "5.0",
    characteristicProduct:
      "<li>Nước pha có màu đen nhạt.</li> <li>Mùi thơm nhẹ.</li> <li>Vị êm và hơi đắng.</li>",
    descProduct:
      "<h2>Mô tả sản phẩm</h2> <p>Với tinh thần đam mê sống chết với cà phê, Trung Nguyên luôn tạo ra sản phẩm tuyệt hảo nhất, được sản xuất trên công nghệ hàng đầu và bí quyết không thể sao chép. Cà phê hạt xay Drip - Arabica Robusta mang những ly cà phê với mùi vị đặc trưng cân bằng giữa vị chua nhẹ của hạt Arabica và vị đắng gắt của Robusta.</p> <p>Cà phê hạt xay của Trung nguyên giúp thưởng thức cà phê có thể chọn lựa theo sở thích riêng.</p>",
    trRow1: "<td>Mã sản phẩm</td> <td>5000625</td>",
    trRow4: "<td>Trọng lượng tịnh</td> <td>250gr</td>",
    trRow5: "<td>Hạn sử dụng</td> <td>1 năm</td>",
    trRow6:
      "<td>Chỉ tiêu chất lượng</td> <td>Độ ẩm ≤ 5% Hàm lượng cafeine ≥ 1.5%</td>",
    trRow7:
      "<td>Hướng dẫn sử dụng</td> <td>Sản phẩm ngon nhất khi uống nóng</td>",
  },
];
localStorage.setItem("products-infor", JSON.stringify(productsInfor));

// Hiển thị thông tin sản phẩm lên trang chủ
const product = document.getElementById("product");
let productInfor = localStorage.getItem("products-infor");
productInfor = productInfor ? JSON.parse(productInfor) : [];
for (let i = 0; i < productInfor.length; i++) {
  product.innerHTML += `
         <div class="product-each">
            <div class="product-col" onClick="getProduct(${productInfor[i].id})">
                <img src="../${productInfor[i].imgProduct}" alt="" class="product-img">
                <div class="product-infor">
                    <h3 class="product-name">${productInfor[i].nameProduct}</h3>
                    <p class="product-subtitle">${productInfor[i].subtitleProduct}</p>
                    <div class="product-row">
                        <p class="product-price">${productInfor[i].priceProduct}đ</p>
                        <p class="product-score">${productInfor[i].scoreProduct}</p>
                        <img src="../../public/icon/star-svgrepo-com.svg" alt="" class="product-star">
                    </div>
                </div>
            </div>

            <p class="add-to-cart" id="${productInfor[i].id}">Thêm vào giỏ hàng</p>
        </div>
    `;
}

// Chuyển hướng đến trang chi tiết sản phẩm
function getProduct(id) {
  const currentSignIn = localStorage.getItem("currentSignIn");
  if (!currentSignIn) {
    alert("Vui lòng đăng nhập để xem chi tiết sản phẩm");
    window.location.href = "../../../pages/sign-in/sign-in.html";
  } else {
    localStorage.setItem("productNumber", `${id}`);
    window.location.href = "../../components/products/products.html";
  }
}

// Chuyển đổi đăng nhập - đăng ký > giỏ hàng - user
let currentSignIn = localStorage.getItem("currentSignIn");
console.log(currentSignIn);
const act = document.getElementById("act");
if (currentSignIn) {
  currentSignIn = JSON.parse(currentSignIn);
  act.innerHTML = `
        <div class="cart">
            <a href="../../components/cart/cart.html">
                <img src="../../public/icon/cart-shopping-svgrepo-com.svg" alt="" class="act-icon act-icon-cart">
                <div class="total" id="total">0</div>
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

// Hiển thị số lượng sản phẩm đã thêm vào giỏ hàng
function getTotal() {
  const total = document.getElementById("total");
  const products = JSON.parse(localStorage.getItem("product-choice") || "[]");
  const productCount = products.reduce((number, item) => {
    number += item.count;
    return number;
  }, 0);
  console.log(products);
  total.innerHTML = `${productCount}`;
}

// Thêm sản phẩm vào giỏ hàng
const addToCart = document.getElementsByClassName("add-to-cart");
getTotal();
for (let i = 0; i < addToCart.length; i++) {
  addToCart[i].addEventListener("click", () => {
    const currentSignIn = localStorage.getItem("currentSignIn");
    if (!currentSignIn) {
      // console.log('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
      alert("Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng");
      window.location.href = "../../pages/sign-in/sign-in.html";
      return;
    }
    const data = JSON.parse(localStorage.getItem("product-choice") || "[]");
    const findProduct = data.findIndex((item) => item.id === addToCart[i].id);
    // console.log(findProduct);
    if (findProduct === -1) {
      const product = productInfor.find((item) => item.id === addToCart[i].id);
      if (product) {
        data.push({
          ...product,
          count: 1,
        });
      }
    } else {
      data[findProduct].count++;
    }
    // console.log(data);
    localStorage.setItem("product-choice", JSON.stringify(data));
    getTotal();
  });
}

//Đăng xuất
const logOut = document.getElementById("log-out");
logOut.addEventListener("click", () => {
  localStorage.removeItem("currentSignIn");
  window.location.href = "../../../pages/sign-in/sign-in.html";
});
