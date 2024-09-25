type HeadingProp = {
  title: string
}

const Heading = ({ title }: HeadingProp) => {
  return (
    <section className="flex items-center gap-3">
      <div className="h-5 md:h-6 w-1 bg-turquoise"></div>
      <h5 className="font-roboto font-semibold text-lg sm:text-xl xl:text-2xl text-slate-200">{title}</h5>
    </section>
  )
}

export default Heading;