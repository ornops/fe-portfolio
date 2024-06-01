import './about-section.styles.css'
import AboutImage from '../../assets/about-image.jpg'

const AboutSection = () =>{

    return(
        <div className="section-container about-section">
            <div className="about-left-section">
                <h1>About Me</h1>
                <p>I am a diligent Frontend Web Developer with years of experience in business applications. I'm eager to join your crew to build out-of-the-box solutions for regional clients. I am skilled in developing plans, managing projects, and user documentation.</p>
            </div>
            <div className="about-right-section">
                <img src={AboutImage} alt="HeroImage" />
            </div>
            
        </div>
    )
}

export default AboutSection;