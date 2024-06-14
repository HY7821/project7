import React from 'react'
import { Col, Container, Row, Form } from 'react-bootstrap'
import OffMenu from './OffMenu'
import { Person, Search } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const Navbar = ({authenticate, setAuthenticate}) => {
    const menuList = [
        "새재품",
        "중고",
        "세일",
        "두가티",
        "BMW",
        "가와사키",
        "스즈키",
        "베스파",
    ];

    const navigate = useNavigate();

    const goToLogin = () => {
        navigate("/login");
    };

    const home = () => {
        navigate("/");
    };

    const search = (e) => {
        
        // console.log("keyDown");
        if(e.key === "Enter") {
            e.preventDefault();
            console.log("enter를 클릭했어요", e.key)
            let keyword = e.target.value;
            console.log("keyword? : ", keyword);
            navigate(`/?q=${keyword}`);
        }
    };

  return (
    <>
    <Container className='mt-5'>
        {authenticate ? (
        <div className='d-flex justify-content-end align-items-center mt-2'>
            <Person /><div className='ms-2 pointer' onClick={() => {
                setAuthenticate(false);
            }}>로그아웃</div>
        </div>
        ) : (
        <div className='d-flex justify-content-end align-items-center mt-2'>
            <Person /><div className='ms-2 pointer' onClick={goToLogin}>로그인</div>
        </div>
        )}
        <div className='text-center mb-4 d-none d-md-block'>
        <img src='../images/logo.png' alt='로고이미지' id="logoImg" onClick={home} className='pointer' />
        </div>
        <div className='d-none d-md-block'>
        <Row>
            <Col lg={2}></Col>
            <Col lg={8} className='text-center'>
        <ul className='list-unstyled d-flex justify-content-center mt-2'>
            {menuList.map((menu) => (<li className='ms-3 fw-bold'>{menu}</li>))}
        </ul>
        </Col>
        <Col lg={2}>
      <Form>
        <Form.Group controlId='searchform1' className='d-flex justify-content-end align-items-center'>
            <Search/>
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              onKeyDown={(event) => search(event)}
            />
            </Form.Group>
      </Form>
        </Col>
        </Row>
        </div>
        <div className='d-md-none'>
            <OffMenu />
        <img src='../images/logo.png' alt='로고이미지' id="logoImg" onClick={home} className='pointer'/>
        </div>
    </Container>
    </>
  )
}

export default Navbar;