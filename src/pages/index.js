import React from "react"
import { graphql } from 'gatsby'
import Book from "../components/Book"
import "./index.css"

const IndexPage = ({ data }) => {
    return (
      <div className="App">
        <Book data={data} />
      </div>
    );
}

export default IndexPage

export const query = graphql`
  query {
    pages: allFile(sort: {fields: relativePath, order: ASC}) {
      edges {
        node {
          childImageSharp {
            fluid(quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            } 
          }
        }
      }
    }
  }
`