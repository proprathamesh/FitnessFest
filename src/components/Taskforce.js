import { Carousel } from "flowbite-react";

import group1 from "../Images/Group1.jpg";
import group2 from "../Images/Group2.jpg";
import group3 from "../Images/Group3.jpg";
import face1 from "../Images/face1.jpg";
import face2 from "../Images/face2.jpg";
import face3 from "../Images/face3.jpg";
import taskFace from "../Images/taskFace.png";
import taskFace2 from "../Images/taskFace2.png";
import taskFace3 from "../Images/taskFace3.png";
import { TiSocialLinkedinCircular } from 'react-icons/ti';

const carousel1Images = [group1, group2, group3];
const carousel2Data = [
    {
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.',
        image: face2,
        name: "Name 1",
        position: "Position 1",
    },
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.",
        image: face1,
        name: "Name 2",
        position: "Position 2",
    },
    {
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam praesentium quia aliquam libero. Voluptatem qui enim numquam obcaecati amet dolores placeat ex explicabo quod libero. Sapiente quaerat, ea rerum saepe officiis unde iusto itaque quas eum reiciendis, ullam nisi veniam.",
        image: face3,
        name: "Name 3",
        position: "Position 3",
    },
];

function TaskForce() {
    return (
        <div className="h-[300vh] bg-gradient-to-br from-pink-700 via-black to-black py-10 px-4">
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-5xl text-center font-bannerFont2 text-white">Our Team</h1>
                <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[5%]"></div>
            </div>
            <div className="h-[80vh] main-taskforce mt-16">
                <div className="flex flex-col items-center gap-4">
                    <div className="text-center text-3xl lg:text-4xl font-semibold text-white font-bannerFont2">Main Foundation Team</div>
                    <div className="h-[5px] bg-gradient-to-r from-orange-500 to-pink-600 w-[40%] lg:w-[10%]"></div>
                </div>
                <div className="pt-36 px-12 grid-rows-2 grid grid-cols-3">
                    <div className="bg-gray-300">
                        <div className="relative flex flex-col items-center gap-4 h-[50vh]">
                            <div className="relative flex items-center justify-center bg-pink-600 h-[45%] w-full">
                                <img className="h-72 absolute bottom-0" src={taskFace} alt="" />
                            </div>
                            <h1 className="text-2xl font-semibold">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>
                            <h1 className="">leena.sharma@pccoepune.org</h1>
                            <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[15%]"></div>
                            <div className="handles flex gap-2">
                                <TiSocialLinkedinCircular className="text-3xl" />
                                <TiSocialLinkedinCircular className="text-3xl" />
                                <TiSocialLinkedinCircular className="text-3xl" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300">
                    <div className="relative flex flex-col items-center gap-4 h-[50vh]">
                            <div className="relative flex items-center justify-center bg-pink-600 h-[45%] w-full">
                                <img className="h-72 absolute bottom-0" src={taskFace3} alt="" />
                            </div>
                            <h1 className="text-2xl font-semibold">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>
                            <h1 className="">leena.sharma@pccoepune.org</h1>
                            <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[15%]"></div>
                            <div className="handles flex gap-2">
                                <TiSocialLinkedinCircular className="text-3xl" />
                                <TiSocialLinkedinCircular className="text-3xl" />
                                <TiSocialLinkedinCircular className="text-3xl" />
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-300">
                    <div className="relative flex flex-col items-center gap-4 h-[50vh]">
                            <div className="relative flex items-center justify-center bg-pink-600 h-[45%] w-full">
                                <img className="h-72 absolute bottom-0" src={taskFace2} alt="" />
                            </div>
                            <h1 className="text-2xl font-semibold">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>
                            <h1 className="">leena.sharma@pccoepune.org</h1>
                            <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[15%]"></div>
                            <div className="handles flex gap-2">
                                <TiSocialLinkedinCircular className="text-3xl" />
                                <TiSocialLinkedinCircular className="text-3xl" />
                                <TiSocialLinkedinCircular className="text-3xl" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-pink-600 h-[120vh] main-taskforce mt-16">
                <div className="bg-pink-600 flex flex-col items-center gap-4">
                    <div className="text-center text-4xl font-semibold text-white font-bannerFont2">The Taskforce</div>
                    <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae sunt neque laborum eligendi iure magni?</p>
                </div>
                <div className="pt-40">
                    <div className="h-[18vh] grid grid-cols-4 bg-gray-200">
                        <div className="relative flex justify-center">
                            <div className="h-72 w-72 bg-white rounded-full absolute bottom-0 bg-cover bg-center" style={{ backgroundImage: `url(${taskFace2})` }} />
                        </div>
                        <div className="relative flex justify-center">
                            <div className="h-72 w-72 bg-white rounded-full absolute bottom-0 bg-cover bg-center" style={{ backgroundImage: `url(${taskFace2})` }} />
                        </div>
                        <div className="relative flex justify-center">
                            <div className="h-72 w-72 bg-white rounded-full absolute bottom-0 bg-cover bg-center" style={{ backgroundImage: `url(${taskFace2})` }} />
                        </div>
                        <div className="relative flex justify-center">
                            <div className="h-72 w-72 bg-white rounded-full absolute bottom-0 bg-cover bg-center" style={{ backgroundImage: `url(${taskFace2})` }} />
                        </div>
                    </div>
                    <div className="h-[14vh] grid grid-cols-4 bg-gray-200">
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <h1 className="text-2xl font-semibold ">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <h1 className="text-2xl font-semibold ">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <h1 className="text-2xl font-semibold ">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>

                        </div>
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <h1 className="text-2xl font-semibold ">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>
                        </div>


                    </div>
                </div>
                <div className="pt-40">
                    <div className="h-[18vh] grid grid-cols-3 bg-gray-200">
                        <div className="relative flex justify-center">
                            <div className="h-72 w-72 bg-white rounded-full absolute bottom-0 bg-cover bg-center" style={{ backgroundImage: `url(${taskFace2})` }} />
                        </div>
                        <div className="relative flex justify-center">
                            <div className="h-72 w-72 bg-white rounded-full absolute bottom-0 bg-cover bg-center" style={{ backgroundImage: `url(${taskFace2})` }} />
                        </div>
                        <div className="relative flex justify-center">
                            <div className="h-72 w-72 bg-white rounded-full absolute bottom-0 bg-cover bg-center" style={{ backgroundImage: `url(${taskFace2})` }} />
                        </div>
                    </div>
                    <div className="h-[14vh] grid grid-cols-3 bg-gray-200">
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <h1 className="text-2xl font-semibold ">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>
                        </div>
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <h1 className="text-2xl font-semibold ">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>

                        </div>
                        <div className=" flex flex-col justify-center items-center gap-2">
                            <h1 className="text-2xl font-semibold ">Dr. Leena Sharma</h1>
                            <h1 className="text-lg font-medium">Convener</h1>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskForce;
