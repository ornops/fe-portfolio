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
                    <img src={WorkSample1} alt="worksample1" />
                </div>
                <div className="individual-sample-container">
                    <img src={WorkSample2} alt="worksample2" />
                </div>
                <div className="individual-sample-container">
                    <img src={WorkSample3} alt="worksample3" />
                </div>
                
                
                
            </div>
        </div>
    )
}

export default SampleSection;