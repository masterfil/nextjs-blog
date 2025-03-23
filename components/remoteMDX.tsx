import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  // Add custom components here
  //   code: Code,
  // Counter
};

export default function RemoteMDX(props: MDXRemoteProps) {
  return <MDXRemote {...props} components={components} />;
}
