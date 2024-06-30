// todo: refactor this because it might be slow in prod
// note: i am sorry, i speed ran this entire thing so there is a lot to go through
// then again, this is peak development so...yall have fun
// tf  counter: 0

"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsDown, ThumbsUp } from "lucide-react";
import React, { useEffect, useState } from "react";
// import cards from "@/components/comments/cards";
import Image from "next/image";
import Logo from "../../../../public/images/toxiq.svg";

interface Post {
  id: string;
  type: number;
  support: number;
  name: string;
  userName: string;
  content: string;
  commentCount: number;
  shareCount: number;
  isDeleted: boolean;
  postColor: string;
  wallVersion: number;
}

interface Data {
  postId: string;
  id: string;
  content: string;
  support: number;
  userName: string;
  name: string;
  dateCreated: string;
  isReply: boolean;
}

export default function Page({ params }: { params: { comments: string } }) {
  const [loading, setLoading] = useState(false);
  const [comments, setComments] = useState<Data[]>([]);
  const [post, setPost] = useState<Post | null>(null);

  let id = params.comments;
  console.log(id);

  useEffect(() => {
    setLoading(true);

    const fetchDataPosts = async () => {
      try {
        const response = await fetch(
          `https://api.toxiq.xyz/api/Post/GetPost/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setPost(data);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      }
    };

    const fetchDataComments = async () => {
      try {
        const response = await fetch(
          `https://api.toxiq.xyz/api/Comment/GetComments`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: id,
              isReply: false,
              sort: 0,
              page: 1,
              count: 100,
            }),
          }
        );
        const result = await response.json();
        console.log(result.data);
        setComments(result.data);
      } catch (error) {
        console.error(error);
      }
    };

    // Execute both fetch functions
    fetchDataPosts();
    fetchDataComments();
    setLoading(false);
  }, [id]);

  let bgColor = post?.postColor;

  if (loading) {
    return (
      <div className="flex justify-center items-center bg-black min-h-screen ">
        <div className="text-center text-white">Loading ....</div>
      </div>
    );
  }

  return (
    <>
      <section className="flex items-center justify-center min-h-screen overflow-hidden bg-black">
        <section className="flex flex-col items-center justify-center">
          <div>
            <div className="flex items-center">
              <Image
                src={Logo}
                alt="Description of the image"
                width={150}
                height={75}
              />
            </div>
          </div>

          <main className="text-center text-white">
            <div className="flex flex-col gap-5 m-5">
              {post ? (
                <>
                  <Card className={`h-[10rem] bg-blue-500`} key={post.id}>
                    <CardHeader>
                      <CardTitle className="text-md text-left">
                        {post.name}
                      </CardTitle>
                      <CardDescription className="text-black text-left">
                        {post.content}
                      </CardDescription>
                      <CardContent>
                        <div className="flex flex-row items-start gap-4 mt-5 px-4 hidden">
                          <ThumbsUp className="hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out" />
                          <ThumbsDown className="hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out" />
                        </div>
                      </CardContent>
                    </CardHeader>
                  </Card>
                </>
              ) : (
                <div className="text-white  text-center ">
                  There seems to be an error
                </div>
              )}
              <>
                {comments.map((comment) => (
                  <Card className="h-[10rem] bg-white" key={comment.id}>
                    <CardHeader>
                      <CardTitle className="text-md text-left">
                        {comment.name}
                      </CardTitle>
                      <CardDescription className="text-black text-left">
                        {comment.content}
                      </CardDescription>
                      <CardContent>
                        <div className="flex flex-row items-start gap-4 mt-5 px-4 hidden">
                          <ThumbsUp className="hover:bg-blue-500 hover:text-white transition-colors duration-200 ease-in-out" />
                          <ThumbsDown className="hover:bg-red-500 hover:text-white transition-colors duration-200 ease-in-out" />
                        </div>
                      </CardContent>
                    </CardHeader>
                  </Card>
                ))}
              </>
            </div>
          </main>
        </section>
      </section>
    </>
  );
}

// test: 91688f4d-cfa2-469d-bf48-d73673242187
