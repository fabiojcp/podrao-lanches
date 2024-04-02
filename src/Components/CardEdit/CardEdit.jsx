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
} from "./CardEditStyle";
import { AiOutlineClose, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddToCartThunk, editProduct } from "../../Store/Modules/Cart/Thunk";

export default function CartEdit({ product, setEdit }) {
  console.log(product);
  const dispach = useDispatch();
  const [qnt, setQnt] = useState(product.qnt);
  const [obs, setObs] = useState("");

  function handleQnt(type) {
    qnt === 1 && type === "plus"
      ? setQnt(2)
      : type === "minus" && qnt > 1
      ? setQnt(qnt - 1)
      : type === "plus" && setQnt(qnt + 1);
  }


  return (
    <DivMain>
      <DivProduct>
        <DivHeader>
          <SubTitle>{product.name}</SubTitle>
          <BtnClose onClick={() => setEdit(false)}>{AiOutlineClose()}</BtnClose>
        </DivHeader>
        <Img background={product.img} />
        <Title>{product.name}</Title>
        <Bio>{product.bio}</Bio>
        <Price>
          R$ {product.price.toFixed(2).toString().replace(".", ",")}
        </Price>
        <Bio>Observações:</Bio>
        <Input
        
          onChange={(event) => setObs(event.target.value)}
        >{product.obs}</Input>
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
            setEdit(false);
            dispach(
              
              editProduct({
                ...product,
                qnt: qnt,
                obs: obs,
              })
            );
          }}
        >
          <Text>Editar</Text>
          <TotalPrice>
            R$ {(qnt * product.price).toFixed(2).toString().replace(".", ",")}
          </TotalPrice>
        </DivAdd>
      </DivAddCar>
    </DivMain>
  );
}
