import { groq } from "next-sanity";

export const jobQuery = groq`*[_type == "job"] | order(_createdAt desc){
    _id,
    name,
    jobTitle,
    "logo": logo.asset->url,
    url,
    description,
    startDate,
    endDate,
  }`;

export const projectsQuery = groq`*[_type == "project"] | order(_createdAt desc){
    _id, 
    name,
    "slug": slug.current,
    tagline,
    "logo": logo.asset->url,
  }`;
