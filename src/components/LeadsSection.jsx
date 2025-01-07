import meetLeadsSvg from "../assets/meetTheLeads.svg";
import dialogueBoxsvg from "../assets/dialogueBox.svg";

export default function LeadsSection() {
  const leadsData = [
    {
      image: "https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis porttitor leo diam risus vel elementum in vulputate."
    },
    {
      image: "https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis porttitor leo diam risus vel elementum in vulputate."
    }
  ];

  return (
    <div className="mt-[46px] mb-[18px]">
      <div className="flex justify-center mb-8">
        <img 
          src={meetLeadsSvg} 
          alt="Meet The Leads" 
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 px-4 md:px-8">
        {leadsData.map((lead, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-full aspect-[16/10] border-2 border-black rounded-lg overflow-hidden">
              <img 
                src={lead.image} 
                alt={`Team Lead ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative mt-4 flex justify-center">
              <img
                src={dialogueBoxsvg}
                alt=""
                className="w-[280px]"
              />
              <p className="absolute inset-0 p-4 text-sm max-w-[280px] mx-auto">
                {lead.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

