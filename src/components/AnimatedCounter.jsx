import useCountUp from '../hooks/useCountUp'

const AnimatedCounter = ({ value, label, suffix = '', duration }) => {
  const { ref, value: current } = useCountUp(value, { duration })

  return (
    <div
      ref={ref}
      className="rounded-3xl border border-black/5 bg-white/60 p-6 shadow-soft/30 backdrop-blur"
    >
      <p className="font-heading text-4xl text-gray-900">
        {current}
        <span className="text-brand-accent">{suffix}</span>
      </p>
      <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
        {label}
      </p>
    </div>
  )
}

export default AnimatedCounter

