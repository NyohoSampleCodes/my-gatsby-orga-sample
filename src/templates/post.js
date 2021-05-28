import React from "react"
import { graphql } from 'gatsby'
import Layout from '../components/layout'

const BlogPostTemplate = ({ data, location }) => {
    const post = data.orgContent
    const { title, date, export_file_name, tags } = post.metadata
    const mtime = post.parent.parent.modifiedTime
    const realTitle = (title !== 'Untitled') ? title :export_file_name;

  const tagsComponent = tags ?
        <ul className='tags'>
          {tags.map((tag) => <li>{tag}</li>)}
        </ul>
        : ''
    return (
      <Layout>
        <center>
          <h1>{realTitle}</h1>
          <div>初出: {date ? date : '不明' }</div>
          <div>更新: {mtime}</div>
          { tagsComponent }
        </center>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Layout>
    )
  }

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
    orgContent(id: { eq: $id }) {
      html
      metadata {
        title
        date
        tags
        export_file_name
      }
      parent {
          ... on OrgFile {
          parent {
            ... on File {
              modifiedTime
            }
          }
        }
      }
    }
  }
`
