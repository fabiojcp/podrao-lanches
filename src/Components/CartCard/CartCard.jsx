import { DivProduct, BtnEdit, Name } from "./CartCardStyle";
import { SubTitle } from "../CardOpen/CardOpenStyle";
import { AiOutlineEllipsis } from "react-icons/ai";

export default function CartCard({ product, setEditProd, setProduct, }) {
  return (
    <DivProduct>
      <SubTitle>{product.qnt}x</SubTitle>
      <Name>{product.name}</Name>
      <SubTitle>R$ {(product.price*product.qnt).toFixed(2)
          .toString()
          .replace(".", ",")}</SubTitle>
      <BtnEdit onClick={() => {setEditProd(true); setProduct(product) }} >{AiOutlineEllipsis()}</BtnEdit>
    </DivProduct>
  );
}
