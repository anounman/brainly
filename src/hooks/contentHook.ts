import { useCallback, useState } from "react";
import { ContentCardProps } from "../components/content_card";
import { CardType } from "../lib/types";

export const useContent = () => {
  const [showAddContentCard, setShowAddContentCard] = useState(false);
  const [content, setContent] = useState<ContentCardProps[]>([
    {
      title: "Sample Content",
      description: "This is a sample content description.",
      link: "https://www.youtube.com/watch?v=tZ4ZsUf3QEU",
      tags: ["Sample", "Content"],
      type: CardType.Youtube, // or "Tweet"
    },
    {
      title: "Another Sample Content",
      description: "This is another sample content description.",
      link: "https://www.youtube.com/watch?v=tZ4ZsUf3QEU",
      tags: ["Sample", "Content"],
      type: CardType.Youtube, // or "Youtube"
    },
  ]);

  // const [showShareBrainCard, setShowShareBrainCard] = useState(false);
  const handleAddContentCard = useCallback(() => {
    setShowAddContentCard(prev => !prev);
  }, []);

  const handelDeleteContent = useCallback((index: number) => {
    setContent(prevContent => {
      const updatedContent = [...prevContent];
      updatedContent.splice(index, 1);
      return updatedContent;
    }
    );
  }, []);


  const disableAddContentCard = useCallback(() => {
    setShowAddContentCard(false);
  }, []);

  const handleAddContent = useCallback((newContent: ContentCardProps) => {
    console.log("Adding content:", newContent);

    setContent(prevContent => {
      const updatedContent = [...prevContent, newContent];
      console.log("Updated content:", updatedContent);
      return updatedContent;
    });

    setShowAddContentCard(false);
    console.log("Content adding is done", showAddContentCard);
  }, [showAddContentCard]);

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowAddContentCard(false);
    }
  }, []);






  return { content, showAddContentCard, handleAddContentCard, handleOverlayClick, handleAddContent, disableAddContentCard, handelDeleteContent };
};
