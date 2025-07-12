import { client } from './client'

// Helper function to get all documents of a specific type
export async function getAll(type: string) {
  return client.fetch(`*[_type == $type]`, { type })
}

// Helper function to get a single document by its ID
export async function getById(id: string) {
  return client.fetch(`*[_id == $id][0]`, { id })
}

// Helper function to get a document by its slug
export async function getBySlug(type: string, slug: string) {
  return client.fetch(`*[_type == $type && slug.current == $slug][0]`, { type, slug })
}

// Helper function to get documents with pagination
export async function getPaginated(type: string, { limit = 10, offset = 0 } = {}) {
  const items = await client.fetch(
    `*[_type == $type] | order(_createdAt desc) [${offset}...${offset + limit}]`,
    { type }
  )
  
  const count = await client.fetch(`count(*[_type == $type])`, { type })
  
  return {
    items,
    count,
  }
} 