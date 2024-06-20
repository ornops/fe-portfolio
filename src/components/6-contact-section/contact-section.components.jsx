import './contact-section.styles.css';
import ContactImage from '../../assets/contact-image.jpg';
import InstagramIcon from '../../assets/instagram-icon.png'
import GithubIcon from '../../assets/github-icon.png'
import LinkedinIcon from '../../assets/linkedin-icon.png'
import TypeWriter from '../typewriter'

const ContactSection = () =>{

    return(
        <div className="section-container contact-section" id='contact-section'> 
            <div className="contact-left-section">
                <div className="contact-image-container">
                    <img src={ContactImage} alt="contactImage" />
                </div>
                
            </div>
            <div className="contact-right-section">
                <div className="contact-header">
                    <p><TypeWriter words="Reach Out" myClass="contact-header"/></p>
                </div>
                <div className="contact-details">
                    <p>Joshua Ornopia</p>
                    <p>joshuaornopia@gmail.com</p>
                </div>
                <div className="social-links">                
                    <a href="https://www.linkedin.com/in/joshua-ornopia-545757192/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinIcon} alt="LinkedinIcon" />
                    </a>
                    <a href="https://github.com/ornops" target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} alt="GithubIcon" />
                    </a>
                    <a href="https://www.instagram.com/joswamiswa/" target="_blank" rel="noopener noreferrer">
                        <img src={InstagramIcon} alt="InstagramIcon" />
                    </a>
                    
                </div>
            </div>
        </div>
    )
}

export default ContactSection;