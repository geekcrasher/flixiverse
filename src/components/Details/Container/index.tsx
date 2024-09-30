
type ContainerProp = {
  children?: React.ReactNode
}

const Container = ({ children }: ContainerProp) => {
  return (
    <section className="flex space-x-4">
      {children}
    </section>
  )
}

export default Container;