import { toast } from "react-toastify";
import { addToCart, removeToCart, editToCart } from "./Action";
import toastStyle from "../../../Styles/ToastStyle";

export function AddToCartThunk (product) {
  const localList = JSON.parse(localStorage.getItem("cart")) || [];
  let productCheck = product;

  function IDgenerator() {
    const newId = (Date.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")
      productCheck = { ...productCheck, productID: newId }
    return IDcheck() && IDgenerator();
  }
  const IDcheck = () =>
    localList.some((element) => element.productID === productCheck.productID);

  IDcheck() && IDgenerator();

  return (dispach) => {
    const list = JSON.parse(localStorage.getItem("cart")) || [];
    list.push(productCheck);
    toast.success("Produto adicionado!", toastStyle);
    localStorage.setItem("cart", JSON.stringify(list));
    dispach(addToCart(list));
  };
}
export const RemoveCartThunk = (product) => {
  return (dispach) => {
    const list = JSON.parse(localStorage.getItem("cart"));
    const newList = list.filter((element) => element.productID !== product.productID);
    localStorage.setItem("cart", JSON.stringify(newList));
    dispach(removeToCart(product));
    toast.success("Produto removido!", toastStyle);
  };
};

export const editProduct = (product) => {
  return (dispach) => {
    const list = JSON.parse(localStorage.getItem("cart"));
    console.log(list)
    console.log(product)
    const newList = list.map((element) => element.productID === product.productID ? product : element);
    localStorage.setItem("cart", JSON.stringify(newList));
    dispach(editToCart(newList));
    toast.success("Produto alterado!", toastStyle);
  }
}