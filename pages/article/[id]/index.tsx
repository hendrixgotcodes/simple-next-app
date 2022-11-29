import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next"

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

export  const getStaticPaths:GetStaticPaths = async()=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
    const articles:{[key:string]:any}[] = await res.json()

    const ids = articles.map(article=>article.id)
    const paths = ids.map((id)=> ({params: {id: id.toString()}}))

    return {
        paths,
        fallback: false
    }
    
}

export const getStaticProps:GetStaticProps = async (context:GetStaticPropsContext)=>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params!.id}`)
    const article = await res.json()
    return {
        props:{
            article
        }
    }
}