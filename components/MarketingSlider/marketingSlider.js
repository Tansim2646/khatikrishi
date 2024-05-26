"use client";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import sliderOneImage from "@/public/slider-1.png";
import sliderTwoImage from "@/public/slider-2-image.png";
export default function MarketingSlider() {
  return (
    <Carousel className="w-full h-64">
      <CarouselContent>
        <CarouselItem key={1}>
          <Image src={sliderOneImage} alt="sliderone" />
        </CarouselItem>
        <CarouselItem key={2}>
          <Image src={sliderTwoImage} alt="slidertwo" />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
