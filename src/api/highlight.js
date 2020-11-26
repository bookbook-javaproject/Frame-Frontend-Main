import { client } from './client';

export const getHighlightPosts = () => client.get('/post/highlight');
