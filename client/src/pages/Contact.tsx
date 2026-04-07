import { Link } from 'wouter';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <Link href="/">
              <a className="text-2xl font-light tracking-wider text-gray-900">SDA</a>
            </Link>
            <div className="flex gap-8">
              <Link href="/work">
                <a className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">Work</a>
              </Link>
              <Link href="/about">
                <a className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">About</a>
              </Link>
              <Link href="/contact">
                <a className="text-sm font-light text-blue-900 hover:text-blue-900 transition-colors">Contact</a>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="section-spacing bg-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg font-light text-gray-600 max-w-2xl">
            Have a project in mind? Let's discuss how we can bring your vision to life. Reach out through the form below or contact us directly.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Phone</p>
                  <a href="tel:+27827728753" className="text-base font-light text-gray-900 hover:text-blue-900 transition-colors">
                    +27 (0)82 772 8753
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Email</p>
                  <a href="mailto:preston@sdarchstudio.co.za" className="text-base font-light text-gray-900 hover:text-blue-900 transition-colors">
                    preston@sdarchstudio.co.za
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-600 font-light mb-1">Location</p>
                  <p className="text-base font-light text-gray-900">South Africa</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-4">Response Time</h3>
              <p className="text-base font-light text-gray-700 leading-relaxed">
                We typically respond to inquiries within 24-48 hours. For urgent matters, please call directly. We look forward to hearing from you and exploring potential collaboration opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Send us a Message</h2>

            {submitted && (
              <div className="mb-8 p-4 bg-green-50 border border-green-200">
                <p className="text-sm font-light text-green-900">
                  Thank you for your message. We'll be in touch shortly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-light text-gray-900 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 bg-white text-gray-900 font-light focus:outline-none focus:border-blue-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-light text-gray-900 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 bg-white text-gray-900 font-light focus:outline-none focus:border-blue-900 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-light text-gray-900 mb-2">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 bg-white text-gray-900 font-light focus:outline-none focus:border-blue-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-light text-gray-900 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 bg-white text-gray-900 font-light focus:outline-none focus:border-blue-900 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-light text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-4 py-3 border border-gray-200 bg-white text-gray-900 font-light focus:outline-none focus:border-blue-900 transition-colors resize-none"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-blue-900 text-white px-8 py-3 font-light hover:bg-blue-800 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-12">
            <div>
              <h3 className="text-sm font-light text-gray-900 mb-4">Sullivan Design Architects</h3>
              <p className="text-xs text-gray-600 font-light">Premium architecture design studio</p>
            </div>
            <div>
              <h4 className="text-sm font-light text-gray-900 mb-4">Navigation</h4>
              <div className="space-y-2">
                <Link href="/work">
                  <a className="text-xs text-gray-600 font-light hover:text-gray-900 block">Work</a>
                </Link>
                <Link href="/about">
                  <a className="text-xs text-gray-600 font-light hover:text-gray-900 block">About</a>
                </Link>
                <Link href="/contact">
                  <a className="text-xs text-gray-600 font-light hover:text-gray-900 block">Contact</a>
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-light text-gray-900 mb-4">Contact</h4>
              <p className="text-xs text-gray-600 font-light">+27 (0)82 772 8753</p>
              <p className="text-xs text-gray-600 font-light">preston@sdarchstudio.co.za</p>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-8 pb-8 text-center">
            <p className="text-xs text-gray-500 font-light">&copy; 2024 Sullivan Design Architects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
