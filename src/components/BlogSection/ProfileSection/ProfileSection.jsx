import profilePic from "../../../assets/images/ProfilePic.png";
const ProfileSection = () => {
  return (
    <div className="flex justify-between">
      <div>
        <img
          src={profilePic}
          className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] relative -top-12 md:-top-28"
        />
      </div>
      <div className="pt-2 md:pt-7">
        <div className="flex gap-1">
          <h2 className="text-xl font-semibold">John Doe</h2>
          <p className="text-xl font-semibold">.</p>
          <p className="text-[#76A4CE]">@johndoe</p>
        </div>
        <div>
          <h2 className="font-normal text-sm">Astrophotographer 🌌</h2>
          <h2 className="font-normal text-sm">Gamer 👾</h2>
        </div>
      </div>
      <div className="pt-2 md:pt-7">
        <button className="text-white bg-[#196AA0] py-2 px-5 rounded-3xl">
          Follow
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
