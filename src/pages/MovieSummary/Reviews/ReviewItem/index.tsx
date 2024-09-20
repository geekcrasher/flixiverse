import { memo } from "react";
import { type ReviewResult } from "@/lib/types";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog"
import ReviewHeader from "./ReviewHeader";

type ReviewItemProp = {
  authorInfo: ReviewResult
}

const ReviewItem = memo(({ authorInfo }: ReviewItemProp) => {

  const {
    author,
    author_details,
    created_at,
    updated_at,
    content
  } = authorInfo;

  return (
    <>
      <article className="space-y-6 bg-gray-700 p-3 rounded-lg">
        <ReviewHeader
          author={author}
          author_details={author_details}
          created_at={created_at}
          updated_at={updated_at}
        />
        <section>
          <blockquote className="text-gray-400 text-[0.8rem] line-clamp-5">
            {content}
          </blockquote>
          {content.length > 330 &&
            <Dialog>
              <DialogTrigger className="text-turquoise text-[0.8rem] font-medium">
                Read More
              </DialogTrigger>
              <DialogContent className="bg-gray-700 border-0 rounded-lg p-4 sm:p-6">
                <DialogHeader>
                  <ReviewHeader
                    author={author}
                    author_details={author_details}
                    created_at={created_at}
                    updated_at={updated_at}
                  />
                </DialogHeader>
                <section className="max-h-[25rem] text-gray-400 text-sm overflow-y-auto">
                  {content}
                </section>
              </DialogContent>
            </Dialog>
          }
        </section>
      </article>
    </>
  );
})

export default ReviewItem;