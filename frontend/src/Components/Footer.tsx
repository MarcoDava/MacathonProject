import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-gray-800 py-8">
      <div className="w-full px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            MockRotAI
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Master your next career move.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <Link to="/characters" className="hover:text-white transition-colors">Characters</Link>
          <Link to="/pastinterviews" className="hover:text-white transition-colors">Interviews</Link>
        </nav>

        {/* Status / Copyright */}
        <div className="text-gray-500 text-xs text-center md:text-right">
          <p>© 2026 MockRotAI</p>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;