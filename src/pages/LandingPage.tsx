
// File: pages/LandingPage.tsx
import React from 'react';
import styles from './HeroSection.module.css';
import stylesCTA from './CallToAction.module.css';
import stylesMetrics from './SuccessMetrics.module.css';
import stylesFeatures from './Features.module.css'; 
import targetImg from '../assets/target-strategy.png';
import communityImg from '../assets/community.png';
import growthImg from '../assets/growth.png';
import checkIcon from '../assets/checkmark.png';








import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
       <section className={styles.heroSection}>
      <h1 className={styles.mainHeading}>
        Master Your Job Applications
      </h1>
      <h2 className={styles.gradientHeading}>
        Land Your Dream Job
      </h2>
      <p className={styles.description}>
        Transform your job search with our proven strategies, insider tips, and application
        tricks that help you stand out from the crowd and get hired faster.
      </p>
      <div className={styles.buttonGroup}>
  <Link to="/register">
    <button className={styles.primaryButton}>
      Start Your Success Journey
    </button>
  </Link>
  <Link to="/login">
    <button className={styles.secondaryButton}>
      Already Have an Account?
    </button>
  </Link>
</div>
  </section>

      {/* Features Section */}
       <section className={stylesFeatures.section}>
      <div className={stylesFeatures.container}>
        <div className={stylesFeatures.header}>
          <h2 className={stylesFeatures.title}>Why Choose JobTrick Pro?</h2>
          <p className={stylesFeatures.subtitle}>
            Our comprehensive platform combines industry secrets, personalized coaching, and proven strategies to maximize your job application success rate.
          </p>
        </div>

        <div className={stylesFeatures.grid}>
          {/* Feature 1 */}
          <div className={stylesFeatures.card}>
            <div className={stylesFeatures.iconWrapper}>
              <img src={targetImg} alt="Targeted Strategies" className={stylesFeatures.icon} />
            </div>
            <h3 className={stylesFeatures.cardTitle}>Targeted Strategies</h3>
            <p className={stylesFeatures.cardText}>
              Learn industry-specific application techniques that recruiters and hiring managers actually want to see in your applications.
            </p>
          </div>

          {/* Feature 2 */}
          <div className={stylesFeatures.card}>
            <div className={stylesFeatures.iconWrapper}>
              <img src={communityImg} alt="Expert Community" className={stylesFeatures.icon} />
            </div>
            <h3 className={stylesFeatures.cardTitle}>Expert Community</h3>
            <p className={stylesFeatures.cardText}>
              Connect with career coaches, successful professionals, and fellow job seekers who share insights and success stories.
            </p>
          </div>

          {/* Feature 3 */}
          <div className={stylesFeatures.card}>
            <div className={stylesFeatures.iconWrapper}>
              <img src={growthImg} alt="Proven Results" className={stylesFeatures.icon} />
            </div>
            <h3 className={stylesFeatures.cardTitle}>Proven Results</h3>
            <p className={stylesFeatures.cardText}>
              85% of our users receive interview invitations within 30 days. Join thousands who've transformed their careers.
            </p>
          </div>
        </div>
      </div>
    </section>





      {/* Success Metrics Section */}
      <section className={stylesMetrics.successSection}>
  <div className={stylesMetrics.sectionHeading}>Your Success Starts Here</div>

  <div className={stylesMetrics.metricsGrid}>
    <div className={stylesMetrics.metricItem}>
      <div className={stylesMetrics.metricValue}>10,000+</div>
      <div className={stylesMetrics.metricLabel}>Successful Placements</div>
    </div>
    <div className={stylesMetrics.metricItem}>
      <div className={stylesMetrics.metricValue}>85%</div>
      <div className={stylesMetrics.metricLabel}>Interview Success Rate</div>
    </div>
    <div className={stylesMetrics.metricItem}>
      <div className={stylesMetrics.metricValue}>30 Days</div>
      <div className={stylesMetrics.metricLabel}>Average Time to Hire</div>
    </div>
  </div>

  <div className={stylesMetrics.masterBox}>
    <h3 className={stylesMetrics.masterTitle}>What You'll Master</h3>
    <div className={stylesMetrics.masterGrid}>
      {[
        "ATS-Optimized Resumes",
        "Cover Letter Psychology",
        "Interview Preparation",
        "Network Building",
      ].map((title, i) => (
        <div key={i} className={stylesMetrics.masterItem}>
 <img src={checkIcon} alt="Check Icon" className={stylesMetrics.checkIcon} />

          <div>
            <h4 className={stylesMetrics.itemTitle}>{title}</h4>
            <p className={stylesMetrics.itemText}>
              {title === "ATS-Optimized Resumes" &&
                "Beat applicant tracking systems with keyword strategies"}
              {title === "Cover Letter Psychology" &&
                "Write compelling letters that get you noticed"}
              {title === "Interview Preparation" &&
                "Master common questions and negotiation tactics"}
              {title === "Network Building" &&
                "Connect with decision makers in your industry"}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Call To Action Section */}
      <section className={stylesCTA.callToAction}>
  <div className={stylesCTA.container}>
    <div className={stylesCTA.innerBox}>
      <div className={stylesCTA.emoji}>💼</div>
      <h2 className={stylesCTA.heading}>Ready to Transform Your Career?</h2>
      <p className={stylesCTA.paragraph}>
        Join our community of successful job seekers and start landing interviews with confidence.
      </p>
      <div className={stylesCTA.buttonGroup}>
        <Link to="/register">
          <button className={stylesCTA.primaryButton}>
            Get Started Free Today
          </button>
        </Link>
        <Link to="/login">
          <button className={stylesCTA.secondaryButton}>
            Sign In to Continue
          </button>
        </Link>
      </div>
    </div>
  </div>
</section>  
  </>
  );
};

export default LandingPage;
