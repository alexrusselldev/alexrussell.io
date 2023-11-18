import { CollectionConfig } from "payload/types";
import { slugField } from "../fields/Slug";

const Journeys: CollectionConfig = {
  slug: "journeys",
  admin: {
    useAsTitle: "description",
    defaultColumns: ["description", "vehicle"],
  },
  fields: [
    {
      name: "description",
      type: "text",
      required: true,
    },
    {
      name: "vehicle",
      type: "relationship",
      relationTo: "vehicles",
      required: true,
    },
    {
      name: "startMileage",
      label: "Start Mileage",
      type: "number",
      admin: {
        step: 1,
      },
      required: true,
    },
    {
      name: "inProgress",
      label: "In Progress",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "endMileage",
      label: "End Mileage",
      type: "number",
      admin: {
        step: 1,
        condition: (data) => {
          if (!data.inProgress) {
            return true;
          } else {
            return false;
          }
        },
      },
      validate: (data, args) => {
        if (data == undefined && !args?.siblingData?.inProgress) {
          return "Please provide an end mileage or mark the journey as in progress.";
        }
        if (
          args?.siblingData?.startMileage != undefined &&
          args.siblingData.startMileage >= data
        ) {
          return "End mileage must be greater than start mileage, did you drive backwards?";
        }
        return true;
      },
    },
  ],
};

export default Journeys;
