import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <div className="flex flex-col gap-2 overflow-hidden">
        <motion.div initial={{ y: -100 }} whileInView={{ y: 0 }} transition={{ type: "spring", stiffness: 45 }} className="flex justify-center gap-2 items-center bg-black/10 p-4 rounded-4xl">
          <div className="w-20 h-20 rounded-full relative">
          <motion.img
          loading="lazy"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1.1 }}
            src="/images/me.webp"
            alt="me"
            width={80}
            height={80}
            className="bg-black/40 rounded-full"
          />
          </div>
          <p className="text-center "> CHIDUBEM PAUL OGBU</p>
        </motion.div>

        <motion.div initial={{ y: 100 }} whileInView={{ y: 0 }} transition={{ type: "spring", stiffness: 45 }} className="rounded-2xl w-full bg-black/10 p-4 mb-2">
          <p>
            I help startups and businesses build <strong>modern</strong>, <strong>scalable web
            applications</strong>. <br /> As a <strong>full-stack developer</strong> specializing in <strong>TypeScript</strong>,
            <strong> React</strong>, and <strong>supabase</strong>, I design and develop applications that are
            <strong> fast</strong>, <strong>maintainable</strong>, and <strong>built for growth</strong>. <br /> I focus on <strong>clean
            architecture</strong>, <strong>performance optimization</strong>, and <strong>user-centered design</strong> to
            ensure your product doesn’t just work , <strong>it works well</strong>. <br /> If you’re
            looking for a developer to build a website for your projects, I’d be
            glad to collaborate. <br /> <strong>Let’s build something solid</strong>.
          </p>
        </motion.div>
      </div>
    </>
  );
}
