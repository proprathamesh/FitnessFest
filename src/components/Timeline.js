import React from 'react';

// const events = [
//     {
//         date: '8th July 2023',
//         title: 'Session on Work Life Balance !',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false,
//         isDone: true
//     },
//     {
//         date: '22nd July 2023',
//         title: 'Problem Solving / Critical thinking',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false,
//         isDone: true

//     },
//     {
//         date: '12th August 2023',
//         title: 'Session on Healthy Life Living',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false,
//         isLive: true
//     },
//     {
//         date: '26th August 2023',
//         title: 'Trekking with Tree Plantation',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false
//     },
//     {
//         date: '9th September 2023',
//         title: 'Walkathons',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false
//     },
//     {
//         date: '23rd September 2023',
//         title: 'Healthy Food Fair',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false
//     },
//     {
//         date: '14th October 2023',
//         title: 'हास्य जत्रा',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false
//     },
//     {
//         date: '28th October 2023',
//         title: 'Meditation Activities',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false
//     },
//     {
//         date: '23rd December 2023',
//         title: 'Traditional Games [Family Day]',
//         description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore iste adipisci autem magnam quidem fuga dolorum provident commodi voluptate quas?',
//         isLive: false
//     },

// ];

// const sortedEvents = events.slice().sort((a, b) => {
//     if (a.isLive && !b.isLive) return -1;
//     if (!a.isLive && b.isLive) return 1;
//     if (!a.isDone && b.isDone) return -1;
//     if (a.isDone && !b.isDone) return 1;
//     return 0;
// });

const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

let convDate = (dateTime) => {
    dateTime = new Date(dateTime);
    let year = dateTime.getFullYear();
    let month = monthNames[dateTime.getMonth()];
    let day = dateTime.getDate();
    let str = `${day}th ${month} ${year}`
    return str;
}

let checkDate = (start, end) => {
    start = new Date(start);
    start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
    end = new Date(end);
    end = new Date(end.getFullYear(), end.getMonth(), end.getDate());
    let currentDateTime = new Date();
    if (start > currentDateTime) {
        return 'upcome';
    }
    else if (end < currentDateTime) {
        return 'done';
    }
}

function Timeline(props) {
    const timeLiner = props.timeLine;
    return (
        <div className='h-full w-full flex flex-col  lg:flex-row font-bannerfont bg-gradient-to-bl from-pink-700 via-black to-black'>
            <div className='p-4 flex flex-col gap-8 lg:w-[55%]'>
                <div className='flex flex-col gap-4 pt-8 pl-8 justify-center'>
                    <h1 className='text-3xl lg:text-5xl font-semibold text-white'>
                        Timeline
                    </h1>
                    <div className="h-[6px] bg-gradient-to-r from-orange-500 to-pink-600 w-[20%] lg:w-[10%]"></div>
                </div>
                <div className="overflow-auto left w-full h-[80vh] lg:w-full p-4 lg:pl-16 lg:pt-8 flex flex-col gap-[3.5rem] ">
                    <ol className="relative border-l-2 border-pink-600">
                        {timeLiner.map((event, index) => (
                            <li key={index} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-white rounded-full mt-1.5 -left-1.5"></div>
                                <div className="head flex items-center gap-4 ">
                                    <time className="text-lg font-normal leading-none text-gray-300">   {convDate(event.startDate)}</time>
                                    {checkDate(event.startDate, event.endDate) == 'done' ? <h1 className='done-glow bg-black text-white  border-2 border-green-600 px-1 text-sm'>DONE</h1> : (checkDate(event.startDate, event.endDate) == 'upcome'? <h1 className='text-white text-sm '> -- Upcoming</h1> : <h1 className='live-glow bg-black text-white  border-2 border-red-600 px-1 text-sm'>🔴 LIVE</h1> )}
                                </div>
                                <h3 className="text-2xl font-medium text-pink-600 ">{event.heading}</h3>
                                <p className="text-lg font-normal text-white ">{event.description}</p>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
            <div className="right w-full lg:w-[45%] py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-1 gap-8 lg:gap-16 bg-gradient-to-bl from-pink-700 via-black to-black">
                <div className="flex flex-col justify-center">
                    <h1 className="mb-4 text-4xl font-medium font-bannerfont tracking-tight leading-none text-orange-600 md:text-5xl lg:text-6xl ">Our Trailer is OUT!</h1>
                    <p className="mb-8 text-lg  text-white lg:text-xl font-medium ">📽️ Watch the exhilarating trailer on YouTube and get ready to be motivated and energized. Don't miss out on this incredible fitness journey!
                        👍 Like, 💬 Comment, and 🔄 Share the video to spread the fitness spirit. 🔥</p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:flex-row sm:space-y-0 sm:space-x-4">
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 ">
                            Get started
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                        <a href="/" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-pink-600 hover:bg-gray-100 hover:text-gray-900 hover:border-white focus:ring-4 focus:ring-gray-100    ">
                            Learn more
                        </a>
                    </div>
                </div>
                <div>
                    <iframe className="mx-auto w-full lg:max-w-6xl h-64 sm:h-96 rounded-lg shadow-3xl" src="https://www.youtube.com/embed/FKXRu9yoPh4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>

    );
}

export default Timeline;
