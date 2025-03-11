import { MiscItem } from "@/data/misc";

export function MiscEntry({ miscItem }: { miscItem: MiscItem }) {
  return (
    <div className="flex flex-row items-start">
      <div className="mr-2 mt-1.5">
        <div className="h-2 w-2 rounded-full bg-zinc-400"></div>
      </div>
      <p className="text-sm text-zinc-600">{miscItem.description}</p>
    </div>
  );
} 