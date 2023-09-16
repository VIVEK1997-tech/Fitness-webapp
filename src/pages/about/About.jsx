

import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css';

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi cum voluptatibus suscipit? Quaerat, rem architecto?
     </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt=" Our Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos repellat pariatur iure iste dolore nam libero ea voluptatem beatae,
            provident molestias quia temporibus eum. Atque soluta cumque quasi dolorem
            dolorum voluptate vero, sequi consequatur alias autem quisquam, 
            sint accusantium repellendus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            A quos possimus, ex libero rerum sapiente quaerat iusto 
            nemo aut cum!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, 
            facere.
          </p>

        </div>
      </div>
    </section>


    <section className="about__vision">
      <div className="container about__vision-container">
        
        <div className="about__section-content">
          <h1>Our vision</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos repellat pariatur iure iste dolore nam libero ea voluptatem beatae,
            provident molestias quia temporibus eum. Atque soluta cumque quasi dolorem
            dolorum voluptate vero, sequi consequatur alias autem quisquam, 
            sint accusantium repellendus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            A quos possimus, ex libero rerum sapiente quaerat iusto 
            nemo aut cum!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, 
            facere.
          </p>

        </div>

        <div className="about__section-image">
          <img src={VisionImage} alt=" Our Vision Image" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt=" Our Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our mission</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Eos repellat pariatur iure iste dolore nam libero ea voluptatem beatae,
            provident molestias quia temporibus eum. Atque soluta cumque quasi dolorem
            dolorum voluptate vero, sequi consequatur alias autem quisquam, 
            sint accusantium repellendus.
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            A quos possimus, ex libero rerum sapiente quaerat iusto 
            nemo aut cum!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo, 
            facere.
          </p>

        </div>
      </div>
    </section>

    </>
  )
}

export default About