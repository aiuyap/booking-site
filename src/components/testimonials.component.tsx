import testImage1 from "../assets/testimonial1.png";
import testImage2 from "../assets/testimonial2.png";
import testImage3 from "../assets/testimonial3.png";

export function Testiomonials() {
  return (
    <section className="bg-black py-16">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="mb-8 text-3xl font-semibold text-white">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Testimonial 1 */}
          <div className="rounded-lg p-8 shadow-md outline-1 transition-shadow hover:shadow-xl">
            <img
              src={testImage1}
              alt="John Doe"
              className="mx-auto mb-4 h-20 w-20 rounded-full"
            />
            <p className="mb-4 text-lg text-gray-100">
              "This is the best experience I’ve ever had! The service was
              excellent and everything was so smooth."
            </p>
            <p className="text-sm font-medium text-gray-400">John Doe</p>
            <p className="text-xs text-gray-500">CEO, Company Name</p>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-lg p-8 shadow-md outline-1 transition-shadow hover:shadow-xl">
            <img
              src={testImage2}
              alt="Jane Smith"
              className="mx-auto mb-4 h-20 w-20 rounded-full"
            />
            <p className="mb-4 text-lg text-gray-100">
              "Absolutely amazing! I love how everything turned out. Highly
              recommend their services!"
            </p>
            <p className="text-sm font-medium text-gray-400">Jane Smith</p>
            <p className="text-xs text-gray-500">Designer, Creative Studio</p>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-lg p-8 shadow-md outline-1 transition-shadow hover:shadow-xl">
            <img
              src={testImage3}
              alt="Michael Lee"
              className="mx-auto mb-4 h-20 w-20 rounded-full"
            />
            <p className="mb-4 text-lg text-gray-100">
              "I couldn’t be happier with the results. Truly a fantastic team
              that gets things done right!"
            </p>
            <p className="text-sm font-medium text-gray-400">Michael Lee</p>
            <p className="text-xs text-gray-500">
              Marketing Director, Global Brand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
