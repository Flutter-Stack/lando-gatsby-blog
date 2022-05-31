import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { getImage, GatsbyImage } from "gatsby-plugin-image"

const BlogPost = ({ data }) => {
  const post = data.nodeArticle
  const image = getImage(post.relationships.field_image.localFile)
  return (
    <Layout>
      <div>
        <h1>{ post.title }</h1>
        <small><em>{ Date(post.created) }</em></small>
          <GatsbyImage image={image} alt="please include an alt" />
        <div dangerouslySetInnerHTML={{ __html: post.body.value }}></div>
      </div>
    </Layout>
  )
}
export default BlogPost

export const query = graphql`
  query($id: String!) {
    nodeArticle(drupal_id: { eq: $id }) {
      drupal_id
      title
      body {
        value
      }
      created
      relationships {
        field_image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }
  }
`