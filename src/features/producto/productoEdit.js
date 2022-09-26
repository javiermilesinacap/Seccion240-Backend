import React, { useState } from 'react'
import { Input, Row, Modal, Col, Button } from 'antd'
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const ProductoEdit = (props) => {
  const [isOpen, setIsOpen] = useState(props.open)
  return (
    <>
   <SettingOutlined key="setting" />
   <EditOutlined key="edit" onClick={()=>{setIsOpen(true)}}/>
   <EllipsisOutlined key="ellipsis" />
    <Modal open={isOpen} onOk={()=>{setIsOpen(false)}} title="Basic Modal">
      <Row>
        <Col>
          <Input placeholder="Nombre Producto" />
          <Input placeholder="Valor Producto" />
          <Input placeholder="Descripción" />
          <Button type='primary'>Guardar</Button>
        </Col>
      </Row>
    </Modal>
    </>

  )
}

export default ProductoEdit;



// const App = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>

//     </>
//   );
// };

