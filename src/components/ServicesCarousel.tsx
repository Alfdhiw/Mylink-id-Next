'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const items = [
    {
        title: "Digital Product",
        desc: "Sell ebooks, software, apps, templates, and more.",
        image: "digital.webp",
      },
      {
        title: "Blog",
        desc: "Share your knowledge through articles and blogs.",
        image: "blog.webp",
      },
      {
        title: "Appointment",
        desc: "Schedule meetings and consultations easily.",
        image: "appointment.webp",
      },
      {
        title: "Course",
        desc: "Sell and manage online courses.",
        image: "course.webp",
      },
      {
        title: "Event Webinar",
        desc: "Sell your expertise via webinar.",
        image: "event.webp",
      },
      {
        title: "Donation",
        desc: "Accept donation from your followers.",
        image: "support.webp",
      },
      {
        title: "Store",
        desc: "Sell any of your physical products, electronics, foods, arts, etc.",
        image: "physical.webp",
      },
  ];

  export default function ServicesCarousel() {
    return (
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } }}
        className="my-12"
      >
        {items.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <img src={`/assets/img/clients/${item.image}`} className="mx-auto w-40 mb-4" alt={item.title} />
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
  