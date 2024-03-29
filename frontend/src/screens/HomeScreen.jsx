import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Loader } from "../components/Loader";
import { Message } from "../components/Message";
import { Product } from "../components/Product";
import { Paginate } from "../components/Paginate";
import { listProducts } from "../store/actions/productActions";
import { ProductCarousel } from "../components/ProductCarousel";
import { Meta } from "../components/Meta";
import { Link } from "react-router-dom";
export const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;
  const pageNumber = match.params.pageNumber || 1;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );
  return (
    <>
      <Meta />
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          {!keyword ? (
            <ProductCarousel />
          ) : (
            <Link to="/" className="btn btn-light">
              Go Back
            </Link>
          )}
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};
