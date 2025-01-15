// Footer Component with Tailwind CSS
const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300 py-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#privacy" className="hover:text-gray-100 transition">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-gray-100 transition">Terms of Service</a></li>
                <li><a href="#sitemap" className="hover:text-gray-100 transition">Sitemap</a></li>
              </ul>
            </div>
  
            {/* Contact Information */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Contact Information</h3>
              <ul className="space-y-2">
                <li>Address: 123 Main Street, Azure City</li>
                <li>Phone: +1 (123) 456-7890</li>
                <li>Email: <a href="mailto:info@azurecloudi.com" className="hover:text-gray-100 transition">info@azurecloudi.com</a></li>
              </ul>
            </div>
  
            {/* Social Media Links */}
            <div>
              <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
              <ul className="flex space-x-4">
                <li><a href="#linkedin" className="hover:text-gray-100 transition">LinkedIn</a></li>
                <li><a href="#twitter" className="hover:text-gray-100 transition">Twitter</a></li>
                <li><a href="#facebook" className="hover:text-gray-100 transition">Facebook</a></li>
              </ul>
            </div>
          </div>
          {/* Copyright Notice */}
          <div className="mt-8 text-center text-gray-500">
            &copy; {new Date().getFullYear()} Azurecloudi LTD. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  