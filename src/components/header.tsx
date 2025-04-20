import PluseIcon from "../icons/PluseIcon";
import ShareIcon from "../icons/ShareIcon";
import { Button } from "./ui/button";

export function Header() {
  return (
    <div className="flex justify-between w-full">
      <p className="text-xl font-bold">All Notes</p>
      <div className="hidden md:flex gap-4">
        <Button
          variant="secondary"
          startIcon={<ShareIcon size="md" />}
          text="Share Brain"
        />
        <Button
          variant="primary"
          startIcon={<PluseIcon size="md" />}
          text="Add Content"
        />
      </div>
    </div>
  );
}
