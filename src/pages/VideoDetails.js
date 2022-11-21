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
            <Col>
                <iframe
                    className='videoDetails-mainVideo'
                    width="2240"
                    height="630"
                    src={`https://www.youtube.com/embed/${video.embedId}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                />
            </Col>
            <Row style={{ margin: '0', display: 'flex', justifyContent: 'space-between' }}>
                <Col className='videoDetails-info' md={6}>
                    <p>{video.description}</p>
                </Col>
                {video.bts &&
                    <Col className="videoDetails-btsCol" md={6}>
                        <iframe
                            width="100%"
                            height="300"
                            src={video.bts}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"  
                        />
                    </Col>
                }
            </Row>
            <StillsGrid />
        </Container>
    )
}