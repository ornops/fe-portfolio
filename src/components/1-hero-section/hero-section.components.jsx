import './hero-section.styles.css'
import HeroImage from '../../assets/hero-image.jpg'
import TypeWriter from '../typewriter'

const HeroSection = () =>{

    return(
        <div className="section-container hero-section">
            <div className="left-side-container">
                <img src={HeroImage} alt="HeroImage" />
            </div> 
            <div className="right-side-container">
                
                <h1>
                <TypeWriter words="Joshua Ornopia" myClass="my-name"/>
                </h1>
                <div>
                    <TypeWriter words="React Developer | QA Engineer" myClass="position-title"/>
                </div>
                <a href='#contact-section'><button className="contact-button" href>Reach Out</button></a>
                

            </div>
        </div>
    )
}

export default HeroSection;