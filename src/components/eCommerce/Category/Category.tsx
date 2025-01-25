import styles from "./styles.module.css";
const { category, categoryImg, categoryTitle } = styles;

interface IProps {
  title: string;
  img: string;
}

const Category = ({ title, img }: IProps) => {
  return (
    <div className={category}>
      <div className={categoryImg}>
        <img src={img} alt="" />
      </div>
      <h4 className={categoryTitle}>{title}</h4>
    </div>
  );
};

export default Category;
