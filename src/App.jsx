
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
const App = () => {

  const fadeOut = () => {
    const elements = document.querySelectorAll('.fade-out');

    for (let i = 0; i < elements.length; i++) {
      const windeowHeight = window.innerHeight;
      const top = elements[i].getBoundingClientRect().top;
      const point = 150;

      if (top < windeowHeight - point) {
        elements[i].classList.add('active');
      } else {
        console.log('not');
        elements[i].classList.remove('active');
      }


    }
  }
  document.addEventListener('scroll', fadeOut);

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
