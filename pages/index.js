import React from 'react'
import Head from 'next/head'

import Hero from '../components/home-page/hero'
import FeaturedPosts from '../components/home-page/featured-posts'
import { getFeaturedPosts } from '../lib/posts-util'

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>John's Blog</title>
        <meta
          name='description'
          content='I post about programming and web development.'
        />
      </Head>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  )
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts()

  return {
    props: {
      posts: featuredPosts
    }
  }
}

export default HomePage

// 1) Hero section => Present ourselves
// 2) Featured posts
