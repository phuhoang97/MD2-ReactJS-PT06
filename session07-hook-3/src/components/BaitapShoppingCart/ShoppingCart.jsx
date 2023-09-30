// rfce

import React, { useState } from "react";
import Product from "./Product";
import CartModal from "./CartModal";

function ShoppingCart() {
  // B1: Khai báo dữ liệu ban đầu => Truyền dữ liệu xuống <Product />
  const products = [
    { id: 1, name: "Áo thun", price: 20 },
    { id: 2, name: "Quần jean", price: 40 },
    { id: 3, name: "Giầy thể thao", price: 120 },
  ];
  // B5: Tạo chức năng cart modal => Khi click vào cartModal sẽ mở ra giao diện
  const [isCartModal, setIsCartModal] = useState(false);

  // B8: Khai báo hàm đóng modal
  const closeCartModal = () => {
    setIsCartModal(false);
  };

  const [cartItem, setCartItem] = useState([]);
  const addToCart = (product) => {
    // console.log(product);
    const existingItem = cartItem.find((item) => item.id === product.id);
    // console.log(existingItem);
    if (existingItem) {
      existingItem.quantity += 1;
      setCartItem([...cartItem]);
    } else {
      setCartItem([...cartItem, { ...product, quantity: 1 }]);
    }
  };

  //   console.log(cartItem);

  const onUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity >= 1) {
      // Nếu id trong cartItem = với itemId (id được gửi lên)
      const updateItems = cartItem.map((e) =>
        e.id === itemId ? { ...e, quantity: newQuantity } : e
      );
      setCartItem(updateItems);
    }
  };

  const removeItem = (itemId) => {
    // Trả ra mảng mới không có id trùng với itemId
    const deleteItem = cartItem.filter((item) => item.id !== itemId);
    // Sử dụng hàm splice xóa theo vị trí id => tạo ra array mới rồi mới xóa
    // console.log(itemId);

    // let indexItem = itemId - 1;
    // console.log(indexItem);
    // const cloneCartItem = [...cartItem];
    // cloneCartItem.splice(indexItem, 1);
    // console.log(deleteItem);

    setCartItem(deleteItem);
  };
  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {/* B2: Hiển thị dữ liệu và truyền props xuống Product */}
        <ul>
          {products.map((element) => (
            <li key={element.id}>
              {/* {console.log(element)} */}
              <Product item={element} addToCart={addToCart} />
            </li>
          ))}
        </ul>
      </div>
      {/* B6: Tạo button Cart => Khi click sẽ mở set lại state thành true */}
      <div>
        <button onClick={() => setIsCartModal(true)}>
          Cart {cartItem.length}
        </button>
      </div>
      {/* B7: Viết logic khi dựa trên state isCartModal */}
      {/* C1: Cách viết sử dụng toán tử 3 ngôi if else (if else if else) */}
      {/* {isCartModal ? <CartModal /> : ""}  */}
      {/* C2: Cách viết sử dụng toán tử if. && => điều kiện phải khác null, "", 0, undefined, false ... */}
      {isCartModal && (
        <CartModal
          onClose={closeCartModal}
          cartItem={cartItem}
          onUpdateQuantity={onUpdateQuantity}
          removeItem={removeItem}
        />
      )}
    </div>
  );
}

export default ShoppingCart;
