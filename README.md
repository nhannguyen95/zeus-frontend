# Zeus Frontend: LeetCode for DevOps

## Introduction

Zeus (a code name for the project) is a platform designed for "LeetCode for DevOps" style challenges. This repository hosts the frontend that provides an interface for users to browse topics, select problems, and interact with a terminal environment to solve tasks.

While the core vision includes a browser-based terminal using `xterm.js` for secure sandbox interaction, the current implementation focuses on the **Challenge Discovery Layer**, featuring static site generation for optimal performance and rapid iteration using centralized mock data.

## Project Structure

- **`app/`**: Core application logic and routing using the Next.js App Router.
  - **`lib/`**: Shared resources and utilities.
    - **`mock/data.ts`**: Centralized mock data layer for development and testing.
    - **`models.ts`**: TypeScript interfaces and type definitions.
  - **`layout.tsx`**: Root layout component.
  - **`page.tsx`**: Home page listing all available challenge topics.
  - **Pages**:
    - **`topics/[slug]/page.tsx`**: Topic detail page, listing specific problems for a given topic.
    - **`problems/[slug]/page.tsx`**: Problem detail page, providing challenge descriptions and difficulty levels.
- **`public/`**: Static assets.

## Architecture

This project leverages modern web patterns to ensure high performance and developer velocity:

- **Static Site Generation (SSG)**: We use `generateStaticParams` for all topic and problem pages. This pre-renders challenge content at build time, ensuring sub-second navigation and improved SEO.
- **Dynamic Routing**: The `[slug]` convention is used for hierarchical discovery (Topics -> Problems), allowing the system to scale to hundreds of challenges effortlessly.
- **Mock-First Iteration**: Development is driven by a comprehensive mock data layer, enabling UI/UX and routing refinement ahead of backend integration.
