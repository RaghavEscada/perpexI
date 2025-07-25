import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../src/sanity/env'

export const sanityClient = createClient({
  apiVersion: '2023-05-03',
  dataset: 'production',
  projectId: '3dlng0y4',
  useCdn: false,
})

// For preview functionality
export const getClient = (preview?: { token?: string }) => {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn: !preview,
    token: preview?.token,
  })
  
  return client
} 