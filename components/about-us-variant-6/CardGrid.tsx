import MediaCard from "./MediaCard";
import { cardData } from "@/data/cardData";
import { Card } from "@/types/cardTypes";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cardData.map((card : Card, index) => (
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
