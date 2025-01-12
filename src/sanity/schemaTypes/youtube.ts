import { defineField, defineType } from "sanity";
import { FiYoutube } from "react-icons/fi";
import { YouTubeWidget } from "@components/Widget/YoutubeWidget";

export const youtube = defineType({
  name: "youtube",
  title: "Youtube",
  type: "object",
  icon: FiYoutube,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Youtube Video",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
    }),
  ],
  preview: {
    select: {
      title: "title",
      url: "url",
    },
  },
  components: {
    preview: YouTubeWidget,
  },
});
