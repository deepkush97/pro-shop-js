import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { Product } from "../components/Product";
import { listProducts } from "../store/actions/productActions";
export const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [dispatch, keyword]);
  const { loading, error, products } = useSelector(
    (state) => state.productList
  );
  return (
    <>
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};
