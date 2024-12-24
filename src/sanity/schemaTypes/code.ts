import { defineType, defineField } from "sanity";

export const code = defineType({
  name: "code",
  title: "Code Block",
  type: "object",
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string",
      options: {
        list: [
          { title: "JavaScript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "Python", value: "python" },
          { title: "Java", value: "java" },
          { title: "Bash", value: "bash" },
        ],
      },
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text",
    }),
  ],
});
