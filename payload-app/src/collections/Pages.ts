import { CollectionConfig } from "payload/types";
import { slugField } from "../fields/Slug";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    slugField(),
  ],
};

export default Pages;
