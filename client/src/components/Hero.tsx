import {motion} from 'framer-motion'
import { ArrowRight, Zap, Shield,BarChart3} from 'lucide-react'

export function Hero(){
    return(
            <main className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
              Shorten Your Links,
              <br />
              <span className="text-blue-600">Amplify Your Reach</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto"
          >
            Transform long, complex URLs into clean, shareable links. Track clicks, analyze engagement, and manage all your links in one place.
          </motion.p>

          {/* start button */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg flex items-center gap-2 mx-auto shadow-lg"
            >
              Get Started
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: Zap,
                title: 'Lightning Fast',
                description: 'Generate short links instantly with our optimized infrastructure'
              },
              {
                icon: Shield,
                title: 'Secure & Reliable',
                description: 'Enterprise-grade security keeps your links safe and accessible'
              },
              {
                icon: BarChart3,
                title: 'Detailed Analytics',
                description: 'Track clicks, locations, and devices with comprehensive insights'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white rounded-xl shadow-sm"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-slate-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    )
}