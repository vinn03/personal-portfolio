
import { useState, useEffect } from 'react';
import reactimg from "../../assets/img_skills/react.png"
import pythonimg from "../../assets/img_skills/python.png"
import angularimg from "../../assets/img_skills/angular.png"
import typescriptimg from "../../assets/img_skills/typescript.png"
import javascriptimg from "../../assets/img_skills/js.png"
import luaimg from "../../assets/img_skills/lua.png"
import cppimg from "../../assets/img_skills/cpp.png"
import htmlimg from "../../assets/img_skills/html.png"
import cssimg from "../../assets/img_skills/css.png"
import sqlimg from "../../assets/img_skills/sql.png"
import nodeimg from "../../assets/img_skills/node.png"
import mongoimg from "../../assets/img_skills/mongodb.png"
import firebaseimg from "../../assets/img_skills/firebase.png"
import gitimg from "../../assets/img_skills/git.png"
import qgisimg from "../../assets/img_skills/qgis.png"
import arcgisimg from "../../assets/img_skills/arcgispro.png"
import expressimg from "../../assets/img_skills/express.png"
import tailwindsvg from "../../assets/img_skills/tailwind.svg"
import './skills.css'


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
                    <div className="grid grid-cols-4 gap-2 text-xs font-mono text-blue-100">
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={reactimg} alt="React" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">React</h3>
                        </a>
                        <a href="https://angular.io/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={angularimg} alt="Angular" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Angular</h3>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={javascriptimg} alt="JavaScript" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">JavaScript</h3>
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={typescriptimg} alt="TypeScript" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">TypeScript</h3>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={htmlimg} alt="HTML" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">HTML</h3>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={cssimg} alt="CSS" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">CSS</h3>
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={tailwindsvg} alt="Tailwind" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Tailwind</h3>
                        </a>
                        <a href="https://isocpp.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={cppimg} alt="C++" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">C++</h3>
                        </a>
                        <a href="https://www.python.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={pythonimg} alt="Python" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Python</h3>
                        </a>
                        <a href="https://www.w3schools.com/sql/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={sqlimg} alt="SQL" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">SQL</h3>
                        </a>
                        <a href="https://www.lua.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={luaimg} alt="Lua" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Lua</h3>
                        </a>
                        <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="Matlab" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Matlab</h3>
                        </a>
                        <a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={nodeimg} alt="Node.js" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Node.js</h3>
                        </a>
                        <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={expressimg} alt="Express" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Express</h3>
                        </a>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={mongoimg} alt="MongoDB" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">MongoDB</h3>
                        </a>
                        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={firebaseimg} alt="Firebase" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Firebase</h3>
                        </a>
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={gitimg} alt="Git" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Git</h3>
                        </a>
                        <a href="https://www.qgis.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={qgisimg} alt="QGIS" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">QGIS</h3>
                        </a>
                        <a href="https://www.arcgis.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-20 h-20 p-5 rounded-2xl relative flex flex-col justify-center items-center">
                            <img src={arcgisimg} alt="ArcGIS Pro" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">ArcGIS Pro</h3>
                        </a>
                    </div>
                </div>
                ) : (

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-9 gap-2 text-lg font-mono text-blue-100">
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={reactimg} alt="React" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">React</h3>
                        </a>
                        <a href="https://angular.io/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={angularimg} alt="Angular" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Angular</h3>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={javascriptimg} alt="JavaScript" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">JavaScript</h3>
                        </a>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={typescriptimg} alt="TypeScript" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">TypeScript</h3>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={htmlimg} alt="HTML" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">HTML</h3>
                        </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={cssimg} alt="CSS" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">CSS</h3>
                        </a>
                        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={tailwindsvg} alt="Tailwind" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Tailwind</h3>
                        </a>
                        <a href="https://isocpp.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={cppimg} alt="C++" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">C++</h3>
                        </a>
                        <a href="https://www.python.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={pythonimg} alt="Python" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">Python</h3>
                        </a>
                        <a href="https://www.w3schools.com/sql/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={sqlimg} alt="SQL" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center">SQL</h3>
                        </a>
                        <a href="https://www.lua.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={luaimg} alt="Lua" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Lua</h3>
                        </a>
                        <a href="https://www.mathworks.com/products/matlab.html" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/21/Matlab_Logo.png" alt="Matlab" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Matlab</h3>
                        </a>
                        <a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={nodeimg} alt="Node.js" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Node.js</h3>
                        </a>
                        <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={expressimg} alt="Express" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Express</h3>
                        </a>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={mongoimg} alt="MongoDB" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">MongoDB</h3>
                        </a>
                        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={firebaseimg} alt="Firebase" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Firebase</h3>
                        </a>
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={gitimg} alt="Git" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">Git</h3>
                        </a>
                        <a href="https://www.qgis.org/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={qgisimg} alt="QGIS" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">QGIS</h3>
                        </a>
                        <a href="https://www.arcgis.com/" target="_blank" rel="noreferrer" className="bg-blue-400 bg-opacity-20 w-40 h-40 p-5 rounded-3xl relative flex flex-col justify-center items-center">
                            <img src={arcgisimg} alt="ArcGIS Pro" className="w-4/5 h-4/5 object-contain"/>
                            <h3 className="mt-2 text-center font-mono">ArcGIS Pro</h3>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Skills;
