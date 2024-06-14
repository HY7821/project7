import React from 'react';
import { useState } from 'react';
import Offcanvas from "react-bootstrap/Offcanvas";
import { List } from "react-bootstrap-icons"


const OffMenu = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
  return (
    <>
    <List onClick={handleShow} size={50} />
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>메뉴 리스트</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul className='list-unstyled d-flex justify-content-center mt-2'>
            {menuList.map((menu) => (<li className='ms-3'>{menu}</li>))}
        </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default OffMenu