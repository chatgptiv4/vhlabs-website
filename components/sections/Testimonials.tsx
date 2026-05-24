'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'John Smith',
      role: 'CEO, Tech Startup',
      content:
        'VHLabs transformed our digital presence. Their attention to security and performance is unmatched.',
      avatar: '👨‍💼',
    },
    {
      name: 'Sarah Johnson',
      role: 'Founder, E-Commerce',
      content:
        'Working with VHLabs was a game-changer. Our conversion rate increased by 45% after the redesign.',
      avatar: '👩‍💼',
    },
    {
      name: 'Mike Chen',
      role: 'CTO, SaaS Company',
      content:
        'The security expertise and scalable architecture VHLabs provided exceeded our expectations.',
      avatar: '👨‍💻',
    },
    {
      name: 'Emily Davis',
      role: 'Marketing Director',
      content:
        'Their SEO optimization work put us on the first page of Google within 3 months.',
      avatar: '👩‍💻',
    },
  ]

  return (
    <section className="section-spacing bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Testimonials</h2>
          <p className="text-xl text-gray-600">
            What our clients say about working with us
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-white p-8 rounded-lg shadow-sm h-full"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
