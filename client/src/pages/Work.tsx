import { useState } from 'react';
import { Link } from 'wouter';

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Truworths Plain Park Head Office',
      location: 'Cape Town',
      year: '2021',
      type: 'Commercial',
      category: 'Commercial',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/truworths-plain-park_9ba4f43a.png',
      height: 'tall'
    },
    {
      id: 2,
      title: 'Parklands Mixed Use Development',
      location: 'Cape Town',
      year: '2021',
      type: 'Residential',
      category: 'Residential',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parklands-mixed-use_653a2380.png',
      height: 'medium'
    },
    {
      id: 3,
      title: 'Cape Town International Airport Domestic Terminal',
      location: 'Cape Town',
      year: '2020',
      type: 'Commercial',
      category: 'Commercial',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/airport-domestic-terminal_f9ad9230.png',
      height: 'tall'
    },
    {
      id: 4,
      title: '7 on Bantry & Avant Multi Storey Apartments',
      location: 'Cape Town',
      year: '2022',
      type: 'Residential',
      category: 'Residential',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/bantry-apartments_3621efbe.png',
      height: 'medium'
    },
    {
      id: 5,
      title: 'Parow Social Housing',
      location: 'Cape Town',
      year: '2023',
      type: 'Residential',
      category: 'Residential',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parow-social-housing_3a8a1cf6.png',
      height: 'medium'
    },
  ];

  const categories = ['All', 'Commercial', 'Residential'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-light tracking-wider text-gray-900 hover:text-blue-900 transition-colors">
              SDA
            </Link>
            <div className="flex gap-8">
              <Link href="/work" className="text-sm font-light text-blue-900 hover:text-blue-900 transition-colors border-b-2 border-blue-900 pb-1">
                Work
              </Link>
              <Link href="/about" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors pb-1">
                About
              </Link>
              <Link href="/services" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors pb-1">
                Services
              </Link>
              <Link href="/contact" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors pb-1">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 leading-tight">Our Work</h1>
            <p className="text-lg font-light text-gray-600">
              A curated selection of projects spanning residential, commercial, and mixed-use developments. Each project represents our commitment to thoughtful design, technical excellence, and lasting impact.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="container">
          <div className="flex gap-8 justify-start md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`text-sm font-light tracking-wide transition-all duration-300 pb-2 border-b-2 ${
                  activeFilter === category
                    ? 'text-gray-900 border-blue-900'
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Masonry Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="work-masonry-grid">
            {filteredProjects.map((project) => (
              <Link 
                key={project.id} 
                href={`/project/${project.id}`} 
                className={`work-project-card group ${project.height === 'tall' ? 'tall' : ''}`}
              >
                <div className="work-project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="work-project-image"
                  />
                  <div className="work-project-overlay"></div>
                </div>
                <div className="work-project-info">
                  <h3 className="work-project-title">{project.title}</h3>
                  <p className="work-project-location">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
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
          <div className="border-t border-gray-100 pt-8 pb-8 text-center">
            <p className="text-xs text-gray-500 font-light">&copy; 2024 Sullivan Design Architects. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
