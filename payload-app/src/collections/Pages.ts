import { CollectionConfig } from "payload/types";
import { slugField } from "../fields/Slug";

const Pages: CollectionConfig = {
  slug: "pages",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
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
