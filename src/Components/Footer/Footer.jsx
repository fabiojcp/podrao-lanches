import {
  DivMain,
  Badge,
  Img,
  TotalQnt,
  Title,
  TotalPrice,
} from "./FooterStyle";
import { TbPaperBag } from "react-icons/tb";
import { useSelector } from "react-redux";

export default function Footer({ setOpenCart,  }) {
  const productCart = useSelector(({ cart }) => cart);

  return (
    <DivMain onClick={() => setOpenCart(true)}>
      <Badge>
        <TotalQnt>
          {productCart.reduce((acumulador) => acumulador + 1, 0)}
        </TotalQnt>
        <Img>{TbPaperBag()}</Img>
      </Badge>
      <Title>Ver sacola</Title>
      <TotalPrice>
        R${" "}
        {productCart
          .reduce(
            (acumulador, product) => acumulador + product.price * product.qnt,
            0
          )
          .toFixed(2)
          .toString()
          .replace(".", ",")}
      </TotalPrice>
    </DivMain>
  );
}
