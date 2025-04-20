import { ContentCard } from "../components/content_card";
import { CardType } from "../lib/types";
import { Header } from "../components/header";
// import AddContentCard from "../components/ui/add_content_card";

export function Home() {
  return (
    <div className="flex flex-col items-start justify-start gap-2 p w-full h-full p-4 bg-secondary-background">
      <Header />
      {/* doc section */}
      <div className="flex flex-wrap gap-4 justify-center">
        <ContentCard
          title="Master Copilot Studio Kit Style & Build Your Copilot Like a Pro
"
          link="https://www.youtube.com/watch?v=Ckcdhe8Xfo0"
          type={CardType.Youtube}
          tages={["AI", "Copilot", "Studio"]}
        />
        {/* <AddContentCard /> */}
      </div>
    </div>
  );
}
