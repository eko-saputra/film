import { Container, Row, Col } from 'react-bootstrap';
import Antman from '.././assets/images/superhero/antman.jpg';
import Avenger from '.././assets/images/superhero/avenger.jpg';
import Batman from '.././assets/images/superhero/batman.jpg';
import Robinhood from '.././assets/images/superhero/robinhood.jpg';
import Superman from '.././assets/images/superhero/superman.jpg';
import Card from './Cardfilm';
const Superhero = () => {
    return (
        <div className='superhero pt-5' id="superhero">
            <Container className="py-3 text-center">
                <h1 className="text-light">SUPERHERO</h1>
                <Row className='mb-3'>
                    <Col>
                        <Card gambar={Antman} judul="Antman" />
                    </Col>
                    <Col>
                        <Card gambar={Avenger} judul="Avenger" />
                    </Col>
                    <Col>
                        <Card gambar={Batman} judul="Batman" />
                    </Col>
                </Row>
                <Row className='mb-3'>
                    <Col>
                        <Card gambar={Robinhood} judul="Robinhood" />
                    </Col>
                    <Col>
                        <Card gambar={Superman} judul="Superman" />
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Superhero;