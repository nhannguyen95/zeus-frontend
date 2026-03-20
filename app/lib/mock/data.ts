import { Topic, Problem } from '../models';

export const topics: Topic[] = [
  {
    id: 'nginx',
    slug: 'nginx',
    title: 'NGINX',
    description: 'Master the industry-standard reverse proxy and load balancer.',
  },
  {
    id: 'docker',
    slug: 'docker',
    title: 'Docker',
    description: 'Learn containerization from the ground up.',
  },
  {
    id: 'kubernetes',
    slug: 'kubernetes',
    title: 'Kubernetes',
    description: 'Orchestrate containers at scale.',
  },
  {
    id: 'redis',
    slug: 'redis',
    title: 'Redis',
    description: 'High-performance in-memory data store.',
  },
];

export const problems: Problem[] = [
  {
    id: 'nginx-basic-config',
    topicId: 'nginx',
    slug: 'basic-configuration',
    title: 'Basic NGINX Configuration',
    description: 'Configure NGINX to serve a static HTML site on port 80.',
    difficulty: 'Easy',
  },
  {
    id: 'nginx-reverse-proxy',
    topicId: 'nginx',
    slug: 'reverse-proxy',
    title: 'NGINX as a Reverse Proxy',
    description: 'Setup NGINX to proxy requests to a backend service running on localhost:3000.',
    difficulty: 'Medium',
  },
  {
    id: 'docker-build-image',
    topicId: 'docker',
    slug: 'build-image',
    title: 'Build your first Docker Image',
    description: 'Create a Dockerfile for a simple Node.js application and build the image.',
    difficulty: 'Easy',
  },
  {
    id: 'k8s-pod-creation',
    topicId: 'kubernetes',
    slug: 'pod-creation',
    title: 'Deploy a Pod',
    description: 'Write a YAML manifest to deploy a single NGINX pod in the default namespace.',
    difficulty: 'Easy',
  },
];

// TODO: Replace with actual API calls and subject to change,
// depending on the backend implementation.
export async function getAllTopics(): Promise<Topic[]> {
  return topics;
}

// REST endpoint could be: GET /topics/slug/{slug}
export async function getTopicBySlug(slug: string): Promise<Topic | undefined> {
  return topics.find((t) => t.slug === slug);
}

export async function getTopicById(id: string): Promise<Topic | undefined> {
  return topics.find((t) => t.id === id);
}

export async function getProblemsByTopic(topicId: string): Promise<Problem[]> {
  return problems.filter((p) => p.topicId === topicId);
}

export async function getAllProblems(): Promise<Problem[]> {
  return problems;
}

export async function getProblemBySlug(slug: string): Promise<Problem | undefined> {
  return problems.find((p) => p.slug === slug);
}

