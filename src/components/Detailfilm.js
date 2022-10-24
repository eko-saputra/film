import { Container, Row, Col } from 'react-bootstrap'
const Detailfilm = () => {
    return (
        <Container>
            <Row>
                <Col className='bg-light p-3'>
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/mbTp1vlRqYA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <p>
                        Sinopsis Dune kali ini menceritakan tentang perjalanan Duke Atreides (Oscar Isaac) menjelajahi gurun bernama Dune untuk mendapat sumber spice (rempah-rempah).

                        Kekuatan spice yang luar biasa bisa membantu manusia berumur panjang, sangat cerdas, bahkan mampu menjelajahi luar angkasa dengan kecepatan cahaya.

                        Namun, mengingat Dune adalah tempat yang berbahaya, Duke membawa serta orang-orang kepercayaannya untuk menyelesaikan misi tersebut.

                        Nah, sinopsis Dune berikut ini akan membongkar keseruan akting Oscar Isaac, Timothee Chalamet, dan Rebecca Ferguson di film ini.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default Detailfilm;