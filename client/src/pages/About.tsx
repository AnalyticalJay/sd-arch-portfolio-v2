import { Link } from 'wouter';

export default function About() {
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
              <Link href="/about" className="text-sm font-light text-blue-900 hover:text-blue-900 transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-sm font-light text-gray-900 hover:text-blue-900 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <section className="section-spacing bg-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-12">About</h1>
        </div>
      </section>

      {/* About Content */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-light text-gray-900 mb-8">Welcome.</h2>
            
            <div className="space-y-6 text-base font-light text-gray-700 leading-relaxed">
              <p>
                I believe architecture is more than buildings—it's about shaping how people live, move, and connect within a space. Every project is an opportunity to balance clarity, function, and experience, creating environments that feel considered, purposeful, and enduring.
              </p>

              <p>
                Over the past nine years, I've worked across a diverse range of projects—from high-end residential homes to large-scale healthcare and mixed-use developments. This breadth has shaped a design approach that is both pragmatic and adaptable—grounded in technical precision while remaining open to creative exploration.
              </p>

              <p>
                My work is driven by collaboration. Whether leading multidisciplinary teams or working closely with clients and consultants, I focus on translating complex ideas into clear, buildable solutions. From early concept through to construction, I aim to deliver architecture that not only meets expectations but elevates them.
              </p>

              <p>
                With a strong foundation in BIM and technical delivery, I approach design with a deep understanding of how buildings come together—ensuring that ideas are not only compelling, but executable.
              </p>

              <p>
                At its core, my work is about creating spaces that work—functionally, visually, and humanly—while standing the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-spacing bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-light text-gray-900 mb-12">Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Design Services */}
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-6">Design</h3>
              <ul className="space-y-3">
                <li className="text-sm font-light text-gray-600">New Building Design</li>
                <li className="text-sm font-light text-gray-600">Additions & Alterations</li>
                <li className="text-sm font-light text-gray-600">Concept Design</li>
                <li className="text-sm font-light text-gray-600">Design Development</li>
                <li className="text-sm font-light text-gray-600">New Developments</li>
              </ul>
            </div>

            {/* Architectural Services */}
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-6">Architectural</h3>
              <ul className="space-y-3">
                <li className="text-sm font-light text-gray-600">Municipal Submission</li>
                <li className="text-sm font-light text-gray-600">As-built Drawings</li>
                <li className="text-sm font-light text-gray-600">Regulation Plans</li>
                <li className="text-sm font-light text-gray-600">Stage 1: Inception</li>
                <li className="text-sm font-light text-gray-600">Stage 2: Concept & Viability</li>
                <li className="text-sm font-light text-gray-600">Stage 3: Design Development</li>
                <li className="text-sm font-light text-gray-600">Stage 4: Documentation & Procurement</li>
                <li className="text-sm font-light text-gray-600">Stage 5: Construction Contract Administration</li>
                <li className="text-sm font-light text-gray-600">Stage 6: Close-out</li>
              </ul>
            </div>

            {/* Visual Services */}
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-6">Visual</h3>
              <ul className="space-y-3">
                <li className="text-sm font-light text-gray-600">3D Revit Models</li>
                <li className="text-sm font-light text-gray-600">3D Rendering & Visualisation</li>
                <li className="text-sm font-light text-gray-600">3D Walkthrough Animation</li>
                <li className="text-sm font-light text-gray-600">Graphic Design & Presentation Layouts</li>
                <li className="text-sm font-light text-gray-600">Model Building</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">Ready to collaborate?</h2>
            <p className="text-base text-gray-600 font-light mb-8">
              Let's discuss your project and how we can bring your vision to life.
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
