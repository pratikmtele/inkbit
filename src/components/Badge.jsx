export default function Badge({ label, className }) {
  return (
    <div className="px-2.5 bg-secondary py-1 rounded-full w-fit">
      <h5 className={`text-light  ${className}`}>{label}</h5>
    </div>
  );
}
