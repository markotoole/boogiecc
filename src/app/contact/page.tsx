// A simple component to display contact information,
// styled to match your website's dark background and light fonts.

export default function ContactPage() {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl mb-6 text-gray-300">
          For any inquiries, please email us:
        </p>
        <a
          href="mailto:hello@boog.ie"
          className="text-xl md:text-2xl font-semibold text-blue-400 hover:underline"
        >
          hello@boog.ie
        </a>
      </div>
    </div>
  );
}
