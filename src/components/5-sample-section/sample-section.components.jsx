import './sample-section.styles.css'
import WorkSample1 from '../../assets/sample-work-1.png'
import WorkSample2 from '../../assets/sample-work-2.png'
import WorkSample3 from '../../assets/sample-work-3.png'

const SampleSection = () =>{

    return(
        <div className="section-container sample-section">
            <div className="sample-works-header">
                <p>Sample Works</p>
            </div>
            <div className="image-gallery">
                
                    <div className="individual-sample-container">
                        <a href="https://ornops.github.io/react-apologia-website/" target="_blank" rel="noopener noreferrer">
                        <img src={WorkSample1} alt="worksample1" />
                        <div className="sample-description">
                            <p>Church Website</p>
                        </div>
                        </a>
                    </div>
                    <div className="individual-sample-container">
                        <a href="https://ornops.github.io/react-functional-component/" target="_blank" rel="noopener noreferrer">
                        <img src={WorkSample2} alt="worksample1" />
                        <div className="sample-description">
                            <p>REST API in React.js</p>
                        </div>
                        </a>
                    </div>
                    <div className="individual-sample-container">
                        <a href="https://ornops.github.io/space-invader-javascript/" target="_blank" rel="noopener noreferrer">
                        <img src={WorkSample3} alt="worksample1" />
                        <div className="sample-description">
                            <p>Space Invaders</p>
                        </div>
                        </a>
                    </div>
    
                    {/* <div className="individual-sample-container">
                        <img src={WorkSample2} alt="worksample2" />
                        <div className="sample-description">
                            <p>Monsters Academy</p>
                        </div>
                    </div>

                <div className="individual-sample-container">
                    <img src={WorkSample3} alt="worksample3" />
                    <div className="sample-description">
                        <p>Space Invader Game</p>
                    </div>
                </div> */}
                
            </div>
        </div>
    )
}

export default SampleSection;