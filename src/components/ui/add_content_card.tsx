import { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./card";
import { Button } from "./button";
import { Input } from "./input";
// import { Cross2Icon, PlusIcon } from "@radix-ui/react-icons";

function AddContentCard() {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Sample predefined tags - replace with your own or fetch from API
  const predefinedTags = ["JavaScript", "React", "CSS", "HTML", "TypeScript"];

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission with title, link and selectedTags
    console.log({ title, link, selectedTags });
    // Reset form
    setTitle("");
    setLink("");
    setSelectedTags([]);
  };

  const allTags = [...new Set([...predefinedTags, ...tags])];

  return (
    <Card className="w-full max-w-md">
      <form onSubmit={handleSubmit}>
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
              <Button variant="primary" size="sm" text="Add Tag">
                {/* <PlusIcon className="h-4 w-4" /> */}
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Available Tags</label>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
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
                  {/* {!predefinedTags.includes(tag) && (
                    <Cross2Icon
                      className="h-3 w-3 cursor-pointer hover:text-destructive"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteTag(tag);
                      }}
                    />
                  )} */}
                </div>
              ))}
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

        <CardFooter>
          <button type="submit" className="w-full">
            Add Content
          </button>
        </CardFooter>
      </form>
    </Card>
  );
}

export default AddContentCard;
