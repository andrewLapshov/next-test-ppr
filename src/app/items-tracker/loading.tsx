import { ItemCardSkeleton } from './ui/item-card-skeleton';

export default function ItemsTrackerLoading() {
  return (
    <div className="flex min-h-dvh grow flex-col gap-5 pb-5">
      <div className="mb-0.5 h-10" />

      <div className="grid w-full grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-2">
        {[...new Array(25)].map((_, index) => (
          <ItemCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
