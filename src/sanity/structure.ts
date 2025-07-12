import { StructureBuilder } from 'sanity/desk'

// Define the structure for the Sanity Studio
export const structure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      // Add a new document type to the structure
      S.listItem()
        .title('Gallery')
        .child(
          S.documentTypeList('gallery')
            .title('Gallery')
        ),
      
      // You can add more document types here as needed
      // Example:
      // S.listItem()
      //   .title('Posts')
      //   .child(
      //     S.documentTypeList('post')
      //       .title('Posts')
      //   ),
    ]) 