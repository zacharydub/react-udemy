import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id: "p1", price: 6, title: "my first book", description: "cool book" },
  { id: "p2", price: 8, title: "my second book", description: "cool book#2" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((each) => (
          <ProductItem
            key={each.id}
            id={each.id}
            title={each.title}
            price={each.price}
            description={each.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
