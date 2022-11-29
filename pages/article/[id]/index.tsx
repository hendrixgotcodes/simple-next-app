import React from 'react'
import { useRouter } from 'next/router'

export default function ArticleDetails() {

    const router = useRouter()
    const {id} = router.query
    
  return (
    <div>This is article {id}</div>
  )
}
