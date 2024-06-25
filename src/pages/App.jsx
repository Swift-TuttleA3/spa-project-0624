import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/Content'

const App = () =>{
  return (
    <>
      <div className='h-screen'>
      <Header />
        <Content />
        <div className='object-bottom'>
          <Footer />
          </div>
      </div>
    </>
  )
}

export default App;

