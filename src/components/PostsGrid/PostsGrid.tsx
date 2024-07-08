import PostsCard from "../PostsCard/PostsCard";
import styles from "./PostsGrid.module.css";

//Usar isto

const post = {
  postImage: "https://example.com/image1.jpg",
  categories: ["Google", "Trending", "New"],
  title: "Loudest à la Madison #1 (L'integral)",
  summary:
    "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
  postDate: "22 July 2024",
  comments: 10,
  link: "/blog/link1",
};

const posts = [
    {
        "postImage": "/src/assets/posts/unsplash_dEGu-oCuB1Y.png",
        "categories": [
            "Google",
            "Trending",
            "New"
        ],
        "title": "Loudest à la Madison #1 (L'integral)",
        "summary": "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
        "postDate": "22 July 2024",
        "comments": 10,
        "link": "/blog/link1"
    },
    {
        "postImage": "/src/assets/posts/unsplash_hHdHCfAifHU.png",
        "categories": [
            "Tech",
            "Innovation",
            "Hot"
        ],
        "title": "Exploring the Future of AI",
        "summary": "Join us as we delve into the advancements and implications of artificial intelligence in our daily lives.",
        "postDate": "15 June 2024",
        "comments": 8,
        "link": "/blog/link2"
    },
    {
        "postImage": "/src/assets/posts/unsplash_tVEqStC2uz8.png",
        "categories": [
            "Health",
            "Wellness",
            "Tips"
        ],
        "title": "Top 10 Health Tips for 2024",
        "summary": "Discover the best practices to maintain a healthy lifestyle in the modern age.",
        "postDate": "30 May 2024",
        "comments": 5,
        "link": "/blog/link3"
    }
];

function PostsGrid() {
  return (
    <div className={styles.postGrid}>
      {posts.map((post) => {
        return (
          <PostsCard
            PostTitle={post.title}
            PostCategories={post.categories}
            PostImage={post.postImage}
            PostSummary={post.summary}
            PostDate={post.postDate}
            PostComments={post.comments}
            PostLink={post.link}
          />
        );
      })}
    </div>
  );
}

export default PostsGrid;
