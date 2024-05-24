import HeroSection from './components/1-hero-section/hero-section.components';
import AboutSection from './components/2-about-section/about-section.components';
import ExperienceSection from './components/3-experience-section/experience-section.components';
import SkillsSection from './components/4-skills-section/skills-section.components';
import SampleSection from './components/5-sample-section/sample-section.components';
import ContactSection from './components/6-contact-section/contact-section.components';
import './App.css';


function App() {
  return (
    <div className="App">
     <HeroSection/>
     <AboutSection/>
     <ExperienceSection/>
     <SkillsSection/>
     <SampleSection/>
     <ContactSection/>
    </div>
  );
}

export default App;
