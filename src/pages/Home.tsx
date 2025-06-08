import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Zap, Shield, Globe } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            Build Amazing Web Experiences
          </h1>
          <p className="hero-subtitle">
            We create stunning, modern websites that drive results and engage your audience
            with cutting-edge technology and beautiful design.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn btn-white">
              Get Started <ArrowRight size={20} />
            </Link>
            <Link to="/services" className="btn btn-outline-white">
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats animate-slide-up">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="content-section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">
              We combine creativity with technology to deliver exceptional web solutions
              that help your business grow and succeed in the digital world.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="feature-card animate-scale-in">
              <Zap className="feature-icon" />
              <h3 className="feature-title">Lightning Fast</h3>
              <p className="feature-description">
                Optimized performance and speed to ensure your website loads instantly
                and provides the best user experience possible.
              </p>
            </div>
            
            <div className="feature-card animate-scale-in">
              <Shield className="feature-icon" />
              <h3 className="feature-title">Secure & Reliable</h3>
              <p className="feature-description">
                Built with security best practices and reliable hosting to keep
                your website safe and always accessible to your users.
              </p>
            </div>
            
            <div className="feature-card animate-scale-in">
              <Globe className="feature-icon" />
              <h3 className="feature-title">Responsive Design</h3>
              <p className="feature-description">
                Mobile-first approach ensures your website looks perfect and
                functions flawlessly on all devices and screen sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="two-column">
            <div className="column-content animate-slide-up">
              <h2 className="column-title">
                Crafting Digital Excellence Since 2020
              </h2>
              <p className="column-text">
                We're a passionate team of designers and developers who believe
                in the power of great web experiences. Our mission is to help
                businesses succeed online through innovative design and technology.
              </p>
              <ul className="column-list">
                <li>Award-winning design team</li>
                <li>Full-stack development expertise</li>
                <li>Agile project management</li>
                <li>Ongoing support and maintenance</li>
              </ul>
              <Link to="/about" className="btn-primary">
                Learn More About Us <ArrowRight size={18} />
              </Link>
            </div>
            
            <div className="column-image animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle">
              Don't just take our word for it. Here's what our satisfied clients
              have to say about working with us.
            </p>
          </div>
          
          <div className="testimonials-grid">
            <div className="testimonial-card animate-fade-in">
              <p className="testimonial-quote">
                "Working with ModernWeb was an absolute pleasure. They delivered
                a stunning website that exceeded our expectations and helped
                increase our online conversions by 150%."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">JD</div>
                <div className="author-info">
                  <div className="author-name">Jessica Davis</div>
                  <div className="author-title">CEO, TechStart Inc.</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate-fade-in">
              <p className="testimonial-quote">
                "The team's attention to detail and professional approach
                made our project smooth and successful. Our new website
                perfectly represents our brand and values."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">MR</div>
                <div className="author-info">
                  <div className="author-name">Michael Rodriguez</div>
                  <div className="author-title">Marketing Director, GrowthCo</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial-card animate-fade-in">
              <p className="testimonial-quote">
                "Outstanding work! They transformed our outdated website into
                a modern, user-friendly platform that our customers love.
                Highly recommend their services."
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">SL</div>
                <div className="author-info">
                  <div className="author-name">Sarah Liu</div>
                  <div className="author-title">Founder, Creative Studio</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-subtitle">
            Let's work together to create something amazing that drives your business forward.
          </p>
          <Link to="/contact" className="cta-button">
            Get In Touch Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;