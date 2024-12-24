# Tetsuo.ai - Next.js Project

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

To get started with the development server, follow these steps:

1. **Install dependencies**: Ensure you have all necessary dependencies installed.
   ```bash
   pnpm install
   ```

2. **Run the development server**: Start the development server to see your changes in real-time.
   ```bash
   pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

The project structure follows the Next.js App Router conventions and includes the following key directories and files:

- **`/app`**: Contains the main application pages and routes.
  - **`/(default)/about/page.tsx`**: The About page of the application.
- **`/components`**: Contains reusable React components.
  - **`/mdx`**: Components related to MDX rendering.
    - **`mdx.tsx`**: Custom MDX components and configuration.
    - **`link.tsx`**: Custom Link component for MDX.
    - **`utils.ts`**: Utility functions for MDX processing.
- **`/content`**: Contains the content files, such as blog posts.
  - **`/blog`**: Directory for blog posts in MDX format.
    - **`b2b-vs-b2c-product-management-how-different-are-they-really.mdx`**: Example blog post.

## Metadata

The project includes metadata for SEO and social sharing, defined in the `metadata` object within each page component. For example, the About page metadata is defined as follows:
