// A simple component to display contact information.
// It includes basic styling to center the content.

export default function ContactPage() {
  return (
    <div className="bg-white text-black min-h-screen flex items-center justify-center">
      <div className="text-center p-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Get in Touch
        </h1>
        <p className="text-lg md:text-xl mb-6">
          For any inquiries, please email us:
        </p>
        <a
          href="mailto:hello@boog.ie"
          className="text-xl md:text-2xl font-semibold text-blue-600 hover:underline"
        >
          hello@boog.ie
        </a>
      </div>
    </div>
  );
}
