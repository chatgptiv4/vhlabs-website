'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  FaShieldAlt,
  FaRocket,
  FaMobileAlt,
  FaCode,
  FaLock,
  FaChartLine,
} from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: FaShieldAlt,
      title: 'Secure Website Development',
      description: 'Build websites with security at the core. Protect your users and data.',
    },
    {
      icon: FaRocket,
      title: 'SaaS Development',
      description: 'Scalable SaaS platforms built with modern architecture and best practices.',
    },
    {
      icon: FaMobileAlt,
      title: 'Responsive Design',
      description: 'Beautiful, responsive websites that work perfectly on all devices.',
    },
    {
      icon: FaCode,
      title: 'API Integration',
      description: 'Seamless integration with third-party services and APIs.',
    },
    {
      icon: FaLock,
      title: 'Website Hardening',
      description: 'Comprehensive security audits and hardening of existing websites.',
    },
    {
      icon: FaChartLine,
      title: 'SEO Optimization',
      description: 'Full SEO optimization to help you rank higher on search engines.',
    },
  ]

  return (
    <section id="services" className="section-spacing bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete web development solutions for modern businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-8 border border-gray-200 rounded-lg hover:shadow-premium transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                <service.icon size={28} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
