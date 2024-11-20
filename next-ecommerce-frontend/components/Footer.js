export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Next.js App. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 mt-3">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </footer>
    );
}

