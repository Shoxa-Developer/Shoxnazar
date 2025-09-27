const Main = () => {
  return (
    <div className="flex items-center justify-between  mx-8 ">
      <div>
        <div className="bg-slate-900 w-[250px] text-center p-2 rounded-full text-blue-500">
          Welcome to my portfolio
        </div>
        <div className="text-[60px] mt-3 flex-col flex font-bold  gap-3">
          <div className="flex gap-3 items-center leading-none">
            <h1>I'm</h1>
            <span className="text-blue-600">Umidjon,</span>
          </div>
          <div className="text-[60px] leading-none    flex font-bold  gap-3">
            <h1>Creative Developer</h1>
          </div>
        </div>
        <div className="max-w-[500px] mt-2 ">
          <p className="text-gray-500 text-[18px]  ">
            I build elegant and functional web experiences with a focus on
            animation, interaction design, and a pixel-perfect approach to
            modern web development.
          </p>
        </div>
        <div className="mt-5 flex gap-3">
          <button className="w-[200px] border p-3 rounded-lg bg-[#312e81]">
            View my work{" "}
          </button>
          <button className="w-[200px] border p-3 rounded-lg ">
            Contact me
          </button>
        </div>
      </div>
      <div className="mt-20">
        <img src="/image.png" alt="Hero Main Rasm" />
      </div>
    </div>
  );
};

export default Main;
