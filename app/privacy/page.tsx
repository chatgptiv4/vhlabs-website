import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | VHLabs',
  description: 'VHLabs privacy policy and data protection information',
}

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="container-custom max-w-3xl">
        <Link href="/" className="text-primary hover:underline mb-8 inline-block">
          ← Back to home
        </Link>

        <h1 className="text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: May 24, 2026</p>

        <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
            <p>
              VHLabs ("we" or "us" or "our") operates the vhlabs.dev website (the "Site"). This page
              informs you of our policies regarding the collection, use, and disclosure of personal
              data when you use our Site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Personal Data: Name, email address, phone number, company name</li>
              <li>Usage Data: Browser type, IP address, pages visited, time and date of visit</li>
              <li>Cookies: We use cookies to enhance your experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Use of Data</h2>
            <p>VHLabs uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information</li>
              <li>To monitor the usage of our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Security of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of
              transmission over the Internet or method of electronic storage is 100% secure. While
              we strive to use commercially acceptable means to protect your Personal Data, we
              cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              <a href="mailto:contact@vhlabs.dev" className="text-primary hover:underline">
                contact@vhlabs.dev
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
