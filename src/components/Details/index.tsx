import { memo } from "react";
import { cn } from "@/lib/utils";
import {
  type ProductionCountry,
  type ProductionCompany,
  type Language
} from "@/lib/types"
import Heading from "@/components/Heading";
import DateFormatter from "@/pages/MovieSummary/DateFormatter";
import Title from "./Title";
import Container from "./Container";

type MoreDetailsProp = {
  tagline: string
  release_date: string
  status: string
  revenue?: number
  production_countries: ReadonlyArray<ProductionCountry>
  production_companies: ReadonlyArray<ProductionCompany>
  spoken_languages: ReadonlyArray<Language>
  className?: string
}

const MoreDetails = memo(({
  tagline,
  release_date,
  status, revenue,
  production_countries,
  production_companies,
  spoken_languages,
  className
}: MoreDetailsProp) => {

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
          <DateFormatter isoDate={release_date} className="text-base" />
        </Container>
        <Container>
          <Title title="Status:" />
          <p>{status}</p>
        </Container>
        <Container>
          <Title title="Revenue:" />
          <p>{!revenue || revenue === 0 ? 'N/A' : revenue?.toLocaleString()}</p>
        </Container>
        <Container>
          <Title title="Language:" />
          <section className="flex flex-wrap gap-1">
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
      <Container >
        <Title title="Country of origin:" className="text-nowrap" />
        <section className="flex flex-wrap gap-1">
          {
            production_countries.length > 0 ?
              production_countries.map((country) => (
                <p key={country.iso_3166_1} className="text-gray-400">{country.name},</p>
              )) : (
                <p>N/A</p>
              )
          }
        </section>
      </Container>
      <Container>
        <Title title="Production companies:" className="sm:text-nowrap" />
        <section className="flex flex-wrap gap-1">
          {
            production_companies.length > 0 ?
              production_companies.map((company) => (
                <p key={company.id} className="text-gray-400">{company.name},</p>
              )) : (
                <p>N/A</p>
              )
          }
        </section>
      </Container>
    </section>
  );
})

export default MoreDetails;