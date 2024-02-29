import { FunctionComponent } from "react";

const Desktop: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-gray-100 h-[3939px] overflow-hidden">
      <img
        className="absolute top-[-300px] left-[-32px] w-[1761px] h-[1370px]"
        alt=""
        src="/gradient.svg"
      />
      <nav
        className="absolute top-[32px] left-[93px] flex flex-row items-center justify-center gap-[0px_141px] text-left text-xl text-white font-outfit"
        id="navbar"
      >
        <img
          className="w-[185px] relative h-[58px] object-cover"
          alt=""
          src="/logo3-1@2x.png"
        />
        <div className="relative font-medium">about</div>
        <div className="relative font-medium">blog</div>
        <div className="relative font-medium">projects</div>
        <div className="relative font-medium">events</div>
        <div className="relative font-medium">Team</div>
      </nav>
      <section
        className="absolute top-[105px] left-[93px] flex flex-row items-end justify-start gap-[0px_100px] text-left text-lg text-white font-body-text md:flex-col-reverse md:pt-[50rem] md:box-border"
        id="Home"
      >
        <div className="w-[500px] relative h-[480px]">
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[420px] left-[0px] w-[238px] h-[60px]">
            <button className="cursor-pointer [border:none] p-0 bg-slateblue-100 absolute top-[0px] left-[0px] rounded-6xl w-[238px] h-[60px]" />
            <b className="absolute top-[16px] left-[43px] text-lg tracking-[0.1em] uppercase inline-block font-body-text text-white text-left w-40">
              Explore Now
            </b>
          </button>
          <div className="absolute top-[330px] left-[0px] font-medium inline-block w-[475px]">
            Robotics and other Combinations will make the world pretty fantastic
            compared with today
          </div>
          <b className="absolute top-[0px] left-[0px] text-[75px] leading-[100px] inline-block font-outfit w-[500px] h-[294px]">
            <p className="m-0">Revolution in Human Evolution</p>
          </b>
        </div>
        <img
          className="w-[575px] relative h-[565px] object-cover"
          alt=""
          src="/chat-botamico-1-1@2x.png"
        />
      </section>
      <section
        className="absolute top-[819px] left-[67px] w-[1201px] h-[720px] text-left text-36xl text-white font-outfit"
        id="About"
      >
        <b className="absolute top-[0px] left-[490px] leading-[100px]">
          About Us
        </b>
        <div className="absolute top-[80px] left-[0px] flex flex-row items-center justify-start gap-[0px_49px] text-xl font-body-text md:flex-col md:pt-[80rem] md:box-border">
          <img
            className="w-[552px] relative h-[640px] object-cover"
            alt=""
            src="/nano-1@2x.png"
          />
          <div className="w-[600px] relative h-[557px]">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[501px] left-[0px] w-[225px] h-14"
              autoFocus={true}
            >
              <button
                className="cursor-pointer [border:none] p-0 bg-slateblue-100 absolute top-[0px] left-[0px] rounded-6xl w-[225px] h-14"
                autoFocus={true}
              />
              <b className="absolute top-[14px] left-[57px] text-lg tracking-[0.1em] uppercase inline-block font-body-text text-white text-left w-[111px]">
                Projects
              </b>
            </button>
            <div className="absolute top-[84px] left-[0px] tracking-[0.02em] font-medium inline-block w-[600px] h-[402px]">
              <p className="m-0">
                If you have ever even secretly aspired to build your own robot,
                then the Robotics Club, IITK is the place for you! We are a
                diverse group of over-enthused robotics nerds who find roots
                across all academic departments of the institute as well as
                ‘seniority’. The club is a student body which finds its place
                under the Science and Technology Council, Student Gymkhana, IIT
                Kanpur.
              </p>
              <p className="m-0">
                Interested in what kind of work we do? We build robots for
                academic purposes, to compete at both national and international
                events or just out of plain interest. Check out our projects and
                achievements.
              </p>
              <p className="m-0">&nbsp;</p>
              <p className="m-0">#HappyRoboting</p>
            </div>
            <div className="absolute top-[0px] left-[0px] text-[25px] font-semibold text-slateblue-100 inline-block w-[600px]">
              What if you could build a R2D2? How about Transformers? Or a
              WALL-E?
            </div>
          </div>
        </div>
      </section>
      <section
        className="absolute top-[1645px] left-[93px] w-[1175px] h-[642px] text-left text-36xl text-white font-outfit"
        id="even"
      >
        <b className="absolute top-[0px] left-[491px] leading-[100px]">
          Events
        </b>
        <div className="absolute top-[141px] left-[0px] flex flex-row items-start justify-start gap-[0px_25px] text-11xl font-body-text">
          <div className="w-[375px] relative h-[501px]">
            <div className="absolute top-[62px] left-[0px] rounded-6xl bg-gray-200 w-[375px] h-[439px]" />
            <div className="absolute top-[159px] left-[118px] tracking-[0.05em] font-semibold">
              Takneek
            </div>
            <textarea
              className="[border:none] bg-[transparent] font-medium font-body-text text-lg [outline:none] absolute top-[215px] left-[23px] text-white text-center inline-block w-[328px] h-[270px]"
              placeholder={`The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side. 
`}
            >
              <p className="m-0">{`The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side. `}</p>
            </textarea>
            <div className="absolute top-[0px] left-[112px] rounded-[50%] bg-slateblue-200 w-[150px] h-[150px]" />
            <img
              className="absolute top-[22px] left-[102px] w-[170px] h-32 object-cover"
              alt=""
              src="/takneek-1@2x.png"
            />
          </div>
          <div className="w-[375px] relative h-[501px]">
            <div className="absolute top-[62px] left-[0px] rounded-6xl bg-gray-200 w-[375px] h-[439px]" />
            <div className="absolute top-[159px] left-[118px] tracking-[0.05em] font-semibold">
              Takneek
            </div>
            <textarea
              className="[border:none] bg-[transparent] font-medium font-body-text text-lg [outline:none] absolute top-[215px] left-[23px] text-white text-center inline-block w-[328px] h-[270px]"
              placeholder={`The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side. 
`}
            >
              <p className="m-0">{`The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side. `}</p>
            </textarea>
            <div className="absolute top-[0px] left-[112px] rounded-[50%] bg-slateblue-200 w-[150px] h-[150px]" />
            <img
              className="absolute top-[22px] left-[102px] w-[170px] h-32 object-cover"
              alt=""
              src="/takneek-1@2x.png"
            />
          </div>
          <div className="w-[375px] relative h-[501px]">
            <div className="absolute top-[62px] left-[0px] rounded-6xl bg-gray-200 w-[375px] h-[439px]" />
            <div className="absolute top-[159px] left-[118px] tracking-[0.05em] font-semibold">
              Takneek
            </div>
            <textarea
              className="[border:none] bg-[transparent] font-medium font-body-text text-lg [outline:none] absolute top-[215px] left-[23px] text-white text-center inline-block w-[328px] h-[270px]"
              placeholder={`The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side. 
`}
            >
              <p className="m-0">{`The Science and Technology Council presents to you Takneek 2019, the intra-IITK Science and Technology Championship. A competition in which all the pools shall participate with one common aim in mind, winning the coveted Takneek trophy, with their favourite Science-Figure by their side. `}</p>
            </textarea>
            <div className="absolute top-[0px] left-[112px] rounded-[50%] bg-slateblue-200 w-[150px] h-[150px]" />
            <img
              className="absolute top-[22px] left-[102px] w-[170px] h-32 object-cover"
              alt=""
              src="/takneek-1@2x.png"
            />
          </div>
        </div>
      </section>
      <section
        className="absolute top-[2428px] left-[93px] w-[1176px] h-[960px] text-left text-36xl text-white font-outfit"
        id="gallery"
      >
        <b className="absolute top-[0px] left-[487px] leading-[100px]">
          Gallery
        </b>
        <div className="absolute top-[149px] left-[0px] flex flex-row items-start justify-start gap-[0px_88px]">
          <img
            className="w-[544px] relative rounded-13xl h-[378px] object-cover"
            alt=""
            src="/gal2-1@2x.png"
          />
          <img
            className="w-[544px] relative rounded-13xl h-[378.7px] object-cover"
            alt=""
            src="/gal3-1@2x.png"
          />
        </div>
        <div className="absolute top-[582px] left-[0px] flex flex-row items-start justify-start gap-[0px_88px]">
          <img
            className="w-[544px] relative rounded-13xl h-[378px] object-cover"
            alt=""
            src="/gal4-1@2x.png"
          />
          <img
            className="w-[544px] relative rounded-13xl h-[378px] object-cover"
            alt=""
            src="/robotics-club-img-1@2x.png"
          />
        </div>
      </section>
      <footer className="absolute top-[3627px] left-[93px] w-[1175px] h-[282px] text-left text-xl text-white font-body-text">
        <img
          className="absolute top-[0px] left-[25px] w-[202px] h-[60px] object-cover"
          alt=""
          src="/logo3-2@2x.png"
        />
        <b className="absolute top-[0px] left-[400px]">Home</b>
        <b className="absolute top-[0px] left-[695px]">Social Media</b>
        <b className="absolute top-[38px] left-[400px]">About</b>
        <b className="absolute top-[76px] left-[400px]">Projects</b>
        <b className="absolute top-[114px] left-[400px]">Events</b>
        <b className="absolute top-[152px] left-[400px]">Team</b>
        <img
          className="absolute top-[41px] left-[695px] w-20 h-20 overflow-hidden"
          alt=""
          src="/riyoutubefill.svg"
        />
        <img
          className="absolute top-[49px] left-[781px] w-[70px] h-[70px] overflow-hidden"
          alt=""
          src="/mdifacebook.svg"
        />
        <img
          className="absolute top-[46px] left-[857px] w-[70px] h-[70px] overflow-hidden"
          alt=""
          src="/phinstagramlogofill.svg"
        />
        <img
          className="absolute top-[49px] left-[946px] w-[70px] h-[70px] overflow-hidden"
          alt=""
          src="/uillinkedin.svg"
        />
        <div className="absolute top-[249px] left-[-1.5px] box-border w-[1178px] h-[3px] border-t-[3px] border-solid border-slateblue-100" />
        <b className="absolute top-[259px] left-[268px] inline-block w-[638px] h-[23px]">
          <p className="m-0">
            Copyright © 2022 All rights reserved | Robotics Club, IIT Kanpur
          </p>
        </b>
      </footer>
    </div>
  );
};

export default Desktop;
