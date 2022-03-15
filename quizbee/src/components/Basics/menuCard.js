import { Card, Col } from 'react-bootstrap'
import flower2 from '../../../src/Assets/Images/flower2.jpg'

const MenuCard = ({ menuData }) => {

    // console.log(menuData);

    

    return (
        <>

            {menuData.map((currentElement) => {
                return <Col md={6} key = {currentElement.id}>
                <Card className='sm-3'>
                    <Card.Img variant='top' src={flower2} />
                    <Card.Body>
                        <Card.Title> <h1>{currentElement.id}.{currentElement.name}</h1> </Card.Title>
                        <Card.Title>{currentElement.phone}</Card.Title>
                        <Card.Text>
                            <p> {currentElement.description}</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            })}
            
        </>)
}

export default MenuCard