import cn from "clsx";
import Link from "next/link";

type Props = {
  imageLink: string | null;
  name: string;
  normalizedName: string;
  isActive?: boolean;
  onClick?: () => void;
};

export const ModuleLink = ({
  imageLink,
  name,
  normalizedName,
  isActive,
  onClick,
}: Props) => {
  return (
    <Link
      className={cn(
        "text-sm hover:underline md:pr-2",
        isActive && "rounded-md bg-yellow-200 text-black",
      )}
      href={`/hideout/${normalizedName}`}
      prefetch={false}
      scroll={false}
      onClick={onClick}
    >
      <div className="flex items-center gap-1">
        {imageLink && (
          <img alt={name} className="h-12 w-12 md:h-7 md:w-7" src={imageLink} />
        )}
        <h2 className="hidden md:block">{name}</h2>
      </div>
    </Link>
  );
};
