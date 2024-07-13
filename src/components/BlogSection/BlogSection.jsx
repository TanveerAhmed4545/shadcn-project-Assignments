import ImageVideo from "./ImageVideo/ImageVideo";

const BlogSection = () => {
  return (
    <div className="p-2 md:p-7 bg-[#D9D9D9]">
      <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-6 md:grid-cols-2 gap-0 w-full h-full">
        <div className="bg-[rgba(166,41,242,0.5)] col-start-1 col-end-2 row-start-1 row-end-2 md:row-end-2">
          div1
        </div>
        <div className=" col-start-1 col-end-2 row-start-2 row-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-7">
          <ImageVideo />
        </div>
        <div className="bg-[rgba(75,234,155,0.5)] col-start-1 col-end-2 row-start-3 row-end-4 md:col-start-1 md:col-end-2 md:row-start-2 md:row-end-7">
          div3
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
