"use client";
import Header from "./components/header/index";
import Content from "./components/content";

export default function page() {
  return (
    <div className="container mx-auto bg-customGray">
      <Header />
      <Content />
    </div>
  );
}
