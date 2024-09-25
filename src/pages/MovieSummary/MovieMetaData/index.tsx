import Heading from "@/components/Heading";
import { useMovieFilteredDetails } from "@/hooks/useMovieFilteredDetails";
import { cn } from "@/lib/utils";
import DateFormatter from "../DateFormatter";
import Title from "./Title";
import Container from "./Container";

const MovieMetaData = ({ className }: { className?: string }) => {

  const { movieFilteredDetails } = useMovieFilteredDetails()
  const {
    tagline,
    release_date,
    status, revenue,
    production_countries,
    production_companies,
    spoken_languages
  } = movieFilteredDetails

  return (
    <section className={cn("text-white space-y-6", className)}>
      <Heading title="More Info" />
      <section className="text-gray-400 space-y-4">
        <Container>
          <Title title="Tagline:" />
          <p>{tagline !== '' ? tagline : 'N/A'}</p>
        </Container>
        <Container>
          <Title title="Release date:" />
          <DateFormatter isoDate={release_date} />
        </Container>
        <Container>
          <Title title="Status:" />
          <p>{status}</p>
        </Container>
        <Container>
          <Title title="Revenue:" />
          <p>{revenue === 0 ? 'N/A' : revenue.toLocaleString()}</p>
        </Container>
        <Container>
          <Title title="Language:" />
          <section className="flex items-center gap-1">
            {
              spoken_languages.length > 0 ?
                spoken_languages.map((language) => (
                  <p key={language.iso_639_1}>{language.english_name},</p>
                )) : (
                  <p>N/A</p>
                )
            }
          </section>
        </Container>
      </section>

      <section className="sm:flex items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <Title title="Country of origin:" className="text-nowrap" />
        <section className="flex items-center gap-1">
          {
            production_countries.length > 0 ?
              production_countries.map((country) => (
                <p key={country.iso_3166_1} className="text-gray-400">{country.name},</p>
              )) : (
                <p>N/A</p>
              )
          }
        </section>
      </section>
      <section className="sm:flex items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <Title title="Production companies:" className="text-nowrap" />
        <section className="flex items-center flex-wrap gap-1">
          {
            production_companies.length > 0 ?
              production_companies.map((company) => (
                <p key={company.id} className="text-gray-400">{company.name},</p>
              )) : (
                <p>N/A</p>
              )
          }
        </section>
      </section>
    </section>
  );
}

export default MovieMetaData;