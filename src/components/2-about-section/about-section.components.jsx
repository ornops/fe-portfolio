import './about-section.styles.css'
import AboutImage from '../../assets/about-image.jpg'
import TypeWriter from '../typewriter'

const AboutSection = () =>{

    return(
        <div className="section-container about-section">
            <div className="about-left-section">
                <div className="text-content-container">
                <h1><TypeWriter words="About Me" /></h1>
                <p>Welcome to my corner of the Digital Universe!</p> 
                    <p>I'm Joshua Ornopia, a dedicated Frontend Web Developer with a knack for crafting visually stunning and user-friendly web applications. 
                    With years of hands-on experience in frontend development</p>
                    <p>I thrive on the creative challenge of turning concepts into interactive digital solutions that captivate audiences and drive engagement. 
                    </p>
                    <p>
                    I also have more than 6 years experience as a Software QA Engineer.
                    Accomplished Quality Engineer skilled in leading testing practices in fast-paced commercial environments.</p>
                </div>
                
            </div>
            <div className="about-right-section">
                <img src={AboutImage} alt="HeroImage" />
            </div>
            
        </div>
    )
}

export default AboutSection;