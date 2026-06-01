
"use client";
import Link from "next/link";

import { motion } from "framer-motion";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#020A2B] text-white overflow-hidden relative">

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-cyan-500/10 blur-[180px] rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

          {/* Logo */}
          <div className="text-4xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
  AXORA
</div>

          {/* Menu */}
          <div className="hidden md:flex gap-8 text-gray-300">
  <a href="#home" className="hover:text-cyan-400 transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
    Home
  </a>

  <a href="#services" className="hover:text-cyan-400 transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
    Services
  </a>

  <a
  href="/packages"
  className="hover:text-cyan-400 transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
>
  Packages
</a>

  <a href="#about" className="hover:text-cyan-400 transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
    About
  </a>

  

  <a href="#contact" className="hover:text-cyan-400 transition duration-300 relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full">
    Contact
  </a>
</div>

        </div>
      </nav>

      {/* Hero Section */}
     <section
  id="home"
  className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
>
        {/* Logo */}
        <img
  src="/axora-logo.png"
  alt="Axora Logo"
  className="w-[350px] md:w-[600px]"
/>

        {/* Heading */}
        <h1>
          Building The Future
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold mt-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Through AI & Automation
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg md:text-xl text-gray-300">
          We create intelligent software, automation systems and AI solutions
          that help businesses innovate, automate and elevate.
        </p>

        {/* Buttons */}
        <motion.div
  className="mt-10 flex gap-4"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1, duration: 1 }}
>

          
  <Link href="/packages"
  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 transition-all inline-block">
  Get Started
</Link>
  

<a
  href="#contact"
  className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 transition-all inline-block"
>
  Learn More
</a>

          

        </motion.div>

      </section>

      {/* Premium Marquee */}
<section className="overflow-hidden border-y border-cyan-500/20 bg-[#07133D] py-3">

  <div className="marquee">

    <div className="flex whitespace-nowrap text-sm md:text-base font-medium tracking-[0.05em]">

      <span className="mx-8 text-cyan-400">
        AI AUTOMATION
      </span>

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        SOFTWARE DEVELOPMENT
      </span>

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        DATA ANALYTICS
      </span>

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        DIGITAL MARKETING
      </span>

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        BUSINESS AUTOMATION
      </span>

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        FULL STACK DEVELOPMENT
      </span>

      {/* Duplicate for infinite loop */}

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        AI AUTOMATION
      </span>

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        SOFTWARE DEVELOPMENT
      </span>

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        DATA ANALYTICS
      </span>

      <span className="mx-8 text-white">•</span>

      <span className="mx-8 text-cyan-400">
        DIGITAL MARKETING
      </span>

    </div>

  </div>

</section>

      {/* Why Work With Axora */}
<motion.section
  id="services"
  className="py-32 px-8"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-6">
      Why Work With <span className="text-cyan-400">Axora</span>?
    </h2>

    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 text-lg">
      We combine technology, innovation and business understanding to deliver
      solutions that create real impact.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      {/* Card 1 */}
      <div className="bg-[#07133D] border border-cyan-500/20 rounded-2xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

        <div className="text-cyan-400 text-5xl font-bold mb-6">
          01
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Business-Focused Solutions
        </h3>

        <p className="text-gray-400 leading-8">
          We don't just build software. We create solutions that solve real
          business problems and help organizations grow efficiently.
        </p>

      </div>

      {/* Card 2 */}
      <div className="bg-[#07133D] border border-cyan-500/20 rounded-2xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

        <div className="text-cyan-400 text-5xl font-bold mb-6">
          02
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Modern Technology Stack
        </h3>

        <p className="text-gray-400 leading-8">
          From AI and Data Analytics to Full Stack Development, we use modern
          technologies to build scalable and future-ready systems.
        </p>

      </div>

      {/* Card 3 */}
      <div className="bg-[#07133D] border border-cyan-500/20 rounded-2xl p-10 hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

        <div className="text-cyan-400 text-5xl font-bold mb-6">
          03
        </div>

        <h3 className="text-2xl font-bold mb-4">
          Long-Term Partnership
        </h3>

        <p className="text-gray-400 leading-8">
          We believe in building long-term relationships by providing reliable
          support, transparency and continuous improvement.
        </p>

      </div>

    </div>

  </div>

