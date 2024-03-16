import { GoFileDirectoryFill, GoPersonFill } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("Clicked");
  }

  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className="mb-5"> 
          <GoFileDirectoryFill />
          Click me!
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          <GoPersonFill />
          Buy Now
        </Button>
      </div>
      <div>
        <Button success outline>
          Add to cart
        </Button>
      </div>
      <div>
        <Button warning outline>
          Hide
        </Button>
      </div>
      <div>
        <Button danger rounded>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
