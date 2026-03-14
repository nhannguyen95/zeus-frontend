# Zeus Frontend: LeetCode for DevOps

## Introduction

This repository contains the frontend application for the "LeetCode for DevOps" platform, a Remote Code Execution as a Service (RCEaaS) system. It provides users with an interactive, isolated environment (a remote shell terminal) to solve DevOps challenges securely.

The frontend is a [Next.js](https://nextjs.org) application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It connects directly to the platform's connectivity layer and utilizes `xterm.js` to render a terminal in the browser, allowing users to interact seamlessly with their dedicated sandboxes via WebSockets.

## Project Structure

- **`app/`**: Contains all the routes, components, and logic for your application. This is where you'll be mostly working from.
  - **`lib/`**: Shared libraries, utilities, and models.
    - **`mock/data.ts`**: Mock data and APIs for testing and development.
    - **`models.ts`**: TypeScript type definitions and interfaces.
  - **`layout.tsx`**: The root layout component of the Next.js application.
  - **Pages**:
    - **`topics/[slug]/page.tsx`**: The Topic detail page, which displays a list of problems for a topic.
    - **`page.tsx`**: The home page of the application that lists all topics.
- **`public/`**: Contains all the static assets for your application, such as images.