</motion.section>

<div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-20"></div>

      
      {/* Why Choose Us */}
{/* Services Section */}
<section className="py-32 px-8">

  <h2 className="text-5xl font-bold text-center mb-6 relative">
  <span className="absolute inset-0 blur-3xl bg-cyan-500/10"></span>
  <span className="relative">
    Our Services
  </span>
</h2>

  <p className="text-center text-gray-400 max-w-3xl mx-auto mb-16 text-lg">
    We help businesses leverage technology, automation, data and digital
    marketing to scale faster and operate smarter.
  </p>

  <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">

    {/* AI Automation */}
    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-4 text-cyan-400">
        AI Automation
      </h3>
      <p className="text-gray-400">
        Automate repetitive workflows and increase productivity with
        intelligent AI-powered systems.
      </p>
    </div>

    {/* Software Development */}
    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-4 text-cyan-400">
        Software Development
      </h3>
      <p className="text-gray-400">
        Custom web applications and scalable software solutions built for
        modern businesses.
      </p>
    </div>

    {/* Web Development */}
    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-4 text-cyan-400">
        Web Development
      </h3>
      <p className="text-gray-400">
        Fast, responsive and professional websites designed to grow your
        online presence.
      </p>
    </div>

    {/* Data Analytics */}
    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-4 text-cyan-400">
        Data Analytics
      </h3>
      <p className="text-gray-400">
        Transform raw business data into valuable insights and smarter
        decision-making.
      </p>
    </div>

    {/* Digital Marketing */}
    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-4 text-cyan-400">
        Digital Marketing
      </h3>
      <p className="text-gray-400">
        SEO, social media marketing, content strategies and lead generation
        to grow your brand online.
      </p>
    </div>

    {/* AI Solutions */}
    <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-400 transition">
      <h3 className="text-2xl font-bold mb-4 text-cyan-400">
        AI Solutions
      </h3>
      <p className="text-gray-400">
        Custom AI chatbots, predictive systems and intelligent solutions
        tailored to your business.
      </p>
    </div>

  </div>

</section>

<div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-20"></div>

{/* About Company Section */}
<section
  id="about"
  className="py-32 px-8"
>

  <div className="max-w-6xl mx-auto">

    <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-12">

      <h2 className="text-5xl font-bold text-center mb-12">
        About Axora Technologies
      </h2>

      <div className="max-w-4xl mx-auto">

        <p className="text-gray-300 text-lg leading-8 mb-8">
          Axora Technologies is a forward-thinking technology company focused on
          helping businesses accelerate growth through Artificial Intelligence,
          Automation, Software Development, Data Analytics and Digital Marketing.
          We combine innovation, technology and data-driven strategies to build
          solutions that improve efficiency, enhance decision-making and create
          measurable business value.
        </p>

        <p className="text-gray-400 text-lg leading-8 mb-8">
          Our expertise spans intelligent workflow automation, custom software
          applications, business analytics platforms and modern digital
          transformation solutions. By understanding each client's unique goals,
          we deliver scalable and future-ready systems that help organizations
          stay competitive in a rapidly evolving digital landscape.
        </p>

        <p className="text-gray-400 text-lg leading-8 mb-8">
          At Axora Technologies, we believe technology should do more than solve
          problems—it should create opportunities. Our mission is to simplify
          complex processes, unlock the power of data and enable businesses to
          operate smarter, faster and more effectively through innovative
          technology solutions.
        </p>

        <div className="border-l-4 border-cyan-400 pl-6 mt-10">
          <p className="text-xl text-cyan-400 font-semibold mb-2">
            Our Vision
          </p>

          <p className="text-gray-300 leading-8">
            To become a trusted technology partner for businesses worldwide by
            delivering innovative AI-powered solutions that drive sustainable
            growth, digital transformation and long-term success.
          </p>
        </div>

      </div>

    </div>

  </div>

