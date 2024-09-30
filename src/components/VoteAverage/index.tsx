import { Star } from "lucide-react";

type VoteAverageProp = {
  voteAverage: number
  voteCount: number
}

const VoteAverage = ({ voteAverage, voteCount }: VoteAverageProp) => {
  return (
    <p className="flex items-center gap-2 text-gray-200 font-medium">
      <Star color="#FFC30E" fill="#FFC30E" className="size-6" />
      {voteAverage.toFixed(1)}
      <span className="font-normal text-sm text-gray-400"> | {voteCount}</span>
    </p>
  );
}

export default VoteAverage;