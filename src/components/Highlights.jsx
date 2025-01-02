import highlightsTitleSvg from "../assets/highlights.svg";

export default function HighlightsSection() {
  return (
    <div>
      {/* Highlights Section */}
      <section className="space-y-[42px] max-w-7xl mx-auto px-4 py-10">
        <div className="flex justify-center">
          <img src={highlightsTitleSvg} className="max-w-[385px]" />
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="aspect-[16/10] border-2 border-black rounded-lg flex items-center justify-center"
            >
              <span className="text-3xl">
                <img src="https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="aspect-[2/1] border-2 border-black rounded-lg flex items-center justify-center"
            >
              <span className="text-3xl">
                <img src="https://plus.unsplash.com/premium_photo-1681396937086-8a28edd8d257?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Join Us Section */}
    </div>
  );
}
