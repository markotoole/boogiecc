"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id === "first-name" ? "firstName" : 
       id === "last-name" ? "lastName" : 
       id === "project-type" ? "projectType" : id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Call the real API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setFormStatus({
          submitted: true,
          error: false,
          message: result.message,
        });
        
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          projectType: "",
          message: "",
        });
      } else {
        throw new Error(result.message || 'Form submission failed');
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        submitted: true,
        error: true,
        message: "There was an error submitting your message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact Form */}
          <div>
            <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Have a project in mind or want to learn more about our services? 
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
            
            {formStatus.submitted ? (
              <div className={`rounded-md p-4 mb-8 ${formStatus.error ? "bg-red-50 text-red-700 dark:bg-red-900/30 dark:text-red-400" : "bg-green-50 text-green-700 dark:bg-green-900/30 dark:text-green-400"}`}>
                <p>{formStatus.message}</p>
                {formStatus.error && (
                  <button 
                    className="mt-4 text-sm font-medium underline"
                    onClick={() => setFormStatus({ submitted: false, error: false, message: "" })}
                  >
                    Try again
                  </button>
                )}
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none"
                    >
                      First name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="first-name"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="last-name"
                      className="text-sm font-medium leading-none"
                    >
                      Last name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="last-name"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium leading-none"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="text-sm font-medium leading-none"
                  >
                    Company
                  </label>
                  <input
                    id="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-500"
                    placeholder="Enter your company name"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="project-type"
                    className="text-sm font-medium leading-none"
                  >
                    Project Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="project-type"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-800 dark:bg-gray-950"
                  >
                    <option value="" disabled>Select project type</option>
                    <option value="content-creation">Content Creation</option>
                    <option value="digital-publishing">Digital Publishing</option>
                    <option value="media-production">Media Production</option>
                    <option value="brand-strategy">Brand Strategy</option>
                    <option value="web-development">Web Development</option>
                    <option value="social-media">Social Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:placeholder:text-gray-500"
                    placeholder="Tell us about your project or inquiry"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex h-10 w-full items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-600 dark:hover:bg-blue-700 sm:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="mr-2 h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Contact Info - Simplified */}
          <div>
            <div className="rounded-lg border bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    <a href="mailto:hello@boog.ie" className="hover:text-blue-600 dark:hover:text-blue-500">
                      hello@boog.ie
                    </a>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 rounded-lg bg-gray-100 p-8 dark:bg-gray-900">
              <h2 className="text-2xl font-bold mb-4">FAQ</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-semibold">What services do you offer?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    We offer content creation, digital publishing, media production, brand strategy, web development, and social media services.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold">How long does a typical project take?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Project timelines vary depending on scope and complexity. We'll provide a detailed timeline during our initial consultation.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-semibold">Do you work with clients internationally?</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">
                    Yes, we work with clients from around the world and have experience managing remote projects effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}