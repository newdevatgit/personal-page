import { Link } from 'react-router-dom';
import { posts } from '../data/posts';

export default function RelatedPosts({ current }){
  if(!current) return null;

  const related = posts
    .filter(p => p.id !== current.id && p.tags.some(tag => current.tags.includes(tag)))
    .slice(0,3);

  if(related.length === 0) return null;

  return (
    <section className="mt-12">
      <h4 className="text-lg font-semibold mb-4">Related posts</h4>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {related.map(r => (
          <Link key={r.id} to={r.url} className="block bg-white/90 rounded-lg p-3 hover:shadow transition-shadow">
            <div className="h-28 w-full overflow-hidden rounded-md mb-2">
              <img src={r.image} alt={r.title} className="object-cover w-full h-full" />
            </div>
            <h5 className="font-semibold text-sm text-gray-900">{r.title}</h5>
            <p className="text-xs text-gray-600 line-clamp-2">{r.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
