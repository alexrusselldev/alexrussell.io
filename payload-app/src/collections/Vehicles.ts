import { CollectionConfig } from "payload/types";
import { slugField } from "../fields/Slug";

const Vehicles: CollectionConfig = {
  slug: "vehicles",
  admin: {
    useAsTitle: "registration",
  },
  fields: [
    {
      label: "Registration",
      name: "registration",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
    },
  ],
};

export default Vehicles;
