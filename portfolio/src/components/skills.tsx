import { Carousel } from 'react-responsive-carousel';
import image from "../assets/react.png"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './skills.css'

// ...

const Skills = () => {
    return (
        <div className="mt-40 m-5 md:m-28 md:mt-40 font-mono text-blue-300">
            <h2 className="text-2xl md:text-4xl pt-8 pl-5 md:pl-20 pb-5 font-sans text-blue-100">Stack</h2>
            <Carousel className="text-2xl md:text-4xl pt-8 p-5 md:pl-20 font-sans text-blue-100"
                showStatus={false}
                centerMode={true}
                emulateTouch={true}
                centerSlidePercentage={80}
            >
                {[
                    <div key={1} className="carousel-item">
                        <img src={image} alt="Image 1"/>
                        <h3 className="mt-2">React</h3>
                    </div>,
                    <div key={2} className="carousel-item">
                        <img src={image} alt="Image 1"/>
                        <h3 className="mt-2">React</h3>
                    </div>,
                    <div key={3} className="carousel-item">
                        <img src={image} alt="Image 1"/>
                        <h3 className="mt-2">React</h3>
                    </div>
                ]}
            </Carousel>
        </div>
    );
};

export default Skills;
