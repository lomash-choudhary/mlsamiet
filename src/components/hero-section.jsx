import { Button } from '../components/ui/button'

export function HeroSection() {
  return (
    (<div className="container px-4 py-12 md:py-24">
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Communicate.
            <br />
            Collaborate.
            <br />
            Create.
          </h1>
          <p className="text-lg text-muted-foreground">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
          </p>
          <div>
            <Button size="lg" className="font-semibold">
              Join Us
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] md:h-[500px]">
          <img
            src="/placeholder.svg"
            alt="Collaborative illustration"
            
            className="object-contain"
             />
        </div>
      </div>
    </div>)
  );
}

