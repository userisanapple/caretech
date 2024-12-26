import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <section className="bg-white font-jersey p-20 mt-12 h-[80vh] mb-11 flex justify-center">
        <div className="flex-col">
            <h2 className="text-6xl mb-7 pb-7 text-center">What Is CareTech?</h2>
            <div className="flex justify-between">
                <p className="font-normal text-2xl text-[#294B7B] mt-10 w-[42%]">
                We are a student-led organization that will collaborate with industry-leading 
                companies to <b>bring groundbreaking healthcare inventions to life</b>, get <b>hands-on 
                experience</b> working on side projects and <b>building healthcare tech innovations</b>, 
                help boost resumes and gain valuable skills you can talk about during interviews 
                with top tech and healthcare companies, and access research materials and <b>dive 
                into real-world healthcare tech research</b> that will help you develop expertise 
                and contribute to cutting-edge projects.
                <br></br>
                <br></br>
                Whether you're a developer, designer, healthcare enthusiast, or just passionate about solving real-world problems with tech, we’ve got a spot for you!
                </p>
                <div className="flex w-1/2">
                    <img 
                    className="w-full"
                    src="https://placehold.co/600x400?text=Amazing+Image"
                    alt="AmazingImage"></img>
                </div>
            </div>
        </div>
    </section>
  );
};

export default WhoWeAre;
