import './style.css'
import './script'

const Card = ({ title, author, content, img }) => (
  <article className="card">
    <header>
      <img src={img} alt={title} />
    </header>
    <main>
      <h1>{title}</h1>
      <i>{author}</i>
      <p>{content}</p>
    </main>
  </article>
);

export default Card
