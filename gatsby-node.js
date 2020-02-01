const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions

    const result = await graphql(`
        {
            allMarkdownRemark(filter: {frontmatter: {title: {eq: "projects"}}}) {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `)
    
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
            path: node.frontmatter.path,
            component: path.resolve('./src/templates/SiteTemplate.js'),
            context: { }
        })
    })
}
