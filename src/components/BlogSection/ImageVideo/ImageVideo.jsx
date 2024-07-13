import img1 from "../../../assets/images/Rectangle1.png";
import img2 from "../../../assets/images/Rectangle2.png";
import img3 from "../../../assets/images/Rectangle3.png";
import img4 from "../../../assets/images/Rectangle4.png";
import img5 from "../../../assets/images/Rectangle5.png";
import img6 from "../../../assets/images/Rectangle6.png";
import img7 from "../../../assets/images/Rectangle7.png";
import img8 from "../../../assets/images/Rectangle8.png";

const ImageVideo = () => {
  return (
    <div className="flex gap-2 md:flex-col ">
      <div className="mb-5 flex flex-col justify-between">
        <h2 className="text-2xl mb-2 pt-2 md:pt-7">Photos</h2>
        <div className="grid grid-cols-2 ">
          <img className="w-full" src={img1} />
          <img className="w-full" src={img2} />
          <img className="w-full" src={img3} />
          <img className="w-full" src={img4} />
        </div>
        <h2 className="text-right text-[#196AA0] text-xs md:text-base font-medium mt-2">
          More +
        </h2>
      </div>
      <div className="mb-5  flex flex-col justify-between">
        <h2 className="text-2xl mb-2 pt-2 ">Videos</h2>
        <div className="flex flex-col gap-2 h-full">
          <img className="w-full  h-full" src={img5} />

          <div className="flex justify-between gap-2 ">
            <img className="w-full rounded-xl" src={img6} />
            <img className="w-full rounded-xl" src={img7} />
            <img className="w-full  rounded-xl" src={img8} />
          </div>
        </div>
        <h2 className="text-right text-[#196AA0] text-xs md:text-base font-medium mt-2">
          More +
        </h2>
      </div>
    </div>
  );
};

export default ImageVideo;
