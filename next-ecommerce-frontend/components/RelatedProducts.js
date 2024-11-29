import { Swiper, SwiperSlide } from "swiper/react";

export default function RelatedProducts({ products }) {
  return (
    <Swiper spaceBetween={10} slidesPerView={4}>
      {products.map((product, index) => (
        <SwiperSlide key={index} className="p-4 bg-white border">
          <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
          <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
          <p className="text-green-600">${product.price}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
