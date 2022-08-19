import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, type HeadFC } from "gatsby";

import "../index.css";

const GalleryImage = ({ node, ...props }: any) => {
  const image = getImage(node);
  return (
    <GatsbyImage image={image!} alt="" {...props} className="aspect-square" />
  );
};

const Gallery = ({ nodes }: any) => (
  <div className="grid grid-cols-4 gap-4">
    {nodes.map((node: any) => (
      <>
        <GalleryImage key={node.name} node={node} />
        <GalleryImage key={node.name} node={node} />
        <GalleryImage key={node.name} node={node} />
        <GalleryImage key={node.name} node={node} />
        <GalleryImage key={node.name} node={node} />
        <GalleryImage key={node.name} node={node} />
      </>
    ))}
  </div>
);

const IndexPage = ({ data }: any) => {
  return (
    <main className="text-red-500">
      text
      <Gallery nodes={data.allFile.nodes} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(width: 300, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;
