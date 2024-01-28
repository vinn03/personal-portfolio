import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper/modules';
import { useState, useEffect } from 'react';

import reactimg from "../assets/react.png"
import pythonimg from "../assets/python.png"
import angularimg from "../assets/angular.png"
import typescriptimg from "../assets/typescript.png"
import javascriptimg from "../assets/js.png"
import luaimg from "../assets/lua.png"
import cppimg from "../assets/cpp.png"
import htmlimg from "../assets/html.png"
import cssimg from "../assets/css.png"
import sqlimg from "../assets/sql.png"
import nodeimg from "../assets/node.png"
import expressimg from "../assets/express.png"
import mongoimg from "../assets/mongodb.png"
import firebaseimg from "../assets/firebase.png"
import gitimg from "../assets/git.png"
import qgisimg from "../assets/qgis.png"
import arcgisimg from "../assets/arcgispro.png"

import 'swiper/css';
import 'swiper/css/scrollbar';
import './skills.css'

// ...

const Skills : any = () => {
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
            <h2 className="text-2xl md:text-4xl pt-8 pb-6 md:pb-12 font-sans text-blue-100 text-center">Technical Skills</h2>
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
                            <h3 className="mt-2 text-center">Lua</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={nodeimg} alt="Node.js" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Node.js</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={mongoimg} alt="MongoDB" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">MongoDB</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={firebaseimg} alt="Firebase" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Firebase</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={gitimg} alt="Git" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Git</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={qgisimg} alt="QGIS" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">QGIS</h3>
                        </div>
                        <div className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={arcgisimg} alt="ArcGIS Pro" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">ArcGIS Pro</h3>
                        </div>
                    </div>
                </div>
            ) : (
            <Swiper className="text-xs md:text-4xl font-sans text-blue-100"
                modules={[Scrollbar]}
                scrollbar={{ draggable: true}}
                spaceBetween={40}
                slidesPerView={5}
                breakpoints={{
                    1400: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1645: {
                        slidesPerView: 5,
                        spaceBetween: 50,
                    },
                }}
            >
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={reactimg} alt="React" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">React</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={angularimg} alt="Angular" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">Angular</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={javascriptimg} alt="JavaScript" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">JavaScript</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={typescriptimg} alt="TypeScript" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">TypeScript</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={htmlimg} alt="HTML" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">HTML</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={cssimg} alt="CSS" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">CSS</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={cppimg} alt="C++" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">C++</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={pythonimg} alt="Python" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">Python</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={sqlimg} alt="SQL" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">SQL</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={luaimg} alt="Lua" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">Lua</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={nodeimg} alt="Node.js" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">Node.js</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={mongoimg} alt="MongoDB" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">MongoDB</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={firebaseimg} alt="Firebase" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">Firebase</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={gitimg} alt="Git" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">Git</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={qgisimg} alt="QGIS" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">QGIS</h3>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-blue-400 bg-opacity-20 md:w-72 md:h-72 w-20 h-20 p-5 rounded-3xl relative mb-8 flex flex-col justify-center items-center">
                        <img src={arcgisimg} alt="ArcGIS Pro" className="w-4/5 h-4/5 object-contain"/>
                        <h3 className="mt-2 text-center">ArcGIS Pro</h3>
                    </div>
                </SwiperSlide>
            </Swiper>
            )}
        </div>
    );
};

export default Skills;
