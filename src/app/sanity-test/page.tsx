import { client } from '../../sanity/lib/client';
import { getAll } from '../../sanity/lib/api';

export const revalidate = 60; // Revalidate this page every 60 seconds

// Define a basic type for Sanity documents
interface SanityDocument {
  _id: string;
  _type: string;
  title?: string;
  [key: string]: any;
}

export default async function SanityTestPage() {
  // Get the projectId and dataset from the client configuration
  const projectId = client.config().projectId;
  const dataset = client.config().dataset;
  
  // This will attempt to fetch all documents of type 'post'
  // If your schema uses different document types, you'll need to adjust this
  let posts: SanityDocument[] = [];
  let error: string | null = null;
  
  try {
    posts = await getAll('post');
  } catch (e: unknown) {
    if (e instanceof Error) {
      error = e.message;
    } else {
      error = String(e);
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Sanity Connection Test</h1>
      
      <div className="mb-6 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-2">Configuration</h2>
        <p><strong>Project ID:</strong> {projectId}</p>
        <p><strong>Dataset:</strong> {dataset}</p>
      </div>
      
      {error ? (
        <div className="p-4 bg-red-100 text-red-700 rounded mb-6">
          <h2 className="font-semibold">Error fetching data:</h2>
          <p>{error}</p>
        </div>
      ) : (
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Posts from Sanity</h2>
          {posts.length === 0 ? (
            <p>No posts found. Make sure you have documents of type 'post' in your Sanity dataset.</p>
          ) : (
            <ul className="list-disc pl-5">
              {posts.map((post) => (
                <li key={post._id} className="mb-1">
                  {post.title || post._id}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
      
      <div className="text-sm text-gray-500">
        <p>This page is connected to your external Sanity Studio with project ID: {projectId}</p>
      </div>
    </div>
  );
} 