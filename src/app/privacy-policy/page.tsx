import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Boogie Media",
  description: "Privacy policy for Boogie Media website and services",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
        
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <p className="mb-4">
              When you visit our website, we may collect certain information automatically, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your IP address and browser type</li>
              <li>Pages you visit on our website</li>
              <li>Time and date of your visit</li>
              <li>Referring website addresses</li>
              <li>Device and operating system information</li>
            </ul>
            <p>
              We also collect information you provide directly, such as when you contact us through our contact form or subscribe to our newsletter.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Improve our website and user experience</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you updates about our artists and events (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Google Analytics</h2>
            <p className="mb-4">
              We use Google Analytics to analyze how visitors use our website. Google Analytics uses cookies to collect information such as:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>How often users visit our site</li>
              <li>What pages they visit when they do so</li>
              <li>What other sites they used prior to coming to our site</li>
            </ul>
            <p className="mb-4">
              Google Analytics collects only the IP address assigned to you on the date you visit our site, not your name or other identifying information. We do not combine the information collected through Google Analytics with personally identifiable information.
            </p>
            <p className="mb-4">
              Google's ability to use and share information collected by Google Analytics about your visits to our site is restricted by the{" "}
              <a 
                href="https://marketingplatform.google.com/about/analytics/terms/us/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Google Analytics Terms of Use
              </a>{" "}
              and the{" "}
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Google Privacy Policy
              </a>.
            </p>
            <p>
              You can opt-out of Google Analytics by installing the{" "}
              <a 
                href="https://tools.google.com/dlpage/gaoptout" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Google Analytics opt-out browser add-on
              </a>.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Cookies</h2>
            <p className="mb-4">
              Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Remember your preferences</li>
              <li>Understand how you use our website</li>
              <li>Improve our website's functionality</li>
            </ul>
            <p className="mb-4">Types of cookies we use:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Essential cookies:</strong> Required for the website to function properly</li>
              <li><strong>Analytics cookies:</strong> Help us understand website usage (Google Analytics)</li>
              <li><strong>Preference cookies:</strong> Remember your settings and choices</li>
            </ul>
            <p>
              You can control cookies through your browser settings. However, disabling cookies may affect your experience on our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Information Sharing</h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties except:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To trusted service providers who assist us in operating our website (like Google Analytics)</li>
              <li>When required by law or to protect our rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Withdraw consent for data processing</li>
              <li>Opt-out of analytics tracking</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Children's Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have any questions about this privacy policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <p><strong>Boogie Media</strong></p>
              <p>Email: <a href="mailto:info@boog.ie" className="text-blue-600 hover:text-blue-800 underline">info@boog.ie</a></p>
              <p>Website: <a href="https://www.boog.ie" className="text-blue-600 hover:text-blue-800 underline">www.boog.ie</a></p>
            </div>
          </section>

          <div className="border-t pt-8 mt-12">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              This privacy policy is designed to comply with GDPR and other applicable privacy laws. 
              It was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
