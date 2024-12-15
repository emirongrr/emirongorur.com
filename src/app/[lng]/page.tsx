import { Metadata, NextPage } from 'next';
import Container from '@components/Container';
import BlogListNew from '@components/Blog/BlogList';

export const metadata: Metadata = {
  title: "Blog | Emir Öngörür",
  metadataBase: new URL("https://blog.emirongorur.com"),
  description: "Read latest article from Emir Ongorur's Blog",
  openGraph: {
    title: "Blog | Emir Öngörür",
    url: "https://blog.emirongorur.com",
    description: "Read latest article from Emir Ongorur's Blog",
    images:
      "",
  },
};



const BlogPage: NextPage = () => {
  return (
    <>
      <Container className='mx-auto xl:!-mt-5 max-w-6xl md:auto ' data-aos='fade-up'>
        <BlogListNew/>
      </Container>
    </>
  );
};

export default BlogPage;