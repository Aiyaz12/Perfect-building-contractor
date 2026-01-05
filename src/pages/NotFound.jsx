import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 bg-brand-muted text-center">
    <p className="text-xs uppercase tracking-[0.5em] text-brand-accent">
      404
    </p>
    <h1 className="font-heading text-4xl text-gray-900">
      The page drifted off-site
    </h1>
    <p className="max-w-md text-gray-600">
      Please return to the homepage to continue exploring perfect building contractor.
    </p>
    <Link
      to="/"
      className="rounded-full border border-gray-900 px-6 py-3 text-sm uppercase tracking-[0.4em] text-gray-900"
    >
      Back Home
    </Link>
  </div>
)

export default NotFound

