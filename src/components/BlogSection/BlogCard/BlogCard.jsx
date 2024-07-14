/* eslint-disable react/prop-types */
import TagButton from "@/components/Button/TagButton/TagButton";
import { useState } from "react";

const BlogCard = ({ blog }) => {
  const { heading, des, tags } = blog;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div className="p-2 md:p-4  rounded-[10px] bg-[#F1F1F1]">
      <div className="space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">{heading}</h3>
          <div
            className={`relative ${
              isExpanded ? "" : "max-h-36 overflow-hidden"
            }`}
          >
            <p>{des}</p>
            {/* {!isExpanded && (
          <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-[#F1F1F1] to-transparent"></div>
        )} */}
          </div>
          <div className="flex justify-between border-t-2 border-[#3030301A] pt-2">
            <div className="flex flex-wrap gap-2">
              {/* {
                // eslint-disable-next-line react/prop-types
                tags.map((tag, index) => (
                  <button
                    className="text-[8px] md:text-xs text-[#196aa0] bg-white px-2 rounded-xl py-1"
                    key={index}
                  >
                    {tag}
                  </button>
                ))
              } */}
              {tags.map((tag, index) => (
                <TagButton key={index} tag={tag} />
              ))}

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
