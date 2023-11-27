import { useNavigate } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";
import { useQuery } from "react-query";
import Loading from "../../Loading";
import BlogCard from "../../../pages/PublicPages/Blogs/BlogCard";

const RecentBlog = () => {
  const { data: blogs, isLoading } = useQuery(["blogs"], () =>
    fetch("blogs.json", {
      method: "GET",
    }).then((res) => res.json())
  );
  console.log(blogs);

  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/blogs");
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h2
            id="products"
            className="text-gray-700 text-lg md:text-xl lg:text-2xl font-semibold border-b-2 border-primary-600 inline-block tracking-wider pb-[8px]"
          >
            Recent Blog
          </h2>
          <button
            className="flex items-center gap-1 text-gray-500 hover:text-primary-600"
            type={"button"}
            onClick={handleButton}
          >
            View All
            <AiOutlineArrowRight className="text-xl" />
          </button>
        </div>
        <div className="border-t-[2px]"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-10 mt-10">
        {blogs
          .slice(0, 3)
          .reverse()
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
      </div>
    </div>
  );
};

export default RecentBlog;
