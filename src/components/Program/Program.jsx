import React from 'react';

const Program = (props) => {
    console.log(props.count);
    const { id, name, img, postDate, poster, time,title } = props.count;
    const {handleTime}=props.handleTime;
    return (
        <div>
            <div className="card card-compact w-full bg-base-100 shadow-xl my-10">
                <figure><img className='w-full' src={poster} alt="Shoes" /></figure>
                <div className="card-body">
                    <div className='flex items-center justify-between'>
                        <div className='flex gap-2 items-center mb-4'>
                            <img className='w-14 rounded-full' src={img} alt="" />
                            <p>{name}<br /><span>{postDate}</span></p>
                        </div>
                        <div className='flex items-center'>
                            <span>{time} min red</span><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <p className='fond-bold text-2xl'>{title}</p>
                    <p><span className='mr-3'>#beginners</span><span>#programming</span></p>
                    <p><span className='underline cursor-pointer text-[#6047EC]' onClick={()=>handleTime(time)}>Mark as read</span></p>
                </div>
            </div>
        </div>
    );
};

export default Program;