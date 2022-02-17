import { motion } from "framer-motion";
import "./cards.css";

const articles = [
  { id: 1, title: "Hello Bunnies", excerpt: "wuv you" },
  { id: 2, title: "Hello Bunnies", excerpt: "wuv you" },
  { id: 3, title: "Hello Bunnies", excerpt: "wuv you" },
  { id: 4, title: "Hello Bunnies", excerpt: "wuv you" },
  { id: 5, title: "Hello Bunnies", excerpt: "wuv you" },
  { id: 6, title: "Hello Bunnies", excerpt: "wuv you" },
  { id: 7, title: "Hello Bunnies", excerpt: "wuv you" },
  { id: 8, title: "Hello Bunnies", excerpt: "wuv you" },
];

const Cards = () => {
  return (
    <div className="main">
      {articles.map((article, i) => (
        <motion.div
          key={article.id}
          className="article"
          initial={{
            opacity: 0,
            translateX: i % 2 === 0 ? -50 : 50,
            translateY: -50,
          }}
          animate={{ opacity: 1, translateX: 0, translateY: 0 }}
          transition={{ duration: 0.8, delay: i * 0.2 }}
        >
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Cards;
