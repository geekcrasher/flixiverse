
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {

  const navigate = useNavigate()

  return (
    <Button
      className="flex items-center gap-2 text-sm mt-6 rounded-lg p-2 bg-gray-700/80 hover:bg-gray-700/70 text-gray-300 hover:text-turquoise"
      onClick={() => navigate(-1)}
    >
      <ArrowLeft className="h-4 w-4" /> Back
    </Button>
  );
}

export default BackButton;