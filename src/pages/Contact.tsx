import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <div className="page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="page-hero-content">
          <h1 className="page-title animate-fade-in">Get In Touch</h1>
          <p className="page-subtitle animate-slide-up">
            Ready to start your project? We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Information</h2>
            <p className="section-subtitle">
              Multiple ways to reach us. Choose what works best for you.
            </p>
          </div>
          
          <div className="grid grid-3">
            <div className="feature-card animate-scale-in hover-lift">
              <Mail className="feature-icon" />
              <h3 className="feature-title">Email Us</h3>
              <p className="feature-description">
                Send us an email and we'll respond within 24 hours.
              </p>
              <a 
                href="mailto:hello@modernweb.com" 
                className="btn-outline"
                style={{ marginTop: '1rem' }}
              >
                hello@modernweb.com
              </a>
            </div>
            
            <div className="feature-card animate-scale-in hover-lift">
              <Phone className="feature-icon" />
              <h3 className="feature-title">Call Us</h3>
              <p className="feature-description">
                Speak directly with our team during business hours.
              </p>
              <a 
                href="tel:+15551234567" 
                className="btn-outline"
                style={{ marginTop: '1rem' }}
              >
                +254 (704) 805-860
              </a>
            </div>
            
            <div className="feature-card animate-scale-in hover-lift">
              <MapPin className="feature-icon" />
              <h3 className="feature-title">Visit Us</h3>
              <p className="feature-description">
                Come visit our office in the heart of San Francisco.
              </p>
              <div 
                className="btn-outline"
                style={{ marginTop: '1rem', cursor: 'default' }}
              >
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="content-section bg-gray">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Send Us a Message</h2>
            <p className="section-subtitle">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="contact-form animate-fade-in">
            {isSubmitted ? (
              <div className="card\" style={{ textAlign: 'center', padding: '3rem' }}>
                <CheckCircle size={64} style={{ color: '#16a34a', margin: '0 auto 1rem' }} />
                <h3 className="heading-3" style={{ color: '#16a34a', marginBottom: '1rem' }}>
                  Message Sent Successfully!
                </h3>
                <p className="body-text">
                  Thank you for reaching out. We'll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What's this about?"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your project or inquiry..."
                    rows={6}
                  />
                </div>
                
                <button type="submit" className="form-submit">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="content-section bg-white">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-2">
            <div className="card animate-fade-in">
              <h3 className="heading-3 mb-4">How long does a typical project take?</h3>
              <p className="body-text">
                Project timelines vary depending on scope and complexity. A simple
                website typically takes 4-6 weeks, while complex web applications
                can take 3-6 months. We'll provide a detailed timeline during consultation.
              </p>
            </div>
            
            <div className="card animate-fade-in">
              <h3 className="heading-3 mb-4">What's included in your maintenance service?</h3>
              <p className="body-text">
                Our maintenance service includes security updates, performance
                monitoring, content updates, bug fixes, and technical support.
                We offer different maintenance packages to suit your needs.
              </p>
            </div>
            
            <div className="card animate-fade-in">
              <h3 className="heading-3 mb-4">Do you work with small businesses?</h3>
              <p className="body-text">
                Absolutely! We work with businesses of all sizes, from startups
                to enterprise companies. We have flexible packages and solutions
                designed to fit different budgets and requirements.
              </p>
            </div>
            
            <div className="card animate-fade-in">
              <h3 className="heading-3 mb-4">What technologies do you use?</h3>
              <p className="body-text">
                We use modern, proven technologies including React, Next.js, Node.js,
                TypeScript, and various databases. We choose the best technology
                stack based on your specific project requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Let's Build Something Amazing</h2>
          <p className="cta-subtitle">
            Ready to transform your digital presence? Our team is here to help
            you achieve your goals with exceptional web solutions.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:hello@modernweb.com" className="cta-button">
              Start Your Project
            </a>
            <a href="tel:+15551234567" className="btn-outline-white">
              Schedule a Call
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
