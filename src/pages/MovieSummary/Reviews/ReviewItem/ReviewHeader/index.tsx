import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { UserRound, Star } from "lucide-react";
import DateFormatter from "../../DateFormatter";
import { AuthorDetails } from "@/lib/types";

type ReviewHeaderProp = {
  author: string
  author_details: AuthorDetails
  created_at: string
  updated_at: string
}

const ReviewHeader = ({
  author,
  author_details,
  created_at,
  updated_at
}: ReviewHeaderProp) => {
  return (
    <>
      <section className="flex items-center justify-between">
        <section className="flex items-center gap-3">
          <Avatar className="size-1o">
            <AvatarImage src={`https://image.tmdb.org/t/p/w500/${author_details.avatar_path}`} alt={`${author}'s profile`} />
            <AvatarFallback className="bg-gray-600">
              <UserRound className="size-5 text-gray-400" />
            </AvatarFallback>
          </Avatar>
          <section className="space-y-1">
            <p className="text-turquoise font-medium text-sm">{author}</p>
            <DateFormatter isoDate={`${updated_at ?? created_at}`} />
          </section>
        </section>
        <Badge className="bg-gray-700 space-x-1">
          {author_details.rating ? (
            <>
              <Star color="#FFC30E" fill="#FFC30E" className="size-4" />
              <p className="text-gray-300 text-sm">{author_details.rating?.toFixed(1)}</p>
            </>) :
            <p className="text-gray-300 text-[0.7rem]">N/A</p>
          }
        </Badge>
      </section>
    </>
  );
}

export default ReviewHeader;