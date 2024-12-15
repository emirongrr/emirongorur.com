import { defineType, defineField } from "sanity";

// Define the 'code' type
export const code = defineType({
  name: "code",
  title: "Code Block",
  type: "object", // 'code' is an object, not a primitive type
  fields: [
    defineField({
      name: "language",
      title: "Language",
      type: "string", // Specify the programming language used
      options: {
        list: [
          { title: "JavaScript", value: "javascript" },
          { title: "TypeScript", value: "typescript" },
          { title: "Python", value: "python" },
          { title: "Java", value: "java" },
          { title: "Bash", value: "bash" },
          // Add more languages as needed
        ],
      },
    }),
    defineField({
      name: "code",
      title: "Code",
      type: "text", // This field stores the code as a string
    }),
  ],
});
