import {
  DivMain,
  DivContent,
  DivText,
  Title,
  Bio,
  Img,
  Price,
} from "./ProductCardStyle";

export default function ProductCard({ product, setOpen, setProduct}) {
  return (
    <>
      <DivMain onClick={() =>{ setProduct(product); setOpen(true)}}>
        <DivContent>
          <DivText>
            <Title>{product.name}</Title>
            <Bio>{product.bio}</Bio>
          </DivText>
          <Price>
            R$ {product.price.toFixed(2).toString().replace(".", ",")}
          </Price>
        </DivContent>
        <Img background={product.img}></Img>
      </DivMain>
    </>
  );
}
