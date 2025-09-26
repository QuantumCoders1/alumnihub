import React from "react";
import { 
  Users, Search, Calendar, MessageCircle, ChevronRight,
  UserCircle, Trophy, Building2, GraduationCap, Briefcase,
  UserPlus, MessageSquare, Video, Handshake, MapPin, Star
} from "lucide-react";
import "./alumnihome.css";

const AlumniHome = () => {
  const quickActions = [
    { icon: Users, title: "Alumni Directory", description: "Browse and connect with alumni from all batches and departments", colorClass: "green" },
    { icon: UserCircle, title: "Update Profile", description: "Keep your information current and showcase your achievements", colorClass: "green" },
    { icon: Trophy, title: "Share Achievements", description: "Celebrate your successes and inspire fellow alumni", colorClass: "green" },
    { icon: MessageCircle, title: "Connect & Chat", description: "Start conversations and build meaningful professional relationships", colorClass: "green" }
  ];

  const categories = [
    { icon: GraduationCap, title: "By Graduation Year", count: "2000-2024" },
    { icon: Building2, title: "By Department", count: "25+ Departments" },
    { icon: Briefcase, title: "By Industry", count: "50+ Industries" }
  ];

  const networkingFeatures = [
    { icon: UserPlus, title: "Find Connections", description: "Discover alumni in your field or location", features: ["Industry matching", "Location-based search", "Mutual connections"] },
    { icon: MessageSquare, title: "Direct Messaging", description: "Start conversations with fellow alumni", features: ["Private messaging", "Group chats", "File sharing"] },
    { icon: Video, title: "Virtual Meetups", description: "Join video calls and networking sessions worldwide", features: ["Video conferences", "Screen sharing", "Recording available"] },
    { icon: Handshake, title: "Mentorship Program", description: "Connect with experienced alumni mentors", features: ["Skill-based matching", "Structured programs", "Progress tracking"] }
  ];

  const featuredConnections = [
    { name: "Sarah Johnson", role: "Senior Software Engineer", company: "Google", batch: "Class of 2018", location: "San Francisco, CA", expertise: ["Machine Learning", "Cloud Computing", "Team Leadership"], mutual: 12 },
    { name: "Michael Chen", role: "Product Manager", company: "Meta", batch: "Class of 2016", location: "Seattle, WA", expertise: ["Product Strategy", "User Research", "Data Analytics"], mutual: 8 },
    { name: "Dr. Emily Rodriguez", role: "Research Scientist", company: "MIT", batch: "Class of 2012", location: "Boston, MA", expertise: ["AI Research", "Publishing", "Grant Writing"], mutual: 15 }
  ];

  return (
    <div className="alumnihome">
      {/* Menu Bar */}
      <header className="menu-bar">
        <div className="menu-logo">AlumniHub</div>
        <nav className="menu-nav">
          <a href="#home">Home</a>
          <a href="#network">Network</a>
          <a href="#events">Events</a>
          <a href="#contributions">Contributions</a>
          <a >Logout</a>
        </nav>
      </header>


      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Connect. <span className="hero-title-accent">Grow.</span> Succeed.</h1>
            <p className="hero-subtitle">
              Join thousands of alumni building meaningful professional relationships and creating opportunities for the next generation
            </p>

            <div className="hero-stats">
              <div className="stat-item"><Users /><div><div>15,000+</div><div>Active Alumni</div></div></div>
              <div className="stat-item"><MessageCircle /><div><div>50,000+</div><div>Connections Made</div></div></div>
              <div className="stat-item"><Calendar /><div><div>200+</div><div>Events Yearly</div></div></div>
            </div>

            <div className="hero-actions">
              <button className="btn btn-primary"><Search /> Find Alumni</button>
              <button className="btn btn-secondary">Join Network <ChevronRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Panels */}
      <section id="quick-access" className="quick-access-section">
        <div className="quick-access-container">
          <div className="section-header">
            <h2 className="section-title">Quick Access</h2>
            <p className="section-subtitle">Everything you need to connect and engage with the alumni community</p>
          </div>

          <div className="quick-actions-grid">
            {quickActions.map((action, i) => {
              const Icon = action.icon;
              return (
                <div key={i} className="quick-action-card">
                  <div className={`action-icon ${action.colorClass}`}><Icon /></div>
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                  <button className="btn btn-green">Get Started <ChevronRight /></button>
                </div>
              )
            })}
          </div>

          <div className="categories-grid">
            {categories.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <div key={i} className="category-card">
                  <div className="category-icon"><Icon /></div>
                  <h3>{cat.title}</h3>
                  <p>{cat.count}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
};

export default AlumniHome;
