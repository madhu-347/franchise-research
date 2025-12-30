import MediaCard from "./MediaCard";

type Card = {
  title: string;
  description: string;
  mediaType: "image" | "video";
  mediaSrc: string;
};

const cards: Card[] = [
  {
    title: "Lorem Ipsum",
    description:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,   Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, ",
    mediaType: "image",
    mediaSrc: "",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,   Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, ",
    mediaType: "video",
    mediaSrc: "",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,   Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, ",
    mediaType: "image",
    mediaSrc: "",
  },
  {
    title: "Lorem Ipsum",
    description:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,   Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, ",
    mediaType: "video",
    mediaSrc: "",
  },
];

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={index % 2 === 1 ? "md:mt-12" : ""}
        >
          <MediaCard title={card.title} description={card.description} />
        </div>
      ))}
    </div>
  );
}
