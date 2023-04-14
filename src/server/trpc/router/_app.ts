import { router } from '@/server/trpc/trpc';
import { todoRouter } from '@/server/trpc/router/todo';

export const appRouter = router({
  todo: todoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