</section>

<div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-20"></div>

{/* Featured Projects */}
<section
  id="projects"
  className="py-32 px-8"
>

  <div className="max-w-7xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-6">
      Featured Projects
    </h2>

    <p className="text-center text-gray-400 max-w-3xl mx-auto mb-20 text-lg">
      Showcasing innovative solutions built to solve real-world challenges.
    </p>

    <div className="grid md:grid-cols-3 gap-8">

      <div className="bg-[#07133D] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition-all">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          EcoDrop
        </h3>

        <p className="text-gray-400 leading-8">
          Smart E-Waste Management platform focused on efficient collection,
          tracking and responsible disposal of electronic waste.
        </p>
      </div>

      <div className="bg-[#07133D] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition-all">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          AI Business Solutions
        </h3>

        <p className="text-gray-400 leading-8">
          Custom AI-powered systems designed to automate workflows and improve
          business productivity.
        </p>
      </div>

      <div className="bg-[#07133D] border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400 transition-all">
        <h3 className="text-2xl font-bold text-cyan-400 mb-4">
          Data Analytics Dashboard
        </h3>

        <p className="text-gray-400 leading-8">
          Interactive analytics platform that transforms raw data into
          actionable business insights.
        </p>
      </div>

    </div>

  </div>

</section>

<div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-20"></div>

{/* Founder Section */}
<motion.section
  id="about"
  className="py-32 px-8"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>

  <div className="max-w-7xl mx-auto">

    <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-12">

      <h2 className="text-5xl font-bold text-center mb-16">
        Meet The Founder
      </h2>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Founder Image */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full"></div>

            <img
              src="/aditya.png"
              alt="Aditya Naik"
              className="relative w-[350px] h-[350px] object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_50px_rgba(0,180,255,0.4)]"
            />

          </div>

        </div>

        {/* Founder Content */}
        <div>

          <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Founder & CEO
          </p>

          <h3 className="text-5xl font-bold mb-6">
            Aditya Naik
          </h3>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            Aditya Naik founded Axora Technologies with a vision to help
    businesses leverage AI, automation, software development and
    digital solutions to achieve sustainable growth.
          </p>

          <p className="text-gray-400 text-lg leading-8 mb-6">
            He is currently developing EcoDrop, a technology-driven E-Waste
    Management platform focused on simplifying electronic waste
    collection, tracking and responsible disposal.
          </p>

          <p className="text-gray-400 text-lg leading-8">
            As an Information Technology Engineer, Full Stack Developer,
    Data Analyst and aspiring Data Scientist, Aditya aims to build
    impactful digital products that drive innovation and growth.
          </p>

        </div>

      </div>

    </div>

  </div>

</motion.section>

<div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-20"></div>

<section className="py-32 px-8">

  <div className="max-w-6xl mx-auto">

    <h2 className="text-5xl font-bold text-center mb-6">
      Our Process
    </h2>

    <p className="text-gray-400 text-center max-w-3xl mx-auto mb-20">
      A structured approach that ensures every project is delivered with
      quality, efficiency and measurable results.
    </p>

    <div className="grid md:grid-cols-4 gap-8">

      <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-8 text-center">
        <div className="text-5xl font-bold text-cyan-400 mb-4">01</div>
        <h3 className="text-2xl font-semibold mb-4">Discovery</h3>
        <p className="text-gray-400">
          Understanding your business goals, challenges and requirements.
        </p>
      </div>

      <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-8 text-center">
        <div className="text-5xl font-bold text-cyan-400 mb-4">02</div>
        <h3 className="text-2xl font-semibold mb-4">Strategy</h3>
        <p className="text-gray-400">
          Creating a roadmap and selecting the best technology solutions.
        </p>
      </div>

      <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-8 text-center">
        <div className="text-5xl font-bold text-cyan-400 mb-4">03</div>
        <h3 className="text-2xl font-semibold mb-4">Development</h3>
        <p className="text-gray-400">
          Designing, developing and testing high-quality digital products.
        </p>
      </div>

      <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-8 text-center">
        <div className="text-5xl font-bold text-cyan-400 mb-4">04</div>
        <h3 className="text-2xl font-semibold mb-4">Launch</h3>
        <p className="text-gray-400">
          Deployment, optimization and continuous business growth support.
        </p>
      </div>

    </div>

  </div>

