const Footer = () => {
  return (
    <>
    <div className="border-t border-[#517db9] mt-10"></div>
    
    <footer className=" text-[#517db9] py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#517db9]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#privacy"
                  className="hover:text-[#517db9] transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  className="hover:text-[#517db9] transition duration-300"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#sitemap"
                  className="hover:text-[#517db9] transition duration-300"
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#517db9]">Contact Information</h3>
            <ul className="space-y-3">
              <li>Address: 123 Main Street, Azure City</li>
              {/* <li>Phone: +1 (123) 456-7890</li> */}
              <li>
                Email:{" "}
                <a
                  href="mailto:info@azurecloudi.com"
                  className="hover:text-[#517db9] transition duration-300"
                >
                  info@azurecloudi.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          {/* <div>
            <h3 className="text-2xl font-bold mb-4 text-[#517db9]">Follow Us</h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#linkedin"
                  className="hover:text-[#517db9] transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#twitter"
                  className="hover:text-[#517db9] transition duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="#facebook"
                  className="hover:text-[#517db9] transition duration-300"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Divider */}
        <div className="border-t border-[#517db9] mt-10"></div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-sm text-[#6f6f6f]">
          &copy; {new Date().getFullYear()} Azurecloudi LTD. All rights reserved.
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
