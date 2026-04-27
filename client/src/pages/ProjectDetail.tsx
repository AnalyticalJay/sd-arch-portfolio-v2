import { Link, useParams } from 'wouter';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const projectsData: Record<string, any> = {
    '1': {
      title: 'Container House',
      location: 'Pringle Bay',
      year: '2024',
      type: 'Residential',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-pringle-bay_placeholder.png',
      description: 'Container House is a compact, site-responsive dwelling embedded within the sloping terrain of Pringle Bay. Constructed from repurposed steel containers, the project adopts a strategy of accommodation rather than imposition, aligning its form with the natural topography. Elevated structural elements minimize ground contact, addressing the site\'s sensitive, marsh-like soil conditions.',
      fullDescription: 'Container House Pringle Bay represents a paradigm of sustainable, contextual design. The project demonstrates how industrial materials can be transformed into refined residential spaces. The spatial organization is structured around a central courtyard, which functions as both the experiential and environmental core of the residence. Existing vegetation is intentionally retained within this space, enabling the indigenous landscape to extend into the architectural domain and mediate the boundary between interior and exterior conditions. A restrained material palette—comprising timber, steel, glass, and stone-filled gabions—supports this conceptual framework. Gabion walls provide both structural stability and visual grounding, while timber elements introduce warmth, tactility, and a human-scaled counterpoint to the industrial qualities of the containers.',
      scope: ['Residential Design', 'Sustainable Design', 'Landscape Integration', 'Material Innovation', 'Site-Responsive Architecture'],
      budget: 'R 4.5 Million',
      team: ['Lead Architect: Preston Sullivan', 'Structural Engineer: Specialist in Container Architecture', 'Landscape Architect: Environmental Specialist', 'Sustainability Consultant: Green Building Expert'],
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-pringle-bay_placeholder.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-pringle-bay_placeholder.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-pringle-bay_placeholder.png',
      ],
      drawings: [
        {
          title: 'Site Plan',
          description: 'Overall site layout showing container placement, courtyard orientation, and landscape integration',
          image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-site-plan_placeholder.png',
          type: 'Plan'
        },
        {
          title: 'Ground Floor Plan',
          description: 'Living areas, kitchen, courtyard access, and spatial flow of the main level',
          image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-ground-floor_placeholder.png',
          type: 'Floor Plan'
        },
        {
          title: 'Upper Floor Plan',
          description: 'Bedroom suites, bathrooms, and mezzanine spaces with views to courtyard',
          image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-upper-floor_placeholder.png',
          type: 'Floor Plan'
        },
        {
          title: 'North Elevation',
          description: 'Primary facade showing container stacking, timber screens, and glazing strategy',
          image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-north-elevation_placeholder.png',
          type: 'Elevation'
        },
        {
          title: 'Section A-A',
          description: 'Vertical section showing courtyard integration, level changes, and spatial relationships',
          image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-section-aa_placeholder.png',
          type: 'Section'
        },
        {
          title: 'Material Detail',
          description: 'Construction details showing container modification, gabion walls, and timber integration',
          image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/container-house-detail_placeholder.png',
          type: 'Detail'
        }
      ],
      testimonials: [
        {
          name: 'Property Owner',
          title: 'Client, Container House Project',
          quote: 'Sullivan Design Architects transformed our vision into reality. The innovative use of containers combined with sensitive site integration created a truly unique home. The attention to environmental detail and material craftsmanship is exceptional.',
          company: 'Container House Pringle Bay'
        },
        {
          name: 'Local Community Representative',
          title: 'Environmental Advocate',
          quote: 'This project demonstrates how contemporary architecture can respect and enhance the natural environment. The design seamlessly integrates with Pringle Bay\'s landscape while providing a sophisticated living space.',
          company: 'Pringle Bay Community'
        }
      ]
    },
    '2': {
      title: 'Parklands Mixed Use Development',
      location: 'Cape Town',
      year: '2021',
      type: 'Residential',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parklands-mixed-use_653a2380.png',
      description: 'A vibrant mixed-use development that seamlessly integrates residential, retail, and recreational spaces. The project creates a complete urban ecosystem with 250 residential units, premium retail outlets, and landscaped public spaces. The design prioritizes walkability, community engagement, and sustainable urban living.',
      fullDescription: 'Parklands Mixed Use Development is a landmark project that redefines urban living in Cape Town. Spanning 8 hectares, the development features carefully planned neighborhoods with diverse housing options, from luxury apartments to family homes. The retail component includes boutique shops and restaurants, while the recreational areas provide parks, plazas, and gathering spaces that foster community interaction.',
      scope: ['Master Planning', 'Residential Design', 'Retail Design', 'Landscape Architecture', 'Sustainability Consulting'],
      budget: 'R 1.2 Billion',
      team: ['Lead Architect: Preston Sullivan', 'Urban Planner: Arup', 'Landscape Architect: Delft Landscape', 'Sustainability: ICLEI'],
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parklands-mixed-use_653a2380.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parklands-mixed-use_653a2380.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parklands-mixed-use_653a2380.png',
      ],
      testimonials: [
        {
          name: 'Michael Chen',
          title: 'Development Director, Paragon Properties',
          quote: 'The architectural vision for Parklands has set a new standard for mixed-use developments in South Africa. The design successfully balances commercial viability with community value.',
          company: 'Paragon Properties'
        },
        {
          name: 'Emma Williams',
          title: 'Resident, Parklands',
          quote: 'Living in Parklands is an incredible experience. The design creates a real sense of community while maintaining privacy and comfort.',
          company: 'Parklands Community'
        }
      ]
    },
    '3': {
      title: 'Cape Town International Airport Domestic Terminal',
      location: 'Cape Town',
      year: '2020',
      type: 'Commercial',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/airport-domestic-terminal_f9ad9230.png',
      description: 'A state-of-the-art domestic terminal designed to enhance passenger experience and operational efficiency. The 25,000 sqm facility features modern check-in facilities, spacious departure lounges, and retail areas. The design incorporates natural light, wayfinding clarity, and sustainable building systems.',
      fullDescription: 'The Cape Town International Airport Domestic Terminal represents a significant upgrade to the airport\'s infrastructure. The design prioritizes passenger comfort with intuitive wayfinding, ample natural light, and contemporary retail and dining options. The terminal has been designed to handle 8 million passengers annually while maintaining operational efficiency and architectural elegance.',
      scope: ['Terminal Design', 'Passenger Experience Design', 'Retail Planning', 'Wayfinding Design', 'Sustainability'],
      budget: 'R 800 Million',
      team: ['Lead Architect: Preston Sullivan', 'Terminal Specialist: Arup', 'Passenger Experience: Hassell', 'Sustainability: Aurecon'],
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/airport-domestic-terminal_f9ad9230.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/airport-domestic-terminal_f9ad9230.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/airport-domestic-terminal_f9ad9230.png',
      ],
      testimonials: [
        {
          name: 'Dr. Ramesh Patel',
          title: 'CEO, Cape Town International Airport',
          quote: 'The new domestic terminal has transformed the passenger experience. The design is both beautiful and highly functional, setting a benchmark for African airports.',
          company: 'Cape Town International Airport'
        },
        {
          name: 'Lisa Anderson',
          title: 'Passenger Services Manager',
          quote: 'Passengers consistently praise the terminal\'s design and ease of navigation. It\'s a point of pride for our team.',
          company: 'Cape Town International Airport'
        }
      ]
    },
    '4': {
      title: '7 on Bantry & Avant Multi Storey Apartments',
      location: 'Cape Town',
      year: '2022',
      type: 'Residential',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/bantry-apartments_3621efbe.png',
      description: 'A luxury residential development featuring 120 contemporary apartments across 12 stories. The project showcases premium finishes, expansive balconies, and panoramic views. Each unit is designed to maximize natural light and provide seamless indoor-outdoor living experiences.',
      fullDescription: 'The 7 on Bantry & Avant development represents the pinnacle of residential luxury in Cape Town. The twin-tower design creates visual interest while optimizing views and natural ventilation. The project includes extensive amenities: rooftop gardens, infinity pools, fitness centers, and concierge services. The architectural language combines minimalist aesthetics with premium material selections.',
      scope: ['Residential Design', 'Interior Design', 'Landscape Design', 'Amenities Design', 'Sustainability'],
      budget: 'R 450 Million',
      team: ['Lead Architect: Preston Sullivan', 'Design Team: 8 Architects', 'Structural Engineer: Arup', 'Interior Designer: Okha Interiors'],
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/bantry-apartments_3621efbe.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/bantry-apartments_3621efbe.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/bantry-apartments_3621efbe.png',
      ],
      testimonials: [
        {
          name: 'Victoria Rothschild',
          title: 'Resident, 7 on Bantry',
          quote: 'The apartments are absolutely stunning. Every detail has been thoughtfully designed. It\'s more than just a place to live—it\'s a lifestyle.',
          company: 'Luxury Residents'
        },
        {
          name: 'James Mitchell',
          title: 'Property Manager',
          quote: 'The architectural design has made property management seamless. The building is a masterpiece of both form and function.',
          company: '7 on Bantry Management'
        }
      ]
    },
    '5': {
      title: 'Parow Social Housing',
      location: 'Cape Town',
      year: '2023',
      type: 'Residential',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parow-social-housing_3a8a1cf6.png',
      description: 'An innovative social housing project providing 200 affordable residential units. The design prioritizes community building, sustainable living, and dignified housing solutions. The project includes shared facilities, green spaces, and educational centers.',
      fullDescription: 'Parow Social Housing demonstrates our commitment to creating inclusive, sustainable communities. The project provides high-quality, affordable housing while fostering social cohesion. The design includes community centers, playgrounds, and green spaces that encourage interaction and wellbeing. Each unit is designed with efficiency and comfort in mind, proving that affordability doesn\'t compromise quality.',
      scope: ['Master Planning', 'Residential Design', 'Community Facilities', 'Landscape Design', 'Sustainability'],
      budget: 'R 180 Million',
      team: ['Lead Architect: Preston Sullivan', 'Social Housing Specialist: Ikhaya', 'Landscape Architect: Delft Landscape', 'Community Engagement: Isandla Institute'],
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parow-social-housing_3a8a1cf6.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parow-social-housing_3a8a1cf6.png',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/parow-social-housing_3a8a1cf6.png',
      ],
      testimonials: [
        {
          name: 'Nomsa Dlamini',
          title: 'Resident, Parow Social Housing',
          quote: 'This project has changed our lives. We have a safe, beautiful home and a strong community. The design shows that affordable housing can be dignified and inspiring.',
          company: 'Parow Community'
        },
        {
          name: 'Dr. Thabo Mthembu',
          title: 'Social Development Officer',
          quote: 'Sullivan Design Architects understood the social impact of design. This project is a model for how architecture can serve communities.',
          company: 'City of Cape Town'
        }
      ]
    }
  };

  const project = projectsData[id || '1'];

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              <Link href="/" className="text-2xl font-light tracking-wider text-gray-900 hover:text-blue-900 transition-colors">
                SDA
              </Link>
            </div>
          </div>
        </nav>
        <div className="container py-12">
          <p className="text-gray-600">Project not found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container">
          <div className="flex items-center justify-between py-4">
            <Link href="/" className="text-2xl font-light tracking-wider text-gray-900 hover:text-blue-900 transition-colors">
              SDA
            </Link>
            <div className="flex gap-8">
              <Link href="/work" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
                Work
              </Link>
              <Link href="/about" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <section className="w-full h-96 md:h-screen overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Project Info */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-4">{project.title}</h1>
            <p className="text-sm font-light text-gray-600 mb-8">
              {project.location} • {project.year} • {project.type}
            </p>
            <p className="text-lg font-light text-gray-700 leading-relaxed mb-8">
              {project.description}
            </p>
            <p className="text-base font-light text-gray-600 leading-relaxed">
              {project.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Project Details Grid */}
      <section className="section-spacing bg-gray-50 border-t border-gray-200">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">Project Scope</h3>
              <ul className="space-y-2">
                {project.scope.map((item: string, index: number) => (
                  <li key={index} className="text-sm font-light text-gray-600">{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">Budget</h3>
              <p className="text-sm font-light text-gray-600 mb-6">{project.budget}</p>
              <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">Team</h3>
              <ul className="space-y-2">
                {project.team.map((member: string, index: number) => (
                  <li key={index} className="text-sm font-light text-gray-600">{member}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-light text-gray-900 mb-4 uppercase tracking-wide">Duration</h3>
              <p className="text-sm font-light text-gray-600">2 years</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-spacing bg-white">
        <div className="container">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Project Gallery</h2>
          <div className="space-y-8 md:space-y-12">
            {project.gallery.map((image: string, index: number) => (
              <div 
                key={index} 
                className="w-full overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architectural Drawings */}
      {project.drawings && project.drawings.length > 0 && (
        <section className="section-spacing bg-white border-t border-gray-200">
          <div className="container">
            <h2 className="text-3xl font-light text-gray-900 mb-12">Architectural Drawings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {project.drawings.map((drawing: any, index: number) => (
                <div key={index} className="space-y-4">
                  <div className="bg-gray-100 overflow-hidden cursor-pointer group">
                    <img
                      src={drawing.image}
                      alt={drawing.title}
                      className="w-full h-auto object-cover group-hover:opacity-90 transition-opacity"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-light text-gray-500 uppercase tracking-wide">{drawing.type}</span>
                      <span className="w-1 h-1 bg-gray-300"></span>
                      <span className="text-xs font-light text-gray-500">Drawing {index + 1}</span>
                    </div>
                    <h3 className="text-lg font-light text-gray-900 mb-2">{drawing.title}</h3>
                    <p className="text-sm font-light text-gray-600">{drawing.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="section-spacing bg-gray-50 border-t border-gray-200">
        <div className="container">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {project.testimonials.map((testimonial: any, index: number) => (
              <div key={index} className="bg-white p-8 border border-gray-200">
                <p className="text-base font-light text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="text-sm font-light text-gray-900">{testimonial.name}</p>
                  <p className="text-xs font-light text-gray-600">{testimonial.title}</p>
                  <p className="text-xs font-light text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center">
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={() => setSelectedImageIndex((selectedImageIndex - 1 + project.gallery.length) % project.gallery.length)}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={40} />
          </button>

          <img
            src={project.gallery[selectedImageIndex]}
            alt="Gallery"
            className="max-w-4xl max-h-screen object-contain"
          />

          <button
            onClick={() => setSelectedImageIndex((selectedImageIndex + 1) % project.gallery.length)}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={40} />
          </button>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm font-light">
            {selectedImageIndex + 1} / {project.gallery.length}
          </div>
        </div>
      )}

      {/* Navigation to other projects */}
      <section className="section-spacing bg-white border-t border-gray-200">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/work" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
              ← Back to Work
            </Link>
            <Link href="/contact" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
              Start a Project →
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
