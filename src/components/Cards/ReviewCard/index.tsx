import { memo } from "react";
import { type Review } from "@/lib/types";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ReviewHeader from "@/components/Review/ReviewHeader";
import ReadMore from "@/components/Dialog/ReadMore";

type ReviewCardProp = {
  authorInfo: Review
}

const ReviewCard = memo(({ authorInfo }: ReviewCardProp) => {
  return (
    <Card className="bg-petrol border-0">
      <article className="-space-y-2">
        <CardHeader >
          <ReviewHeader authorInfo={authorInfo} />
        </CardHeader>
        <CardContent >
          <blockquote className="text-gray-400 text-[0.9rem] line-clamp-6">
            {authorInfo.content}
          </blockquote>
          {authorInfo.content.length > 380 ? <ReadMore authorInfo={authorInfo} /> : null}
        </CardContent>
      </article>
    </Card>
  );
})

export default ReviewCard;