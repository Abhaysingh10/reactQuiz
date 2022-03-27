import { Card, Col } from 'react-bootstrap'
import flower2 from '../../../src/Assets/Images/flower2.jpg'

const MenuCard = ({ menuData }) => {

    // console.log(menuData);

    

    return (
        <>

            {menuData.map((currentElement) => {

    const{ id, name, catergory, image , description, phone} = currentElement;
                return <Col md={6} key = {id}>
                <Card className='sm-3'>
                    <Card.Img variant='top' src={flower2} />
                    <Card.Body>
                        <Card.Title> <h1>{id}.{name}</h1> </Card.Title>
                        <Card.Title>{phone}</Card.Title>
                        <Card.Text>
                            <p> {description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            })}
            
        </>)
}

export default MenuCard