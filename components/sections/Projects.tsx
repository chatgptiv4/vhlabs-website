'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Modern SaaS Platform',
      category: 'SaaS Development',
      description: 'Enterprise-grade SaaS platform with advanced security features',
    },
    {
      id: 2,
      title: 'E-Commerce Security',
      category: 'Web Development',
      description: 'Secure e-commerce platform with payment integration',
    },
    {
      id: 3,
      title: 'Fintech Solution',
      category: 'Secure Development',
      description: 'Highly secure financial technology platform',
    },
    {
      id: 4,
      title: 'Health & Wellness App',
      category: 'Web Development',
      description: 'HIPAA-compliant health platform with mobile app',
    },
    {
      id: 5,
      title: 'Analytics Dashboard',
      category: 'SaaS Development',
      description: 'Real-time analytics dashboard with advanced visualizations',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'Web Design',
      description: 'Premium portfolio website for creative professional',
    },
  ]

  return (
    <section id="projects" className="section-spacing bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">Recent Projects</h2>
          <p className="text-xl text-gray-600">
            Showcasing our best work and successful client projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-lg border border-gray-200 hover:border-primary hover:shadow-premium transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center overflow-hidden">
                <div className="text-center text-gray-400">
                  <p className="text-sm">Project Image</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm">{project.description}</p>
              </div>

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                whileHover={{ opacity: 1 }}
              >
                <button className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  View Case Study
                </button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
