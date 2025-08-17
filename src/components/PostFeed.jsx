import Badge from "./Badge";

export default function PostFeed({ title, category, author, date }) {
  return (
    <div className="mt-3">
      <Badge label={category} className="text-xs font-semibold uppercase" />
      <h5 className="text-md font-semibold leading-tight mt-2 mb-1">{title}</h5>
      <p className="text-sm">
        <span>{author}</span>&nbsp;-&nbsp;
        <span className="text-dark-gray">{date}</span>
      </p>
    </div>
  );
}
