// import { motion } from 'framer-motion';
// import { Briefcase } from 'lucide-react';

// const experiences = [
//   {
//     title: "Software Engineer - GenAI",
//     company: "RADCOM",
//     duration: "Jul 2024 - Present",
//     details: [
//       "Developed an end-to-end AI-powered Telecom Bot to assist RADCOM Network Engineers in troubleshooting and understanding telecom concepts using 3GPP standards.",
//       "Built tools similar to Wireshark for analyzing PCAP files, enabling telecom network troubleshooting and Root Cause Analysis through text-based interaction.",
//       "Implemented Named Entity Recognition (NER) on 3GPP datasets to extract key telecom entities.",
//       "Designed and structured a Knowledge Graph (KG) focusing on Protocols, Network Functions, Interfaces, and Technologies.",
//       "Optimized deep learning models to enhance response accuracy and efficiency for telecom-related queries."
//     ]
//   }
// ];


// export default function Experience() {
//   return (
//     <section className="py-20 bg-white">
//       <div className="max-w-4xl mx-auto px-4">
//         <motion.h2 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-5xl font-bold text-center mb-12"
//         >
//          Professional  Experience
//         </motion.h2>
        
//         <div className="space-y-8">
//           {experiences.map((exp, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="bg-gray-50 rounded-lg p-6 shadow-lg"
//             >
//               <div className="flex items-start gap-4">
//                 <div className="p-2 bg-blue-100 rounded-lg">
//                   <Briefcase className="text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-xl font-bold">{exp.title}</h3>
//                   <p className="text-gray-600">{exp.company}</p>
//                   <p className="text-sm text-gray-500 mb-4">{exp.duration}</p>
//                   <ul className="list-disc list-inside space-y-2">
//                     {exp.details.map((detail, i) => (
//                       <li key={i} className="text-gray-700">{detail}</li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Software Engineer - GenAI",
    company: "RADCOM",
    duration: "Jul 2024 - Present",
    details: [
      "Developed an end-to-end AI-powered Telecom Bot to assist RADCOM Network Engineers in troubleshooting and understanding telecom concepts using 3GPP standards.",
      "Built tools similar to Wireshark for analyzing PCAP files, enabling telecom network troubleshooting and Root Cause Analysis through text-based interaction.",
      "Implemented Named Entity Recognition (NER) on 3GPP datasets to extract key telecom entities.",
      "Designed and structured a Knowledge Graph (KG) focusing on Protocols, Network Functions, Interfaces, and Technologies.",
      "Optimized deep learning models to enhance response accuracy and efficiency for telecom-related queries."
    ]
  }
];

export default function Experience() {
  return (
    <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12 text-white"
        >
         Professional Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-500 rounded-lg">
                  <Briefcase className="text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-gray-300">{exp.company}</p>
                  <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside space-y-2 text-gray-200">
                    {exp.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
