import { defineField, defineType } from "sanity";
import { LuTable } from "react-icons/lu";
import { TableWidget } from "@components/Widget/TableWidget";

export const table = defineType({
  name: "customTable",
  title: "Table",
  type: "object",
  icon: LuTable,
  fields: [
    defineField({
      name: "rows",
      title: "Rows",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "column1",
              title: "Column 1",
              type: "string",
            }),
            defineField({
              name: "column2",
              title: "Column 2",
              type: "string",
            }),
            defineField({
              name: "column3",
              title: "Column 3",
              type: "string",
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "caption",
      type: "string",
      title: "Caption",
      description: "Provide an accessible description for this table",
    }),
  ],
  preview: {
    select: {
      table: "rows",
      caption: "caption",
    },
  },
  components: {
    preview: TableWidget,
  },
});
