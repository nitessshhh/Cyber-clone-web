function Page1() {
  return (
    <>
      <div
        style={{
          width: "100%",
          // height: "100vh",
          backgroundImage:
            "url(https://scintillating-cactus-1790de.netlify.app/assets/img/hero-bg.png)",
        }}
        className="main flex "
      >
        <div
          style={{
            width: "70vw",
            // height: "100vh",
            backgroundColor: "",
          }}
          className=" p-36 mt-20 "
        >
          <h1 className="  page1-h1     text-blue-950  ">
            We offer modern solutions   for growing
           your business
          </h1>
          <h3 className="text-2xl mt-5 opacity-65  ">
            We are team of talented designers making <br />
            websites with Bootstrap
          </h3>

          <button className=" bg-blue-700 text-white py-3 px-12  rounded-lg  hover:bg-blue-500  mt-5  flex  gap-2">
            Get Started <img src="/arrow-right-line.png" alt="" />
          </button>
        </div>
        <div
          style={{
            width: "50vw",
            height: "100vh",
            backgroundColor: "",
          }}
        >
          <img className=" mt-48" src="/hero-img.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Page1;
