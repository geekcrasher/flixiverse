type DataFallbackProp = {
  title: string
  message: string
}

const DataFallback = ({ title, message }: DataFallbackProp) => {
  return (
    <section className="mt-20 space-y-4">
      <h2 className="font-poppins font-semibold text-base text-turquoise">
        {title}
      </h2>
      <p className="text-gray-400 text-center text-sm">{message}</p>
    </section>
  );
}

export default DataFallback;