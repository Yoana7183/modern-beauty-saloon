import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-1000 text-black">
      <div className="container mx-auto py-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Your Beauty Salon</h2>
            <p className="text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum eget felis ac erat vestibulum fermentum.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Your Beauty Salon. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
