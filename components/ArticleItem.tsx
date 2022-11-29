import articleStyles from "../styles/Article.module.css";
import Link from "next/link";

export default function ArticleItem({article}:{article: {[key:string]:any}}) {
  return (
    <Link className={articleStyles.card} href="/article/[id]" as={`/article/${article.id}`}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
    </Link>
  )
}
