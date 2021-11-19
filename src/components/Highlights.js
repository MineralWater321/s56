
import { Row, Col, Card } from 'react-bootstrap';

export default function Highlights(){
    return(
        <Row className="mt-3 mb-3">
            <Col xs={12} md={4}>
                <Card className="cardHighlight p-3">                  
                  <Card.Body>
                    <Card.Title>
                      <h2>Pie #1</h2>
                    </Card.Title>
                    <Card.Text>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim quia corporis magni quis repellendus praesentium asperiores, repellat voluptatum dolore. Repellat maiores ex ad voluptatibus cumque iusto amet. Exercitationem, eum.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="cardHighlight p-3">                 
                  <Card.Body>
                    <Card.Title>
                      <h2>Pie #2</h2>
                    </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim quia corporis magni quis repellendus praesentium asperiores, repellat voluptatum dolore. Repellat maiores ex ad voluptatibus cumque iusto amet. Exercitationem, eum.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
            <Col xs={12} md={4}>
                <Card className="cardHighlight p-3">                  
                  <Card.Body>
                    <Card.Title>
                      <h2>Pie #3</h2>
                    </Card.Title>
                    <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur enim quia corporis magni quis repellendus praesentium asperiores, repellat voluptatum dolore. Repellat maiores ex ad voluptatibus cumque iusto amet. Exercitationem, eum.
                    </Card.Text>
                  </Card.Body>
                </Card>
            </Col>
        </Row>
    )
}
