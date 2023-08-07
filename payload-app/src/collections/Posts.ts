import { CollectionConfig } from "payload/types";
import { slugField } from "../fields/Slug";

const Posts: CollectionConfig = {
  slug: "posts",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    slugField(),
    {
      name: "content",
      type: "code",
      admin: {
        language: "mdx",
      },
    },
  ],
};

export default Posts;
