import React from 'react';
import HeroImg from '../../../assets/hero_img.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[70vh] container mx-auto rounded-2xl my-8">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                <img
                    src={HeroImg}
                />
                <div>
                    <h1 className="text-5xl font-bold">Book to freshen up <br /> your bookshelf</h1>
                    
                    <button className="btn bg-[#23BE0A] text-white mt-8">View the list</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;