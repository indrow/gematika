"use client";

import axios from "axios";
import { useEffect, useState } from "react";

import PostCard from "@/components/Cards/PostCard";

import "@/styles/home.scss";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const query = "posts?sort=-date_created&limit=10";

  const fetchPosts = async () => {
    const data = await axios.get(process.env.NEXT_PUBLIC_DIRECTUS_API + query);
    setPosts(data.data.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <div className="big__container">
        <div className="wrapper">
          <h1 className="brand">Gematika</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime sed
            commodi cupiditate quidem quod eius ratione enim praesentium? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            molestiae est repellendus sed nulla voluptas saepe voluptates veniam
            labore dicta. Alias sequi sit nisi fuga soluta consequuntur sunt
            necessitatibus? Dolorum!
          </p>
        </div>
      </div>
      <div className="big__container">
        <h3 className="cat__header">Update</h3>
        <h2 className="cat__desc">Apa saja yang baru? 🔥</h2>
        <div className="card__container">
          {posts.map((post) => (
            <PostCard
              id={post.id}
              cover={post.cover}
              title={post.title}
              desc={post.description}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
      <div className="big__container"></div>
      <div className="big__container"></div>
    </div>
  );
}
