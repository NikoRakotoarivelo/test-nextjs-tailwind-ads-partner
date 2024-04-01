import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function Panier() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <button className="w-50 bg-yellow-400 text-black font-bold duration-500 px-4 py-1 my-2 rounded mr-4 md:mr-2 text-sm">
          <span>Ajouter au panier</span>
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="h-4 w-4 transform rotate-260 ml-1"
            style={{ color: "black" }}
          />
        </button>
        <button className="w-50 bg-colorButtonHeader text-white font-bold duration-500 px-4 py-1 my-2 rounded text-sm">
          Devis MCE gratuit
        </button>
      </div>
    </div>
  );
}
export default Panier;
