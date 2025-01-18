import { type SchemaTypeDefinition } from "sanity";

import authorType from "./authorType";
import blockContent from "./blockContent";
import postType from "./postType";
import quiz from "./quiz";
import job from "./job";
import { youtube } from "./youtube";
import project from "./projects";
import { table } from "./table";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    authorType,
    blockContent,
    quiz,
    job,
    youtube,
    project,
    table,
  ],
};
