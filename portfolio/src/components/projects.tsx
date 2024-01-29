import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
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
                    <h1 className="text-3xl font-bold text-blue-100 mb-6">Nuisance Report Tracker</h1>
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
                    <p className="text-blue-100 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                    </p>
                </div>
                <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-blue-100 mb-6">JapanGo</h1>
                    <Swiper>
                        <SwiperSlide>
                            <img className="rounded-3xl" src={jgdev} alt="demo" />
                        </SwiperSlide>
                    </Swiper>
                    <p className="text-blue-100 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                    </p>
                </div>
                <div className="bg-blue-400 bg-opacity-20 p-4 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold text-blue-100 mb-6">IUPAC Discord Quiz Bot</h1>
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
                    <p className="text-blue-100 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis explicabo inventore.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
