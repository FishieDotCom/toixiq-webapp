import { Card } from "@/components/ui/card";
import { ThumbsUp, MessageCircle, Share2, ThumbsDown } from "lucide-react";

export default function PostCard() {
  return (
    <Card className="w-[330px] bg-red-900 border-red-900 text-white rounded-3xl overflow-hidden">
      <div className="p-3 space-y-2">
        <p className="text-sm text-red-300">
          <span className="font-semibold">@</span>Username
        </p>
        <p className="text-sm">this is a haha cat wall post</p>
      </div>
      <div className="w-full aspect-square bg-gray-200 overflow-hidden">
        <img
          src="/placeholder.svg?height=300&width=300"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-3 flex items-center justify-between space-x-4 text-sm">
        <div className="flex items-center space-x-1">
          <ThumbsUp size={18} />
          <span>0</span>
          <ThumbsDown size={18} />
        </div>
        <div className="flex items-center space-x-1">
          <MessageCircle size={18} />
          <span>0</span>
        </div>
        <Share2 size={18} className="ml-auto" />
      </div>
    </Card>
  );
}
