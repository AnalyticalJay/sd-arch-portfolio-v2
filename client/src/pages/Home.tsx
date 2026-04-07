import { Link } from 'wouter';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Residential Estate',
      location: 'Cape Town',
      year: '2024',
      type: 'Residential',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/hero-residential-nAK9GkTR9Z6LadT99QejuV.webp',
    },
    {
      id: 2,
      title: 'Commercial Tower',
      location: 'Johannesburg',
      year: '2023',
      type: 'Commercial',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-commercial-ke8b7zDgKiJv3vkv7wVSTy.webp',
    },
    {
      id: 3,
      title: 'Healthcare Facility',
      location: 'Durban',
      year: '2023',
      type: 'Healthcare',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-healthcare-2Li5hp4tPmpfcmqYNnp9kC.webp',
    },
    {
      id: 4,
      title: 'Mixed-Use Development',
      location: 'Pretoria',
      year: '2022',
      type: 'Mixed-Use',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-mixed-use-U5MNooCXGFmCyFiTThekuJ.webp',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-light tracking-wider text-gray-900">
              SDA
            </Link>
            <div className="flex gap-8">
              <Link href="/work" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/hero-residential-nAK9GkTR9Z6LadT99QejuV.webp"
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="text-5xl md:text-6xl font-light text-white mb-4">Sullivan Design Architects</h1>
          <p className="text-lg md:text-xl font-light text-gray-100">Minimal. Purposeful. Enduring.</p>
        </div>
      </section>

      {/* Studio Intro */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <p className="text-base md:text-lg font-light text-gray-700 leading-relaxed">
              Architecture is more than buildings—it's about shaping how people live, move, and connect within a space. Every project is an opportunity to balance clarity, function, and experience.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-spacing bg-white">
        <div className="container">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-16">Recent Work</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <Link key={project.id} href={`/project/${project.id}`} className="project-card group">
                  <div className="relative overflow-hidden h-96">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-meta">
                      {project.location} • {project.year} • {project.type}
                    </p>
                  </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Let's create something meaningful</h2>
            <p className="text-base text-gray-600 font-light mb-8">
              Whether you have a vision or need guidance, I'm here to translate ideas into compelling, buildable solutions.
            </p>
            <Link href="/contact" className="inline-block bg-blue-900 text-white px-8 py-3 font-light hover:bg-blue-800 transition-colors">
              Get in Touch
            </Link>
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
                <Link href="/work" className="text-xs text-gray-600 font-light hover:text-gray-900 block">
                  Work
                </Link>
                <Link href="/about" className="text-xs text-gray-600 font-light hover:text-gray-900 block">
                  About
                </Link>
                <Link href="/contact" className="text-xs text-gray-600 font-light hover:text-gray-900 block">
                  Contact
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
