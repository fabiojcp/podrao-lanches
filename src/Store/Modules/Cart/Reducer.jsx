const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartReducer = (state = cart, action) => {
  const { list } = action;
  switch (action.type) {
    case "@cart/ADD":
      return list;
    case "@cart/EDIT":
      return list;
    case "@cart/REMOVE":
      return JSON.parse(localStorage.getItem("cart"));
    default:
      return state;
  }
};
export default cartReducer;
