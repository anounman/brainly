import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Input } from "./input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { ContentCardProps } from "../content_card";
import { CardType } from "../../lib/types";

// Accept handleAddContent as a prop instead of using the hook
function AddContentCard({
  handleAddContent,
}: {
  handleAddContent: (content: ContentCardProps) => void;
}) {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Sample predefined tags - replace with your own or fetch from API
  const predefinedTags = [
    "Education",
    "Ai",
    "Open Source",
    "University",
    "Shoping Hack",
  ];

  const handleAddTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleDeleteTag = (tagToDelete: string) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
    setSelectedTags(selectedTags.filter((tag) => tag !== tagToDelete));
  };

  const handleTagSelection = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && tagInput) {
      e.preventDefault();
      handleAddTag();
    }
  };

  const handelAddNewContent = () => {
    handleAddContent({
      title,
      link,
      tags: selectedTags,
      type: link.includes("youtube.com")
        ? CardType.Youtube
        : link.includes("twitter.") || link.includes("x.")
        ? CardType.Tweet
        : CardType.link,
    } as ContentCardProps);
    console.log("called handleAddContent");

    // Reset form
    setTitle("");
    setLink("");
    setSelectedTags([]);
  };

  const allTags = [...new Set([...predefinedTags, ...tags])];

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Add New Content</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="title" className="text-sm font-medium">
            Title
          </label>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter content title"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="link" className="text-sm font-medium">
            Link
          </label>
          <Input
            id="link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://example.com"
            type="url"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Tags</label>
          <div className="flex gap-2">
            <Input
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Add custom tag"
            />
            <Button
              variant="secondary"
              size="sm"
              text="Add Tag"
              textCLasses="text-xs"
              onClick={handleAddTag}
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Available Tags</label>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => {
              return (
                <div
                  key={tag}
                  className={`flex items-center gap-1 rounded-md px-2 py-1 text-xs cursor-pointer ${
                    selectedTags.includes(tag)
                      ? "bg-purple-600 text-white"
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                  onClick={() => handleTagSelection(tag)}
                >
                  <span>{tag}</span>
                  {!predefinedTags.includes(tag) && (
                    <FontAwesomeIcon
                      icon={faRemove}
                      className="h-3 w-3 cursor-pointer hover:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTag(tag);
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {selectedTags.length > 0 && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Selected Tags</label>
            <div className="flex flex-wrap gap-2">
              {selectedTags.map((tag) => (
                <div
                  key={tag}
                  className="bg-purple-600 text-white rounded-md px-2 py-1 text-xs"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-center pt-5">
        <Button
          type="button"
          variant="primary"
          text="Add Content"
          onClick={handelAddNewContent}
        ></Button>
      </CardFooter>
    </Card>
  );
}

export default AddContentCard;
