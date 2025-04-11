import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import condo1 from "../assets/condobg1.jpg";
import condo2 from "../assets/condobg2.jpg";
import condo3 from "../assets/condobg3.jpg";
import { Button } from "./ui/button";

export default function Condos() {
  return (
    <div className="flex h-screen items-center justify-center bg-black text-white">
      <Carousel className="mx-16 w-screen max-w-6xl">
        <CarouselContent>
          <CarouselItem
            className="h-screen bg-cover"
            style={{ backgroundImage: `url(${condo1})` }}
          >
            <div className="translate-x flex h-full items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-black/50 p-4">
                <h1 className="text-3xl font-semibold text-white md:text-5xl lg:text-6xl">
                  Marco Polo Parkplace
                </h1>
                <Button className="hover:scale-105">View Info</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${condo2})` }}
          >
            <div className="translate-x flex h-full items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-black/50 p-4">
                <h1 className="text-3xl font-semibold text-white md:text-5xl lg:text-6xl">
                  The Rise at Monterrazas
                </h1>
                <Button className="hover:scale-105">View Info</Button>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${condo3})` }}
          >
            <div className="translate-x flex h-full items-center justify-center">
              <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-black/50 p-4">
                <h1 className="text-3xl font-semibold text-white md:text-5xl lg:text-6xl">
                  Park Point Residences
                </h1>
                <Button className="hover:scale-105">View Info</Button>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
