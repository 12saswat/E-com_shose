type RatingStarsProps = {
  rating: number;
};

const RatingStars = ({ rating }: RatingStarsProps) => {
  const totalStars = 5;
  return (
    <span className="text-orange-500 text-[19px] h-0 leading-none">
      {"★".repeat(rating)}
      {"☆".repeat(totalStars - rating)}
    </span>
  );
};

export default RatingStars;
