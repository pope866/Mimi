import React from 'react';
import { Users, Award, Target, Heart, Code, Palette, Lightbulb, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title animate-fade-in">About ModernWeb</h1>
          <p className="page-subtitle animate-slide-up">
            Passionate creators building digital experiences that matter
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="two-column">
            <div className="column-content animate-slide-up">
              <h2 className="column-title">Our Story</h2>
              <p className="column-text">
                Founded in 2020, ModernWeb began as a small team of passionate
                designers and developers who believed that great web experiences
                could transform businesses and connect people in meaningful ways.
              </p>
              <p className="column-text">
                Today, we've grown into a full-service digital agency that combines
                creative vision with technical expertise to deliver exceptional
                results for our clients across various industries.
              </p>
              <ul className="column-list">
                <li>4+ years of industry experience</li>
                <li>500+ successful projects delivered</li>
                <li>50+ talented team members</li>
                <li>98% client satisfaction rate</li>
              </ul>
            </div>
            
            <div className="column-image animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team working together"
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="content-section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              These principles guide everything we do and shape how we work
              with our clients and each other.
            </p>
          </div>
          
          <div className="grid grid-4">
            <div className="feature-card animate-scale-in">
              <Heart className="feature-icon" />
              <h3 className="feature-title">Passion</h3>
              <p className="feature-description">
                We love what we do and it shows in every project we undertake.
                Our enthusiasm drives us to exceed expectations.
              </p>
            </div>
            
            <div className="feature-card animate-scale-in">
              <Target className="feature-icon" />
              <h3 className="feature-title">Excellence</h3>
              <p className="feature-description">
                We strive for perfection in every detail, ensuring quality
                and precision in all our deliverables.
              </p>
            </div>
            
            <div className="feature-card animate-scale-in">
              <Lightbulb className="feature-icon" />
              <h3 className="feature-title">Innovation</h3>
              <p className="feature-description">
                We embrace new technologies and creative solutions to stay
                ahead of the curve and deliver cutting-edge results.
              </p>
            </div>
            
            <div className="feature-card animate-scale-in">
              <Users className="feature-icon" />
              <h3 className="feature-title">Collaboration</h3>
              <p className="feature-description">
                We work closely with our clients as partners, ensuring
                transparent communication and shared success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              The talented individuals behind our success, each bringing
              unique skills and perspectives to every project.
            </p>
          </div>
          
          <div className="team-grid">
            <div className="team-card animate-fade-in">
              <div className="team-image">
                <Code className="team-avatar" />
              </div>
              <h3 className="team-name">Alex Johnson</h3>
              <p className="team-role">Lead Developer</p>
              <p className="team-bio">
                Full-stack developer with 8+ years of experience in modern
                web technologies and system architecture.
              </p>
            </div>
            
            <div className="team-card animate-fade-in">
              <div className="team-image">
                <Palette className="team-avatar" />
              </div>
              <h3 className="team-name">Maria Garcia</h3>
              <p className="team-role">Creative Director</p>
              <p className="team-bio">
                Award-winning designer specializing in user experience
                and brand identity with a passion for innovation.
              </p>
            </div>
            
            <div className="team-card animate-fade-in">
              <div className="team-image">
                <Rocket className="team-avatar" />
              </div>
              <h3 className="team-name">David Chen</h3>
              <p className="team-role">Project Manager</p>
              <p className="team-bio">
                Experienced project manager ensuring smooth delivery
                and excellent client relationships across all projects.
              </p>
            </div>
            
            <div className="team-card animate-fade-in">
              <div className="team-image">
                <Award className="team-avatar" />
              </div>
              <h3 className="team-name">Emily Wilson</h3>
              <p className="team-role">UX Researcher</p>
              <p className="team-bio">
                User experience expert focused on creating intuitive
                and accessible digital experiences for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="content-section bg-gray">
        <div className="container">
          <div className="two-column">
            <div className="column-image animate-slide-up">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Mission and vision"
                className="img-responsive"
              />
            </div>
            
            <div className="column-content animate-slide-up">
              <h2 className="column-title">Our Mission & Vision</h2>
              <p className="column-text">
                <strong>Mission:</strong> To empower businesses with exceptional
                digital experiences that drive growth, engagement, and success
                in the modern digital landscape.
              </p>
              <p className="column-text">
                <strong>Vision:</strong> To be the leading digital agency
                that transforms how businesses connect with their audiences
                through innovative web solutions and thoughtful design.
              </p>
              <ul className="column-list">
                <li>Client success is our primary goal</li>
                <li>Innovation drives our creative process</li>
                <li>Quality is never compromised</li>
                <li>Long-term partnerships matter most</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Join Our Journey</h2>
          <p className="cta-subtitle">
            Ready to work with a team that's passionate about your success?
            Let's create something amazing together.
          </p>
          <a href="/contact" className="cta-button">
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;