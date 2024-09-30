import { type Review } from "@/lib/types";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogHeader
} from "@/components/ui/dialog";
import ReviewHeader from "@/components/Review/ReviewHeader";


type ReadMore = {
  authorInfo: Review
}

const ReadMore = ({ authorInfo }: ReadMore) => {
  return (
    <Dialog>
      <DialogTrigger className="text-turquoise text-[0.8rem] font-medium">
        Read More
      </DialogTrigger>
      <DialogContent
        className="bg-gray-700 border-0 rounded-lg p-6"
        aria-describedby={undefined}
      >
        <DialogTitle className="sr-only">User Reviews</DialogTitle>
        <DialogHeader>
          <ReviewHeader authorInfo={authorInfo} />
        </DialogHeader>
        <section className="max-h-[25rem] text-gray-400 overflow-y-auto text-[0.925rem]">
          {authorInfo.content}
        </section>
      </DialogContent>
    </Dialog>
  );
}

export default ReadMore;