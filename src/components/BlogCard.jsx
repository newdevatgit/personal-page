function BlogCard({ post }){
	return(
    <article className="bg-white/90 dark:bg-gray-900/80 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <div className="h-44 md:h-52 w-full overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4 md:p-5">
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <time dateTime={post.date}>{post.dateReadable}</time>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {post.tags?.map((t) => (
              <span
                key={t}
                className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full"
              >
                #{t}
              </span>
            ))}
          </div>

          <a
            href={post.url}
            className="text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400"
            aria-label={`Read more about ${post.title}`}
          >
            Read
          </a>
        </div>
      </div>
    </article>
	)
}

export default BlogCard;
