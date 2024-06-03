import './experience-section.styles.css'

const ExperienceSection = () =>{

    return(
        <div className="section-container experience-section">
            <div className="experience-left-section">
                <h1>Experience & Education</h1>
            </div>
            <div className="experience-right-section">
                <div className="individual-experience-container">
                    <div className="experience-position">
                        <p>WORDPRESS DEVELOPER</p>
                    </div>
                    <div className="experience-company-name">
                        <p>WORDPRESS CREATIVES</p>
                    </div>
                    <div className="experience-job-details">
                        <p>- Build Wordpress sites based on client specifications</p>
                        <p>- Handled fullstack operations to develop website for clients, following specifications.</p>
                    </div>
                </div>

                <div className="individual-experience-container">
                    <div className="experience-position">
                        <p>SOFTWARE FRONTEND ENGINEER</p>
                    </div>
                    <div className="experience-company-name">
                        <p>APPSTONE</p>
                    </div>
                    <div className="experience-job-details">
                        <p>- Created Web and Mobile Applications.</p>
                    </div>
                </div>

                <div className="individual-experience-container">
                    <div className="experience-position">
                        <p>Senior QA Engineer for 6+ Years</p>
                    </div>
                    <div className="experience-company-name">
                        <p>Mashup Garage, Outliant, Huemor, Dynata and Lexmark</p>
                    </div>
                    <div className="experience-job-details">
                        <p>- Executed manual and automated testing to accurately identify bugs</p>
                        <p>- Check that the product is compliant with reglementations and design plans.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ExperienceSection;