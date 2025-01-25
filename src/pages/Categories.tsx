import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerce";

import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();

  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    dispatch(actGetCategories());
  }, [dispatch]);

  const catergoriesList =
    records.length > 0
      ? records.map((category) => (
          <Col
            key={category.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...category} />
          </Col>
        ))
      : "There are no categories to display";

  return (
    <Container>
      <Row>{catergoriesList}</Row>
    </Container>
  );
};

export default Categories;
