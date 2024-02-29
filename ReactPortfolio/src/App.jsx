import Header from './components/Header'
import Project from './components/Project'
import Footer from './components/Footer'
import './App.css'

function Portfolio() {
  const projects = [
    { title: 'Pet Seeker', description: 'The Pet Seeker is an interactive pet adoption locator app.' },
    { title: 'Finance Handlers', description: 'Finance Handlers is a simple budget tracking app.'},

  ];

  return (
    <div>
      {projects.map((project, index) => (
        <Project key={index} title={project.title} description={project.description} imageUrl={project.imageUrl} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <Navigation/>
      <Portfolio />
      <Footer />
    </div>

  );
}

export default App
