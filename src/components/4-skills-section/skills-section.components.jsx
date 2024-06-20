import './skills-section.styles.css'
import SkillsImage from '../../assets/skills-image.jpg'
import TypeWriter from '../typewriter'

const SkillsSection = () =>{

    return(
        <div className="section-container skills-section">
            <div className="skills-left-section">
                <p className='skills-section-header'><TypeWriter words="Skills & Proficiencies" myClass="skills-section-header"/> </p>
                
                
                <div className="skills-image-container">
                    <img src={SkillsImage} alt="skillsImage"/>
                </div>
                
            </div>
            <div className="skills-right-section">
                <div className="frontend-skills skills-category-holder">
                    <p className='dev-skills-header'>DEVELOPMENT</p>
                    <p className='skills-list'>- HTML</p>
                    <p className='skills-list'>- CSS</p>
                    <p className='skills-list'>- Javascript</p>
                    <p className='skills-list'>- React.js</p>
                    <p className='skills-list'>- SASS</p>
                </div>
                <div className="qa-skills skills-category-holder">
                    <p className='dev-skills-header'>QA ENGINEERING</p>
                    <p className='skills-list'>- Automation Testing</p>
                    <p className='skills-list'>- Manual Testing</p>
                    <p className='skills-list'>- Test Case Creation</p>
                    <p className='skills-list'>- Bug Reporting & Debugging</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection;