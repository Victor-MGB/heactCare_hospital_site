import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const blogs = [
  { 
    id: 1, 
    title: "Advanced Cardiology Techniques", 
    img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/blog-1.png", 
    brief: "Learn about the latest advancements in cardiology.", 
    comprehensive: "This article explores the latest advancements in cardiology, including new surgical techniques, innovative diagnostic tools, and breakthrough treatments that are improving patient outcomes." 
  },
  { 
    id: 2, 
    title: "Neurological Discoveries", 
    img: "https://thememakker.com/templates/oreo/hospital/front/assets/images/blog-2.png", 
    brief: "Discover the new findings in neurology.", 
    comprehensive: "Neurological discoveries are constantly evolving, with new research shedding light on brain function, neurological disorders, and potential therapies. This blog delves into the most recent findings." 
  }
];

function NewBlog() {
  const [isLoading, setIsLoading] = useState(true);
  const [expanded, setExpanded] = useState(Array(blogs.length).fill(false));
  const [comments, setComments] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust the time as needed

    return () => clearTimeout(timer);
  }, []);

  const toggleText = (index) => {
    setExpanded(expanded.map((item, i) => (i === index ? !item : item)));
  };

  const handleCommentChange = (e, id) => {
    const { value } = e.target;
    setComments({
      ...comments,
      [id]: value
    });
  };

  const handleCommentSubmit = (e, id) => {
    e.preventDefault();
    setComments(prevComments => ({
      ...prevComments,
      [id]: {
        text: '',
        list: [...(prevComments[id]?.list || []), prevComments[id]?.text || '']
      }
    }));
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-700">Hospital Blog</h2>
          <p className="text-gray-700 mt-2">Stay updated with the latest news and articles from our hospital.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-xl">
              {isLoading ? (
                <Skeleton className="h-64 w-full" />
              ) : (
                <img src={blog.img} alt={blog.title} className="w-full h-64 object-cover" />
              )}
              <div className="p-6">
                <h4 className="text-xl font-bold text-blue-700 mb-2">{blog.title}</h4>
                <p className="text-gray-700 mb-4">
                  {expanded[index] ? blog.comprehensive : blog.brief}
                </p>
                <button
                  onClick={() => toggleText(index)}
                  className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
                >
                  {expanded[index] ? 'Show Less' : 'View More'}
                </button>
                <div className="mt-4">
                  <h5 className="text-lg font-semibold mb-2">Comments</h5>
                  {comments[blog.id]?.list?.map((comment, idx) => (
                    <p key={idx} className="text-gray-600 mb-2">{comment}</p>
                  ))}
                  <form onSubmit={(e) => handleCommentSubmit(e, blog.id)} className="flex flex-col mt-2">
                    <textarea
                      className="p-2 border rounded mb-2"
                      placeholder="Add a comment"
                      value={comments[blog.id]?.text || ''}
                      onChange={(e) => handleCommentChange(e, blog.id)}
                    />
                    <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewBlog;
