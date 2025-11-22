import BlogCard from './BlogCard';
import { posts } from '../data/posts';

export default function BlogGrid(){
	return(
		<section className="container mx-auto px-4 py-8">
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
			{posts.map((p)=> (
				<BlogCard key={p.id} post={p} />
			))}
			</div>
		</section>
	);
}