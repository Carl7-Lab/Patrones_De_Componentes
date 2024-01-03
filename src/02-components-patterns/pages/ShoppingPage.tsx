import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  img: "./coffee-mug.png",
  title: "Coffee Mug - Card",
};

const ShoppingPage = () => (
  <div>
    <h1>Shopping Store</h1>
    <hr />
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <ProductCard product={product} className="bg-dark text-white">
        <ProductCard.Image className="custom-image" />
        <ProductCard.Title className="text-bold" />
        <ProductCard.Buttons className="custom-buttons" />
      </ProductCard>

      <ProductCard product={product} className="bg-dark text-white">
        <ProductImage className="custom-image" />
        <ProductTitle className="text-bold" />
        <ProductButtons className="custom-buttons" />
      </ProductCard>

      <ProductCard
        product={product}
        style={{ color: "white", backgroundColor: "rgb(56, 56, 56)" }}
      >
        <ProductImage
          style={{
            borderRadius: "20px",
            padding: "10px",
            width: "calc(100% - 20px)",
          }}
        />
        <ProductTitle style={{ fontWeight: "bold" }} />
        <ProductButtons style={{ borderColor: "white", color: "white" }} />
      </ProductCard>
    </div>
  </div>
);

export default ShoppingPage;
