import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, type HeadFC } from "gatsby";

import "../index.css";
import clsx from "clsx";

interface Props {
  data: {
    allFile: {
      nodes: any;
    };
  };
}

const getImageSize = (name: string) => /_([a-z]+)/.exec(name)?.[1] || "medium";

const GalleryImage = ({ node, ...props }: any) => {
  const imageSize = getImageSize(node.name);
  const image = getImage(node[imageSize] || node.medium);
  const classNames = clsx("aspect-square", {
    "col-span-1 row-span-1": imageSize === "small",
    "md:col-span-2 md:row-span-2": imageSize === "medium",
    "md:col-span-2 md:row-span-2 lg:col-span-3 lg:row-span-3":
      imageSize === "large",
  });
  return (
    <GatsbyImage
      image={image!}
      alt={node.name}
      {...props}
      className={classNames}
    />
  );
};

const Gallery = ({ nodes }: any) => (
  <div className="grid grid-cols-fill-16 gap-4 m-4 grid-flow-dense">
    {nodes.map((node: any) => (
      <>
        <GalleryImage key={node.name} node={node} />
      </>
    ))}
  </div>
);

const IndexPage = ({ data }: any) => {
  return (
    <main>
      text
      <Gallery nodes={data.allFile.nodes} />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <title>Home Page</title>
    <meta name="description" content="Photo gallery for lesleh.co.uk"></meta>
  </>
);

export const pageQuery = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
      nodes {
        name
        small: childImageSharp {
          gatsbyImageData(width: 200, formats: [AUTO, WEBP, AVIF])
        }
        medium: childImageSharp {
          gatsbyImageData(width: 400, formats: [AUTO, WEBP, AVIF])
        }
        large: childImageSharp {
          gatsbyImageData(width: 600, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  }
`;
