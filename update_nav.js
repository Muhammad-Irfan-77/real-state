const fs = require('fs');
const files = ['index.html', 'properties.html', 'agents.html', 'about.html', 'contact.html'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/<nav class="navbar">([\s\S]*?)<\/nav>/, `<nav class="navbar">
        <a href="index.html" class="logo">Luxe<span>Realty</span></a>
        <div class="nav-links" id="navLinks">
            <a href="index.html" ${file === 'index.html' ? 'class="active"' : ''}>Home</a>
            <a href="properties.html" ${file === 'properties.html' ? 'class="active"' : ''}>Properties</a>
            <a href="agents.html" ${file === 'agents.html' ? 'class="active"' : ''}>Agents</a>
            <a href="about.html" ${file === 'about.html' ? 'class="active"' : ''}>About Us</a>
            <a href="https://realtypropflow.com/dashboard/leads?demo=true" target="_blank" style="color: #4F46E5; font-weight: bold;">Leads Dashboard</a>
        </div>
        <div class="nav-actions">
            <a href="contact.html" class="contact-btn">Contact Us</a>
            <div class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>`);
  fs.writeFileSync(file, content);
});
console.log('Nav updated');
