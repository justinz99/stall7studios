import thumb1 from '../images/stills/Running with Drew _ BMPCC6K + Panasonic S1 0-35 screenshot.png'
import thumb2 from '../images/stills/Running with Drew _ BMPCC6K + Panasonic S1 1-18 screenshot.png'

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
  
