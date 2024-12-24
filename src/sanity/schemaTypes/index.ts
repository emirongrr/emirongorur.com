import { type SchemaTypeDefinition } from "sanity";

import authorType from "./authorType";
import blockContent from "./blockContent";
import heroe from "./heroe";
import postType from "./postType";
import quiz from "./quiz";
import job from "./job";
import profile from "./profile";
import { youtube } from "./youtube";
import project from "./projects";
import { table } from "./table";
import { code } from "./code";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postType,
    authorType,
    blockContent,
    heroe,
    quiz,
    job,
    profile,
    youtube,
    project,
    table,
    code,
  ],
};
