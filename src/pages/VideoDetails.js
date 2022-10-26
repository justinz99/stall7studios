import { Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { videos } from "../videos";

export default function VideoDetails() {
    const { id } = useParams()
    const video = videos.find(target => target.id === parseInt(id))

    const StillsGrid = () => {
        let stillsArray = []
        for (let i = 1; i <= video.stillsCount; i++) {
            stillsArray.push(`/stills/${video.stillsPath + i}.jpg`)
        }
        return (
            stillsArray.map(
                (still, index) => (
                    <Col key={index}>
                        <img src={process.env.PUBLIC_URL + still} alt="video still" className='videoDetails-stills' />
                    </Col>
                )
            )
        )
    }

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
                <Col className='videoDetails-info' sm={6}>
                    <p>{video.description}</p>
                </Col>
                {video.bts && <Col sm={6}>
                    <img src={'https://via.placeholder.com/200'} alt="bts" className='videoDetails-bts' />
                </Col>    }
            </Row>

               <StillsGrid />
            
        </Container>
    )
}