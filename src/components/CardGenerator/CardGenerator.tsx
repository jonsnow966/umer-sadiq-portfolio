import React from 'react';

interface DegreeData {
    id: number;
    degree: string;
    program: string;
    image: string;
    instname: string;
    year: string;
    score: string;
}

const CardGenerator: React.FC<{ degree: DegreeData }> = ({ degree }) => {
  return (
    <div className="bg-background border border-gray w-full">
      {/* Header Row */}
      <div className="bg-background text-white text-xl font-semibold p-2 rounded-t-lg border-b border-gray">
        {degree.degree}
      </div>

      {/* Content Row with Full-Width Flipping Card */}
      <div className="p-0">
        <div className="flip-card w-full h-64 relative"> {/* Full width, fixed height for consistency */}
          <div className="flip-card-inner w-full h-full transition-transform duration-700 transform-style-preserve-3d">
            {/* Front Side (Image) */}
            <div className="flip-card-front absolute w-full h-full backface-hidden
             bg-background flex cursor-pointer">
              <img
                src={degree.image}
                alt={`${degree.degree} Icon`}
                className="w-50" /* TODO: Consider using w-full or a specific size like w-64 */
              />
            </div>
            {/* Back Side (Details) */}
            <div className="flip-card-back absolute w-full h-full backface-hidden cursor-pointer 
             bg-background-2 flex flex-col gap-2 justify-start items-start text-white overflow-auto text-sm font-semibold text-left p-4">
                <p><span className='text-primary'>#major:</span><br/> {degree.program}</p> {/* Removed <br /> for better flow */}
                <p><span className='text-primary'>#institute:</span><br/> {degree.instname}</p>
                <p><span className='text-primary'>#years:</span><br/> {degree.year}</p>
                <p><span className='text-primary'>#percentage:</span><br/> {degree.score}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardGenerator;