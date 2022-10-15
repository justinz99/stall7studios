import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { videos } from "../videos";

export default function VideoDetails() {
    const { id } = useParams()
    const video = videos.find(target => target.id === parseInt(id))
    console.log(video.id)
    return (
        <Container>
            <iframe 
                width="560" 
                height="315" 
                src={`https://www.youtube.com/embed/${video.embedId}`} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
            />
            <Row>
                <Col>
                    <p>Dir: Chris Vasquez</p>
                    <p></p>
                </Col>
                <Col>
                    <p>video BTS footages</p>
                </Col>    
            </Row>
            <Row>
                <p>grid of stills</p>
            </Row>
        </Container>
    )
}