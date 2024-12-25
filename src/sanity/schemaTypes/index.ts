import { type SchemaTypeDefinition } from "sanity";

import job from "./job";
import project from "./projects";
import blockContent from "./blockContent";
import { code } from "./code";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [job, project, blockContent, code],
};
