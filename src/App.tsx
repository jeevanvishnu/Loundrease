import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import FloatingActions from './components/ui/FloatingActions'
import Services from './components/sections/Services'

const App = () => {
  return (
    <div className="min-h-screen bg-[#dfe4e0] selection:bg-primary-yellow selection:text-dark-green">
      <Navbar />
      <main className="pt-[126px]">
        <Hero />
        <section className="h-[132px] bg-[#dfe4e0]" />
        <Services />
      </main>
      <FloatingActions />
      
    </div>
  )
}

export default App
