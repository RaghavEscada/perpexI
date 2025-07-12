export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03'

// Your Sanity project ID and dataset
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your_project_id_here'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

// Used to configure CORS in the Sanity Studio
export const studioUrl = process.env.NEXT_PUBLIC_STUDIO_URL || 'http://localhost:3000'

// Used for visual editing in the Studio
export const useCdn = false 