import { NextPage } from "next";
import Container from "@components/Container";
import BlogListNew from "@components/Blog/BlogList";
import { fallbackLng } from "../i18n/settings";

type Props = {
  params: Promise<{
    lng: string;
  }>;
};

const BlogPage: NextPage<Props> = async ({ params }) => {
  const { lng: requestedLng } = await params;
  const lng = requestedLng || fallbackLng;

  return (
    <Container className="mx-auto xl:!-mt-5 max-w-6xl" data-aos="fade-up">
      <BlogListNew lng={lng} />
    </Container>
  );
};

export default BlogPage;
