import { ContentCard } from "../components/content_card";
import { Header } from "../components/header";
import AddContentCard from "../components/ui/add_content_card";
import { useContent } from "../hooks/contentHook";

function Home() {
  const {
    content,
    showAddContentCard,
    handleAddContentCard,
    handleOverlayClick,
    handelDeleteContent,
  } = useContent();

  return (
    <div>
      <div className="flex flex-col items-start justify-start gap-2 w-full h-full p-4 bg-secondary-background">
        <Header addContentAction={handleAddContentCard} />
        <div className="flex flex-wrap gap-4 justify-center">
          {content.map((item, index) => (
            <ContentCard
              key={`${item.title}-${index}`}
              title={item.title}
              description={item.description}
              link={item.link}
              tags={item.tags}
              type={item.type}
              deleteAction={() => handelDeleteContent(index)}
            />
          ))}
        </div>
      </div>

      {showAddContentCard && (
        <div
          className="flex inset-0 fixed items-center justify-center bg-black/50 z-50"
          onClick={handleOverlayClick}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <AddContentCard handleAddContent={handleAddContentCard} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
