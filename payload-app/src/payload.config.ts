import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import Media from "./collections/Media";
import Pages from "./collections/Pages";
import Posts from "./collections/Posts";
import Settings from "./globals/Settings";
import Vehicles from "./collections/Vehicles";
import Journeys from "./collections/Journeys";

const adapter = s3Adapter({
  config: {
    credentials: {
      accessKeyId: process.env.S3_ACCESS_KEY_ID,
      secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    },
    region: process.env.S3_REGION,
  },
  bucket: process.env.S3_BUCKET,
});

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  globals: [Settings],
  collections: [Users, Media, Pages, Posts, Vehicles, Journeys],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  plugins: [
    cloudStorage({
      enabled: process.env.MODE === "production",
      collections: {
        media: {
          adapter,
          generateFileURL: (args) => {
            return `${process.env.S3_ENDPOINT}/${process.env.S3_BUCKET}/${args.filename}`;
          },
          disableLocalStorage: true,
        },
      },
    }),
  ],
});
