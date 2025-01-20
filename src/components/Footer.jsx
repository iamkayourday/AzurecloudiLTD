const Footer = () => {
  return (
    <>
      <div className="border-t border-[#517db9] mt-10"></div>
      <footer className="text-[#517db9] py-10">
        <div className="container mx-auto px-6">
          <div className="text-center text-sm text-[#6f6f6f] align-middle">
            &copy; {new Date().getFullYear()} Azurecloudi LTD. All rights reserved.
          </div>
        </div>
        <div className="border-t border-[#517db9] mt-10"></div>
      </footer>
    </>
  );
};

export default Footer;
