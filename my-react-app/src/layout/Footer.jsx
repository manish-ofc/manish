// import logo from "../assets/manish.png";

const Footer = () => {
  return (
    <footer className="mt-8 w-full">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Footer Bottom */}
        <div className="border-t border-gray-200 py-7">
          
          <div className="flex flex-col items-center justify-center text-center font-poppins text-sm text-gray-500 lg:flex-row lg:justify-between">
            
            <span className="text-sm text-gray-500">
              ©{" "}
              <a
                href="https://www.instagram.com/akunmu"
                target="_blank"
                rel="noopener noreferrer"
                className="transition duration-300 hover:text-black"
              >
                Manish Official
              </a>{" "}
              2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;