import { Link } from "react-router-dom";

//styles
import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

//types
import { TCategory } from "@customTypes/category";

const Category = ({ title, img, prefix }: TCategory) => {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <h4 className={` ${categoryTitle}`}>{title}</h4>
      </Link>
    </div>
  );
};

export default Category;
