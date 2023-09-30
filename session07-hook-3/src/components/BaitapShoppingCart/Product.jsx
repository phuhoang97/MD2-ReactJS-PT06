import React from "react";

// B3: Nhập giá trị props từ  <ShoppingCart />
function Product({ item, addToCart }) {
  //   console.log(item);
  // B4: Hiển thị dữ liệu
  return (
    <div>
      <h4>{item.name}</h4>
      <p>{item.price}</p>
      {/* B9: Viết sự kiện thêm giỏ hàng */}
      <button onClick={() => addToCart(item)}>Add To Cart</button>
    </div>
  );
}

export default Product;
