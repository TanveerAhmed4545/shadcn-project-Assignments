import BlogCard from "./BlogCard/BlogCard";
import ImageVideo from "./ImageVideo/ImageVideo";
import ProfileSection from "./ProfileSection/ProfileSection";
const BlogSection = () => {
  return (
    <div className="px-2 md:px-7 bg-[#f6f6f6] ">
      <div className="grid  grid-cols-1 md:grid-rows-4  md:grid-cols-5 gap-0 w-full h-full md:gap-x-16">
        <div className=" row-start-1 row-end-2 col-start-1 col-end-2 md:col-end-4">
          <ProfileSection />
        </div>
        <div className=" row-start-2 row-end-3 col-start-1 col-end-2 md:row-start-1 md:row-end-6 md:col-start-4 md:col-end-6">
          <ImageVideo />
        </div>
        <div className=" row-start-3 row-end-4 col-start-1 col-end-2 md:row-start-2 md:row-end-6 md:col-start-1 md:col-end-4">
          {/* <div className="p-2 md:p-4 shadow-md bg-[#F1F1F1]">
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
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Repellat, excepturi. Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit
                    amet consectetur adipisicing elit. Aut, incidunt quaerat
                    laudantium rem, vel nisi perspiciatis dolorem natus magnam
                    eius eligendi numquam, omnis delectus? Incidunt alias
                    mollitia perferendis assumenda voluptas. Lorem ipsum dolor,
                    sit amet consectetur adipisicing elit. Earum quos aut ab
                    quo. Tenetur excepturi repellat voluptatibus, reprehenderit
                    minus ea, magnam in quisquam laborum, quibusdam placeat
                    expedita voluptate error consectetur.
                  </p>
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
          </div> */}
          <BlogCard />
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
