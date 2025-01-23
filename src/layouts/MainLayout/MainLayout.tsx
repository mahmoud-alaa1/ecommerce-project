import { Container } from "react-bootstrap";
import Header from "../../components/common/Header/Header";


import styles from "./styles.module.css";
const { container, wrapper } = styles;

export default function MainLayout() {
  return (
    <Container className={container}>
      <Header />
      <div className={wrapper}>Main</div>
    </Container>
  );
}
