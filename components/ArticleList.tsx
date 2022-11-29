import articleStyles from "../styles/Article.module.css"
import ArticleItem from "./ArticleItem"

export default function ArticleList({articles}:{articles: {[key:string]:any}[]}) {
  return (
    <div className={articleStyles.grid}>
        {
        articles.map((article)=>(
          <ArticleItem key={article.id} article={article}/>
        ))
      }
    </div>
  )
}
