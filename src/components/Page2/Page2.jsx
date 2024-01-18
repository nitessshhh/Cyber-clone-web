import { MdOutlineEmojiEmotions, MdOutlineHeadsetMic } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";
import { FaCheckSquare } from "react-icons/fa";
import { AiOutlineStock } from "react-icons/ai";
import { TbHeartRateMonitor } from "react-icons/tb";
import { MdKeyboardCommandKey } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { TfiEmail } from "react-icons/tfi";
import { TiMessages } from "react-icons/ti";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { BsCurrencyDollar } from "react-icons/bs";
import { LuClock } from "react-icons/lu";
import { TiContacts } from "react-icons/ti";
import AllCard from "../All/Allcard";
import { useState } from "react";
import AppImg from "../AppImg/AppImg";
import Cardimg from "../AppImg/Cardimg";
import WebImg from "../AppImg/WebImg";

function Page2() {
  const [showAll, setShowAll] = useState(true);
  const [appAll, setAppAll] = useState(false);
  const [cardall, setCardall] = useState(false);
  const [webAll, setWebAll] = useState(false);

  const cardHandle = () => {
    setCardall(true);
    setShowAll(false);
    setAppAll(false);
    setWebAll(false);
  };
  const AppHandle = () => {
    setCardall(false);
    setShowAll(false);
    setAppAll(true);
    setWebAll(false);
  };
  const WebHandle = () => {
    setCardall(false);
    setShowAll(false);
    setAppAll(false);
    setWebAll(true);
  };

  return (
    <>
      {/* About section --  */}
      <div id="about" className="main2 flex   ">
        <div className="left2 w-1/2   h-auto snap-center text-start ">
          <div className="lftmain  w-auto h-auto bg-gray-100  mt-28  ml-24">
            <h4 className=" text-blue-700 text-base font-semibold ml-10    ">
              WHO WE ARE
            </h4>
            <h1 className="text-blue-950 text-2xl font-bold ml-10 mt-2">
              Expedita voluptas omnis cupiditate totam <br /> eveniet nobis sint
              iste. Dolores est repellat <br /> corrupti reprehenderit.
            </h1>
            <p className="mt-5 ml-10 opacity-70 ">
              Quisquam vel ut sint cum eos hic dolores aperiam. Sed <br />{" "}
              deserunt et. Inventore et et dolor consequatur itaque ut <br />{" "}
              voluptate sed et. Magnam nam ipsum tenetur suscipit <br />{" "}
              voluptatum nam et est corrupti.
            </p>
            <button className="   bg-blue-700 text-white py-3 px-12  rounded-lg  mt-5  flex  gap-2 ml-10">
              Read More <img src="/arrow-right-line.png" alt="" />
            </button>
          </div>
        </div>
        <div className="right2 w-1/2 h-auto img max-w-full   w-40vw md:w-auto bg-right md:ml-0 mt-8 md:mt-0">
          <img
            src="https://scintillating-cactus-1790de.netlify.app/assets/img/about.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="main3 mt-10">
        <p className="text-center text-blue-700 text-sm   font-semibold mt-4">
          OUR VALUES
        </p>
        <h1 className="text-center text-blue-950 text-4xl font-bold  mt-2">
          Odit est perspiciatis laborum et dicta
        </h1>
        <div className="card_1">
          <div className="card1">
            {" "}
            <img
              className="img2"
              src="https://scintillating-cactus-1790de.netlify.app/assets/img/values-1.png"
              alt=""
            />
            <h1 className="text-center text-blue-950 text-2xl font-bold  mt-2">
              Ad cupiditate sed est odio
            </h1>
            <p className="text-center mt-3">
              Eum ad dolor et. Autem aut fugiat debitis <br /> voluptatem
              consequuntur sit. Et veritatis id.
            </p>
          </div>
          <div className="card2">
            <img
              className="img2"
              src="https://scintillating-cactus-1790de.netlify.app/assets/img/values-2.png
"
              alt=""
            />
            <h1 className="text-center text-blue-950 text-2xl font-bold  mt-2">
              Voluptatem voluptatum alias
            </h1>
            <p className="text-center mt-3">
              Repudiandae amet nihil natus in distinctio <br /> suscipit id.
              Doloremque ducimus ea sit non.
            </p>
          </div>
          <div className="card2">
            <img
              className="img2"
              src="https://scintillating-cactus-1790de.netlify.app/assets/img/values-3.png"
              alt=""
            />
            <h1 className="text-center text-blue-950 text-2xl font-bold  mt-2">
              Fugit cupiditate alias nobis.{" "}
            </h1>
            <p className="text-center mt-3">
              Quam rem vitae est autem molestias explicabo <br /> debitis sint.
              Vero aliquid quidem commodi.
            </p>
          </div>
        </div>
      </div>
      <div className="main4">
        <div className="crt1 gap-5 flex ">
          <MdOutlineEmojiEmotions className="text-6xl ml-5 text-blue-700  mt-8" />{" "}
          <h1 className=" text-4xl text-blue-950 font-semibold mt-9">232 </h1>
        </div>
        <div className="crt1 gap-5 flex ">
          <TiContacts className="text-6xl ml-5 text-orange-700  mt-8" />{" "}
          <h1 className=" text-4xl text-blue-950 font-semibold mt-9">521 </h1>
        </div>{" "}
        <div className="crt1 gap-5 flex ">
          <MdOutlineHeadsetMic className="text-6xl ml-5 text-green-700  mt-8" />{" "}
          <h1 className=" text-4xl text-blue-950 font-semibold mt-9">1443 </h1>
        </div>{" "}
        <div className="crt1 gap-5 flex ">
          <IoMdContacts className="text-6xl ml-5 text-pink-700  mt-9" />{" "}
          <h1 className=" text-4xl text-blue-950 font-semibold mt-9">15 </h1>
        </div>{" "}
      </div>
      <div className="main5 mt-28">
        <p className="text-center text-blue-700 text-xl   font-semibold mt-4">
          Feautures
        </p>
        <h1 className="text-center text-blue-950 text-4xl font-bold  mt-2">
          Laboriosam et omnis fuga quis dolor direda fara{" "}
        </h1>

        <div className="main6 ">
          <div className="left6">
            <img
              src="https://scintillating-cactus-1790de.netlify.app/assets/img/features.png
"
              alt=""
            />
          </div>
          <div className="right6">
            <div className="grid-container">
              <div>
                <FaCheckSquare className=" ml-5 text-blue-100 hover:text-blue-700" />
                <p>Eos aspernatur rem</p>
              </div>
              <div>
                <FaCheckSquare className=" ml-5 text-blue-100 hover:text-blue-700" />

                <p>Facilis neque ipsa</p>
              </div>
              <div>
                <FaCheckSquare className=" ml-5 text-blue-100 hover:text-blue-700" />

                <p>Volup amet voluptas</p>
              </div>
              <div>
                <FaCheckSquare className=" ml-5 text-blue-100 hover:text-blue-700" />

                <p>Rerum omnis sint</p>
              </div>
              <div>
                <FaCheckSquare className=" ml-5 text-blue-100 hover:text-blue-700" />

                <p>Alias possimus</p>
              </div>
              <div>
                <FaCheckSquare className=" ml-5 text-blue-100 hover:text-blue-700" />

                <p>Repellendus mollitia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main7">
        <div className="left7">
          <h1 className=" text-4xl font-bold text-blue-950">
            Neque officiis dolore maiores et exercitationem quae est seda lidera
            pat claero
          </h1>
          <h2 className="text-blue-950 font-semibold mt-5 hover:text-blue-700 ">
            SAEPEFUGA VOLUPTATES CORRUPTI
          </h2>
          <p className="mt-7 opacity-80 ">
            Consequuntur inventore voluptates consequatur aut vel et. Eos
            doloribus expedita. Sapiente atque consequatur minima nihil quae
            aspernatur quo suscipit voluptatem.
          </p>
          <h3 className="mt-5 text-xl text-blue-950 font-semibold">
            ✅ Repudiandae rerum velit modi et officia quasi facilis
          </h3>
          <p className="mt-7 opacity-80 ">
            Laborum omnis voluptates voluptas qui sit aliquam blanditiis.
            Sapiente minima commodi dolorum non eveniet magni quaerat nemo et.
          </p>
          <h3 className="mt-5  text-blue-950 text-xl font-semibold">
            ✅ Incidunt non veritatis illum ea ut nisi
          </h3>
          <p className="mt-7 opacity-80 ">
            Non quod totam minus repellendus autem sint velit. Rerum debitis
            facere soluta tenetur. Iure molestiae assumenda sunt qui inventore
            eligendi voluptates nisi at. Dolorem quo tempora. Quia et
            perferendis.
          </p>
        </div>
        <div className="right7">
          <img
            src="https://scintillating-cactus-1790de.netlify.app/assets/img/features-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="main8 ">
        <div className="left8">
          <img
            src="https://scintillating-cactus-1790de.netlify.app/assets/img/features-3.png"
            alt=""
          />
        </div>
        <div className="mid8 ">
          <div className="one flex gap-5 ">
            <AiOutlineStock className="icon8" />
            <div className="one-1">
              <h1>Corporis voluptates sit</h1>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
          </div>
          <div className="two flex gap-5 ">
            <TbHeartRateMonitor className="icon8" />

            <div className="two-2">
              <h1>Labore consequatur</h1>
              <p>
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
          </div>
          <div className="three flex gap-5">
            <MdKeyboardCommandKey className="icon8" />

            <div className="three-3 ">
              <h1>Molestiae dolor</h1>
              <p>
                Et fuga et deserunt et enim. Dolorem architecto ratione tensa
                raptor marte
              </p>
            </div>
          </div>
        </div>
        <div className="right8 ">
          <div className="one flex gap-5 ">
            <AiOutlineStock className="icon8" />
            <div className="one-1">
              <h1>Corporis voluptates sit</h1>
              <p>
                Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                laboris nisi ut aliquip
              </p>
            </div>
          </div>
          <div className="two flex gap-5 ">
            <TbHeartRateMonitor className="icon8" />

            <div className="two-2">
              <h1>Labore consequatur</h1>
              <p>
                Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut
                maiores omnis facere
              </p>
            </div>
          </div>
          <div className="three flex gap-5">
            <MdKeyboardCommandKey className="icon8" />

            <div className="three-3 ">
              <h1>Molestiae dolor</h1>
              <p>
                Et fuga et deserunt et enim. Dolorem architecto ratione tensa
                raptor marte
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Service section  */}
      <div id="services" className="main9 ">
        <p className=" text-center text-blue-700 ">SERVICES</p>
        <h1 className="text-center text-blue-950 font-bold text-4xl">
          Veritatis et dolores facere numquam et praesentium
        </h1>
        <div
          className="row-1  
        "
        >
          <div className="main9-crd1 text-center ">
            <div className="icon9-1 w-20  h-20  bg-blue-200 ">
              <TiMessages className="icon9" />
            </div>
            <h1 className=" text-h1-1 text-3xl text-black font-semibold mt-3">
              Nesciunt Mete
            </h1>
            <p className="  p-7">
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>

            <h3 className=" p-text-1 font-medium text-blue-700 ">Read More </h3>
          </div>
          <div className="main9-crd2 text-center">
            <div className="icon9-2 w-20  h-20  bg-orange-200">
              <TiMessages className="icon9" />
            </div>
            <h1 className=" text-h1-2 text-3xl  text-black font-semibold mt-3">
              Nesciunt Mete
            </h1>
            <p className=" opacity-95 p-7">
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>

            <h3 className="p-text-2  text-orange-700 font-medium ">
              Read More{" "}
            </h3>
          </div>
          <div className="main9-crd3 text-center">
            <div className="icon9-3 w-20  h-20  bg-green-200">
              <TiMessages className="icon9" />
            </div>
            <h1 className=" text-h1-3 text-3xl text-black font-semibold mt-3">
              Nesciunt Mete
            </h1>
            <p className=" opacity-95  font-medium p-7">
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>

            <h3 className=" p-text-3 text-green-700  font-medium">
              Read More{" "}
            </h3>
          </div>
        </div>

        <div
          className="row-2 
        "
        >
          <div className="main9-crd1 text-center">
            <div className="icon9-1 w-20  h-20  bg-blue-200">
              <TiMessages className="icon9" />
            </div>
            <h1 className="text-3xl text-black font-semibold mt-3">
              Nesciunt Mete
            </h1>
            <p className=" opacity-95 p-7">
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>

            <h3 className="text-blue-700 ">Read More </h3>
          </div>
          <div className="main9-crd2 text-center">
            <div className="icon9-2 w-20  h-20  bg-orange-200">
              <TiMessages className="icon9" />
            </div>
            <h1 className="text-3xl text-black font-semibold mt-3">
              Nesciunt Mete
            </h1>
            <p className=" opacity-95 p-7">
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>

            <h3 className="text-orange-700 ">Read More </h3>
          </div>
          <div className="main9-crd3 text-center">
            <div className="icon9-3 w-20  h-20  bg-green-200">
              <TiMessages className="icon9" />
            </div>
            <h1 className="text-3xl text-black font-semibold mt-3">
              Nesciunt Mete
            </h1>
            <p className=" opacity-95 p-7">
              Provident nihil minus qui consequatur non omnis maiores. Eos
              accusantium minus dolores iure perferendis tempore et consequatur.
            </p>

            <h3 className="text-green-700 ">Read More </h3>
          </div>
        </div>
      </div>
      {/* Pricing section ----  */}
      <div className="main-10 py-20 ">
        <p className=" text-center text-blue-700  text-sm font-medium  ">
          PRICING
        </p>
        <h1 className="text-center text-blue-950 font-bold text-4xl">
          Check Our pricing
        </h1>
        <div className="pricing_crd">
          <div className="price_1">
            <h2 className=" font-bold text-lg text-center py-10 text-cyan-400">
              Free Plan
            </h2>

            <div className="dollar flex  ">
              <BsCurrencyDollar className="text-3xl font-bold " />{" "}
              <h1 className="text-3xl font-bold">
                0 <span className=" opacity-50 text-xl font-medium">/mo</span>
              </h1>
            </div>

            <div className="price-img1 ">
              <img
                src="	https://scintillating-cactus-1790de.netlify.app/assets/img/pricing-free.png"
                alt=""
              />
            </div>
            <div className="price_text text-center mt-5 ">
              <h1 className=" text-lg opacity-95 font-normal  leading-10">
                Aida dere <br /> Nec feugiat nisl <br /> Nulla at volutpat dola
              </h1>
              <span className=" leading-9 opacity-60  line-through text-lg ">
                Pharetra massa <br /> Massa ultricies mi
              </span>
            </div>

            <div className="price_btn text-center">
              <button className=" bg-transparent  px-10 py-2 rounded-full text-blue-700 ">
                {" "}
                Buy Now
              </button>
            </div>
          </div>
          <div className="price_1">
            <h2 className=" font-bold text-lg text-center py-10 text-green-500">
              Starter Plan
            </h2>

            <div className="dollar flex  ">
              <BsCurrencyDollar className="text-3xl font-bold " />{" "}
              <h1 className="text-3xl font-bold">
                19 <span className=" opacity-50 text-xl font-medium">/mo</span>
              </h1>
            </div>

            <div className="price-img1 ">
              <img
                src="	https://scintillating-cactus-1790de.netlify.app/assets/img/pricing-starter.png"
                alt=""
              />
            </div>
            <div className="price_text text-center mt-5 ">
              <h1 className=" text-lg opacity-95 font-normal  leading-10">
                Aida dere <br /> Nec feugiat nisl <br /> Nulla at volutpat dola{" "}
                <br />
                Pharetra massa
              </h1>
              <span className=" opacity-60  line-through text-lg ">
                Massa ultricies mi
              </span>
            </div>

            <div className="price_btn text-center">
              <button className=" bg-transparent  px-10 py-2 rounded-full text-blue-700 ">
                {" "}
                Buy Now
              </button>
            </div>
          </div>
          <div className="price_1">
            <h2 className=" font-bold text-lg text-center py-10 text-orange-400">
              Bussiness Plan
            </h2>

            <div className="dollar flex  ">
              <BsCurrencyDollar className="text-3xl font-bold " />{" "}
              <h1 className="text-3xl font-bold">
                29 <span className=" opacity-50 text-xl font-medium">/mo</span>
              </h1>
            </div>

            <div className="price-img1 ">
              <img
                src="https://scintillating-cactus-1790de.netlify.app/assets/img/pricing-business.png"
                alt=""
              />
            </div>
            <div className="price_text text-center mt-5 ">
              <h1 className=" text-lg opacity-95 font-normal  leading-10">
                Aida dere <br /> Nec feugiat nisl <br /> Nulla at volutpat dola
              </h1>
              <span className=" leading-9  text-lg ">
                Pharetra massa <br /> Massa ultricies mi
              </span>
            </div>

            <div className="price_btn text-center">
              <button className=" bg-transparent  px-10 py-2 rounded-full text-blue-700 ">
                {" "}
                Buy Now
              </button>
            </div>
          </div>
          <div className="price_1">
            <h2 className=" font-bold text-lg text-center py-10 text-pink-500">
              Ultimate Plan
            </h2>

            <div className="dollar flex  ">
              <BsCurrencyDollar className="text-3xl font-bold " />{" "}
              <h1 className="text-3xl font-bold">
                49 <span className=" opacity-50 text-xl font-medium">/mo</span>
              </h1>
            </div>

            <div className="price-img1 ">
              <img
                src="	https://scintillating-cactus-1790de.netlify.app/assets/img/pricing-ultimate.png"
                alt=""
              />
            </div>
            <div className="price_text text-center mt-5 ">
              <h1 className=" text-lg opacity-95 font-normal  leading-10">
                Aida dere <br /> Nec feugiat nisl <br /> Nulla at volutpat dola
              </h1>
              <span className=" leading-9  text-lg ">
                Pharetra massa <br /> Massa ultricies mi
              </span>
            </div>

            <div className="price_btn text-center">
              <button className=" bg-transparent  px-10 py-2 rounded-full text-blue-700 ">
                {" "}
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
      /{/* Portfolio section ---  */}
      <div id="portfolio" className="main_11">
        <p className=" text-center text-blue-700 text-sm font-medium  ">
          PORTFOLIO
        </p>
        <h1 className="text-center text-blue-950 font-bold text-4xl">
          Check Our Latest Work
        </h1>

        <div className="portfolio_btn ">
          <button className=" bt-1" onClick={() => setShowAll(true)}>
            All
          </button>

          <button onClick={AppHandle}>App</button>
          <button onClick={cardHandle}>Card</button>
          <button onClick={WebHandle}>Web</button>
        </div>

        <div className="  flex justify-center items-center h-auto gap-7 flex-wrap">
          {showAll ? <AllCard /> : ""}
          {appAll ? <AppImg /> : ""}
          {cardall ? <Cardimg /> : ""}
          {webAll ? <WebImg /> : ""}
        </div>
      </div>
      {/* Team section--- */}
      <div id="team" className="main_12">
        <p className=" text-center text-blue-700 text-sm font-medium  ">TEAM</p>
        <h1 className="text-center text-blue-950 font-bold text-4xl">
          Our hard working team{" "}
        </h1>

        <div className="team_crd">
          <div className="team_1">
            <div className="team-img1 ">
              <img src="team-1.jpg" alt="" />
            </div>
            <div className="price_text text-center  mt-10 ">
              <h1 className=" text-lg  text-blue-950   font-bold leading-5 ">
                Walter White
              </h1>
              <span className=" leading-9 opacity-60  text-base ">
                Chief Executive Officer
              </span>
              <p>
                <i>
                  Velit aut quia fugit et et. Dolorum ea voluptate vel tempore
                  tenetur ipsa quae aut. Ipsum exercitationem iure minima enim
                  corporis et voluptate.
                </i>
              </p>
            </div>
            {/*  */}
          </div>
          <div className="team_1">
            <div className="team-img1 ">
              <img src="team-2.jpg" alt="" />
            </div>
            <div className="price_text text-center  mt-10 ">
              <h1 className=" text-lg  text-blue-950   font-bold leading-5 ">
                Sarah Jhonson{" "}
              </h1>
              <span className=" leading-9 opacity-60  text-base ">
                Product Manager{" "}
              </span>
              <p>
                <i>
                  Quo esse repellendus quia id. Est eum et accusantium pariatur
                  fugit nihil minima suscipit corporis. Voluptate sed quas
                  reiciendis animi neque sapiente.
                </i>
              </p>
            </div>
            {/*  */}
          </div>
          <div className="team_1">
            <div className="team-img1 ">
              <img src="team-3.jpg" alt="" />
            </div>
            <div className="price_text text-center  mt-10 ">
              <h1 className=" text-lg  text-blue-950   font-bold leading-5 ">
                William Anderson{" "}
              </h1>
              <span className=" leading-9 opacity-60  text-base ">CTO</span>
              <p>
                <i>
                  Vero omnis enim consequatur. Voluptas consectetur unde qui
                  molestiae deserunt. Voluptates enim aut architecto porro
                  aspernatur molestiae modi.
                </i>
              </p>
            </div>
            {/*  */}
          </div>
          <div className="team_1">
            <div className="team-img1 ">
              <img src="team-4.jpg" alt="" />
            </div>
            <div className="price_text text-center  mt-10 ">
              <h1 className=" text-lg  text-blue-950   font-bold leading-5 ">
                Amanda Jepson{" "}
              </h1>
              <span className=" leading-9 opacity-60  text-base ">
                Accountant
              </span>
              <p>
                <i>
                  Rerum voluptate non adipisci animi distinctio et deserunt amet
                  voluptas. Quia aut aliquid doloremque ut possimus ipsum
                  officia.
                </i>
              </p>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
      {/* Blog section---- */}
      <div id="blog" className="main_13">
        <p className=" text-center text-blue-700 text-sm font-medium  ">BLOG</p>
        <h1 className="text-center text-blue-950 font-bold text-4xl">
          Recent posts form our Blog{" "}
        </h1>
        <div className="blog_1 ">
          <div className="blog-1 overflow-hidden">
            {" "}
            <div className="blog_img-1 ">
              {" "}
              <img className="" src="blog-1.jpg" alt="" />
            </div>
            <h1 className="text-start ml-4 text-gray-700 font-semibold leading-10 opacity-70 cursor-pointer  mt-5">
              Tue, 15 September
            </h1>
            <p className=" h1_text-1 text-start ml-4 leading-7 text-xl font-medium text-blue-950  cursor-pointer ">
              Eum ad dolor et. Autem aut fugiat debitis <br /> voluptatem
              consequuntur sit. Et veritatis id.
            </p>
            <h4 className=" p_txt-1 flex items-center gap-3  font-medium mt-5 text-lg text-blue-600 ml-4 ">
              {" "}
              Readmore <FaArrowRightLong />
            </h4>
          </div>
          <div className="blog-2 overflow-hidden">
            {" "}
            <div className="blog_img-1 ">
              {" "}
              <img className="" src="blog-2.jpg" alt="" />
            </div>
            <h1 className="text-start ml-4 text-gray-700 font-semibold leading-10 opacity-70 cursor-pointer  mt-5">
              Tue, 15 September
            </h1>
            <p className=" h1_text-1 text-start ml-4 leading-7 text-xl font-medium text-blue-950  cursor-pointer ">
              Eum ad dolor et. Autem aut fugiat debitis <br /> voluptatem
              consequuntur sit. Et veritatis id.
            </p>
            <h4 className=" p_txt-1 flex items-center gap-3  font-medium mt-5 text-lg text-blue-600 ml-4 ">
              {" "}
              Readmore <FaArrowRightLong />
            </h4>
          </div>
          <div className="blog-3 overflow-hidden">
            {" "}
            <div className="blog_img-1 ">
              {" "}
              <img className="" src="blog-3.jpg" alt="" />
            </div>
            <h1 className="text-start ml-4 text-gray-700 font-semibold leading-10 opacity-70 cursor-pointer  mt-5">
              Tue, 15 September
            </h1>
            <p className=" h1_text-1 text-start ml-4 leading-7 text-xl font-medium text-blue-950  cursor-pointer ">
              Eum ad dolor et. Autem aut fugiat debitis <br /> voluptatem
              consequuntur sit. Et veritatis id.
            </p>
            <h4 className=" p_txt-1 flex items-center gap-3  font-medium mt-5 text-lg text-blue-600 ml-4 ">
              {" "}
              Readmore <FaArrowRightLong />
            </h4>
          </div>
        </div>
      </div>
      {/* contact section  */}
      <div id="contact" className="main_14">
        <p className=" text-center text-blue-700 text-sm font-medium   ">
          CONTACT
        </p>
        <h1 className="text-center text-blue-950 font-bold mt-1 text-5xl">
          Contact Us{" "}
        </h1>
        <div className="main_contact rgt ">
          <div className="lft_contct">
            <div className="left-top ">
              <div className="lt-top">
                {" "}
                <IoLocationOutline className="contact-icon" />
                <h1>Address</h1>
                <p>
                  A108 Adam Street, <br /> New York, NY 535022
                </p>
              </div>
              <div className="lt-top">
                {" "}
                <IoCallOutline className="contact-icon" />
                <h1>Call Us</h1>
                <p>
                  +1 5589 55488 55 <br /> +1 6678 254445 41
                </p>
              </div>
            </div>
            <div className="left-bottom "></div>
            <div className="left-top">
              <div className="lt-top">
                {" "}
                <TfiEmail className="contact-icon" />
                <h1>Email Us</h1>
                <p>
                  info@example.com <br /> contact@example.com
                </p>
              </div>
              <div className="lt-top">
                {" "}
                <LuClock className="contact-icon " />
                <h1>Open Hours</h1>
                <p>
                  Monday - Friday <br /> 9:00AM - 05:00PM
                </p>
              </div>
            </div>
          </div>
          <div className="rgt_contct">
            <div className="top-input ">
              <input type="text" placeholder="Your Name" />
              <input type="text" placeholder="Your Email" />
            </div>
            <div className="mid_input">
              <input type="text" placeholder="subject" />
            </div>
            <div className="botom_input">
              <form action="" className="">
                <input type="text" placeholder="message" />
              </form>
            </div>
            <div className="contact_btn">
              {" "}
              <button className="  ">Send message</button>
            </div>
          </div>
        </div>
      </div>
      {/* / footer section  */}
      <div className="footer ">
        <h1>© Copyright FlexStart. All Rights Reserved</h1>
        <p> Designed by Nitesh parmar</p>
      </div>
    </>
  );
}

export default Page2;
