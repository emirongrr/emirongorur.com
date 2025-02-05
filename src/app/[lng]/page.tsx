import { NextPage } from "next";
import Container from "@components/Container";
import BlogListNew from "@components/Blog/BlogList";
import { fallbackLng } from "../i18n/settings";

type Props = {
  params: {
    lng: string;
  };
};

const BlogPage: NextPage<Props> = ({ params }) => {
  const lng = params.lng || fallbackLng;

  return (
    <Container className="mx-auto xl:!-mt-5 max-w-6xl" data-aos="fade-up">
      <BlogListNew lng={lng} />
    </Container>
  );
};

export default BlogPage;
