import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
// import * as styles from "../components/index.module.css"
// import { graphql } from "gatsby"
import { graphql, StaticQuery } from "gatsby"

// const links = [
//   {
//     text: "Tutorial",
//     url: "https://www.gatsbyjs.com/docs/tutorial",
//     description:
//       "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
//   },
//   {
//     text: "Examples",
//     url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
//     description:
//       "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
//   },
//   {
//     text: "Plugin Library",
//     url: "https://www.gatsbyjs.com/plugins",
//     description:
//       "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
//   },
//   {
//     text: "Build and Host",
//     url: "https://www.gatsbyjs.com/cloud",
//     description:
//       "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
//   },
// ]

// const samplePageLinks = [
//   {
//     text: "Page 2",
//     url: "page-2",
//     badge: false,
//     description:
//       "A simple example of linking to another page within a Gatsby site",
//   },
//   { text: "TypeScript", url: "using-typescript" },
//   { text: "Server Side Rendering", url: "using-ssr" },
//   { text: "Deferred Static Generation", url: "using-dsg" },
// ]

// const moreLinks = [
//   { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
//   {
//     text: "Documentation",
//     url: "https://gatsbyjs.com/docs/",
//   },
//   {
//     text: "Starters",
//     url: "https://gatsbyjs.com/starters/",
//   },
//   {
//     text: "Showcase",
//     url: "https://gatsbyjs.com/showcase/",
//   },
//   {
//     text: "Contributing",
//     url: "https://www.gatsbyjs.com/contributing/",
//   },
//   { text: "Issues", url: "https://github.com/gatsbyjs/gatsby/issues" },
// ]

// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

// const IndexPage = ({ data }) => (
//   <Layout>
//     <p>{ data.allNodeArticle.edges[0].node.title }</p>
//     <Seo title="Home" />
//     <div className={styles.textCenter}>
//       <StaticImage
//         src="../images/example.png"
//         loading="eager"
//         width={64}
//         quality={95}
//         formats={["auto", "webp", "avif"]}
//         alt=""
//         style={{ marginBottom: `var(--space-3)` }}
//       />
//       <h1>
//         Welcome to <b>Gatsby!</b>
//       </h1>
//       <p className={styles.intro}>
//         <b>Example pages:</b>{" "}
//         {samplePageLinks.map((link, i) => (
//           <React.Fragment key={link.url}>
//             <Link to={link.url}>{link.text}</Link>
//             {i !== samplePageLinks.length - 1 && <> · </>}
//           </React.Fragment>
//         ))}
//         <br />
//         Edit <code>src/pages/index.js</code> to update this page.
//       </p>
//     </div>
//     <ul className={styles.list}>
//       {links.map(link => (
//         <li key={link.url} className={styles.listItem}>
//           <a
//             className={styles.listItemLink}
//             href={`${link.url}${utmParameters}`}
//           >
//             {link.text} ↗
//           </a>
//           <p className={styles.listItemDescription}>{link.description}</p>
//         </li>
//       ))}
//     </ul>
//     {moreLinks.map((link, i) => (
//       <React.Fragment key={link.url}>
//         <a href={`${link.url}${utmParameters}`}>{link.text}</a>
//         {i !== moreLinks.length - 1 && <> · </>}
//       </React.Fragment>
//     ))}
//   </Layout>
// )

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        allNodeArticle {
          edges {
            node {
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
                      gatsbyImageData(width: 200)
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <Seo title="Home" keywords={[`gatsby`, `application`, `react`]} />

        {data.allNodeArticle.edges.map((edge) => (
            <>
            const image = getImage(data.file)
            <div  key="{edge.node.drupal_id}">
              <h3><Link to={ edge.node.drupal_id }>{ edge.node.title }</Link></h3>
              <small><em>{ Date(edge.node.created) }</em></small>
              {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem`, width: `100%` }}> */}
                <GatsbyImage image={edge.node.relationships.field_image.localFile.childImageSharp.gatsbyImageData} />
              {/* </div> */}
              <div dangerouslySetInnerHTML={{ __html: edge.node.body.value.split(' ').splice(0, 50).join(' ') + '...' }}></div>
            </div>
            </>
          ))}
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )}
  />
)

export default IndexPage

// export const query = graphql`
//   query {
//     allNodeArticle {
//       edges {
//         node {
//           title
//         }
//       }
//     }
//   }
// `