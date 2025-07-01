'use client';

import Slider from 'react-slick';
import Image from 'next/image';

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full max-w-4xl mx-auto border-none">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i}>
            <div className="relative w-full h-[300px] md:h-[500px]">
              <Image
                src={img}
                alt={`Image ${i}`}
                fill
                className="object-cover rounded-md"
                priority
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
