import React from 'react';
import { Link } from 'react-router-dom';
import {
  MessageSquare,
  ArrowRight,
  Award,
  Phone,
  Mail,
  Microscope,
  FlaskConical,
  Activity,
  Wind,
} from 'lucide-react';
import { BRAND } from '../data/brand';
import { CONTACT } from '../data/contact';
import { featuredClients } from '../data/clients';
import { products, productCategories } from '../data/products';
import { useSEO } from '../hooks/useSEO';

const proofMetrics = [
  { value: '10,000+', label: 'Diagnostic tests performed monthly' },
  { value: '13+ Years', label: 'Of trusted partnership' },
  { value: '95%+', label: 'Client satisfaction rate' },
  { value: '3 Islands', label: 'Nationwide coverage' },
] as const;

const categoryIcons: Record<string, React.ElementType> = {
  Diagnostic: Microscope,
  'Diabetes Care': Activity,
  Laboratory: FlaskConical,
  Others: Wind,
};

const featuredQuote = {
  text: 'Since implementing our point-of-care testing solutions, healthcare facilities across the Philippines have dramatically reduced patient wait times while improving diagnostic accuracy.',
  impact: 'Faster Results, Better Care',
};

const Home = () => {
  useSEO({
    title: 'TSMC Medical Supply: Medical Equipment & Supplies',
    description: 'TSMC Medical Supply, a division of TwinJ3 Sales and Marketing Corp., provides diagnostic equipment, laboratory instruments, and medical devices to healthcare professionals across the Philippines.',
  });

  const previewProducts = products.slice(0, 3);

  const categoryCounts = productCategories.reduce<Record<string, number>>((acc, cat) => {
    acc[cat] = products.filter((p) => p.category === cat).length;
    return acc;
  }, {});

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section className="relative bg-white overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=1600"
            alt=""
            className="w-full h-full object-cover"
            width={1600}
            height={900}
            fetchPriority="high"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center progressive-load max-w-3xl mx-auto">
            <img
              src={BRAND.logoUrl}
              alt={`${BRAND.tradeName} logo`}
              className="h-20 sm:h-28 w-auto mx-auto mb-6 object-contain"
              width={160}
              height={160}
            />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
              <span className="block text-indigo-600">{BRAND.tradeName}</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base font-medium text-gray-600">
              {BRAND.heroSubline}
            </p>
            <p className="mt-4 text-base sm:text-lg text-gray-500">{BRAND.tagline}</p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/tsmc"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                View Our Products
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              >
                <MessageSquare className="mr-2 h-5 w-5" aria-hidden />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof strip: static, scannable */}
      <section className="bg-indigo-600 py-16" aria-labelledby="proof-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="proof-heading" className="sr-only">
            Our impact at a glance
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {proofMetrics.map((item) => (
              <div key={item.label} className="text-center text-white">
                <div className="text-3xl sm:text-4xl font-extrabold text-white">{item.value}</div>
                <div className="mt-2 text-sm sm:text-base text-white font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category entry */}
      <section className="py-20 sm:py-24" aria-labelledby="categories-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="categories-heading" className="text-3xl sm:text-4xl font-extrabold text-black">
              Browse by category
            </h2>
            <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
              Explore our catalog of medical equipment, diagnostic solutions, and protective wear
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {productCategories.map((category) => {
              const Icon = categoryIcons[category] ?? Microscope;
              return (
                <Link
                  key={category}
                  to={`/tsmc?category=${encodeURIComponent(category)}`}
                  className="group bg-white rounded-xl shadow-lg border border-gray-200 p-8 hover:border-black hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-black flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                      <Icon
                        className="h-7 w-7 text-black group-hover:text-white transition-colors"
                        aria-hidden
                      />
                    </div>
                    <h3 className="text-xl font-bold text-black">{category}</h3>
                    <p className="mt-3 text-black text-sm font-medium">
                      {categoryCounts[category] ?? 0} product{(categoryCounts[category] ?? 0) !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <span className="mt-6 inline-flex items-center text-black font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    View products
                    <ArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured products: static grid, no carousel */}
      <section className="bg-white py-20 sm:py-24" aria-labelledby="featured-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="featured-heading" className="text-3xl sm:text-4xl font-extrabold text-black">
              Featured products
            </h2>
            <p className="mt-4 text-lg text-black max-w-2xl mx-auto">
              A curated selection from our medical equipment and protective apparel catalog
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {previewProducts.map((product) => (
              <article
                key={product.id}
                className="bg-white rounded-xl border border-gray-200 shadow-md hover:shadow-lg transition-all overflow-hidden flex flex-col"
              >
                <div className="h-56 bg-gray-50 flex items-center justify-center p-6 border-b border-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                    width={320}
                    height={224}
                    loading="lazy"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-xs font-bold text-black uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-black">{product.name}</h3>
                  <p className="mt-3 text-sm text-black leading-relaxed line-clamp-3 flex-grow">
                    {product.description}
                  </p>
                  <Link
                    to={`/tsmc/products/${product.slug}`}
                    className="mt-6 inline-flex items-center text-black hover:text-indigo-600 font-semibold text-sm group"
                  >
                    Learn more
                    <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              to="/tsmc"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-black text-white hover:bg-gray-800 font-semibold text-base transition-colors shadow-md"
            >
              View all products
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* Trust: quote and partner logos */}
      <section className="py-20 sm:py-24 bg-gray-50" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="trust-heading" className="text-3xl sm:text-4xl font-extrabold text-black">
              Trusted across the Philippines
            </h2>
          </div>
          <blockquote className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 p-10 sm:p-14 text-center">
            <div className="inline-flex items-center px-4 py-1.5 bg-gray-100 text-black rounded-full text-sm font-semibold mb-6">
              <Award className="h-4 w-4 mr-2 text-black" aria-hidden />
              {featuredQuote.impact}
            </div>
            <p className="text-lg sm:text-xl text-black leading-relaxed font-normal">&ldquo;{featuredQuote.text}&rdquo;</p>
            <footer className="mt-6 text-sm text-black font-semibold">
              Healthcare partners nationwide
            </footer>
          </blockquote>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 items-center">
            {featuredClients.map((client) => (
              <div
                key={client.url}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center min-h-[6rem]"
              >
                <img
                  src={client.url}
                  alt={client.alt}
                  className="max-w-full max-h-20 w-auto h-auto object-contain"
                  width={160}
                  height={80}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-indigo-700 py-14" aria-labelledby="cta-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-heading" className="text-2xl sm:text-3xl font-bold text-white">
            Ready to equip your facility?
          </h2>
          <p className="mt-3 text-indigo-100 max-w-xl mx-auto">
            Speak with our team about products, training, and support for your healthcare institution.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link
              to="/contact?service=medical"
              className="inline-flex items-center px-6 py-3 rounded-md bg-white text-indigo-700 font-semibold hover:bg-indigo-50 transition-colors"
            >
              Request a quote
            </Link>
            <a
              href={CONTACT.phone.href}
              className="inline-flex items-center text-white hover:text-indigo-100 font-medium"
            >
              <Phone className="h-5 w-5 mr-2" aria-hidden />
              {CONTACT.phone.display}
            </a>
            <a
              href={CONTACT.email.href}
              className="inline-flex items-center text-white hover:text-indigo-100 font-medium"
            >
              <Mail className="h-5 w-5 mr-2" aria-hidden />
              {CONTACT.email.display}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
