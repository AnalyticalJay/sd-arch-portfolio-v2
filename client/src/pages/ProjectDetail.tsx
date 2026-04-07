import { Link, useParams } from 'wouter';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const projectsData: Record<string, any> = {
    '1': {
      title: 'Residential Estate',
      location: 'Cape Town',
      year: '2024',
      type: 'Residential',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/hero-residential-nAK9GkTR9Z6LadT99QejuV.webp',
      description: 'A contemporary residential estate designed with a focus on privacy, natural light, and seamless indoor-outdoor living. The project features clean lines, premium materials, and meticulous attention to spatial flow.',
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/hero-residential-nAK9GkTR9Z6LadT99QejuV.webp',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/interior-space-gmbZzPc8SiVkhjU4tPiRmW.webp',
      ],
    },
    '2': {
      title: 'Commercial Tower',
      location: 'Johannesburg',
      year: '2023',
      type: 'Commercial',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-commercial-ke8b7zDgKiJv3vkv7wVSTy.webp',
      description: 'A modern commercial tower designed for flexibility and efficiency. The design maximizes natural light and ventilation while creating dynamic workspaces that foster collaboration and innovation.',
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-commercial-ke8b7zDgKiJv3vkv7wVSTy.webp',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/interior-space-gmbZzPc8SiVkhjU4tPiRmW.webp',
      ],
    },
    '3': {
      title: 'Healthcare Facility',
      location: 'Durban',
      year: '2023',
      type: 'Healthcare',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-healthcare-2Li5hp4tPmpfcmqYNnp9kC.webp',
      description: 'A healing-focused healthcare facility designed to support patient recovery and staff efficiency. The design emphasizes natural light, wayfinding clarity, and spaces that promote wellness.',
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-healthcare-2Li5hp4tPmpfcmqYNnp9kC.webp',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/interior-space-gmbZzPc8SiVkhjU4tPiRmW.webp',
      ],
    },
    '4': {
      title: 'Mixed-Use Development',
      location: 'Pretoria',
      year: '2022',
      type: 'Mixed-Use',
      heroImage: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-mixed-use-U5MNooCXGFmCyFiTThekuJ.webp',
      description: 'An integrated mixed-use development combining residential, retail, and office spaces. The design creates vibrant street-level activation while providing comfortable residential environments above.',
      gallery: [
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/project-mixed-use-U5MNooCXGFmCyFiTThekuJ.webp',
        'https://d2xsxph8kpxj0f.cloudfront.net/310519663347374433/3rF6KoUcpVw7sfPdws5W3r/interior-space-gmbZzPc8SiVkhjU4tPiRmW.webp',
      ],
    },
  };

  const project = projectsData[id || '1'];

  if (!project) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="container">
            <div className="flex items-center justify-between py-4">
              <Link href="/">
                <a className="text-2xl font-light tracking-wider text-gray-900">SDA</a>
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
                <a className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">Contact</a>
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
            <p className="text-lg font-light text-gray-700 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="space-y-8 md:space-y-12">
            {project.gallery.map((image: string, index: number) => (
              <div key={index} className="w-full overflow-hidden">
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to other projects */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/work">
              <a className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">← Back to Work</a>
            </Link>
            <Link href="/contact">
              <a className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">Start a Project →</a>
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
