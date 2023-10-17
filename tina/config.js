import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: "acd0c9ce-f19a-454f-90eb-3945f33884c8", // Get this from tina.io
  token: "15533a4288355fe414d79360ea2217d93ccd3773", // Get this from tina.io

  build: {
    outputFolder: "admin",
    publicFolder: "content",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "content/media",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "content/posts",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
    ],
  },
});
