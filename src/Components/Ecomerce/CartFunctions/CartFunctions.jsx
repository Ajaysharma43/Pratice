export const updateQuantity = (index, operation,Cart) => {
    const updatedCart = [...Cart];
    if (operation === "increase") {
      updatedCart[index].ProductQuantity += 1;
    } else if (
      operation === "decrease" &&
      updatedCart[index].ProductQuantity > 1
    ) {
      updatedCart[index].ProductQuantity -= 1;
    }
    return updatedCart;
  };