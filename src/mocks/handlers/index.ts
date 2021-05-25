import { rest } from 'msw';
import { posts } from 'mocks/data/posts';

export const handlers = [
  rest.get('/posts', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ posts }));
  }),
];
