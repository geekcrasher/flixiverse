type HeadingProp = {
  title: string
}

const Heading = ({ title }: HeadingProp) => {
  return <h5 className="font-medium text-base xl:text-lg text-turquoise">{title}</h5>;
}

export default Heading;