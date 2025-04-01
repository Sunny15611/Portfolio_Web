// import { motion } from 'framer-motion';
// import { Github, Linkedin, Mail } from 'lucide-react';
// import ResumeDownload from './Resume';
// import ProfilePhoto from "../assets/WhatsApp Image 2025-03-29 at 16.39.17_36c0de56.jpg";
// export default function Hero() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center">
//       <div className="container mx-auto px-6 py-20">
//         <div className="grid md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//           >
//             <img
//               src={ ProfilePhoto }
//               alt="Professional headshot"
//               className="rounded-2xl shadow-2xl h-[420px]"
//             />
//           </motion.div>
          
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-white"
//           >
//     <h1 className="text-4xl md:text-6xl font-bold mb-6">
//   <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
//   Sunny Kumar | Software Engineer - GenAI
//   <span> </span>
//   </span>
//   <span className="text-3xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
   
//   </span>
// </h1>



            
// <p className="text-lg mb-8 text-gray-100 font-bold">
// I am a Software Engineer - GenAI at RADCOM, specializing in Artificial Intelligence (AI), Machine Learning (ML), and Software Development. I hold a B.Tech in Electrical Engineering from IIT Bhilai, with a strong background in AI, NLP, backend engineering, and algorithmic problem-solving.

// At RADCOM, I have led the development of an AI-powered Telecom Bot, enabling network engineers to troubleshoot telecom networks using 3GPP standards. My expertise extends to PCAP file analysis, deep learning optimization, and vector databases, enhancing network automation tools.

// Beyond my full-time role, I also work as a part-time freelancer, building AI/ML solutions, scalable backend architectures, and cloud-based intelligent systems. I have a strong command of C++, Python, Java, FastAPI, Spring Boot, and deep learning frameworks like PyTorch and TensorFlow.

// I am passionate about LLMs, NLP, RAG-based systems, and cloud infrastructure, continuously exploring cutting-edge AI advancements to solve real-world problems.

// 🚀 Let’s connect and innovate together!


//             </p>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="text-purple-600 rounded-full font-semibold transition-all duration-300"
//             >
//               <ResumeDownload />
//             </motion.button>

//             <div className="flex gap-6 mt-8">
//               <motion.a
//                 href="https://www.linkedin.com/in/sunny-soni-911064220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1 }}
//                 className="text-white hover:text-gray-200"
//               >
//                 <Linkedin size={24} />
//               </motion.a>
//               <motion.a
//                 href="https://github.com/sunny1561"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 whileHover={{ scale: 1.1 }}
//                 className="text-white hover:text-gray-200"
//               >
//                 <Github size={24} />
//               </motion.a>
//               <motion.a
//                 href="sunny84a3331@gmail.com"
//                 whileHover={{ scale: 1.1 }}
//                 className="text-white hover:text-gray-200"
//               >
//                 <Mail size={24} />
//               </motion.a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }



import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import ResumeDownload from './Resume';
import ProfilePhoto from "../assets/WhatsApp Image 2025-03-29 at 16.39.17_36c0de56.jpg";

export default function Hero() {
  return (
    <div className="min-h-screen bg-black relative flex items-center">
      {/* Neon Aurora Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff00ff66] to-[#00ffff66] opacity-30 blur-[200px]" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500 opacity-40 rounded-full mix-blend-screen blur-[180px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500 opacity-40 rounded-full mix-blend-screen blur-[180px]" />
      </div>

      <div className="relative container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={ProfilePhoto}
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl h-[420px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
                Sunny Kumar | Software Engineer - GenAI
              </span>
            </h1>

            <p className="text-lg mb-8 text-gray-100 font-bold">
              I am a Software Engineer - GenAI at RADCOM, specializing in Artificial Intelligence (AI), Machine Learning (ML), and Software Development. I hold a B.Tech in Electrical Engineering from IIT Bhilai, with a strong background in AI, NLP, backend engineering, and algorithmic problem-solving.

              At RADCOM, I have led the development of an AI-powered Telecom Bot, enabling network engineers to troubleshoot telecom networks using 3GPP standards. My expertise extends to PCAP file analysis, deep learning optimization, and vector databases, enhancing network automation tools.

              Beyond my full-time role, I also work as a part-time freelancer, building AI/ML solutions, scalable backend architectures, and cloud-based intelligent systems. I have a strong command of C++, Python, Java, FastAPI, Spring Boot, and deep learning frameworks like PyTorch and TensorFlow.

              I am passionate about LLMs, NLP, RAG-based systems, and cloud infrastructure, continuously exploring cutting-edge AI advancements to solve real-world problems.

              🚀 Let’s connect and innovate together!
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-purple-600 rounded-full font-semibold transition-all duration-300"
            >
              <ResumeDownload />
            </motion.button>

            <div className="flex gap-6 mt-8">
              <motion.a
                href="https://www.linkedin.com/in/sunny-soni-911064220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-gray-200"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://github.com/sunny1561"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-gray-200"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="mailto:sunny84a3331@gmail.com"
                whileHover={{ scale: 1.1 }}
                className="text-white hover:text-gray-200"
              >
                <Mail size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