</section>

<div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-20"></div>

{/* CTA Section */}
<section
  id="contact"
  className="py-32 px-8"
>
  <div className="max-w-6xl mx-auto">

    <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-16 text-center">

      <h2 className="text-5xl font-bold mb-6">
  Let's Build Something Extraordinary
</h2>

      <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-10">
  Partner with Axora Technologies to create intelligent software,
  AI-powered solutions and digital experiences that drive innovation,
  efficiency and long-term business growth.
</p>

      <div className="flex justify-center gap-4 flex-wrap">

        <button className="px-10 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 hover:scale-105 transition-all">
          Start Your Project
        </button>

        <button className="px-10 py-4 rounded-full border border-cyan-400 hover:bg-cyan-400/10 transition-all">
          Contact Us
        </button>

      </div>

    </div>

  </div>

</section>




<section id="faq" className="py-32 overflow-hidden">

  <div className="max-w-5xl mx-auto h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-20"></div>

  <div className="text-center mb-16">

  <span className="px-4 py-2 rounded-full border border-cyan-400/30 text-cyan-400 text-xs tracking-[0.25em] uppercase">
    FAQ
  </span>

  <h2 className="text-5xl md:text-6xl font-bold mt-6">
    Got Questions?
  </h2>

  <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mt-2">
    We've Got Answers.
  </h3>

  <p className="text-gray-400 mt-5 text-lg max-w-2xl mx-auto">
    Everything you need to know about working with Axora Technologies.
  </p>

</div>

  {/* Top Row */}
  <div className="faq-row">
    <div className="faq-track">

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          How long does a project take?
        </h3>
        <p className="text-gray-300 leading-7">
          Most projects are delivered within 2–8 weeks depending on scope.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you build custom software?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, every solution is tailored to your business requirements.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you provide AI automation?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, we automate workflows using modern AI technologies.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Can you build dashboards?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, we create analytics dashboards and reporting systems.
        </p>
      </div>

      {/* Duplicate for Infinite Loop */}

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          How long does a project take?
        </h3>
        <p className="text-gray-300 leading-7">
          Most projects are delivered within 2–8 weeks depending on scope.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you build custom software?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, every solution is tailored to your business requirements.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you provide AI automation?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, we automate workflows using modern AI technologies.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Can you build dashboards?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, we create analytics dashboards and reporting systems.
        </p>
      </div>

    </div>
  </div>

  {/* Bottom Row */}
  <div className="faq-row reverse mt-8">
    <div className="faq-track">

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you offer data analytics?
        </h3>
        <p className="text-gray-300 leading-7">
          We transform raw data into actionable business insights.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Can you redesign existing software?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, we modernize and improve existing systems.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you provide support?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, ongoing maintenance and support are available.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you work with startups?
        </h3>
        <p className="text-gray-300 leading-7">
          Absolutely. We help startups and growing businesses.
        </p>
      </div>

      {/* Duplicate for Infinite Loop */}

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you offer data analytics?
        </h3>
        <p className="text-gray-300 leading-7">
          We transform raw data into actionable business insights.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Can you redesign existing software?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, we modernize and improve existing systems.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you provide support?
        </h3>
        <p className="text-gray-300 leading-7">
          Yes, ongoing maintenance and support are available.
        </p>
      </div>

      <div className="faq-card min-w-[420px]">
        <h3 className="text-cyan-400 text-xl font-bold mb-4">
          Do you work with startups?
        </h3>
        <p className="text-gray-300 leading-7">
          Absolutely. We help startups and growing businesses.
        </p>
      </div>

    </div>
  </div>

</section>

