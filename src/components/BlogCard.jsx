function BlogCard({ post }){
	return(
    <article className="bg-white/90 rounded-xl border shadow-xl hover:shadow-2xl transition-shadow duration-200 overflow-hidden">
      <div className="h-44 md:h-52 w-full p-4 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full rounded-xl transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
	  
	   <div className="flex px-4 py-2 gap-2">
            {post.tags?.map((t) => (
              <span
                key={t}
                className="text-xs bg-blue-100 px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
	  
	  <h3 className="text-xl md:text-xl font-bold text-gray-900 px-4">
          {post.title}
        </h3>

      <div className="p-4 md:p-5">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <time dateTime={post.date}>{post.dateReadable}</time>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">

          <a
            href={post.url}
            className="text-sm font-medium text-blue-600 hover:text-blue-800 "
            aria-label={`Read more about ${post.title}`}
          >
            Read More
          </a>
        </div>
      </div>
    </article>
	)
}

export default BlogCard;
