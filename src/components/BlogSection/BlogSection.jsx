import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./BlogSection.css";
import blogImage from "../../image/blog_image.png";
import BlogCard from "./BlogCard/BlogCard";
const BlogSection = () => {
  const fakeBlogData = [
    {
      id: 1,
      image: blogImage,
      title: "[Interview]Game-Changing Hands-on Services for MaaS Providers",
      date: "23 January",
    },
    {
      id: 2,
      image: blogImage,
      title: "[Interview]Game-Changing Hands-on Services for MaaS Providers",
      date: "24 January",
    },
    {
      id: 3,
      image: blogImage,
      title: "[Interview]Game-Changing Hands-on Services for MaaS Providers",
      date: "25 January",
    },
  ];
  return (
    <section>
      <Container>
        <Row className="mt-4 mb-5 text-center">
          <h5 className="mt-4 text-primary">Blog</h5>
          <h1 className="mt-4">
            Discover our products <br />
            technologies and clients
          </h1>
          <div>
            <Button variant="outline-dark" className="read-all mt-4">
              Read All
            </Button>
          </div>
        </Row>
        <Row className="mt-5 mb-5">
          {fakeBlogData.map((blog) => (
            <BlogCard key={blog.id} blogInfo={blog} />
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default BlogSection;
