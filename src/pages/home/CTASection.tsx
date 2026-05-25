  import { motion } from "framer-motion";


  const CTASection = () => {
    return (
      <section className=" relative overflow-hidden">
       
        <motion.div
          animate={{
            boxShadow: [
              "0 0 30px rgba(21,101,192,0.25)",
              "0 0 80px rgba(21,101,192,0.45)",
              "0 0 30px rgba(21,101,192,0.25)",
            ],
            y: [0, -6, 0],
          }}
          transition={{ repeat: Infinity, duration: 3 }}
          whileHover={{ scale: 1.02 }}
          className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-sky-500  p-10 text-center text-white overflow-hidden"
        >
          {/* Particles */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-10 left-10 w-3 h-3 bg-white rounded-full animate-ping" />
            <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-amber-300 rounded-full animate-pulse" />
            <div className="absolute bottom-10 right-20 w-3 h-3 bg-white rounded-full animate-bounce" />
          </div>

    

          <h2 className="text-5xl md:text-6xl font-black leading-tight">
            Ready To Build Your
            Next Big Project?
          </h2>

          <p className="max-w-7xl mx-auto mt-8 text-lg text-white">
            Let's create powerful digital experiences together with modern technologies, stunning UI
            and scalable architecture.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center items-center">
            <button className="bg-white text-blue-800 px-10 py-3 rounded-full font-bold hover:scale-105 hover:shadow-xl transition-all duration-300">
              Start Your Project
            </button>
            <button className="border border-white/60 px-10 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
              Talk to Expert
            </button>
          </div>

          <div className="absolute inset-0 rounded-[45px] border border-white/20" />
        </motion.div>
      </section>
    );
  };

  export default CTASection;
