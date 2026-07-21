import { useState } from "react";
import CertificatesText from "./CertificatesText";
import SingleCertificate from "./SingleCertificate";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

// TODO: replace placeholder values with your real certificate details.
// - image: put the cert screenshot/PDF export under public/images/certificates/
// - link: the public verification/credential URL (NAVTTC verification link,
//   or your Cisco Networking Academy / Credly badge share link)
const allCertificates = [
  {
    name: "JavaScript FullStack (MEAN/MERN)", // e.g. "Web Development" or whatever your NAVTTC cert title is
    issuer: "NAVTTC",
    date: "2026",
    category: "navttc",
    image: "./images/certificates/navttc-cert.webp",
    link: "#",
  },
  {
    name: "HTML Essentials", 
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "cisco",
    image: "/images/certificates/htmlcerti.webp",
    link: "#",
  },
  {
    name: "CSS Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "cisco",
    image: "/images/certificates/csscerti.webp",
    link: "#",
  },
  {
    name: "JavaScript Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "cisco",
    image: "/images/certificates/jscerti.webp",
    link: "#",
  },
  {
    name: "Python Essentials",
    issuer: "Cisco Networking Academy",
    date: "2025",
    category: "cisco",
    image: "/images/certificates/pythoncerti.webp",
    link: "#",
  },
];

const filterOptions = [
  { label: "All", value: "all" },
  { label: "NAVTTC", value: "navttc" },
  { label: "Cisco Networking Academy", value: "cisco" },
];

const CertificatesMain = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCertificates =
    activeFilter === "all"
      ? allCertificates
      : allCertificates.filter((c) => c.category === activeFilter);

  return (
    <div id="certificates" className="max-w-[1200px] mx-auto px-4">
      {/* HEADING */}
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificatesText />
      </motion.div>

      {/* FILTERS */}
      <div className="flex gap-4 justify-center flex-wrap mt-10">
        {filterOptions.map((btn) => (
          <button
            key={btn.value}
            onClick={() => setActiveFilter(btn.value)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 ${
              activeFilter === btn.value
                ? "bg-[#f59e0b] text-black border-[#f59e0b]"
                : "border-[#f59e0b] text-[#f59e0b] hover:bg-[#f59e0b] hover:text-black"
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* CERTIFICATES GRID */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        <AnimatePresence>
          {filteredCertificates.length > 0 ? (
            filteredCertificates.map((cert) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.3 } }}
                layout
              >
                <SingleCertificate
                  name={cert.name}
                  issuer={cert.issuer}
                  date={cert.date}
                  image={cert.image}
                  link={cert.link}
                />
              </motion.div>
            ))
          ) : (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center text-[#f59e0b] text-lg mt-8 col-span-full"
            >
              No certificates found for this filter.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CertificatesMain;