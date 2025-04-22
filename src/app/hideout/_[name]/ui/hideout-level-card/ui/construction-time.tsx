type Props = {
  constructionTime: number;
  title: string;
};

export const ConstructionTime = ({ constructionTime, title }: Props) => {
  return (
    <div>
      <h4 className="text-sm font-medium text-gray-400">{title}</h4>
      <p className="text-white">
        {Math.floor(constructionTime / 3600)}h {Math.floor((constructionTime % 3600) / 60)}m
      </p>
    </div>
  );
};
