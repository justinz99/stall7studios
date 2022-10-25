import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { videos } from "../videos";

export default function VideoDetails() {
    const { id } = useParams()
    const video = videos.find(target => target.id === parseInt(id))
    return (
        <Container className='videoDetails-container'>
            <iframe
                className='videoDetails-main'
                width="1120" 
                height="630" 
                src={`https://www.youtube.com/embed/${video.embedId}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
            />
            <Row>
                <Col className='videoDetails-info' xl={6}>
                    <p>{video.description}</p>
                </Col>
                <Col xl={6}>
                    <img src={process.env.PUBLIC_URL + `${video.stillsPath}1.jpg`} alt="bts-still" className='videoDetails-BTS' />
                    
                </Col>    
            </Row>
            <Row className='videoDetails-stills'>
               
            </Row>
            <Row className='videoDetails-stills'>
                
            </Row>
        </Container>
    )
}