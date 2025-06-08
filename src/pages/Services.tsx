import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Palette, Smartphone, Search, Shield, Zap, ArrowRight, Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title animate-fade-in">Our Services</h1>
          <p className="page-subtitle animate-slide-up">
            Comprehensive digital solutions to elevate your business
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">
              From concept to launch, we provide end-to-end digital services
              that help your business thrive in the digital age.
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="service-card animate-scale-in">
              <h3 className="service-title">
                <Code size={24} /> Web Development
              </h3>
              <p className="service-description">
                Custom web applications built with modern technologies,
                optimized for performance, security, and scalability.
              </p>
              <ul className="service-features">
                <li>React & Next.js Development</li>
                <li>Full-Stack Solutions</li>
                <li>API Integration</li>
                <li>Database Design</li>
                <li>Performance Optimization</li>
              </ul>
            </div>
            
            <div className="service-card animate-scale-in">
              <h3 className="service-title">
                <Palette size={24} /> UI/UX Design
              </h3>
              <p className="service-description">
                Beautiful, intuitive designs that provide exceptional user
                experiences and drive engagement and conversions.
              </p>
              <ul className="service-features">
                <li>User Interface Design</li>
                <li>User Experience Research</li>
                <li>Wireframing & Prototyping</li>
                <li>Brand Identity</li>
                <li>Design Systems</li>
              </ul>
            </div>
            
            <div className="service-card animate-scale-in">
              <h3 className="service-title">
                <Smartphone size={24} /> Mobile Development
              </h3>
              <p className="service-description">
                Native and cross-platform mobile apps that provide seamless
                experiences across all devices and platforms.
              </p>
              <ul className="service-features">
                <li>iOS & Android Apps</li>
                <li>React Native Development</li>
                <li>Progressive Web Apps</li>
                <li>App Store Optimization</li>
                <li>Mobile-First Design</li>
              </ul>
            </div>
            
            <div className="service-card animate-scale-in">
              <h3 className="service-title">
                <Search size={24} /> SEO & Marketing
              </h3>
              <p className="service-description">
                Strategic digital marketing and SEO services to increase
                your online visibility and drive qualified traffic.
              </p>
              <ul className="service-features">
                <li>Search Engine Optimization</li>
                <li>Content Marketing</li>
                <li>Social Media Strategy</li>
                <li>Pay-Per-Click Advertising</li>
                <li>Analytics & Reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="content-section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Process</h2>
            <p className="section-subtitle">
              A proven methodology that ensures successful project delivery
              and exceptional results every time.
            </p>
          </div>
          
          <div className="grid grid-4">
            <div className="feature-card animate-fade-in">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #1e3a8a, #3b82f6)' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>1</span>
              </div>
              <h3 className="feature-title">Discovery</h3>
              <p className="feature-description">
                We dive deep into understanding your business goals,
                target audience, and project requirements.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #0d9488, #14b8a6)' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>2</span>
              </div>
              <h3 className="feature-title">Strategy</h3>
              <p className="feature-description">
                We develop a comprehensive strategy and roadmap
                tailored to your specific needs and objectives.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #ea580c, #f97316)' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>3</span>
              </div>
              <h3 className="feature-title">Execution</h3>
              <p className="feature-description">
                Our expert team brings your vision to life with
                precision, creativity, and attention to detail.
              </p>
            </div>
            
            <div className="feature-card animate-fade-in">
              <div className="feature-icon" style={{ background: 'linear-gradient(135deg, #16a34a, #22c55e)' }}>
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem' }}>4</span>
              </div>
              <h3 className="feature-title">Launch</h3>
              <p className="feature-description">
                We ensure a smooth launch and provide ongoing
                support to maximize your project's success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="two-column">
            <div className="column-content animate-slide-up">
              <h2 className="column-title">Why Choose Our Services?</h2>
              <p className="column-text">
                We combine technical expertise with creative vision to deliver
                solutions that not only meet your requirements but exceed
                your expectations and drive real business results.
              </p>
              <ul className="column-list">
                <li>Experienced team of specialists</li>
                <li>Proven track record of success</li>
                <li>Transparent communication</li>
                <li>Competitive pricing</li>
                <li>Ongoing support and maintenance</li>
                <li>Latest technologies and best practices</li>
              </ul>
              <Link to="/contact" className="btn-primary">
                Discuss Your Project <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="column-image animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Development team at work"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="content-section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Additional Services</h2>
            <p className="section-subtitle">
              Comprehensive support to ensure your digital success
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="feature-card animate-scale-in">
              <Shield className="feature-icon" />
              <h3 className="feature-title">Security Audits</h3>
              <p className="feature-description">
                Comprehensive security assessments to protect your digital
                assets and ensure compliance with industry standards.
              </p>
            </div>
            
            <div className="feature-card animate-scale-in">
              <Zap className="feature-icon" />
              <h3 className="feature-title">Performance Optimization</h3>
              <p className="feature-description">
                Speed optimization and performance tuning to ensure
                your website loads fast and ranks well in search engines.
              </p>
            </div>
            
            <div className="feature-card animate-scale-in">
              <Check className="feature-icon" />
              <h3 className="feature-title">Maintenance & Support</h3>
              <p className="feature-description">
                Ongoing maintenance, updates, and technical support
                to keep your digital presence running smoothly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Get Started?</h2>
          <p className="cta-subtitle">
            Let's discuss your project and explore how we can help
            bring your vision to life with our expert services.
          </p>
          <Link to="/contact" className="cta-button">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;