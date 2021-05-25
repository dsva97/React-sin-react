import Panel from '../components/Panel'
import Card from '../components/Card'
import Link from '../components/Link'
import './style.css'

const App = () => (
  <div id="app">
    <header>
      <img src="https://picsum.photos/40/40" alt="Logo" />
      <nav>
        <Link text="Home" href="/" />
        <Link text="Contact" href="/contact" />
      </nav>
    </header>
    <main>
      <section>
        <Panel />
      </section>
      <section>
        <Card title="Mongo DB" img="https://picsum.photos/300/120?random=1" author="Darwin"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus culpa voluptatibus commodi, dignissimos numquam ullam." />
        
        <Card title="Express JS" img="https://picsum.photos/300/120?random=2" author="Stalin"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus culpa voluptatibus commodi, dignissimos numquam ullam." />

        <Card title="React JS" img="https://picsum.photos/300/120?random=3" author="Santos"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus culpa voluptatibus commodi, dignissimos numquam ullam." />

        <Card title="Node JS" img="https://picsum.photos/300/120?random=4" author="Lenin"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus culpa voluptatibus commodi, dignissimos numquam ullam." />
      </section>
    </main>
    <footer>Hecho con pasión en Los Olivos, Lima - Perú.</footer>
  </div>
)

export default App