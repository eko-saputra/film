import { Container, Row, Col } from "react-bootstrap"
import Logo from '.././assets/images/logo/cinema.png';

const Footer = () => {
    return (
        <div className="bg-dark text-muted py-5 footer">
            <Container>
                <Row>
                    <Col className="text-center">
                        <img src={Logo} alt="Cinema 21" />
                        <p>Copyright &copy; Eko Saputra - 2022</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer;