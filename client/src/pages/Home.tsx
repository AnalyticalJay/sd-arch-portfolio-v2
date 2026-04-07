import { Link } from 'wouter';

/**
 * Design Philosophy: Premium Minimal Architecture
 * - Full-screen hero with centered, elegant typography
 * - Large project images with minimal spacing (20-30px gap)
 * - Smooth hover reveals project title and metadata
 * - Light font weights (300-400) throughout
 * - 1300px max-width container with precise alignment
 * - No unnecessary sections—focus on work
 */

export default function Home() {
  const projects = [
    {
      id: 1,
      title: 'Residential Sanctuary',
      location: 'Cape Town',
      year: '2024',
      type: 'Residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
    },
    {
      id: 2,
      title: 'Commercial Hub',
      location: 'Johannesburg',
      year: '2023',
      type: 'Commercial',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&h=800&fit=crop',
    },
    {
      id: 3,
      title: 'Healthcare Innovation',
      location: 'Durban',
      year: '2023',
      type: 'Healthcare',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200&h=800&fit=croph=800https://images.unsplash.com/photo-1576091160550-112173f7f869?w=1200&h=800&fit=cropfit=crop',
    },
    {
      id: 4,
      title: 'Mixed-Use Development',
      location: 'Pretoria',
      year: '2022',
      type: 'Mixed-Use',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="text-xl font-light tracking-wide text-gray-900">
              SDA
            </Link>
            <div className="flex gap-12">
              <Link href="/work" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors duration-300">
                Work
              </Link>
              <Link href="/about" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors duration-300">
                About
              </Link>
              <Link href="/contact" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors duration-300">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Full-Screen Hero */}
      <section className="relative w-full h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center overflow-hidden">
        {/* Hero Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=900&fit=crop)',
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-8">
          <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
            Sullivan Design Architects
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-600 mb-12 leading-relaxed">
            Minimal. Purposeful. Enduring.
          </p>
          <p className="text-sm font-light text-gray-500 tracking-wide uppercase letter-spacing-1">
            Premium Architecture & Design
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-3">
            <p className="text-xs font-light text-gray-400 tracking-widest uppercase">Scroll</p>
            <div className="w-px h-8 bg-gradient-to-b from-gray-400 to-transparent" />
          </div>
        </div>
      </section>

      {/* Project Grid Section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8">
          {/* Section Title */}
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Recent Work
            </h2>
            <div className="w-16 h-px bg-blue-900" />
          </div>

          {/* Project Grid - 2 columns with large images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                href={`/project/${project.id}`}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden bg-gray-100 aspect-square">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Overlay with Project Info */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

                  {/* Project Title & Meta - Reveal on Hover */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="text-2xl md:text-3xl font-light text-white mb-3 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm font-light text-gray-200 tracking-wide">
                      {project.location} • {project.year} • {project.type}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Philosophy Section */}
      <section className="bg-gray-50 py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-light text-gray-900 mb-8">
              Our Approach
            </h3>
            <p className="text-base font-light text-gray-600 leading-relaxed mb-6">
              We believe in architecture that speaks through simplicity and intention. Every design decision serves a purpose, every line has meaning, and every space is crafted to enhance human experience.
            </p>
            <p className="text-base font-light text-gray-600 leading-relaxed">
              Our work reflects a commitment to timeless design, sustainable practices, and collaborative excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Ready to Create Something Meaningful?
          </h2>
          <p className="text-lg font-light text-gray-600 mb-12 max-w-2xl mx-auto">
            Let's discuss your vision and bring your architectural dreams to life.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-900 text-white px-12 py-4 font-light hover:bg-blue-800 transition-colors duration-300 tracking-wide"
          >
            Start a Project
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-12">
            {/* Brand */}
            <div>
              <h4 className="text-sm font-light text-gray-900 mb-2 tracking-wide">
                Sullivan Design Architects
              </h4>
              <p className="text-xs font-light text-gray-500">
                Premium architecture design studio
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="text-sm font-light text-gray-900 mb-6 tracking-wide">
                Navigation
              </h4>
              <div className="space-y-3">
                <Link href="/work" className="block text-xs font-light text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  Work
                </Link>
                <Link href="/about" className="block text-xs font-light text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  About
                </Link>
                <Link href="/contact" className="block text-xs font-light text-gray-600 hover:text-gray-900 transition-colors duration-300">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-light text-gray-900 mb-6 tracking-wide">
                Contact
              </h4>
              <p className="text-xs font-light text-gray-600 mb-2">
                +27 (0)82 772 8753
              </p>
              <p className="text-xs font-light text-gray-600">
                preston@sdarchstudio.co.za
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 pt-8">
            <p className="text-xs font-light text-gray-400 text-center">
              © 2024 Sullivan Design Architects. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
