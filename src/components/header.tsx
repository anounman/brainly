import PluseIcon from "../icons/PluseIcon";
import ShareIcon from "../icons/ShareIcon";
import { Button } from "./ui/button";

interface HeaderProps {
  shareButtonAction?: () => void;
  addContentAction?: () => void;
}

export function Header(props: HeaderProps) {
  return (
    <div className="flex justify-between w-full">
      <p className="text-xl font-bold">All Notes</p>
      <div className="hidden md:flex gap-4">
        <Button
          variant="secondary"
          startIcon={<ShareIcon size="md" />}
          text="Share Brain"
          onClick={props.shareButtonAction}
        />
        <Button
          variant="primary"
          startIcon={<PluseIcon size="md" />}
          text="Add Content"
          onClick={props.addContentAction}
        />
      </div>
    </div>
  );
}
