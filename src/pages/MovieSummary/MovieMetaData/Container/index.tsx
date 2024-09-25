
const Container = ({
  children
}: {
  children: React.ReactNode
}) => {
  return <section className="flex items-center space-x-4">{children}</section>;
}

export default Container;