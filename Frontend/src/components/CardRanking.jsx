import UserImg from "../assets/Images/user.png";
import StarIcon from "../assets/Icons/StarIcon";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CardRanking = () => {
  const reviews = { href: "#", average: 3 };
  const features = [
    {
      name: "Ana Lopez",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quas delectus fugiat?",
      imgHref: UserImg,
    },
    {
      name: "Ana Lopez",
      comment:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia quas delectus fugiat?",
      imgHref: UserImg,
    },
  ];
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mt-8 grid grid-cols-1 gap-20 md:grid-cols-2 md:gap-8">
        {features.map((feature) => (
          <div
            key={feature.name}
            className="rounded-2xl border border-[#959595] p-6 sm:p-8"
          >
            <div className="flex items-start gap-9">
              <div className="flex-shrink-0">
                <img
                  src={feature.imgHref}
                  className="rounded-full bg-cover h-24 w-24"
                />
              </div>
              <div className="flex justify-between gap-4 flex-col">
                <div className="flex justify-start gap-1">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        reviews.average > rating ? "text-black" : "text-white",
                        "h-6 w-6 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <h5 className="font-semibold text-xl">{feature.name}</h5>
                <p className="font-medium text-2xl">{feature.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardRanking;