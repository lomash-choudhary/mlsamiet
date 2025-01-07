import highlightsTitleSvg from "../assets/highlights.svg";

export default function HighlightsSection() {
  return (
    <div>
      {/* Highlights Section */}
      <section className="space-y-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Title */}
        <div className="flex justify-center">
          <img 
            src={highlightsTitleSvg} 
            alt="Highlights Title" 
            className="w-3/4 max-w-[300px] sm:max-w-[385px]" 
          />
        </div>

        {/* Grid Section 1 (3 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-[16/10] border-2 border-black rounded-lg flex items-center justify-center overflow-hidden"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={`Highlight ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Grid Section 2 (2 items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="aspect-[2/1] border-2 border-black rounded-lg flex items-center justify-center overflow-hidden"
            >
              <img
                src="https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt={`Highlight ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}