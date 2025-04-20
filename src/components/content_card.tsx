import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { faXTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { CardType } from "../lib/types";
import ShareIcon from "../icons/ShareIcon";
import { Badge } from "./ui/badge";

interface ContentCardProps {
  title: string;
  description?: string;
  link: string;
  tages?: string[];
  type: CardType;
}

export function ContentCard(props: ContentCardProps) {
  const [youtubeId, setYoutubeId] = useState<string | null>(null);
  const [tweetId, setTweetId] = useState<string | null>(null);
  const [previewLoaded, setPreviewLoaded] = useState<boolean>(false);

  useEffect(() => {
    // Extract YouTube video ID from various YouTube URL formats
    if (props.type === CardType.Youtube) {
      const youtubeRegex =
        /(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
      const match = props.link.match(youtubeRegex);
      if (match && match[1]) {
        setYoutubeId(match[1]);
      }
    }

    // Extract Twitter tweet ID
    if (props.type === CardType.Tweet) {
      const twitterRegex = /twitter\.com\/[^/]+\/status\/(\d+)/;
      const match = props.link.match(twitterRegex);
      if (match && match[1]) {
        setTweetId(match[1]);
      }
    }
  }, [props.link, props.type]);

  const handleCardClick = () => {
    window.open(props.link, "_blank", "noopener,noreferrer");
  };

  return (
    <div>
      <Card
        className="md:w-96 w-full h-min overflow-auto m-3 cursor-pointer hover:shadow-lg transition-shadow duration-300"
        onClick={handleCardClick}
      >
        <CardHeader className="flex justify-between items-center">
          <CardTitle>
            {props.type === CardType.Youtube && (
              <FontAwesomeIcon icon={faYoutube} size="sm" />
            )}
            {props.type === CardType.Tweet && (
              <FontAwesomeIcon icon={faXTwitter} size="sm" />
            )}
            {props.type === CardType.link && (
              <FontAwesomeIcon icon={faLink} size="sm" />
            )}
          </CardTitle>
          <CardTitle className="text-center">{props.title}</CardTitle>
          <CardTitle>
            <ShareIcon size="md" />
          </CardTitle>
        </CardHeader>
        <CardContent>
          {props.type === CardType.Youtube && youtubeId && (
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}`}
                title={props.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-md"
              />
            </div>
          )}

          {props.type === CardType.Tweet && tweetId && (
            <div className="tweet-embed">
              <blockquote className="twitter-tweet">
                <a href={props.link}>Loading Tweet...</a>
              </blockquote>
              {tweetId && (
                <script
                  async
                  src="https://platform.twitter.com/widgets.js"
                  charSet="utf-8"
                ></script>
              )}
            </div>
          )}

          {props.type === CardType.link && (
            <div className="link-preview">
              <div className="relative aspect-video bg-gray-100 rounded-md overflow-hidden mb-4">
                <img
                  src={`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
                    props.link
                  )}&screenshot=true`}
                  alt="Website preview"
                  className="w-full h-full object-cover"
                  onLoad={() => setPreviewLoaded(true)}
                  onError={() => setPreviewLoaded(false)}
                />
                {!previewLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                    <div className="text-gray-500">Link Preview</div>
                  </div>
                )}
              </div>
              {props.description && (
                <p className="text-gray-600 line-clamp-3">
                  {props.description}
                </p>
              )}
            </div>
          )}
          {props.tages?.map((tag, index) => (
            <Badge className="m-2 bg-purple-300 " key={index}>
              <span className="text-purple-500">#{tag}</span>
            </Badge>
          ))}
        </CardContent>
        <CardFooter>
          <p className="font-mono text-sm">Added on 12.02.2025</p>
        </CardFooter>
      </Card>
    </div>
  );
}
