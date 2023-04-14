import type { NextPage } from "next";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import { trpc } from "../../utils/trpc";
import { format } from "date-fns";
import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

const SingleTaskPage: NextPage = () => {
  const router = useRouter();
  const taskId = router.query.taskId as string;
  const { data, isLoading, error } = trpc.todo.getSingleTask.useQuery({
    taskId,
  });
  if (isLoading) {
    return (
      <Layout title="Task Detail">
        <p>Loading single task...</p>
      </Layout>
    );
  }
  if (error) {
    return (
      <Layout title="Task Detail">
        <p>{error.message}</p>
      </Layout>
    );
  }
  return (
    <Layout title="Task Detail">
      <p className="mb-3 text-xl font-bold text-blue-600">{data?.title}</p>
      <p>{data?.body}</p>
      <p className="my-1 text-sm">
        {data && format(new Date(data.createdDt), "yyyy-MM-dd HH:mm:ss")}
      </p>
      <p className="my-1 text-sm">
        {data && format(new Date(data.updatedDt), "yyyy-MM-dd HH:mm:ss")}
      </p>
      <Link href={`/`}>
        <ArrowUturnLeftIcon className="mt-3 h-6 w-6 cursor-pointer text-blue-600" />
      </Link>
    </Layout>
  );
};

export default SingleTaskPage;
