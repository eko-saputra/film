import { Card } from 'react-bootstrap';
import './style.css';
const Cardfilm = (props) => {
    return (
        <Card>
            <Card.Img className='imgcard' variant="top" src={props.gambar} />
            <Card.Body>
                <Card.Title>{props.judul}</Card.Title>
                <Card.Text>
                    Some quick example text to build on
                </Card.Text>
                <a href='/' className="btn btn-primary"> Watching {props.judul} </a>
            </Card.Body>
        </Card >
    )
}

export default Cardfilm;