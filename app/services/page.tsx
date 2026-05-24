import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Services | VHLabs',
  description: 'Premium web development services - secure websites, SaaS platforms, and more',
}

export default function ServicesPage() {
  const services = [
    {
      title: 'Secure Website Development',
      description:
        'We build websites with security at the core. Every line of code is written with best practices in mind.',
      features: ['SSL/TLS encryption', 'OWASP protection', 'Regular security audits', 'Data protection'],
    },
    {
      title: 'SaaS Development',
      description:
        'Scalable SaaS platforms built with modern architecture. From MVP to enterprise-grade applications.',
      features: ['Multi-tenant architecture', 'API-first design', 'User authentication', 'Payment integration'],
    },
    {
      title: 'SEO Optimization',
      description:
        'Websites optimized for search engines. We follow the latest SEO best practices to help you rank higher.',
      features: ['Technical SEO', 'Content optimization', 'Link building', 'Performance tuning'],
    },
    {
      title: 'UI/UX Design',
      description:
        'Beautiful, user-focused designs that convert. We create experiences that users love.',
      features: ['User research', 'Wireframing', 'Prototyping', 'Design systems'],
    },
    {
      title: 'API Integration',
      description:
        'Seamless integration with third-party services and APIs. Connect your tools and systems.',
      features: ['REST APIs', 'WebHooks', 'Real-time data', 'Custom integrations'],
    },
    {
      title: 'Website Hardening',
      description:
        'Secure existing websites through comprehensive audits and hardening measures.',
      features: ['Security audit', 'Vulnerability assessment', 'Remediation', 'Monitoring'],
    },
  ]

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          ← Back to home
        </Link>

        <h1 className="text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 mb-16">
          Complete web development solutions tailored to your needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-3">{service.title}</h2>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <span className="text-primary">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gray-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Book Consultation
          </Link>
        </div>
      </div>
    </main>
  )
}
