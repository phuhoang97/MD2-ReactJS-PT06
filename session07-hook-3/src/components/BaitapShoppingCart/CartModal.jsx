import React from "react";

function CartModal({ onClose, cartItem, onUpdateQuantity, removeItem }) {
  return (
    <div>
      <div>
        <h2>Giỏ hàng</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <ul>
        {cartItem.map((element) => (
          <li>
            {element.name} - {element.price}
            <button
              onClick={() => onUpdateQuantity(element.id, element.quantity - 1)}
            >
              -
            </button>
            {element.quantity}
            <button
              onClick={() => onUpdateQuantity(element.id, element.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(element.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartModal;
