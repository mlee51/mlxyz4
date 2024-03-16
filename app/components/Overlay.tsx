import React from 'react';

interface OverlayProps {
  data?: {
    name: string;
    tags: string[];
  };
}

const Overlay: React.FC<OverlayProps> = ({ data }) => {
  // Type checking for `tags` prop
  if (!data || !Array.isArray(data.tags)) {
    console.error('Overlay: "tags" prop must be an object with a "tags" property that is an array.');
    return null; // Return null to prevent rendering errors
  }

  return (
    <div className="w-full h-full relative overlay group z-20">
       
      <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 [&>*]:bg-white [&>*]:px-2 [&>*]:rounded-xl w-full pr-2 pt-2 relative flex flex-row-reverse gap-2">
        {data.tags.map((tag: string, index: number) => (
          <div key={index}>{tag}</div>
        ))}
      </div>
      <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-white w-fit absolute px-2 bottom-2 rounded-xl right-2">{data.name}</div>
    </div>
  );
};

export default Overlay;
