import Link from '../Link'
import './style.css'

const Component = ({ title, content, actions=[] }) => (
  <div className="panel">
    <h1>{title}</h1>
    <p>{content}</p>
    <div className="panel__actions">
      { actions.map(Link) }
    </div>
  </div>
);

export default Component
