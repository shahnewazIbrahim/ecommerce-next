"use client"
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductCard({ images }) {

  return (
    <div className="mt-6">
    <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full h-96"
    >
        {images?.map((image, index) => (
            <SwiperSlide key={index}>
                <div className="relative w-full h-96">
                    <Image
                        src={image.image_path || '/placeholder.jpg'}
                        alt={`Image ${index + 1}`}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                    />
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
</div>
  );
}
