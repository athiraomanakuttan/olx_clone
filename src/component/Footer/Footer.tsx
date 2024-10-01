

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-5 gap-6 text-sm text-gray-800">
        {/* Popular Locations */}
        <div>
          <h5 className="font-bold mb-2">POPULAR LOCATIONS</h5>
          <ul>
            <li><a href="#" className="hover:underline">Kolkata</a></li>
            <li><a href="#" className="hover:underline">Mumbai</a></li>
            <li><a href="#" className="hover:underline">Chennai</a></li>
            <li><a href="#" className="hover:underline">Pune</a></li>
          </ul>
        </div>

        {/* Trending Locations */}
        <div>
          <h5 className="font-bold mb-2">TRENDING LOCATIONS</h5>
          <ul>
            <li><a href="#" className="hover:underline">Bhubaneshwar</a></li>
            <li><a href="#" className="hover:underline">Hyderabad</a></li>
            <li><a href="#" className="hover:underline">Chandigarh</a></li>
            <li><a href="#" className="hover:underline">Nashik</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h5 className="font-bold mb-2">ABOUT US</h5>
          <ul>
            <li><a href="#" className="hover:underline">Tech@OLX</a></li>
          </ul>
        </div>

        {/* OLX */}
        <div>
          <h5 className="font-bold mb-2">OLX</h5>
          <ul>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Help</a></li>
            <li><a href="#" className="hover:underline">Sitemap</a></li>
            <li><a href="#" className="hover:underline">Legal & Privacy information</a></li>
            <li><a href="#" className="hover:underline">Vulnerability Disclosure Program</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h5 className="font-bold mb-2">FOLLOW US</h5>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook"></i></a>
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Play Store"><i className="fab fa-google-play"></i></a>
          </div>
          <div className="mt-4">
            <a href="#" className="mr-2">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="w-24 inline"/>
            </a>
            <a href="#">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Apple_app_store_badge_EN.svg" alt="App Store" className="w-24 inline"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
