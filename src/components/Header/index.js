import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <p className="website-logo">BS</p>
      <ul className="nav-menu">
        <li>
          <a
            href="https://www.linkedin.com/in/subhani-shaik-0bb6b622b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-linkedin-img.png"
              alt="Linked In"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/BabaSubhani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-github-img.png"
              alt="Git Hub"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/subhani-shaik-0bb6b622b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="social-network-img"
              src="https://assets.ccbp.in/frontend/react-js/projects-twitter-img.png"
              alt="Twitter"
            />
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
