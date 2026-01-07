import {motion} from 'framer-motion'

export function Footer (){
    return(
    <>
       <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="container mx-auto px-6 py-8 mt-20"
      >
        <div className="text-center text-slate-500">
          <p>© 2026 Miny. All rights reserved.</p>
        </div>
      </motion.footer>
    </>
    )
}