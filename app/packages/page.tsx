
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function PackagesPage() {
  const [selectedPlan, setSelectedPlan] = useState("");
  const [companyName, setCompanyName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [success, setSuccess] = useState(false);

const sendEnquiry = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await emailjs.send(
      "service_dul8qcm",
      "template_zymgn7k",
      {
        plan: selectedPlan,
        company: companyName,
        phone: phone,
        email: email,
        message: message,
        time: new Date().toLocaleString(),
      },
      "QLxdqc3KLCjCKhc0i"
    );

    setSuccess(true);

    setCompanyName("");
    setPhone("");
    setEmail("");
    setMessage("");

  } catch (error) {
    console.error(error);
    alert("Failed to send enquiry");
  }
};

const services = [
  {
    title: "AI Automation",
    plans: [
      {
        name: "Starter",
        price: "₹4,999",
        features: [
          "AI Chatbot",
          "FAQ Automation",
          "Lead Collection Form",
        ],
      },
      {
        name: "Growth",
        price: "₹9,999",
        recommended: true,
        features: [
          "AI Chatbot",
          "WhatsApp Integration",
          "Lead Management",
          "Email Automation",
        ],
      },
      {
        name: "Enterprise",
        price: "₹19,999+",
        features: [
          "Custom AI Assistant",
          "Workflow Automation",
          "Business Integrations",
        ],
      },
    ],
  },

  {
    title: "Website Development",
    plans: [
      {
        name: "Starter",
        price: "₹4,999",
        features: [
          "3-5 Pages",
          "Mobile Responsive",
          "Contact Form",
        ],
      },
      {
        name: "Growth",
        price: "₹9,999",
        recommended: true,
        features: [
          "5-10 Pages",
          "Premium Design",
          "SEO Setup",
          "Analytics",
        ],
      },
      {
        name: "Enterprise",
        price: "₹19,999+",
        features: [
          "Custom Website",
          "Advanced Animations",
          "CMS Integration",
        ],
      },
    ],
  },

  {
    title: "Custom Software Development",
    plans: [
      {
        name: "Starter",
        price: "₹9,999",
        features: [
          "Basic Web Application",
          "Login System",
          "Database",
        ],
      },
      {
        name: "Growth",
        price: "₹19,999",
        recommended: true,
        features: [
          "Dashboard",
          "Reports",
          "API Integration",
        ],
      },
      {
        name: "Enterprise",
        price: "₹39,999+",
        features: [
          "Full Business System",
          "CRM Features",
          "Advanced Security",
        ],
      },
    ],
  },

  {
    title: "Data Analytics",
    plans: [
      {
        name: "Starter",
        price: "₹2,999",
        features: [
          "Reports",
          "Data Cleaning",
        ],
      },
      {
        name: "Growth",
        price: "₹5,999",
        recommended: true,
        features: [
          "Interactive Dashboard",
          "KPI Tracking",
        ],
      },
      {
        name: "Enterprise",
        price: "₹14,999+",
        features: [
          "Predictive Analytics",
          "Advanced Reporting",
        ],
      },
    ],
  },

  {
    title: "Digital Marketing",
    plans: [
      {
        name: "Starter",
        price: "₹3,999/mo",
        features: [
          "Social Media Setup",
          "Basic SEO",
        ],
      },
      {
        name: "Growth",
        price: "₹7,999/mo",
        recommended: true,
        features: [
          "Social Media Management",
          "Lead Generation",
        ],
      },
      {
        name: "Enterprise",
        price: "₹14,999/mo",
        features: [
          "Ads Management",
          "Full Strategy",
        ],
      },
    ],
  },

  {
    title: "AI Solutions",
    plans: [
      {
        name: "Starter",
        price: "₹9,999",
        features: [
          "AI Assistant Setup",
        ],
      },
      {
        name: "Growth",
        price: "₹19,999",
        recommended: true,
        features: [
          "Custom AI Tool",
          "Business Automation",
        ],
      },
      {
        name: "Enterprise",
        price: "₹39,999+",
        features: [
          "Advanced AI Platform",
          "Enterprise Integration",
        ],
      },
    ],
  },

  {
    title: "Cloud & Deployment",
    plans: [
      {
        name: "Starter",
        price: "₹1,999",
        features: [
          "Domain Setup",
          "Hosting Setup",
        ],
      },
      {
        name: "Growth",
        price: "₹4,999",
        recommended: true,
        features: [
          "Cloud Deployment",
          "Database Setup",
        ],
      },
      {
        name: "Enterprise",
        price: "₹9,999+",
        features: [
          "Scalable Infrastructure",
          "Advanced Security",
        ],
      },
    ],
  },

  {
    title: "All-In-One Business Growth Package",
    plans: [
      {
        name: "Essential Growth",
        price: "₹24,999",
        features: [
          "Business Website",
          "SEO",
          "Google Business Profile",
          "Analytics Dashboard",
        ],
      },
      {
        name: "Professional Growth",
        price: "₹49,999",
        recommended: true,
        features: [
          "Premium Website",
          "AI Chatbot",
          "WhatsApp Integration",
          "Lead Generation",
          "3 Months Support",
        ],
      },
      {
        name: "Enterprise Transformation",
        price: "₹99,999+",
        features: [
          "Custom Software",
          "AI Automation",
          "CRM Setup",
          "Cloud Deployment",
          "Priority Support",
        ],
      },
    ],
  },
];

