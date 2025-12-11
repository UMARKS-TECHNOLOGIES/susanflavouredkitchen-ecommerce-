import { Button } from 'components/UI_reusables/ui/button';
import { Link } from 'react-router-dom';

const CategoryCard = ({ name, imageUrl }) => {
  return (
    <div
      className="relative min-w-[280px] h-[200px] lg:w-80 lg:h-50 flex justify-center items-center text-center bg-cover bg-no-repeat rounded-br-lg rounded-tl-lg shrink-0 snap-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="bg-white/70 px-6 py-2 rounded-br-lg rounded-tl-lg backdrop-blur-sm">
        <h3 className="text-xl lg:text-2xl font-bold">{name}</h3>

        <Link to="/admin">
          <Button className="my-3 lg:my-4 bg-orange-600 rounded-br-lg rounded-tl-lg hover:bg-orange-500 text-white font-medium text-sm lg:text-base h-9 lg:h-11">
            View Menu
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
