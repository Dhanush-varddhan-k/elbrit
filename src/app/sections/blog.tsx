import React from "react";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The covid 19 epidemic in 2020 is back",
      date: "20 Apr",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../Assets/blog1-450x580.jpg.png')]",
    },
    {
      id: 2,
      title: "The covid 19 epidemic in 2020 is back",
      date: "20 Apr, 2024",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../Assets/blog1-450x580.jpg.png')]",
    },
    {
      id: 3,
      title: "The covid 19 epidemic in 2020 is back",
      date: "20 Apr",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../Assets/blog1-450x580.jpg.png')]",
    },
    {
      id: 4,
      title: "The covid 19 epidemic in 2020 is back",
      date: "20 Apr",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../Assets/blog1-450x580.jpg.png')]",
    },
    {
      id: 5,
      title: "The covid 19 epidemic in 2020 is back",
      date: "20 Apr",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../Assets/blog2-450x580.jpg.png')]",
    },
    {
      id: 6,
      title: "The covid 19 epidemic in 2020 is back",
      date: "20 Apr",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../Assets/blog2-450x580.jpg.png')]",
    },
    {
      id: 7,
      title: "The covid 19 epidemic in 2020 is back",
      date: "20 Apr",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../Assets/blog2-450x580.jpg.png')]",
    },
    {
      id: 8,
      title: "The covid 19 epidemic in 2020 is back",
      date: "20 Apr",
      image:
        "absolute inset-0 bg-cover bg-center bg-[url('../Assets/blog2-450x580.jpg.png')]",
    },
  ];

  return (
    <section className="my-20 mx-20" id="blogSection">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-sm text-[#1E3A45] font-semibold mb-4 uppercase tracking-wider">
            OUR BLOG
          </h3>
          <h2 className="text-4xl font-bold font-jost text-[#1E3A45]">
            Latest News
          </h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className={`relative overflow-hidden rounded-lg shadow-lg hover:scale-105 ${
                index === 0 || index === 2 || index === 4 || index === 5
                  ? "lg:row-span-2 h-48 lg:h-80"
                  : "lg:row-span-1 h-48 lg:h-48"
              } ` }
            >
              {/* Background Image */}
              <div className={`${blog.image}`}></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-black hover:bg-black/10 transition-all duration-250 bg-opacity-50"></div>

              {/* Ribbon for Date */}
              <div className="absolute top-4 shadow-white">
                <p className="bg-[#1E3A45] text-white text-xs font-bold px-3 py-1 rounded-r-full">
                  {blog.date}
                </p>
              </div>

              {/* Content */}
              <div className="relative z-10 p-6 text-white">
                <h4 className="text-md font-semibold mt-10">{blog.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
