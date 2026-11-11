import clsx from "clsx";
import { Star } from "lucide-react";

type StarRatingProps = {
  rating?: number;
  className?: string;
};

export default function StarRating({ rating = 5, className }: StarRatingProps) {
  return (
    <div className={clsx("flex gap-1", className)} role="img" aria-label={`${rating} star rating`}>
      {Array.from({ length: rating }, (_, i) => (
        <Star key={i} className="size-4 fill-current" aria-hidden />
      ))}
    </div>
  );
}
