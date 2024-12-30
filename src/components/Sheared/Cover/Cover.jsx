import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({img,title,subTitle,height}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
          <div
  className={`hero ${height}`}>
  <div className="hero-overlay bg-opacity-15"></div>
  <div className="w-2/3 text-neutral-content text-center">
    <div className="p-9 hero-overlay bg-opacity-60 py-20">
      <h1 className="mb-5 text-4xl font-bold">{title}</h1>
      <p className="mb-5">
       {subTitle}
      </p>
    
    </div>
  </div>
</div>
      
    </Parallax>
      
    );
};

export default Cover;