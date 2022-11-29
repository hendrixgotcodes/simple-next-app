import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function ArticleDetails({article}:{article: {[key:string]:any}}) {

    const router = useRouter()
    const {id} = router.query
    
  return (
    <>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go back</Link>
    </>
  )
}

export const getServerSideProps = async (context:any)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props:{
            article
        }
    }
}