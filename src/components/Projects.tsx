import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: "Telecom Bot for RADCOM",
    description: "AI-powered chatbot for assisting telecom network engineers using 3GPP standards.",
    details: [
      "Developed an AI-powered chatbot to assist network engineers in understanding telecom concepts, referencing 3GPP standards.",
      "Fine-tuned LLaMA 3.2 (3B) model to enhance domain-specific responses.",
      "Provides not only textual explanations but also related diagrams and DOCX files for better comprehension.",
      "Implemented RAG-based retrieval using Qdrant Vector DB for efficient document querying.",
      "Deployed the chatbot using AWS S3 for seamless document management."
    ],
    github: "https://github.com/Sunny15611/TeleRadcomBot",
    image: "https://miro.medium.com/v2/resize:fit:1000/0*BhM26D20U6-DzgYJ.png"
  },
  {
    title: "Fine-Tuning LLM Model on Telecom Datasets",
    description: "Optimized LLaMA2-7B for telecom-related Q&A with enhanced performance metrics.",
    details: [
      "Fine-tuned the LLaMA2-7B LLM model for telecom-related queries, improving response accuracy.",
      "Used QLoRA for efficient memory optimization and training speed-up.",
      "Implemented LoRA techniques to reduce trainable parameters while maintaining high BLEU score (0.43).",
      "Evaluated model performance using Rouge Score and conducted benchmarking against baseline models.",
      "Developed an API interface to integrate the fine-tuned model into telecom applications."
    ],
    github: "https://github.com/sunny1561/FineTuning-Question-Answer",
    image: "https://assets-global.website-files.com/614c82ed388d53640613982e/653775b2bdff592188a789dd_large-language-models-llm-fine-tuning.webp"
  },
  {
    title: "Real-time Docs-Based Chat App (RAG System)",
    description: "A Streamlit-based RAG system for interacting with uploaded documents in real time.",
    details: [
      "Developed a user-friendly document-based chatbot using RAG techniques.",
      "Integrated Pinecone Vector Database for high-speed retrieval of relevant document sections.",
      "Implemented a seamless UI using Streamlit for document uploads and query processing.",
      "Used Meta LLaMA3-8B for generating accurate and context-aware responses.",
      "Successfully deployed the application on a cloud platform for real-world testing."
    ],
    github: "https://github.com/sunny1561/MultiPdf_ChatBot/tree/master",
    image: "https://assets-global.website-files.com/63ca3d566352c27afde699d2/659ce9925264ae2444284f0b_1.png"
  }
];


export default function Projects() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}