import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import { GitHub } from '@mui/icons-material';
import LanguageIcon from '@mui/icons-material/Language';
import nrt_main from '../assets/img_projects/nrt/nrt_main.jpg';
import nrt_addlocation from '../assets/img_projects/nrt/nrt_addlocation.jpg';
import nrt_example from '../assets/img_projects/nrt/nrt_example.jpg';
import jgdev from '../assets/img_projects/jg/jgdev.png';
import iupacdb from '../assets/img_projects/iupac/iupacdb.jpg';
import iupacmain from '../assets/img_projects/iupac/iupacmain.jpg';
import 'swiper/css/pagination';
import 'swiper/css';

const Projects: React.FC = () => {
    return (
        <div className="mt-40 mb-40 m-5 md:ml-28 md:mr-28 font-mono text-blue-300">
            <h2 className="text-2xl md:text-4xl pt-8 pb-6 md:pb-12 font-sans text-blue-100 text-center font-bold">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold font-mono text-blue-100 mb-2">Nuisance Report Tracker</h1>
                    <span className="text-sm font-mono mb-8 text-blue-300 flex justify-between">
                        <h3 className="opacity-70 inline">SFU - Client-side Development </h3>
                        <a href="https://github.com/vinn03/nuisance-report-tracker" target="_blank" rel="noreferrer" className="hover:text-blue-100 inline">
                            <GitHub fontSize="small"></GitHub>
                        </a>
                    </span>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img className="rounded-3xl" src={nrt_main} alt="demo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="rounded-3xl" src={nrt_addlocation} alt="demo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="rounded-3xl" src={nrt_example} alt="demo" />
                        </SwiperSlide>
                    </Swiper>
                    <ul className="text-blue-100 mt-4 list-disc list-inside">
                        <li>Users can report nuisances on an interactive map; These reports are displayed on the map as markers.</li>
                        <br></br> 
                        <li>The application enables users to add and store the locations of reported nuisances, which then can be used to create new reports representing instances of nuisances.</li>
                        <br></br>
                        <li>Uses Angular as its framework, incorporating HTML, CSS, and Typescript for the construction of the application.</li>
                        <br></br>
                        <li>Employs a NoSQL database and utilizes RESTful API HTTP methods for managing the storage and retrieval of user reports and locations.</li>
                    </ul>
                </div>
                <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold font-mono text-blue-100 mb-2">JapanGo</h1>
                    <span className="text-sm font-mono mb-8 text-blue-300 flex justify-between">
                        <h3 className="opacity-70 inline">StormHacks 2023</h3>
                        <span>
                            <a href="https://devpost.com/software/japango" target="_blank" rel="noreferrer" className="hover:text-blue-100 mr-2 inline">
                                <LanguageIcon fontSize="small"></LanguageIcon>
                            </a>
                            <a href="https://github.com/bxian03/StormHacks2023" target="_blank" rel="noreferrer" className="hover:text-blue-100 inline">
                                <GitHub fontSize="small"></GitHub>
                            </a>
                        </span>
                    </span>
                    <Swiper>
                        <SwiperSlide>
                            <img className="rounded-3xl" src={jgdev} alt="demo" />
                        </SwiperSlide>
                    </Swiper>
                    <ul className="text-blue-100 mt-4 list-disc list-inside">
                        <li>A language-learning web application that pits players against each other in a Japanese vocabulary competition.</li>
                        <br></br> 
                        <li>Players joins rooms to challenge one another in a one on one format; The first to guess correctly is awarded a point.</li>
                        <br></br>
                        <li>Employs HTML, CSS, JavaScript, Tailwind, and React for crafting the front-end of the application. </li>
                        <br></br>
                        <li>WebSockets were utilized to establish multi-session multiplayer capabilities, allowing users to participate in concurrent matches.</li>
                    </ul>
                </div>
                <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md">
                    <h1 className="text-xl font-bold font-mono text-blue-100 mb-2">IUPAC Discord Quiz Bot</h1>
                    <span className="text-sm font-mono mb-8 text-blue-300 flex justify-between">
                        <h3 className="opacity-70 inline">HackToSchool 2022</h3>
                        <span>
                            <a href="https://devpost.com/software/hack-to-school-project" target="_blank" rel="noreferrer" className="hover:text-blue-100 mr-2 inline">
                                <LanguageIcon fontSize="small"></LanguageIcon>
                            </a>
                            <a href="https://github.com/im-calvin/HackToSchoolBot22" target="_blank" rel="noreferrer" className="hover:text-blue-100 inline">
                                <GitHub fontSize="small"></GitHub>
                            </a>
                        </span>
                    </span>
                    <Swiper
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img className="rounded-3xl" src={iupacmain} alt="demo" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className="rounded-3xl" src={iupacdb} alt="demo" />
                        </SwiperSlide>
                    </Swiper>
                    <ul className="text-blue-100 mt-4 list-disc list-inside">
                        <li>Created using discord.py, the bot quizzes students on IUPAC names of organic chemical compounds.</li>
                        <br></br> 
                        <li>Questions are delivered through a Kahoot-style system, awarding points to users who answer the given questions correctly.</li>
                        <br></br>
                        <li>Incorporates a spaced repetition algorithm, contributing to a significant improvement in students' final grades.</li>
                        <br></br>
                        <li>Utilizes an API with Express.js and Node.js for the storage and retrieval of data in MongoDB.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Projects;
