import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="Layout Page Content FullPage NotFoundPage VerticalCenter">
      <div>
        <h1 className="BigTitle">Page Not Found</h1>
        <p>Sorry about that!</p>
        <Link to="/" className="Button Primary">Back to Home</Link>
      </div>
    </div>
  )
}
