import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";


export default function Home(){
    return(
        <>
        <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100">
            <Header />
            <Hero />
            <Footer />
        </div>
        </>
    )
}