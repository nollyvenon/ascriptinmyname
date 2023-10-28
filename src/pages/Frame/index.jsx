import React from "react";

import { Button, Img, Input, Line, List, Text } from "components";
import FrameColumnOne from "components/FrameColumnOne";
import FrameColumnOne1 from "components/FrameColumnOne1";

const FramePage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-dmsans items-center justify-start mx-auto w-full">
        <div className="bg-gray-100 flex h-[1024px] justify-end md:px-5 relative w-full">
          <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[4%] w-[87%]">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <Img
                className="h-[102px] md:h-auto object-cover"
                src="images/img_whatsappimage20231016.png"
                alt="whatsappimageTwenty"
              />
              <Button className="cursor-pointer font-medium h-14 my-[23px] text-center text-lg w-[185px]">
                Download
              </Button>
            </div>
            <Text
              className="leading-[145.00%] mt-[31px] md:text-5xl text-7xl text-center text-gray-900"
              size="txtDMSansBold72"
            >
              <>
                Revolutionizing Note-Taking <br />
                for a Smarter Tomorrow!{" "}
              </>
            </Text>
            <Text
              className="leading-[145.00%] mt-3.5 text-base text-center text-gray-500 w-[58%] sm:w-full"
              size="txtDMSansRegular16"
            >
              In an era where information is king, a groundbreaking innovation
              is set to redefine the way we capture and organize our thoughts.
              Introducing the all-new NoteWave - Your Gateway to Effortless
              Note-Taking and Beyond!
            </Text>
            <div className="flex flex-row gap-[25px] items-center justify-center mt-10 w-[27%] md:w-full">
              <Img
                className="h-[47px] md:h-auto object-cover w-[46%]"
                src="images/img_toppng2.png"
                alt="toppngTwo"
              />
              <Img
                className="h-[45px] md:h-auto object-cover w-[47%]"
                src="images/img_pngitem1144050.png"
                alt="pngitem1144050"
              />
            </div>
          </div>
          <Img
            className="h-[427px] mt-auto mx-auto object-cover w-1/2"
            src="images/img_group211.png"
            alt="group211"
          />
          <Img
            className="absolute h-[1024px] inset-[0] justify-center m-auto object-cover md:w-full"
            src="images/img_group1.png"
            alt="groupOne"
          />
        </div>
        <div className="bg-gray-100 flex flex-col items-end justify-start md:pl-10 sm:pl-5 pl-[102px] w-full">
          <div className="md:h-[1636px] h-[547px] relative w-full">
            <div className="absolute md:h-[1636px] h-[1640px] inset-y-[0] my-auto right-[0] w-[92%] md:w-full">
              <Img
                className="h-[391px] ml-auto my-auto relative top-[655px]"
                src="images/img_frame427318725.svg"
                alt="frame427318725"
              />
              <div
                className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-[0] items-end justify-center m-auto p-[100px] md:px-10 sm:px-5 w-full"
                style={{ backgroundImage: "url('images/img_group3.png')" }}
              >
                <div className="flex flex-col gap-2.5 items-start justify-center max-w-[652px] mb-[649px] mt-[643px] w-full">
                  <Text
                    className="md:text-3xl sm:text-[28px] text-[32px] text-gray-100 uppercase w-auto"
                    size="txtDMSansBold32"
                  >
                    Unleash Your Productivity
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[652px] md:max-w-full text-base text-gray-100"
                    size="txtDMSansRegular16Gray100"
                  >
                    <>
                      Say goodbye to the traditional pen and paper. NoteWave
                      brings note-taking into the 21st century, providing a
                      digital canvas for your ideas. Whether you&#39;re in a
                      meeting, lecture, or brainstorming session, this app is
                      your ultimate companion for capturing thoughts in
                      real-time.
                    </>
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="absolute bottom-[8%] h-[400px] left-[0] object-cover rounded-lg w-[41%]"
              src="images/img_rectangle2.png"
              alt="rectangleTwo"
            />
          </div>
        </div>
        <div className="bg-gray-100 h-[1113px] md:h-[883px] p-[18px] md:px-5 relative w-full">
          <div className="absolute md:h-[883px] h-[933px] inset-[0] justify-center m-auto w-[84%] md:w-full">
            <Text
              className="absolute left-[0] sm:text-4xl md:text-[38px] text-[40px] text-gray-900 top-[0] uppercase"
              size="txtDMSansBold40"
            >
              Features That Redefine Note-Taking
            </Text>
            <Img
              className="absolute bottom-[0] h-[883px] object-cover right-[0] w-2/5"
              src="images/img_blackclay21.png"
              alt="blackclayTwentyOne"
            />
          </div>
          <div className="absolute bg-gray-100 flex flex-row font-sfprotext gap-[9px] items-center justify-center p-3 right-[2%] rounded-[22px] shadow-bs top-[27%] w-auto">
            <div className="bg-orange-A200 h-[38px] rounded-lg w-[38px]"></div>
            <div className="flex flex-col gap-0.5 items-center justify-center w-[286px]">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-center text-gray-900_01 tracking-[-0.41px] w-auto"
                  size="txtSFProTextSemibold16"
                >
                  Headline
                </Text>
                <Text
                  className="text-center text-gray-700 text-xs tracking-[-0.41px] w-auto"
                  size="txtSFProTextRegular12"
                >
                  15m ago
                </Text>
              </div>
              <Text
                className="leading-[18.00px] max-w-[286px] md:max-w-full text-gray-900_01 text-sm"
                size="txtSFProTextRegular14"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Text>
            </div>
          </div>
          <div className="absolute bg-gray-100 bottom-[23%] flex flex-row font-sfprotext gap-[9px] items-center justify-center p-3 right-[21%] rounded-[22px] shadow-bs w-auto">
            <div className="bg-orange-A200 h-[38px] rounded-lg w-[38px]"></div>
            <div className="flex flex-col gap-0.5 items-center justify-center w-[286px]">
              <div className="flex flex-row items-center justify-between w-full">
                <Text
                  className="text-base text-center text-gray-900_01 tracking-[-0.41px] w-auto"
                  size="txtSFProTextSemibold16"
                >
                  Headline
                </Text>
                <Text
                  className="text-center text-gray-700 text-xs tracking-[-0.41px] w-auto"
                  size="txtSFProTextRegular12"
                >
                  15m ago
                </Text>
              </div>
              <Text
                className="leading-[18.00px] max-w-[286px] md:max-w-full text-gray-900_01 text-sm"
                size="txtSFProTextRegular14"
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              </Text>
            </div>
          </div>
          <List
            className="absolute flex flex-col font-dmsans gap-[30px] inset-y-[0] items-start left-[7%] my-auto w-auto"
            orientation="vertical"
          >
            <div className="bg-white-A700 flex flex-col gap-3.5 justify-center p-[18px] relative rounded-[10px] shadow-bs1 top-[300px] w-full">
              <div className="flex flex-row gap-[17px] items-start justify-start mr-[215px] mt-3 w-3/5 md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Text
                  className="text-gray-900 text-xl uppercase"
                  size="txtDMSansBold20"
                >
                  Intelligent Organization
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[41px] mr-0.5">
                <Text
                  className="leading-[145.00%] text-base text-gray-600 w-full"
                  size="txtDMSansRegular16Gray600"
                >
                  No more searching through endless pages. NoteWave employs
                  cutting-edge algorithms to organize your notes smartly, making
                  retrieval a breeze.
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-3.5 justify-center p-[18px] relative rounded-[10px] shadow-bs1 top-[300px] w-full">
              <div className="flex flex-row gap-[17px] items-start justify-start mr-[197px] mt-3 w-[64%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Text
                  className="text-gray-900 text-xl uppercase"
                  size="txtDMSansBold20"
                >
                  Voice-to-Text Technology
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[41px] mr-0.5">
                <Text
                  className="leading-[145.00%] text-base text-gray-600 w-full"
                  size="txtDMSansRegular16Gray600"
                >
                  Dictate your ideas, and watch them magically transform into
                  text. Your voice, our command. Effortless and time-saving!
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-3.5 justify-center p-[18px] relative rounded-[10px] shadow-bs1 top-[300px] w-full">
              <div className="flex flex-row gap-[17px] items-start justify-start mr-[253px] mt-3 w-[53%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Text
                  className="text-gray-900 text-xl uppercase"
                  size="txtDMSansBold20"
                >
                  Cross-Platform Sync
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[41px] mr-0.5">
                <Text
                  className="leading-[145.00%] text-base text-gray-600 w-full"
                  size="txtDMSansRegular16Gray600"
                >
                  Seamlessly transition from your phone to tablet to desktop.
                  Your notes are always with you, no matter where inspiration
                  strikes.
                </Text>
              </div>
            </div>
            <div className="bg-white-A700 flex flex-col gap-3.5 justify-center p-[18px] relative rounded-[10px] shadow-bs1 top-[300px] w-full">
              <div className="flex flex-row gap-[17px] items-start justify-start mr-[209px] mt-3 w-[61%] md:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
                <Text
                  className="text-gray-900 text-xl uppercase"
                  size="txtDMSansBold20"
                >
                  Collaboration Made Easy
                </Text>
              </div>
              <div className="flex flex-col items-center justify-start mb-[3px] md:ml-[0] ml-[41px] mr-0.5">
                <Text
                  className="leading-[145.00%] text-base text-gray-600 w-full"
                  size="txtDMSansRegular16Gray600"
                >
                  Share notes, ideas, and projects effortlessly with colleagues
                  and friends. Collaborate in real-time and watch ideas come to
                  life!
                </Text>
              </div>
            </div>
          </List>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-orange-A200 flex flex-col h-[943px] items-center justify-start p-[97px] md:px-10 sm:px-5 w-full"
          style={{ backgroundImage: "url('images/img_group3.png')" }}
        >
          <div className="flex flex-col items-center justify-start max-w-[1194px] mb-[18px] mx-auto w-full">
            <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
              <div className="flex flex-col md:gap-10 gap-[212px] items-center justify-start">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[358px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-100 sm:text-xl uppercase w-auto"
                    size="txtDMSansBold24"
                  >
                    Innovate Your Workflow
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[358px] md:max-w-full text-base text-gray-100"
                    size="txtDMSansRegular16Gray100"
                  >
                    <>
                      NoteWave is not just a note-taking app; it&#39;s a
                      productivity powerhouse. Leverage features like task
                      lists, reminders, and tags to take control of your day.
                      Transform your to-dos into triumphs!
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-[358px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-100 sm:text-xl uppercase w-auto"
                    size="txtDMSansBold24"
                  >
                    Join the Wave Today!
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[358px] md:max-w-full text-base text-gray-100"
                    size="txtDMSansRegular16Gray100"
                  >
                    <>
                      Don&#39;t miss the tide of innovation. Download NoteWave
                      now and elevate your note-taking experience. Whether
                      you&#39;re a student, professional, or creative thinker,
                      NoteWave is the catalyst for turning ideas into reality.
                    </>
                  </Text>
                </div>
              </div>
              <Img
                className="h-[731px] md:h-auto object-cover rounded-[50px]"
                src="images/img_blackclay22.png"
                alt="blackclayTwentyTwo"
              />
              <div className="flex flex-col md:gap-10 gap-[200px] items-center justify-start">
                <div className="flex flex-col gap-1.5 items-start justify-start w-[358px]">
                  <Text
                    className="text-2xl md:text-[22px] text-gray-100 sm:text-xl uppercase w-auto"
                    size="txtDMSansBold24"
                  >
                    Privacy First
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[358px] md:max-w-full text-base text-gray-100"
                    size="txtDMSansRegular16Gray100"
                  >
                    Your thoughts are sacred, and so is your privacy. NoteWave
                    employs state-of-the-art security measures to ensure that
                    your notes are for your eyes only.
                  </Text>
                </div>
                <div className="flex flex-col gap-1.5 items-start justify-start w-[358px]">
                  <Text
                    className="leading-[145.00%] max-w-[255px] md:max-w-full text-2xl md:text-[22px] text-gray-100 sm:text-xl uppercase"
                    size="txtDMSansBold24"
                  >
                    Customization at Your Fingertips
                  </Text>
                  <Text
                    className="leading-[145.00%] max-w-[358px] md:max-w-full text-base text-gray-100"
                    size="txtDMSansRegular16Gray100"
                  >
                    Personalize your workspace with themes, fonts, and layouts.
                    Make NoteWave an extension of your style and creativity.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 flex flex-col items-start justify-start p-14 md:px-10 sm:px-5 w-full">
          <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between max-w-[1151px] mx-auto w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-1/2 md:w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-gray-900 uppercase"
                size="txtDMSansBold40"
              >
                download NOW
              </Text>
              <Text
                className="leading-[145.00%] mt-[18px] text-base text-gray-500"
                size="txtDMSansRegular16"
              >
                <>
                  Seize the moment, capture the idea, and ride the wave of a new
                  era in note-taking with NoteWave! <br />
                  #NoteWaveRevolution #SmarterNotes #ProductivityRedefined
                </>
              </Text>
              <div className="flex flex-row gap-[25px] items-center justify-start mt-10 w-[58%] md:w-full">
                <Img
                  className="h-[47px] md:h-auto object-cover w-[46%]"
                  src="images/img_toppng2.png"
                  alt="toppngTwo_One"
                />
                <Img
                  className="h-[45px] md:h-auto object-cover w-[47%]"
                  src="images/img_pngitem1144050.png"
                  alt="pngitem1144050_One"
                />
              </div>
              <List
                className="sm:flex-col flex-row gap-[30px] grid sm:grid-cols-1 grid-cols-3 justify-center mt-[60px] w-full"
                orientation="horizontal"
              >
                <div className="bg-orange-A200 flex flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-[10px] shadow-bs1 w-full">
                  <Img
                    className="h-[35px] mt-2 w-[35px]"
                    src="images/img_group.svg"
                    alt="group"
                  />
                  <Text
                    className="mt-[17px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-100 uppercase"
                    size="txtDMSansBold25"
                  >
                    59865
                  </Text>
                  <Text
                    className="mt-[11px] text-gray-100 text-xl uppercase"
                    size="txtDMSansBold20Gray100"
                  >
                    Download
                  </Text>
                </div>
                <div className="bg-orange-A200 flex flex-1 flex-col items-center justify-end p-[21px] sm:px-5 rounded-[10px] shadow-bs1 w-full">
                  <Img
                    className="h-[35px] mt-2 w-[35px]"
                    src="images/img_thumbsup.svg"
                    alt="thumbsup"
                  />
                  <Text
                    className="mt-[17px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-100 uppercase"
                    size="txtDMSansBold25"
                  >
                    29852
                  </Text>
                  <Text
                    className="mt-[11px] text-gray-100 text-xl uppercase"
                    size="txtDMSansBold20Gray100"
                  >
                    LIke
                  </Text>
                </div>
                <div className="bg-orange-A200 flex flex-1 flex-col items-center justify-center p-[13px] rounded-[10px] shadow-bs1 w-full">
                  <Img
                    className="h-[35px] mt-[17px] w-[35px]"
                    src="images/img_maximize.svg"
                    alt="maximize"
                  />
                  <Text
                    className="mt-[17px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-100 uppercase"
                    size="txtDMSansBold25"
                  >
                    1500
                  </Text>
                  <Text
                    className="mb-2 mt-[11px] text-gray-100 text-xl uppercase"
                    size="txtDMSansBold20Gray100"
                  >
                    5 star rating
                  </Text>
                </div>
              </List>
            </div>
            <div className="md:h-[471px] h-[533px] relative w-[38%] md:w-full">
              <div className="absolute md:h-[471px] h-[519px] inset-y-[0] my-auto right-[0] w-[90%] sm:w-full">
                <div className="absolute bg-white-A700 bottom-[0] h-[71px] left-[4%] rounded-[106px] shadow-bs1 w-[55%]"></div>
                <Img
                  className="absolute h-[471px] inset-x-[0] mx-auto object-cover top-[0] w-full"
                  src="images/img_blackclay11.png"
                  alt="blackclayEleven"
                />
              </div>
              <Img
                className="absolute bottom-[0] h-[442px] left-[0] object-cover w-[65%]"
                src="images/img_blackclay31.png"
                alt="blackclayThirtyOne"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:px-5 relative w-full">
          <div className="bg-gray-100 flex flex-col gap-[42px] items-center justify-end mx-auto p-[83px] md:px-10 sm:px-5 w-full">
            <Text
              className="mt-[15px] sm:text-4xl md:text-[38px] text-[40px] text-gray-900 uppercase"
              size="txtDMSansBold40"
            >
              Customer’s Feedback
            </Text>
            <div className="flex flex-col md:gap-10 gap-[60px] items-center justify-start w-[92%] md:w-full">
              <div className="sm:h-[355px] h-[357px] md:h-[689px] relative w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                  <List
                    className="sm:flex-col flex-row gap-[31px] grid md:grid-cols-1 grid-cols-2 justify-center w-full"
                    orientation="horizontal"
                  >
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[23px] sm:px-5 rounded-[10px] shadow-bs2 w-full">
                      <Img
                        className="h-24 md:h-auto mt-[17px] rounded-[50%] w-24"
                        src="images/img_profileimage.png"
                        alt="profileimage"
                      />
                      <Text
                        className="mt-[22px] sm:text-[27.25px] md:text-[29.25px] text-[31.25px] text-blue_gray-900 uppercase"
                        size="txtDMSansBold3125"
                      >
                        TEEJAY TEKO
                      </Text>
                      <Text
                        className="mt-2 text-blue_gray-900 text-center text-xl uppercase"
                        size="txtJosefinSansSemiBold20"
                      >
                        DESIGNER
                      </Text>
                      <Text
                        className="leading-[24.00px] mt-[15px] text-base text-center text-gray-600 w-[95%] sm:w-full"
                        size="txtDMSansRegular16Gray600"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra nunc ante velit vitae. Est tellus vitae, nullam
                        lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                        ullamcorper velit.
                      </Text>
                    </div>
                    <div className="bg-white-A700 flex flex-1 flex-col items-center justify-end sm:ml-[0] p-[23px] sm:px-5 rounded-[10px] shadow-bs2 w-full">
                      <Img
                        className="h-24 md:h-auto mt-[17px] rounded-[50%] w-24"
                        src="images/img_profileimage.png"
                        alt="profileimageThree"
                      />
                      <Text
                        className="mt-[22px] sm:text-[27.25px] md:text-[29.25px] text-[31.25px] text-blue_gray-900 uppercase"
                        size="txtDMSansBold3125"
                      >
                        TEEJAY TEKO
                      </Text>
                      <Text
                        className="mt-2 text-blue_gray-900 text-center text-xl uppercase"
                        size="txtJosefinSansSemiBold20"
                      >
                        DESIGNER
                      </Text>
                      <Text
                        className="leading-[24.00px] mt-[15px] text-base text-center text-gray-600 w-[95%] sm:w-full"
                        size="txtDMSansRegular16Gray600"
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Viverra nunc ante velit vitae. Est tellus vitae, nullam
                        lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                        ullamcorper velit.
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-9 sm:px-5 rounded-[10px] shadow-bs2 w-[66%]">
                  <Img
                    className="h-24 md:h-auto mt-1 rounded-[50%] w-24"
                    src="images/img_profileimage.png"
                    alt="profileimage"
                  />
                  <Text
                    className="mt-[22px] sm:text-[27.25px] md:text-[29.25px] text-[31.25px] text-blue_gray-900 uppercase"
                    size="txtDMSansBold3125"
                  >
                    Teejay Teko
                  </Text>
                  <Text
                    className="mt-1.5 text-blue_gray-900 text-center text-xl uppercase"
                    size="txtDMSansBold20Bluegray900"
                  >
                    Designer
                  </Text>
                  <Text
                    className="leading-[24.00px] mt-[9px] text-base text-center text-gray-600 w-[93%] sm:w-full"
                    size="txtDMSansRegular16Gray600"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Viverra nunc ante velit vitae. Est tellus vitae, nullam
                    lobortis enim. Faucibus amet etiam tincidunt rhoncus,
                    ullamcorper velit. Ullamcorper risus tempor, ac nunc libero
                    urna, feugiat.
                  </Text>
                </div>
              </div>
              <Img className="h-5" src="images/img_slider.svg" alt="slider" />
            </div>
          </div>
          <div className="h-[670px] mt-[-8px] mx-auto w-full z-[1]">
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[230px] items-start justify-start mb-[-102px] mx-auto p-[50px] md:px-10 sm:px-5 rounded-[30px] w-[82%] z-[1]"
              style={{ backgroundImage: "url('images/img_contactus.svg')" }}
            >
              <div className="flex md:flex-col flex-row gap-[46px] items-center justify-start my-1.5 w-[89%] md:w-full">
                <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[58%] md:w-full">
                  <div className="flex flex-row gap-[18px] items-start justify-start">
                    <div className="bg-orange-A200 flex flex-col h-[100px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[100px]">
                      <div className="flex flex-col h-10 items-center justify-start w-10">
                        <Img
                          className="h-10 w-10"
                          src="images/img_arrowdown_gray_100.svg"
                          alt="arrowdown"
                        />
                      </div>
                    </div>
                    <Text
                      className="lowercase mt-[42px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                      size="txtDMSansBold25Gray900"
                    >
                      info@youremail.com
                    </Text>
                  </div>
                  <Line className="bg-gray-500 sm:h-1 h-[117px] w-1 sm:w-full" />
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-start w-[39%] md:w-full">
                  <div className="bg-orange-A200 flex flex-col h-[100px] items-center justify-start p-[30px] sm:px-5 rounded-[50%] w-[100px]">
                    <div className="flex flex-col h-10 items-center justify-start w-10">
                      <Img
                        className="h-10 w-10"
                        src="images/img_call.svg"
                        alt="call"
                      />
                    </div>
                  </div>
                  <Text
                    className="mt-[39px] sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtDMSansBold25Gray900"
                  >
                    +234 8012 345 6789
                  </Text>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 flex flex-col items-center justify-end mt-11 mx-auto p-[18px] w-full">
              <div className="flex flex-col items-center justify-start mt-[199px] w-[84%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-[97%] md:w-full">
                  <Img
                    className="h-[178px] sm:h-auto mb-5 object-cover w-[22%] md:w-full"
                    src="images/img_whatsappimage20231016_178x242.png"
                    alt="whatsappimageTwenty_One"
                  />
                  <div className="flex flex-row gap-[60px] items-center justify-center md:ml-[0] ml-[104px] md:mt-0 mt-[91px] w-1/4 md:w-full">
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] w-2/5"
                      orientation="horizontal"
                    >
                      <FrameColumnOne className="flex flex-col h-6 items-center justify-start sm:ml-[0] w-full" />
                      <Line className="self-center h-5 bg-gray-100 w-px" />
                      <FrameColumnOne1 className="flex flex-col h-6 items-center justify-start sm:ml-[0] w-full" />
                    </List>
                    <List
                      className="sm:flex-col flex-row gap-[30px] grid grid-cols-[repeat(1,_1fr_1px)_1fr] w-2/5"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col h-6 items-center justify-start w-full">
                        <div className="flex flex-col h-6 items-center justify-start w-6">
                          <Img
                            className="h-6 w-6"
                            src="images/img_twitter.svg"
                            alt="twitter"
                          />
                        </div>
                      </div>
                      <Line className="self-center h-5 bg-gray-100 w-px" />
                      <div className="flex flex-col h-6 items-center justify-start w-full">
                        <div className="flex flex-col h-6 items-center justify-start w-6">
                          <Img
                            className="h-6 w-6"
                            src="images/img_iconsfillyoutubefill.svg"
                            alt="iconsfillyoutub"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                  <div className="flex flex-col items-start justify-start md:ml-[0] ml-[135px] md:mt-0 mt-[19px] w-[33%] md:w-full">
                    <Text
                      className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-100 uppercase"
                      size="txtDMSansBold25"
                    >
                      news letter
                    </Text>
                    <Text
                      className="leading-[24.00px] mt-3.5 text-base text-gray-100"
                      size="txtDMSansRegular16Gray100"
                    >
                      <>
                        Subscribe our newsletter to get our latest
                        <br />
                        update & news
                      </>
                    </Text>
                    <Input
                      name="emailsend"
                      placeholder="Your email address"
                      className="p-0 placeholder:text-gray-500 text-base text-left w-full"
                      wrapClassName="flex mt-[33px] w-full"
                      type="email"
                      suffix={
                        <Img
                          className="h-6 ml-[35px] my-auto"
                          src="images/img_play.svg"
                          alt="play"
                        />
                      }
                    ></Input>
                  </div>
                </div>
                <Line className="bg-gray-100 h-px mt-[67px] w-full" />
                <div className="flex flex-row gap-[18px] items-start justify-center mt-[17px] w-[26%] md:w-full">
                  <Img
                    className="h-6 w-6"
                    src="images/img_volume.svg"
                    alt="volume"
                  />
                  <Text
                    className="mt-0.5 text-base text-gray-100"
                    size="txtDMSansRegular16Gray100"
                  >
                    Copyright 2021. All Right Reserved.
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FramePage;
