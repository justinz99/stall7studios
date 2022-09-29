import thumb1 from '../images/stills/Running with Drew _ BMPCC6K + Panasonic S1 0-35 screenshot.png'
import thumb2 from '../images/stills/Running with Drew _ BMPCC6K + Panasonic S1 1-18 screenshot.png'

export default function Home() {



    return (
      <div className="App">
                <h2 className="sloganText">Fuck bitches get money. Lorem ipsum yeah yeah doo doo. I fucked Sharaine and went to tell my bro.</h2>
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
  
