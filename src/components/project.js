const Projects = () => {
  return (
    <div>
      <div className="flex justify-center items-center h-20 mt-20">
        <h1 className="text-[40px] font-bold">Featured Projects</h1>
      </div>
      <div className="flex gap-2 items-center justify-start mx-10">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-globe-icon lucide-globe text-purple-900"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
            <path d="M2  12h20" />
          </svg>
        </div>
        <h1 className="text-[30px] font-bold text-purple-900">
          Landing Page Website
        </h1>
      </div>
      <p className="text-purple-900 mx-12">6 projects available </p>
      <div className="flex gap-2 items-center justify-start mx-10 mt-10">
        <div className="card w-96 mb-20 border rounded-md  bg-base-100 shadow-xl">
          <div>
            <img
              src="https://us-east-1-shared-usea1-02.graphassets.com/AIYzItKrRQUC0LIbcXyK7z/WaCJexE4SxCEOlYbdvaQ"
              alt="Image Portfolio"
              className="rounded-md"
            />
          </div>
          <div className="p-5">
            <h1>umidjon-svg.site</h1>
            <p>
              Umidjon SVG is a free and open-source SVG icon library designed
              for designers and frontend developers.
            </p>
          </div>
          <div className="flex gap-2 items-center justify-start mx-5 mb-5">
            <button className="border p-1 rounded-full w-20">Next.js</button>
            <button className="border p-1 rounded-full w-20">React.js</button>
            <button className="border p-1 rounded-full w-20">shadcn ui</button>
            <button className="border p-1 rounded-full w-20">tailwind</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
