export const CartData = {
  ProductId: "",
  ProductName: "",
  ProductPrice: "",
  ProductImage: "",
};

export const CartData_Reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TASK":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET":
      return InitialState;
  }
};
