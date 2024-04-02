import {
  DivMain,
  DivProduct,
  DivHeader,
  SubTitle,
  BtnClose,
  Img,
  Title,
  Bio,
  Price,
  DivAddCar,
  DivQnt,
  BtnSome,
  Qnt,
  DivAdd,
  Text,
  TotalPrice,
  Input,
} from "./CardOpenStyle";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCartThunk } from "../../Store/Modules/Cart/Thunk";


export default function CardOpen({ product, setOpen }) {
  const dispach = useDispatch();
  const [qnt, setQnt] = useState(1);
  const [ obs, setObs] = useState("")

  function handleQnt(type) {
    qnt === 1 && type === "plus"
      ? setQnt(2)
      : type === "minus" && qnt > 1
      ? setQnt(qnt - 1)
      : type === "plus" && setQnt(qnt + 1);
  }

  function IDgenerator() {
    return (Date.now().toString(36) + Math.random().toString(36)).replace(
      /\./g,
      ""
    );
  }

  return (
    <DivMain>
      <DivProduct>
        <DivHeader>
          <SubTitle>{product.name}</SubTitle>
          <BtnClose onClick={() => setOpen(false)}>{AiOutlineClose()}</BtnClose>
        </DivHeader>
        <Img background={product.img} />
        <Title>{product.name}</Title>
        <Bio>{product.bio}</Bio>
        <Price>
          R$ {product.price.toFixed(2).toString().replace(".", ",")}
        </Price>
        <Bio>Observações:</Bio>
        <Input type="text" onChange={(event) => setObs(event.target.value)}></Input>
      </DivProduct>

      <DivAddCar>
        <DivQnt>
          <BtnSome
            onClick={() => handleQnt("minus")}
            color={qnt === 1 ? "rgb(245, 240, 235)" : "black"}
          >
            {AiOutlineMinus()}
          </BtnSome>
          <Qnt>{qnt}</Qnt>
          <BtnSome onClick={() => handleQnt("plus")}>{AiOutlinePlus()}</BtnSome>
        </DivQnt>
        <DivAdd
          onClick={() => {
            setOpen(false);
            dispach(
              AddToCartThunk({ ...product, qnt: qnt, productID: IDgenerator(), obs: obs })
            );
          }}
        >
          <Text>Adicionar</Text>
          <TotalPrice>
            R$ {(qnt * product.price).toFixed(2).toString().replace(".", ",")}
          </TotalPrice>
        </DivAdd>
      </DivAddCar>
    </DivMain>
  );
}
