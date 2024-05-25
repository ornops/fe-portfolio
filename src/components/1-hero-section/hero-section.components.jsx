import './hero-section.styles.css'
import HeroImage from '../../assets/hero-image.jpg'

const HeroSection = () =>{

    return(
        <div className="section-container hero-section">
            <div className="left-side-container">
                <img src={HeroImage} alt="HeroImage" />
            </div> 
            <div className="right-side-container">
                <h1 className='my-name'>Joshua Ornopia</h1>
                <div className="position-title">Frontend Engineer | QA Engineer</div>
                <button className="contact-button">Reach Out</button>

            </div>
        </div>
    )
}

export default HeroSection;