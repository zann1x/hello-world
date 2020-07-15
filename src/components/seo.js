import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";

const SEO = ({lang, title, description, meta}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        url
                        social {
                            twitter
                        }
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title ||  site.siteMetadata.title}
            titleTemplate={`%s - ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: metaDescription
                },
                {
                    name: 'robots',
                    content: 'index, follow'
                },
                {
                    property: 'og:title',
                    content: site.siteMetadata.title
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: site.siteMetadata.url
                },
                {
                    property: 'og:image',
                    content: 'https://www.xing.com/image/1_6_e_df6ad2585_27320891_1/lukas-zanner-foto.256x256.jpg'
                },
                {
                    property: 'og:site_name',
                    content: site.siteMetadata.title
                },
                {
                    name: 'twitter:card',
                    content: 'summary'
                },
                {
                    name: 'twitter:creator',
                    content: site.siteMetadata.social.twitter
                },
                {
                    name: 'twitter:site',
                    content: site.siteMetadata.social.twitter
                },
                {
                    name: 'twitter:title',
                    content: site.siteMetadata.title
                },
                {
                    name: 'twitter:description',
                    content: metaDescription
                }
            ].concat(meta)}
        />
    );
}

SEO.propTypes = {
    lang: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object)
}

SEO.defaultProps = {
    lang: 'en',
    description: '',
    meta: []
}

export default SEO;
