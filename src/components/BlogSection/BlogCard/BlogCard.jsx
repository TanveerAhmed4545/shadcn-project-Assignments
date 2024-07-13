import { useState } from "react";

const BlogCard = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="p-2 md:p-4  rounded-[10px] bg-[#F1F1F1]">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">
            How Astrophotography changed my life
          </h3>
          <div
            className={`relative ${
              isExpanded ? "" : "max-h-36 overflow-hidden"
            }`}
          >
            <p>
              Astrophotography has profoundly transformed my life, teaching me
              patience, precision, and a deeper appreciation for the universe.
              What began as a simple interest in the night sky evolved into a
              journey of discovery, where capturing the delicate light of
              distant stars and galaxies became a testament to meticulousness
              and dedication. This passion has enriched my understanding of
              science and nature, connecting me with a global community of
              like-minded enthusiasts and fostering lasting friendships. The
              creative fulfillment of sharing the cosmos beauty has brought
              immense joy and a sense of accomplishment, inspiring me to
              continue exploring the boundless wonders of the universe.
            </p>
            {/* {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#F1F1F1] to-transparent"></div>
        )} */}
          </div>
          <div className="flex justify-between border-t-2 border-[#3030301A] pt-2">
            <div className="flex flex-wrap gap-2">
              <button className="text-[8px] md:text-xs text-[#196aa0] bg-white px-2 rounded-xl py-1">
                #photography
              </button>
              <button className="text-[8px] md:text-xs text-[#196aa0] bg-white px-2 rounded-xl py-1">
                #astronomy
              </button>
              <button className="text-[8px] text-[#196aa0] md:text-xs bg-white px-2 rounded-xl py-1">
                #astrophotography
              </button>
              <button className="text-[8px] text-[#196aa0] md:text-xs bg-white px-2 rounded-xl py-1">
                +
              </button>
            </div>
            <div>
              <button
                className="text-[#196aa0] text-xs md:text-base font-medium"
                onClick={toggleReadMore}
              >
                {isExpanded ? "Show less" : "Read more"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
