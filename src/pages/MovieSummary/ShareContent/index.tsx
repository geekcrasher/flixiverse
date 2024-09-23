import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Copy, Share2 } from "lucide-react"

const ShareContent = () => {

  const pathname = window.location.href

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(pathname);
      console.log('Path copied to clipboard!');
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" className="bg-transparent hover:bg-transparent p-0 border-0">
            <span className="sr-only">Share</span>
            <Share2 className="size-6 text-gray-400 hover:text-white" />
          </Button>
        </DialogTrigger>
        <DialogContent className="bg-gray-700 border-0 rounded-lg p-4 sm:p-6 sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-turquoise">Share link</DialogTitle>
            <DialogDescription className="text-gray-400">
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <section className="flex items-center space-x-2">
            <section className="grid flex-1 gap-2">
              <Label htmlFor="link" className="sr-only">
                Link
              </Label>
              <Input
                id="link"
                className="bg-transparent text-gray-400 border-gray-400"
                defaultValue={`${pathname}`}
                readOnly
              />
            </section>
            <Button onClick={handleCopy} type="submit" size="sm" className="px-3 bg-gray-800 text-gray-400 hover:text-turquoise">
              <span className="sr-only">Copy</span>
              <Copy className="h-4 w-4" />
            </Button>
          </section>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary" className="bg-turquoise hover:bg-turquoise font-normal text-gray-700">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default ShareContent;