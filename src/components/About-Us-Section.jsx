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
        <img 
          src={aboutUsSvg} 
          alt="About Us" 
          className="mt-8 w-[346px]"
        />
        
        <div className="flex justify-between w-full px-8 md:px-16 mt-16 gap-4">
          {/* AIM Section */}
          <div className="flex flex-col items-center">
            <img src={aimsvg} alt="Aim illustration" className="w-full max-w-[221px]" />
            <h2 className="font-spaceGrotesk text-[40px] mt-4">AIM</h2>
            <div className="relative mt-4">
              <img src={dialogueBoxsvg} alt="" className="w-full max-h-[198px] max-w-[348px]" />
              <p className="absolute inset-0 p-6 text-sm">
                {content.aim}
              </p>
            </div>
          </div>

          {/* VISION Section */}
          <div className="flex flex-col items-center">
            <img src={visionsvg} alt="Vision illustration" className="w-full max-w-[221px]" />
            <h2 className="font-spaceGrotesk text-[40px] mt-4">VISION</h2>
            <div className="relative mt-4">
              <img src={dialogueBoxsvg} alt="" className="w-full max-h-[198px] max-w-[348px]" />
              <p className="absolute inset-0 p-6 text-sm">
                {content.vision}
              </p>
            </div>
          </div>

          {/* MISSION Section */}
          <div className="flex flex-col items-center">
            <img src={missionsvg} alt="Mission illustration" className="w-full max-w-[221px]" />
            <h2 className="font-spaceGrotesk text-[40px] mt-4">MISSION</h2>
            <div className="relative mt-4">
              <img src={dialogueBoxsvg} alt="" className="w-full max-h-[198px] max-w-[348px]" />
              <p className="absolute inset-0 p-6 text-sm">
                {content.mission}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

