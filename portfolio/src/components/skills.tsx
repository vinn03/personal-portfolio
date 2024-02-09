import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { useState, useEffect } from 'react';

import reactimg from "../assets/img_skills/react.png"
import pythonimg from "../assets/img_skills/python.png"
import angularimg from "../assets/img_skills/angular.png"
import typescriptimg from "../assets/img_skills/typescript.png"
import javascriptimg from "../assets/img_skills/js.png"
import luaimg from "../assets/img_skills/lua.png"
import cppimg from "../assets/img_skills/cpp.png"
import htmlimg from "../assets/img_skills/html.png"
import cssimg from "../assets/img_skills/css.png"
import sqlimg from "../assets/img_skills/sql.png"
import nodeimg from "../assets/img_skills/node.png"
import mongoimg from "../assets/img_skills/mongodb.png"
import firebaseimg from "../assets/img_skills/firebase.png"
import gitimg from "../assets/img_skills/git.png"
import qgisimg from "../assets/img_skills/qgis.png"
import arcgisimg from "../assets/img_skills/arcgispro.png"
import expressimg from "../assets/img_skills/express.png"
import tailwindsvg from "../assets/img_skills/tailwind.svg"

import 'swiper/css';
import 'swiper/css/scrollbar';
import './skills.css'

// ...

const Skills : React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

    useEffect(() => {
        const handleResize = () => {
        setIsMobile(window.innerWidth <= 640);
        };

        window.addEventListener('resize', handleResize);

        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="mt-40 m-5 md:m-28 md:mt-40 font-mono text-blue-300">
            <h2 className="text-2xl md:text-4xl pt-8 pb-6 md:pb-12 font-sans text-blue-100 text-center font-bold">Technical Skills</h2>
            {isMobile ? (
                <div className="flex justify-center">
                    <div className="grid grid-cols-4 gap-2 text-xs font-sans text-blue-100">
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={reactimg} alt="React" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">React</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={angularimg} alt="Angular" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Angular</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={javascriptimg} alt="JavaScript" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">JavaScript</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={typescriptimg} alt="TypeScript" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">TypeScript</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={htmlimg} alt="HTML" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">HTML</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={cssimg} alt="CSS" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">CSS</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={tailwindsvg} alt="Tailwind" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Tailwind</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={cppimg} alt="C++" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">C++</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={pythonimg} alt="Python" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Python</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={sqlimg} alt="SQL" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">SQL</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={luaimg} alt="Lua" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Lua</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={nodeimg} alt="Node.js" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Node.js</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={expressimg} alt="Express" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Express</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={mongoimg} alt="MongoDB" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">MongoDB</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={firebaseimg} alt="Firebase" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Firebase</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={gitimg} alt="Git" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Git</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={qgisimg} alt="QGIS" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">QGIS</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={arcgisimg} alt="ArcGIS Pro" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">ArcGIS Pro</h3>
                        </div>
                    </div>
                </div>
                ) : (
                <Swiper className="text-xs md:text-lg font-sans text-blue-100"
                    modules={[Scrollbar]}
                    scrollbar={{ draggable: true }}
                    spaceBetween={50}
                    slidesPerView={window.innerWidth < 1134 ? 4 : window.innerWidth < 1468 ? 6 : 8}
                >
                    <SwiperSlide>
                        <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={reactimg} alt="React" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">React</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://angular.io/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={angularimg} alt="Angular" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">Angular</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={javascriptimg} alt="JavaScript" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">JavaScript</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={typescriptimg} alt="TypeScript" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">TypeScript</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={htmlimg} alt="HTML" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">HTML</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={cssimg} alt="CSS" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">CSS</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <SwiperSlide>
                            <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
                                <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                    <img src={tailwindsvg} alt="Tailwind" className="w-4/5 h-4/5 object-contain"/>
                                    <h3 className="mt-2 text-center font-mono">Tailwind</h3>
                                </div>
                            </a>
                        </SwiperSlide>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={cppimg} alt="C++" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">C++</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={pythonimg} alt="Python" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">Python</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://aws.amazon.com/what-is/sql/#:~:text=Structured%20query%20language%20(SQL)%20is,relationships%20between%20the%20data%20values." target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={sqlimg} alt="SQL" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">SQL</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.lua.org/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={luaimg} alt="Lua" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">Lua</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={nodeimg} alt="Node.js" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">Node.js</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={expressimg} alt="Express" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">Express</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={mongoimg} alt="MongoDB" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">MongoDB</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://firebase.google.com/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={firebaseimg} alt="Firebase" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">Firebase</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={gitimg} alt="Git" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">Git</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://qgis.org/" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={qgisimg} alt="QGIS" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">QGIS</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="https://www.esri.ca/en-ca/products/gis-mapping-products/arcgis-pro/overview" target="_blank" rel="noopener noreferrer">
                            <div className="bg-blue-400 bg-opacity-20 md:w-40 md:h-40 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                                <img src={arcgisimg} alt="ArcGIS Pro" className="w-4/5 h-4/5 object-contain"/>
                                <h3 className="mt-2 text-center font-mono">ArcGIS Pro</h3>
                            </div>
                        </a>
                    </SwiperSlide>
                </Swiper>
            )}
        </div>
    );
};

export default Skills;
