import { motion } from "framer-motion";

export default function Services() {
  return (
    <>
      <div className="flex flex-col justify-center gap-2 overflow-hidden">
        <motion.div initial={{scale: 0.5 }} whileInView={{ scale: 1}} whileHover={{ y: -5 }} className="border bg-white/50 border-black/50 p-4 rounded-2xl">
          <strong>Frontend Development</strong>
          <motion.div initial={{ width: 0}} whileInView={{ width: "40%" }} className="bg-black/50 h-px rounded-4xl"></motion.div>
          <p>Modern React apps with clean UI and smooth UX. <br />
          Stack: React/React Frameworks, TypeScript, Zustand, Framer Motion</p>
        </motion.div>

        <motion.div initial={{scale: 0.5 }} whileInView={{ scale: 1}} whileHover={{ y: -5 }} className="border bg-white/50 border-black/50 p-4 rounded-2xl">
          <strong>Full-Stack Solutions</strong>
          <motion.div initial={{ width: 0}} whileInView={{ width: "40%" }} className="bg-black/50 h-px rounded-4xl"></motion.div>
          <p>Frontend + backend + database. Complete scalable systems. <br />
          Stack: Node.js, TypeScript, PostgreSQL/MySQL/MongoDB, Supabase</p>
        </motion.div>

        <motion.div initial={{scale: 0.5 }} whileInView={{ scale: 1}} whileHover={{ y: -5 }} className="border bg-white/50 border-black/50 p-4 rounded-2xl">
          <strong>Performance Optimization</strong>
          <motion.div initial={{ width: 0}} whileInView={{ width: "40%" }} className="bg-black/50 h-px rounded-4xl"></motion.div>
          <p>Improve speed & Core Web Vitals. <br />
          Includes: Audit + fixes (LCP, CLS, bundle size)</p>
        </motion.div>

        <motion.div initial={{scale: 0.5 }} whileInView={{ scale: 1}} whileHover={{ y: -5 }} className="border bg-white/50 border-black/50 p-4 rounded-2xl">
          <strong>Maintenance & Support</strong>
          <motion.div initial={{ width: 0}} whileInView={{ width: "40%" }} className="bg-black/50 h-px rounded-4xl"></motion.div>
          <p>Updates, bug fixes, improvements. <br />
          Available: Monthly or hourly</p>
        </motion.div>

        <motion.div initial={{scale: 0.5 }} whileInView={{ scale: 1}} whileHover={{ y: -5 }} className="border bg-white/50 border-black/50 p-4 rounded-2xl">
          <strong>Process</strong>
          <motion.div initial={{ width: 0}} whileInView={{ width: "40%" }} className="bg-black/50 h-px rounded-4xl"></motion.div>
          <p>Discovery → Design → Build → Test → Launch</p>
        </motion.div>
      </div>
    </>
  );
}
