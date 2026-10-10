type SectionHeadingProps = {
  label: string
  title: string
  description?: string
}

function SectionHeading({
  label,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 font-mono text-sm uppercase tracking-[0.2em] text-sky-400">
        {label}
      </p>

      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading