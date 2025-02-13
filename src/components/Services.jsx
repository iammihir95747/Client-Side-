import React from 'react';
import './Services.css';

const servicesData = [
  {
    title: "Web Development",
    description: "We build responsive websites.",
    icon: "🌐",
  },
  {
    title: "App Development",
    description: "We create powerful mobile applications.",
    icon: "📱",
  },
  {
    title: "SEO Services",
    description: "We help you rank higher on search engines.",
    icon: "🔍",
  },
  {
    title: "Digital Marketing",
    description: "Boost your  marketing strategies.",
    icon: "📈",
  },
];

function Services() {
  return (
    <div className="services-container">
      <h1 className='servicestitle'><button className='servicebtn'>Our Services</button></h1>
      <div className="services-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="card-content">
              <div className="card-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
