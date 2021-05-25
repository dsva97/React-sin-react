import './style.css'

const Link = ({text, link }, key) => 
  <a className="btn-action" href={link} key={key}>{text}</a>

export default Link