return (
    <main className="min-h-screen bg-[#07133D] text-white px-6 pt-36 pb-24">

        <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#07133D]/80 border-b border-cyan-500/20">
  <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

    <h1 className="text-2xl font-bold text-cyan-400">
      AXORA
    </h1>

    <div className="flex gap-8">

      <a
        href="/"
        className="relative text-white hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
      >
        Home
      </a>

      <a
        href="/#about"
        className="relative text-white hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
      >
        About
      </a>

      <a
        href="#contact"
        className="relative text-white hover:text-cyan-400 transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 hover:after:w-full after:transition-all"
      >
        Contact
      </a>

    </div>

  </div>
</nav>
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-8">
  <span className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-4">
    Pricing Plans
  </span>

  <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
    Our Packages
  </h1>

  <p className="text-gray-400 mt-4 text-lg">
    Transparent pricing. Premium results. No hidden costs.
  </p>
</div>
        

        

          {services.map((service) => (
  <section key={service.title} className="mb-24">
    <h2 className="text-4xl font-bold mb-10 text-center">
      {service.title}
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {service.plans.map((plan) => (
        <div
          key={plan.name}
          onClick={() => {
  setSelectedPlan(
    `${service.title} - ${plan.name} (${plan.price})`
  );

  document
    .getElementById("contact")
    ?.scrollIntoView({ behavior: "smooth" });
}}
          className={`relative cursor-pointer rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:-translate-y-2 ${
            plan.recommended
              ? "border-2 border-cyan-400 bg-cyan-500/10 shadow-[0_0_40px_rgba(34,211,238,0.3)]"
              : "border border-cyan-500/30 bg-black/20 hover:border-cyan-400"
          }`}
        >
          {plan.recommended && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                ⭐ MOST POPULAR
              </span>
            </div>
          )}

          <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

          <p className="text-4xl font-bold text-cyan-400 mb-6">
            {plan.price}
          </p>

          <ul className="space-y-3 text-gray-300">
            {plan.features.map((feature) => (
              <li key={feature}>✔ {feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
))}
        {/* Contact Form */}
        <section id="contact" className="mt-24">
          <div className="max-w-2xl mx-auto bg-black/20 border border-cyan-500/20 rounded-2xl p-8">

            <h2 className="text-3xl font-bold mb-6 text-center">
              Request A Quote
            </h2>

            <input
              type="text"
              value={selectedPlan}
              readOnly
              placeholder="Selected Plan"
              className="w-full mb-4 p-4 rounded-lg bg-[#0B1A4D] border border-cyan-500/30"
            />

            <form onSubmit={sendEnquiry}>

            <input
  type="text"
  placeholder="Company Name"
  value={companyName}
  onChange={(e) => setCompanyName(e.target.value)}
  className="w-full mb-4 p-4 rounded-lg bg-[#0B1A4D] border border-cyan-500/30"
  required
/>

            <input
  type="text"
  placeholder="Contact Number"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="w-full mb-4 p-4 rounded-lg bg-[#0B1A4D] border border-cyan-500/30"
  required
/>

            <input
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full mb-4 p-4 rounded-lg bg-[#0B1A4D] border border-cyan-500/30"
  required
/>

            <textarea
  placeholder="Tell us about your project..."
  rows={5}
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full mb-4 p-4 rounded-lg bg-[#0B1A4D] border border-cyan-500/30"
/>

            <button
  type="submit"
  className="w-full bg-cyan-500 hover:bg-cyan-400 py-4 rounded-lg font-semibold transition"
>
  Submit Enquiry
</button>
{success && (
  <div className="mt-4 bg-green-500/20 border border-green-500 text-green-400 p-4 rounded-lg text-center">
    Thank you for contacting Axora Technologies! 
Our team has received your enquiry and will get back to you shortly.
  </div>
)}

</form>
          </div>
        </section>

      </div>
    </main>
  );
}