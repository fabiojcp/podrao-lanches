import {
  DivMain,
  DivHeader,
  SubTitle,
  BtnClose,
  DivAddCar,
} from "../CardOpen/CardOpenStyle";
import { AiOutlineClose } from "react-icons/ai";
import { Title } from "../Header/HeaderStyle";
import { useSelector } from "react-redux";
import CartCard from "../CartCard/CartCard";
import { DivTotal, BtnBuy } from "./CartStyle";
import toastStyle from "../../Styles/ToastStyle";
import { toast } from "react-toastify";

export function Cart({ setOpenCart, setEditProd, setProduct }) {
  const productCart = useSelector(({ cart }) => cart);

  return (
    <DivMain>
      <DivHeader>
        <SubTitle
          style={{
            color: "rgb(255,49,49)",
            fontFamily: "'Finger Paint',cursive",
          }}
        >
          Seu pedido no
        </SubTitle>
        <Title
          style={{
            background: "transparent",
            letterSpacing: "1vw",
            width: "auto",
          }}
        >
          Bigode
        </Title>
        <BtnClose onClick={() => setOpenCart(false)}>
          {AiOutlineClose()}
        </BtnClose>
      </DivHeader>
      <SubTitle
        style={{
          textAlign: "center",
          margin: " 2vh 5vw 0 5vw",
          padding: "0 0 2vh 0",
          borderBottom: "1px solid #dfdfdf",
        }}
      >
        Melhor podrão da cidade!
      </SubTitle>
      {productCart.map((product, index) => (
        <CartCard
          product={product}
          key={index}
          setEditProd={setEditProd}
          setProduct={setProduct}
        />
      ))}
      <DivTotal
        style={{ color: "rgb(255,49,49)", justifyContent: "center" }}
        onClick={() => setOpenCart(false)}
      >
        <SubTitle>Adicionar mais itens</SubTitle>
      </DivTotal>
      <DivTotal>
        <SubTitle>Total</SubTitle>
        <SubTitle>
          {" "}
          {productCart
            .reduce(
              (acumulador, product) => acumulador + product.price * product.qnt,
              0
            )
            .toFixed(2)
            .toString()
            .replace(".", ",")}
        </SubTitle>
      </DivTotal>

      <DivAddCar>
        <BtnBuy
          onClick={() =>
            toast.success("Obrigado pela preferência!", toastStyle)
          }
        >
          Fazer pedido
        </BtnBuy>
      </DivAddCar>
    </DivMain>
  );
}