<section className="py-24 px-8">

  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">

      <p className="text-cyan-400 uppercase tracking-[0.3em] mb-4">
        Trusted Growth Partner
      </p>

      <h2 className="text-5xl font-bold mb-4">
  Built For Startups &
  <span className="text-cyan-400"> Growing Businesses</span>
</h2>

      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Delivering intelligent software, AI solutions and digital innovation
        that help businesses scale faster and operate smarter.
      </p>

    </div>

    <div className="grid md:grid-cols-4 gap-6">

  <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-8 text-center transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,200,255,0.25)] hover:scale-105">
    <h3 className="text-5xl font-bold text-cyan-400 mb-3">
      AI
    </h3>
    <p className="text-gray-300">
      Powered Solutions
    </p>
  </div>

  <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-8 text-center transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,200,255,0.25)] hover:scale-105">
    <h3 className="text-5xl font-bold text-cyan-400 mb-3">
      100%
    </h3>
    <p className="text-gray-300">
      Custom Development
    </p>
  </div>

  <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-8 text-center transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,200,255,0.25)] hover:scale-105">
    <h3 className="text-5xl font-bold text-cyan-400 mb-3">
      Full
    </h3>
    <p className="text-gray-300">
      End-to-End Support
    </p>
  </div>

  <div className="bg-[#07133D] border border-cyan-500/20 rounded-3xl p-8 text-center transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(0,200,255,0.25)] hover:scale-105">
    <h3 className="text-5xl font-bold text-cyan-400 mb-3">
      Data
    </h3>
    <p className="text-gray-300">
      Driven Approach
    </p>
  </div>

</div>

    
  </div>

</section>

{/* Footer */}
<footer className="border-t border-cyan-500/10 py-20 px-8 bg-[#01071F]">

  <div className="max-w-7xl mx-auto">

    <div className="grid md:grid-cols-4 gap-12">

      {/* Brand */}
      <div>
        <h2 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          AXORA
        </h2>

        <p className="text-gray-400 leading-7">
          AI, Automation, Software Development, Data Analytics and Digital
          Solutions designed to help businesses scale faster.
        </p>
      </div>

      {/* Services */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-5">
          Services
        </h3>

        <ul className="space-y-3 text-gray-400">
          <li>AI Automation</li>
          <li>Custom Software</li>
          <li>Data Analytics</li>
          <li>Digital Marketing</li>
        </ul>
      </div>

      {/* Company */}
     <div>
  <h3 className="text-white font-semibold text-lg mb-5">
    Company
  </h3>

  <div className="flex flex-col space-y-3 text-gray-400">
    <a href="#home" className="hover:text-cyan-400 transition">
      Home
    </a>

    <a href="#services" className="hover:text-cyan-400 transition">
      Services
    </a>

    <a href="/packages" className="hover:text-cyan-400 transition">
  Contact
</a>

    <a href="#about" className="hover:text-cyan-400 transition">
      About
    </a>

    <a href="#projects" className="hover:text-cyan-400 transition">
      Projects
    </a>

    <a href="#contact" className="hover:text-cyan-400 transition">
      Contact
    </a>
  </div>
</div>

      {/* Contact */}
      <div>
        <h3 className="text-white font-semibold text-lg mb-5">
          Contact
        </h3>

        <ul className="space-y-3 text-gray-400">
          <li>Pune, Maharashtra</li>
          <li>hello@axora.in</li>
          <li>+91 XXXXX XXXXX</li>
        </ul>
      </div>

    </div>

    {/* Divider */}
    <div className="border-t border-cyan-500/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

      <p className="text-gray-500 text-sm">
        © 2026 Axora Technologies. All Rights Reserved.
      </p>

      {/* Social Links */}
      <div className="flex gap-6 mt-4 md:mt-0 text-gray-400">

        <a
          href="https://linkedin.com"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          Instagram
        </a>

        <a
          href="mailto:hello@axora.in"
          className="hover:text-cyan-400 transition"
        >
          Email
        </a>

      </div>

    </div>

  </div>

</footer>
      

    </main>
  );
}