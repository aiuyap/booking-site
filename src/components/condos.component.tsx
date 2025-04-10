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

export default function Condos() {
  return (
    <div className="mb-14 flex h-screen items-center justify-center bg-black text-white">
      <Carousel className="mx-16 w-screen max-w-6xl">
        <CarouselContent>
          <CarouselItem
            className="h-screen bg-black/70 bg-cover"
            style={{ backgroundImage: `url(${condo1})` }}
          >
            <h1>Condo 1</h1>
          </CarouselItem>
          <CarouselItem
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${condo2})` }}
          >
            <h1>Condo 2</h1>
          </CarouselItem>
          <CarouselItem
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${condo3})` }}
          >
            <h1>Condo 3</h1>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
