import React from 'react';
import { MapPin, Bed, Bath, Square, Search } from 'lucide-react';
import './index.css';

const properties = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    price: "$4,500,000",
    title: "The Beverly Estate",
    address: "123 Beverly Hills Blvd, CA 90210",
    beds: 5,
    baths: 6,
    sqft: "6,500"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    price: "$2,850,000",
    title: "Modern Glass Villa",
    address: "88 Silicon Valley Rd, Palo Alto",
    beds: 4,
    baths: 4,
    sqft: "4,200"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    price: "$6,200,000",
    title: "Oceanfront Mansion",
    address: "1 Ocean Drive, Miami Beach",
    beds: 6,
    baths: 7,
    sqft: "8,900"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    price: "$1,950,000",
    title: "Contemporary Suburbia",
    address: "45 Maple Leaf Ln, Toronto",
    beds: 4,
    baths: 3,
    sqft: "3,100"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop",
    price: "$3,400,000",
    title: "Alpine Retreat",
    address: "77 Snowpeak Way, Aspen",
    beds: 5,
    baths: 5,
    sqft: "5,500"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2092&auto=format&fit=crop",
    price: "$8,900,000",
    title: "The Penthouse Collection",
    address: "100 Manhattan Ave, New York",
    beds: 3,
    baths: 4,
    sqft: "4,800"
  }
];

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">Luxe<span>Realty</span></div>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Properties</a>
          <a href="#">Agents</a>
          <a href="#">About</a>
        </div>
        <button className="contact-btn">Contact Us</button>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <div className="hero-subtitle">Exquisite Living</div>
          <h1 className="hero-title">Find Your Ultimate Dream Home.</h1>
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search by location, neighborhood, or zip code..." />
            <button className="search-btn"><Search size={20} /></button>
          </div>
        </div>
      </section>

      <section className="featured">
        <div className="section-header">
          <h2>Exclusive Properties</h2>
          <p>Discover our handpicked selection of premium real estate properties designed for the extraordinary.</p>
        </div>
        
        <div className="properties-grid">
          {properties.map(property => (
            <div className="property-card" key={property.id}>
              <img src={property.image} alt={property.title} className="property-img" />
              <div className="property-details">
                <div className="property-price">{property.price}</div>
                <h3 className="property-title">{property.title}</h3>
                <div className="property-address">
                  <MapPin size={16} color="#94a3b8" /> {property.address}
                </div>
                <div className="property-specs">
                  <div className="spec-item"><Bed size={18} /> {property.beds} Beds</div>
                  <div className="spec-item"><Bath size={18} /> {property.baths} Baths</div>
                  <div className="spec-item"><Square size={18} /> {property.sqft} sqft</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <div className="footer-logo">Luxe<span>Realty</span></div>
        <p className="footer-content">© 2026 Luxe Realty International. All Rights Reserved. <br/> Setting the standard in luxury real estate worldwide.</p>
      </footer>
    </>
  );
}

export default App;
