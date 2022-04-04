import dayjs from 'dayjs';

interface IPost {
  date: string;
  id: string;
  title: string;
}

interface IPostsProps {
  posts: IPost[];
}

export function Posts({ posts }: IPostsProps) {
  return (
    <div className="flex flex-col items-center justify-center mt-14">
      <div className="grid grid-cols-1 gap-y-4 lg:gap-y-0 lg:grid-cols-2 gap-0 lg:gap-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="flex flex-col items-center justify-center text-center border p-4 rounded-md duration-300 transition hover:shadow-lg"
          >
            <strong className="text-sm">{post.title}</strong>
            <span className="text-xs text-slate-500">
              {dayjs(post.date).format('DD MMMM YYYY')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
