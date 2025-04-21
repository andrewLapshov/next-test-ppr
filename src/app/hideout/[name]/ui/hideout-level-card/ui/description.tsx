type Props = {
  description: string | null;
  title: string;
};

export const Description = ({ description, title }: Props) => {
  if (!description) return null;

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      <p className="text-sm text-white">{description}</p>
    </div>
  );
};
