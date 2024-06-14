import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Dropdown, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = ({item}) => {

  const newImg = <img src='../images/icon_02.gif' alt='신상품' />;
  const delivery = <img src='../images/icon_09.gif' alt='배송' />;
  const sale = <img src='../images/icon_11.gif' alt='sale' />;

  let { id } = useParams();

  const [product, setProduct] = useState(null);

  const getProductDetail = async() => {
    let url = `https://my-json-server.typicode.com/HY7821/project7/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <>
    <Container className='mt-5'>
      <Row>
        <Col xs={12} md={6}><img src={product?.img} alt='이미지' className='img-fluid' /></Col>
        <Col xs={12} md={6}>
        <p>
          <span>{product?.new && newImg}</span>
          <span>{product?.sale && sale}</span>
          <span>{product?.delivery && delivery}</span>
        </p>
        <h3>{product?.title}</h3>
        <p>{product?.description}</p>
        <p>{product?.price}</p>

        <Dropdown>
      <Dropdown.Toggle variant="outline-warning" id="dropdown-basic">
        Size
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">작음</Dropdown.Item>
        <Dropdown.Item href="#/action-2">여성용</Dropdown.Item>
        <Dropdown.Item href="#/action-3">남성용</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <hr />
    <p className='text-end'><Button variant='outline-danger'>구매하기</Button></p>
        </Col>
      </Row>
      <Row>
        <hr className='mt-5'></hr>
        <h2>오토바이 구매 주의사항</h2>
        <p>125CC 이하 오토바이는 운전면허 1종보통 이상 구매가능하며 125CC 초과 상품은 운전면허 소형2종 이상 보유 하셔야 구매가 가능합니다.</p>
        <p>오토바이 관리 및 주의사항</p>
        <ul className='ps-5 mb-5'>
          <li>500KM 엔진오일 교체</li>
          <li>제꿍우꿍좌꿍 주의하기</li>
          <li>교통법규는 준수해주세요</li>
          <li>안전한 라이딩 하세요</li>
          <li>오토바이 드라이브 코스는 많습니다</li>
        </ul>
      </Row>
    </Container>
    </>
  );
};

export default ProductDetail