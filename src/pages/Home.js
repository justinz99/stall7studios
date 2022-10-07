import thumb1 from '../images/stills/1.png'
import thumb2 from '../images/stills/2.png'

export default function Home() {



    return (
      <div className="Home">
                <h2 className="sloganText">Visual Storytelling through creative visions.</h2>
        <div className="vidGallery">
            <div className="vidRow">
                <img className="vidColLeft" src={thumb1} alt='header logo'></img>
                <img className="vidColRight" src={thumb2} alt='header logo'></img>
            </div>
            <div className="vidRow">
                <img className="vidColLeft" src={thumb1} alt='header logo'></img>
                <img className="vidColRight" src={thumb2} alt='header logo'></img>
            </div>
        </div>
      </div>
    );
  }
  
