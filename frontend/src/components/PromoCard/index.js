import { Button, Card } from "react-bootstrap";

function PromoCard() {

    return (
        <>
            <Card style={{ width: '18rem' }}>
                <div><img src="./src/assets/img/salvador.jpg" alt="" /></div>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );

}

export default PromoCard;