import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { MessageCircle, Share2Icon, ThumbsDown, ThumbsUp } from "lucide-react";

function cards() {
  return (
    <>
      <div>
        <Card className="h-[10rem] bg-white">
          <CardHeader>
            <CardTitle className="text-md text-left">
              Emoji + username
            </CardTitle>
            <CardDescription>
              <h1 className="text-black text-left">Quality content</h1>
            </CardDescription>
            <CardContent>
              <div className="flex flex-row items-start gap-4 mt-5 px-4">
                <ThumbsUp className="hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out" />
                <ThumbsDown className="hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out" />
              </div>
              {/* <div className="flex justify-center mt-5">
                <MessageCircle className="hover:bg-yellow-400 hover:text-black transition-colors duration-200 ease-in-out" />
              </div>
              <div className="flex items-end mt-5">
                <Share2Icon className="hover:bg-green-500 hover:text-white transition-colors duration-200 ease-in-out" />
              </div> */}
            </CardContent>
          </CardHeader>
        </Card>
      </div>
    </>
  );
}

export default cards;
