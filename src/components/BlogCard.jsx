function BlogCard({ post }){
	return(
    <article className="bg-white/80 rounded-xl shadow-xl/20 hover:shadow-xl/30 transition-shadow duration-200 overflow-hidden">
      <div className="h-44 md:h-52 w-full p-4 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="object-cover w-full h-full rounded-xl transform hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      <div className="p-4 flex flex-col md:p-5 gap-2">
	  
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
          <time dateTime={post.date}>{post.dateReadable}</time>
          <span aria-hidden="true">•</span>
          <span>{post.readTime}</span>
        </div>
		
		<h3 className="text-2xl md:text-2xl font-bold text-gray-900">
          {post.title}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>

      </div>
    </article>
	)
}

export default BlogCard;
