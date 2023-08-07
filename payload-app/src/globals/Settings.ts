import { GlobalConfig } from "payload/types";

const Settings: GlobalConfig = {
  slug: "site-settings",
  access: {
    read: () => true,
  },
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "General",
          description: "General settings for the site",
          fields: [
            {
              name: "siteTitle",
              label: "Site Title",
              type: "text",
            },
          ],
        },
        {
          label: "Global Elements",
          fields: [
            {
              type: "tabs",
              tabs: [
                {
                  label: "Nav",
                  description: "Navigation element",
                  fields: [
                    {
                      name: "navLinks",
                      type: "relationship",
                      relationTo: "pages",
                      hasMany: true,
                    },
                  ],
                },
                {
                  label: "Header",
                  description: "Header element",
                  fields: [
                    {
                      name: "image",
                      type: "upload",
                      relationTo: "media",
                    },
                    {
                      name: "headerTitle",
                      type: "text",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: "Owner",
          description: "Information about the owner of the site.",
          fields: [
            {
              name: "profilePicture",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "name",
              type: "text",
            },
            {
              name: "email",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
};

export default Settings;
