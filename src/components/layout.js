import React, { useState } from "react";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

import Header from "./header";
import Footer from "./footer";

import "../styles/index.sass";

const Layout = ({ children }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          datoCmsSite {
            globalSeo {
              siteName
            }
            faviconMetaTags {
              ...GatsbyDatoCmsFaviconMetaTags
            }
          }
          datoCmsMainMenu {
            leftMenuItems {
              ... on DatoCmsMenuItem {
                id
                menuItemText
                menuItemPageLink {
                  slug
                }
                customUrl
                menuItemCustomLink
                isThisAButton
              }
            }
            rightMenuItems {
              ... on DatoCmsMenuItem {
                id
                menuItemText
                menuItemPageLink {
                  slug
                }
                customUrl
                menuItemCustomLink
                isThisAButton
              }
            }
          }
          datoCmsHome {
            seoMetaTags {
              ...GatsbyDatoCmsSeoMetaTags
            }
          }
          allDatoCmsSocialProfile(sort: { fields: [position], order: ASC }) {
            edges {
              node {
                profileType
                url
              }
            }
          }
        }
      `}
      render={data => (
        <>
          <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}
            seo={data.datoCmsHome.seoMetaTags}
          />
          <Header
            leftMenu={data.datoCmsMainMenu.leftMenuItems}
            rightMenu={data.datoCmsMainMenu.rightMenuItems}
          />
          {children}
          <Footer social={data.allDatoCmsSocialProfile} />
        </>
      )}
    />
  );
};

export default Layout;
