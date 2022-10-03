import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Drawer, Modal, Row, Col, Button, Input } from 'antd';
import React, {useState} from 'react';
import './Producto.css';
//GITHUB https://github.com/javiermilesinacap

const { Meta } = Card;

const Producto = (props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [nombre, setNombre] = useState(props.data.nombre)
  const [precio, setPrecio] =useState(props.data.precio)
  const [descripcion, setDescripcion] = useState(props.data.descripcion)
  const handleEdit = (id) => {
    console.log("HICE CLICK", id)
    setIsOpen(true)
  }
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" onClick={() => handleEdit(props.data.id)} />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta
        title={props.data.nombre}
        description={props.data.precio}
      />
      <Modal open={isOpen} onOk={() => { setIsOpen(false) }} title="Basic Modal">
        <Row>
          <Col>
            <Input placeholder="Nombre Producto" defaultValue={nombre} />
            <Input placeholder="Valor Producto" defaultValue={precio} />
            <Input placeholder="Descripción" defaultValue={descripcion}/>
            <Button type='primary' onClick={props.unbotonClick}>Guardar</Button>
          </Col>
        </Row>
      </Modal>
    </Card>
  );
}

export default Producto;