import { CollectionConfig } from "payload/types";
import { slugField } from "../fields/Slug";

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
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
