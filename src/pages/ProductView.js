import { useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

export default function ProductView() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");    
    const [price, setPrice] = useState(0);

    return(
        <Container className="mt-5">
            <Col>
                <Card>
                    <Card.Body className="text-center">
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>Description</Card.Subtitle>
                        <Card.Text>{description}</Card.Text>
                        <Card.Subtitle>Price</Card.Subtitle>
                        <Card.Text>{price}</Card.Text>
                        <Button variant="primary" block>Enroll</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Container>
    )
}