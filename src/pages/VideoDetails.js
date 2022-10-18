import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { videos } from "../videos";

export default function VideoDetails() {
    const { id } = useParams()
    const video = videos.find(target => target.id === parseInt(id))
    console.log(video.id)
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
                    <h4>Credits</h4>
                    <ul>
                        <li>Director: Chris Vasquez</li>
                        <li>Editor: Chris Vasquez</li>
                        <li>Camera: Seth Dresbeck</li>
                        <li>Stills: Justin Zhao</li>
                    </ul>

                    <h4>Equipment</h4>
                    <ul>
                        <li>Black Magic Pocket Cinema Camera 6K</li>
                        <li>Fujifilm X-T3</li>
                    </ul>
                </Col>
                <Col xl={6}>
                    <img src='https://via.placeholder.com/2000x1000' alt="bts placeholder" className='videoDetails-BTS' />
                </Col>    
            </Row>
            <Row className='videoDetails-stills'>
                <p>grid of stills</p>
            </Row>
        </Container>
    )
}