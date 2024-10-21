export default function Footer() {
  return (
    <div className="mt-10 bg-[#E2F4FF]">
      <div className="mx-10 flex justify-between p-10">
        <div className="">
          <h3>Electon</h3>
          <p>64 st james boulevard hoswick, ze2 7zj</p>
          <p>
            <a href="#">🔄</a>
            <a href="#">📘</a>
            <a href="#">📞</a>
          </p>
        </div>

        <div>
          <h3>Find product</h3>
          <div className="flex items-center space-x-2">
            <span className="inline-block h-3 w-3 rounded-full bg-gray-300"></span>

            <span className="font-medium text-blue-600">Brownze arnold</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block h-3 w-3 rounded-full bg-gray-300"></span>

            <span className="font-medium text-blue-600">Brownze arnold</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block h-3 w-3 rounded-full bg-gray-300"></span>

            <span className="font-medium text-blue-600">Brownze arnold</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="inline-block h-3 w-3 rounded-full bg-gray-300"></span>

            <span className="font-medium text-blue-600">Brownze arnold</span>
          </div>
        </div>

        <div>
          <h3>Get help</h3>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Return policy</li>
            <li>Privacy policy</li>
            <li>Payment policy</li>
          </ul>
        </div>

        <div>
          <h3>About us</h3>
          <ul>
            <li>News</li>
            <li>Service</li>
            <li>Our policy</li>
            <li>Customer care</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
