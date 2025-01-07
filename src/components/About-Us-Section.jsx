import yellowsvg from "../assets/yellow-about-us.svg"
import aboutUsSvg from "../assets/about-us-blue.svg"
import aimsvg from "../assets/aim.svg"
import missionsvg from "../assets/mission.svg"
import visionsvg from "../assets/vision.svg"
import dialogueBoxsvg from "../assets/dialogueBox.svg"

export default function AboutUsComponent() {
  const content = {
    aim: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis porttitor leo diam risus vel elementum in vulputate.",
    vision: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis porttitor leo diam risus vel elementum in vulputate.",
    mission: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis porttitor leo diam risus vel elementum in vulputate."
  }

  return (
    <div className="relative max-w-7xl mx-auto">
      <div className="w-full">
        <img src={yellowsvg} alt="Yellow background" className="w-full" />
      </div>
      
      <div className="absolute inset-0 flex flex-col items-center">
        <div className="w-full flex justify-center">
          <img 
            src={aboutUsSvg} 
            alt="About Us" 
            className="w-[35%] md:w-[346px] min-w-[120px] mt-[2%]"
          />
        </div>
        
        <div className="flex justify-between w-[85%] md:w-[90%] mt-[2%] md:mt-8 mb-[5%] md:mb-[10%]">
          {/* AIM Section */}
          <div className="flex flex-col items-center w-[28%] md:w-[30%]">
            <div className="w-full aspect-square flex items-center justify-center mb-1 md:mb-4">
              <img 
                src={aimsvg} 
                alt="Aim illustration" 
                className="w-[80%] md:w-full max-w-[180px]" 
              />
            </div>
            <h2 className="font-spaceGrotesk text-[2vw] md:text-[40px] whitespace-nowrap mb-1 md:mb-4">AIM</h2>
            <div className="relative w-full">
              <img 
                src={dialogueBoxsvg} 
                alt="" 
                className="w-full max-w-[200px] md:max-w-[280px] mx-auto"
              />
              <p className="absolute inset-0 p-[8%] text-[1.2vw] md:text-sm text-center flex items-center justify-center leading-tight">
                {content.aim}
              </p>
            </div>
          </div>

          {/* VISION Section */}
          <div className="flex flex-col items-center w-[28%] md:w-[30%]">
            <div className="w-full aspect-square flex items-center justify-center mb-1 md:mb-4">
              <img 
                src={visionsvg} 
                alt="Vision illustration" 
                className="w-[80%] md:w-full max-w-[180px]" 
              />
            </div>
            <h2 className="font-spaceGrotesk text-[2vw] md:text-[40px] whitespace-nowrap mb-1 md:mb-4">VISION</h2>
            <div className="relative w-full">
              <img 
                src={dialogueBoxsvg} 
                alt="" 
                className="w-full max-w-[200px] md:max-w-[280px] mx-auto"
              />
              <p className="absolute inset-0 p-[8%] text-[1.2vw] md:text-sm text-center flex items-center justify-center leading-tight">
                {content.vision}
              </p>
            </div>
          </div>

          {/* MISSION Section */}
          <div className="flex flex-col items-center w-[28%] md:w-[30%]">
            <div className="w-full aspect-square flex items-center justify-center mb-1 md:mb-4">
              <img 
                src={missionsvg} 
                alt="Mission illustration" 
                className="w-[80%] md:w-full max-w-[180px]" 
              />
            </div>
            <h2 className="font-spaceGrotesk text-[2vw] md:text-[40px] whitespace-nowrap mb-1 md:mb-4">MISSION</h2>
            <div className="relative w-full">
              <img 
                src={dialogueBoxsvg} 
                alt="" 
                className="w-full max-w-[200px] md:max-w-[280px] mx-auto"
              />
              <p className="absolute inset-0 p-[8%] text-[1.2vw] md:text-sm text-center flex items-center justify-center leading-tight">
                {content.mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

