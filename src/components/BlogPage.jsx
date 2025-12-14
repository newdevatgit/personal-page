import { useParams, Link } from 'react-router-dom';
import { posts } from '../data/posts';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import RelatedPosts from './RelatedPosts';

export default function BlogPage(){
  const { slug } = useParams();
  const post = posts.find(p => p.id === slug || p.url === `/blog/${slug}`);

  if(!post){
    return (
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Post not found</h2>
        <p className="mb-6">We couldn't find the post you're looking for.</p>
        <Link to="/" className="text-blue-600 underline">Back to posts</Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto bg-white/80 rounded-xl shadow p-6">
        <div className="mb-6 overflow-hidden rounded-lg">
          <img src={post.image} alt={post.title} className="w-full h-64 object-cover" />
        </div>

        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
          <div className="text-sm text-gray-500">
            <time dateTime={post.date}>{post.dateReadable}</time>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
        </header>

        <section className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
        </section>

        <RelatedPosts current={post} />
      </article>
    </main>
  );
}
