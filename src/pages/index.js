import React from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.allOrgContent.edges
    const _posts = posts.map ( ({ node }) => {
      const pretitle = node.metadata.title || node.fields.slug
      const title = (pretitle !== 'Untitled') ? pretitle : node.metadata.export_file_name
      const date = node.metadata.date || 'no date'
      return (
        <div>
          <h3 style={{ marginBottom: '0.2em' }}>
            <Link to={node.fields.slug}>{title}</Link>
          </h3>
          <small>{date}</small>
        </div>
      )
    })
    return (
      <Layout>
        <h1>ニョート一覧</h1>
        <p>ノートの一覧です。</p>
        {_posts}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allOrgContent(sort: { fields: [metadata___title], order: ASC }) {
      edges {
        node {
          fields {
            slug
          }
          metadata { title date export_file_name }
        }
      }
    }
  }
`
