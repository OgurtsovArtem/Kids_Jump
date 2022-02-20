import Icon from "../Icon/Icon";
import "./Social.scss"

function Social({ className }) {
  return (
    <div className={`${className} social`}>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <Icon className="social__icon" name="instagram-hexagon" />
      </a>
      <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
        <Icon className="social__icon" name="YouTube-hexagon" />
      </a>
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <Icon className="social__icon" name="facebook-hexagon" />
      </a>
    </div>
  )
}

export default Social;
