import { Container, Row, Col } from 'react-bootstrap'
import Rating from '.././assets/images/rating.png';
const Detaildune = () => {
    return (
        <Container fluid className='bg-dark py-5'>
            <Container>
                <Row className='mt-5'>
                    <Col className='bg-light p-3 rounded'>
                        <Row>
                            <Col>
                                <iframe class="rounded" width="560" height="315" src="https://www.youtube.com/embed/mbTp1vlRqYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </Col>
                            <Col>
                                Director <b>Paul Feig</b>
                                <hr />
                                Writers
                                David Magee(screenplay by)Paul Feig(screenplay by)Soman Chainani(based on the book by)
                                <hr />
                                Stars
                                Kit <b>YoungSophia</b> Anne CarusoCate Blanchett(voice)
                            </Col>
                        </Row>
                        <p>
                            <span className='badge bg-dark text-light p-2 m-2'>ACTION</span>
                            <span className='badge bg-dark text-light p-2 m-2'>DRAMA</span> <img src={Rating} width="100" />
                        </p>
                        <p>
                            Sinopsis Dune kali ini menceritakan tentang perjalanan Duke Atreides (Oscar Isaac) menjelajahi gurun bernama Dune untuk mendapat sumber spice (rempah-rempah).

                            Kekuatan spice yang luar biasa bisa membantu manusia berumur panjang, sangat cerdas, bahkan mampu menjelajahi luar angkasa dengan kecepatan cahaya.

                            Namun, mengingat Dune adalah tempat yang berbahaya, Duke membawa serta orang-orang kepercayaannya untuk menyelesaikan misi tersebut.

                            Nah, sinopsis Dune berikut ini akan membongkar keseruan akting Oscar Isaac, Timothee Chalamet, dan Rebecca Ferguson di film ini.
                        </p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Detaildune;