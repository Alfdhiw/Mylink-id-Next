import Image from "next/image";
import "@/styles/main.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCirclePlay, faXmark } from "@fortawesome/free-solid-svg-icons";
import ServicesCarousel from "@/components/ServicesCarousel";

export default function HomePage() {

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero section dark-background text-white" id="hero">
        <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
          <div className="lg:w-1/2" data-aos="zoom-out">
            <h1 className="md:text-5xl mb-6 pb-2">
              Better Solutions For Your Business
            </h1>
            <p className="mb-6 pb-5">
              We are team of talented designers making websites with Bootstrap
            </p>
            <div className="flex gap-4">
              <a
                href="#about"
                className="bg-blue-500 px-6 py-2 rounded-full hover:bg-blue-600"
              >
                <span className="text-white font-medium">Get Started</span>
              </a>
              <a
                href="#"
                className="text-white flex items-center hover:text-blue-400 btn-watch-video"
              >
                <FontAwesomeIcon icon={faCirclePlay} className="mr-2 fa-lg" />
                Watch Video
              </a>
            </div>
          </div>
          <div className="lg:w-1/2" data-aos="zoom-out" data-aos-delay="200">
            <Image
              src="/assets/img/hero-img.png"
              alt="Hero Image"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="skills section py-20" id="about">
        <div className="container mx-auto px-4 text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-4">
            The Best Templates Use MyLynk.id
          </h2>
          <p className="text-gray-600">
            See how our template MyLynk to set the new standard for business
          </p>
        </div>
        <div
          className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div>
            <div className="grid grid-cols-2 gap-4">
              {['faranov-img.webp', 'fikran-img.webp', 'kadafi-img.webp', 'fikran-img.webp'].map((img, i) => (
                <div key={i} className="rounded-lg overflow-hidden">
                  <Image
                    src={`/assets/img/clients/${img}`}
                    alt={`template${i + 1}`}
                    width={400}
                    height={250}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Modern and Elegant Template</h3>
            <p className="italic mb-6 text-gray-600">
              Equipped with standard development builds such as.
            </p>
            <div className="space-y-4">
              {[
                { skill: 'HTML', val: 100 },
                { skill: 'CSS', val: 90 },
                { skill: 'JavaScript', val: 75 },
                { skill: 'Photoshop', val: 55 }
              ].map(({ skill, val }) => (
                <div key={skill}>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>{skill}</span>
                    <span>{val}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-blue-500 rounded"
                      style={{ width: `${val}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services section light-background py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center mb-10" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-2">Not just another link-in-bio</h2>
          <p className="text-gray-600">MyLink.id take care of your entire workflow, start to finish.</p>
        </div>

        <div className="container mx-auto px-4">
          {/* Menu Tabs (non-fungsional untuk sekarang) */}
          <ul className="flex flex-wrap justify-center gap-4 mb-10 text-sm font-semibold">
            {[
              ["Digital Product", "bi-archive-fill"],
              ["Blog", "bi-vector-pen"],
              ["Appointment", "bi-calendar-check-fill"],
              ["Course", "bi-duffle-fill"],
              ["Event Webinar", "bi-duffle-fill"],
              ["Donation", "bi-duffle-fill"],
              ["Store", "bi-duffle-fill"]
            ].map(([title, icon], idx) => (
              <li key={idx}>
                <a className={`cursor-pointer px-4 py-2 rounded-full ${idx === 0 ? 'bg-blue-500 text-white' : 'bg-white border text-gray-700'} flex items-center gap-2`}>
                  <i className={`bi ${icon}`}></i> {title}
                </a>
              </li>
            ))}
          </ul>

          {/* Service Content (disederhanakan untuk satu aktif) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <div className="text-center">
              <img src="/assets/img/clients/digital.webp" alt="Digital Product" className="mx-auto w-52" />
            </div>
            <div>
              <h4 className="text-xl font-bold mb-2">Digital Product</h4>
              <p className="text-gray-600">Sell ebooks, software, apps, templates, and more.</p>
            </div>
          </div>

          {/* Domain Custom Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <img src="/assets/img/why-us.png" alt="Why Us" className="mx-auto w-full" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Create Your Own Custom Domain</h3>
              <p className="text-gray-600">Use your custom domain in your bio link to get personal and integrate with Instagram Shopping.</p>
            </div>
          </div>

          {/* Insights Section */}
          <div className="grid md:grid-cols-2 gap-10 items-center" data-aos="fade-up" data-aos-delay="100">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get Real Insights</h3>
              <p className="text-gray-600">Lynk.id gives you actionable insights such as how many people are viewing your link/product.</p>
            </div>
            <div className="text-center">
              <img src="/assets/img/skills.png" alt="Insights" className="mx-auto w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing section light-background">

        <div className="container section-title" data-aos="fade-up">
          <h2>Pricing</h2>
          <p>Affordable prices with perfect quality</p>
        </div>

        <div className="container">
          <div className="mx-auto grid max-w-lg grid-cols-1 items-center sm:mt-0 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-3">
            <div className="col-lg-2 mr-5" data-aos="zoom-in" data-aos-delay="100">
              <div className="pricing-item">
                <h3>Free Plan</h3>
                <h4><sup>$</sup>0<span> / month</span></h4>
                <ul>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Quam adipiscing vitae proin</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Nec feugiat nisl pretium</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Nulla at volutpat diam uteera</span></li>
                  <li className="na"><FontAwesomeIcon icon={faXmark} className="mr-2 fa-lg" /> <span>Pharetra massa massa ultricies</span></li>
                  <li className="na"><FontAwesomeIcon icon={faXmark} className="mr-2 fa-lg" /> <span>Massa ultricies mi quis hendrerit</span></li>
                </ul>
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>

            <div className="col-lg-2 mr-5" data-aos="zoom-in" data-aos-delay="200">
              <div className="pricing-item">
                <h3>Business Plan</h3>
                <h4><sup>$</sup>29<span> / month</span></h4>
                <ul>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Quam adipiscing vitae proin</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Nec feugiat nisl pretium</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Nulla at volutpat diam uteera</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Pharetra massa massa ultricies</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Massa ultricies mi quis hendrerit</span></li>
                </ul>
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>

            <div className="col-lg-2 mr-5" data-aos="zoom-in" data-aos-delay="300">
              <div className="pricing-item">
                <h3>Developer Plan</h3>
                <h4><sup>$</sup>49<span> / month</span></h4>
                <ul>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Quam adipiscing vitae proin</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Nec feugiat nisl pretium</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Nulla at volutpat diam uteera</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Pharetra massa massa ultricies</span></li>
                  <li><FontAwesomeIcon icon={faCheck} className="mr-2 fa-lg text-green-500" /> <span>Massa ultricies mi quis hendrerit</span></li>
                </ul>
                <a href="#" className="buy-btn">Buy Now</a>
              </div>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
}
