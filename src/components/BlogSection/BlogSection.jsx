import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard/BlogCard";
import ImageVideo from "./ImageVideo/ImageVideo";
import ProfileSection from "./ProfileSection/ProfileSection";
const BlogSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get("https://shadcn-assignments-server.vercel.app/blogs")
      .then((res) => {
        // console.log(res.data);
        setBlogs(res.data);
      });
  }, []);
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
          <div className="flex flex-col gap-5">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog}></BlogCard>
            ))}
          </div>
          {/* <BlogCard /> */}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
