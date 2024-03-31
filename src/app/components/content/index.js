import {
  faPhone,
  faCalendarAlt,
  faBars,
  faMapMarkerAlt,
  faShoppingCart,
  faUser,
  faEuroSign,
  faStar,
  faHeart,
  faShareAlt,
  faBookmark,
  faAngleUp,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import Navbar from "../navbar";

function Content() {
  //PRODUIT
  const produits = [
    "Porte fenêtre",
    "Volet",
    "Porte de garage",
    "Pergola",
    "Grillage",
  ];

  const [indexProduit, setindexProduit] = useState(0);
  const [selectedProduit, setSelectedProduit] = useState(produits[0]);

  const prevProduit = () => {
    const index = indexProduit === 0 ? produits.length - 1 : indexProduit - 1;
    setindexProduit(index);
    setSelectedProduit(produits[index]);
  };

  const nextProduit = () => {
    const index = indexProduit === produits.length - 1 ? 0 : indexProduit + 1;
    setindexProduit(index);
    setSelectedProduit(produits[index]);
  };

  const handleProduitChange = (event) => {
    setSelectedProduit(event.target.value);
  };
  //PRODUIT

  const images = [
    "/106.jpg",
    "/golf.jpg",
    "/hyundai.jpg",
    "/golf1.jpg",
    "/golf2.jpg",
    "/golf3.jpg",
    "/golf4.jpg",
  ];

  // COULEUR
  const couleurs = [
    {
      id: 1,
      class: "bg-black",
      couleur: "noir",
    },
    {
      id: 2,
      class: "bg-red-500",
      couleur: "rouge",
    },
    {
      id: 3,
      class: "bg-blue-500",
      couleur: "bleu",
    },
    {
      id: 4,
      class: "bg-gray-500",
      couleur: "gris",
    },
  ];
  const [selectedCouleur, setSelectedCouleur] = useState("noir");
  const handleCouleurClick = (couleur) => {
    setSelectedCouleur(couleur);
  };
  // COULEUR

  const [selectedImage, setSelectedImage] = useState(images[0]);
  const [startIndex, setStartIndex] = useState(0);
  const handleClick = (image) => {
    setSelectedImage(image);
  };

  const handleNext = () => {
    if (startIndex < images.length - 3) {
      setStartIndex(startIndex + 1);
      setSelectedImage(images[startIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
      setSelectedImage(images[startIndex - 1]);
    }
  };

  const cardsData = [
    {
      id: 1,
      description: "Mortaise + ventilation",
      image: "/106.jpg",
      pourcentage: 0,
    },
    {
      id: 2,
      description: "Soubassement plein",
      image: "/106.jpg",
      pourcentage: 0,
    },
    {
      id: 3,
      description: "Crémone avec fermeture à clefs intérieure",
      image: "/106.jpg",
      pourcentage: 180,
    },
    {
      id: 4,
      description: "Crémone avec fermeture à clefs in & ext",
      image: "/106.jpg",
      pourcentage: 140,
    },
    {
      id: 5,
      description: "Oscillo battant",
      image: "/106.jpg",
      pourcentage: 80,
    },
    {
      id: 6,
      description: "Plus-value couleur",
      image: "/106.jpg",
      pourcentage: 140,
    },
  ];
  const [selectedCard, setSelectedCard] = useState(null);

  const [selectedDescription, setSelectedDescription] = useState("Aucune ... ");
  const [selectedPourcentageCard, setSelectedPourcentageCard] = useState(0);

  const handleCardSelect = (cardId, cardDescription, cardPourcentage) => {
    setSelectedDescription(cardDescription);
    setSelectedPourcentageCard(cardPourcentage);
  };

  const handleCardSelectPourcentage = (cardId, cardPourcentage) => {
    setSelectedPourcentageCard(cardPourcentage);
  };

  //   QUANTITE VANTAIL
  const [quantityVantail, setQuantityVantail] = useState(0);
  const quantityUpVantail = () => {
    setQuantityVantail(quantityVantail + 1);
  };

  const quantityDownVantail = () => {
    if (quantityVantail > 0) {
      setQuantityVantail(quantityVantail - 1);
    }
  };

  //   QUANTITE PRODUIT
  const [quantityPanier, setQuantityPanier] = useState(0);
  const quantityUpPanier = () => {
    setQuantityPanier(quantityPanier + 1);
  };

  const quantityDownPanier = () => {
    if (quantityPanier > 0) {
      setQuantityPanier(quantityPanier - 1);
    }
  };

  // POSE
  const pose = ["Avec la pose", "Sans la pose"];
  const [poseChecked, setPoseChecked] = useState("Avec la pose");

  const handlePoseChange = (pose) => {
    setPoseChecked(pose);
  };

  //   HAUTEUR
  const [selectedHauteur, setSelectedHauteur] = useState("0");
  const handleHauteurChange = (event) => {
    setSelectedHauteur(event.target.value);
  };

  //   LARGEUR
  const [selectedLargeur, setSelectedLargeur] = useState("0");
  const handleLargeurChange = (event) => {
    setSelectedLargeur(event.target.value);
  };

  // PLAXAGE
  const plaxages = [
    {
      id: 1,
      description: "Plus value couleur",
      pourcentage: 20,
    },
    {
      id: 2,
      description: "Plaxage 1 face",
      pourcentage: 20,
    },
    {
      id: 3,
      description: "Plaxage 2 face",
      pourcentage: 40,
    },
  ];

  const [selectedPlaxage, setSelectedPlaxage] = useState(null);

  const handlePlaxageSelection = (plaxageId) => {
    setSelectedPlaxage(plaxageId);
  };

  const calculerValeur = (valeur) => {
    if (selectedPlaxage !== null) {
      const plaxage = plaxages.find(
        (plaxage) => plaxage.id === selectedPlaxage
      );
      const pourcentage = plaxage ? plaxage.pourcentage : 0;
      console.log(pourcentage);
      return valeur + (valeur * pourcentage) / 100;
    }
    return valeur;
  };
  // PLAXAGE

  return (
    <div className="mx-auto">
      <Navbar />
      <div className="flex flex-wrap bg-gray-300 overflow-hidden">
        <div className="flex w-full justify-around">
          <div className="w-1/3 mx-12 h-auto"></div>
          <div className="w-full">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="p-2 bg-gray-300  sm:text-justify flex w-full flex-col md:flex-row">
                <a href="#" className="hover:text-gray-700 text-sm mx-2">
                  Accueil
                </a>
                <span>&gt;</span>
                <a href="#" className="hover:text-gray-700 text-sm mx-2">
                  Fenêtre
                </a>
                <span>&gt;</span>
                <a
                  href="#"
                  className="hover:text-gray-700 text-sm font-bold mx-2"
                >
                  Fenêtre PVC sur mesure
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center w-full"></div>
        </div>
      </div>

      <div className="flex flex-wrap bg-gray-300 overflow-hidden">
        <div className="flex w-full justify-around mx-8">
          <div className="w-24 h-24 my-8 rounded">
            {images.slice(startIndex, startIndex + 3).map((image, index) => (
              <img
                key={index}
                src={image}
                width={500}
                height={600}
                alt={`Thumbnail ${index}`}
                className="cursor-pointer w-full object-cover mb-2 rounded-3xl transition duration-200 group transform hover:-translate-y-4 hover:shadow-3xl"
                onClick={() => handleClick(image)}
              />
            ))}
            <div className="flex justify-center my-4">
              <a
                onClick={handlePrev}
                className={`focus:outline-none mr-2 ${
                  startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faAngleUp}
                  className="text-colorButtonHeader"
                  style={{ fontSize: "30px" }}
                />
              </a>
              <a
                onClick={handleNext}
                className={`focus:outline-none ml-2 ${
                  startIndex === images.length - 3
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <FontAwesomeIcon
                  icon={faAngleDown}
                  className="text-colorButtonHeader"
                  style={{ fontSize: "30px" }}
                />
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              src={selectedImage}
              width={300}
              height={400}
              alt="Selected"
              className="my-6 rounded-3xl"
            />
            <div className="absolute bottom-20 right-0 flex items-center">
              <span className="bg-blue-500 text-white rounded-full w-7 h-7 flex items-center justify-center">
                +
              </span>
              <div className="bg-colorButtonHeader text-white text-xs w-full h-5 rounded-md flex items-center justify-center">
                {selectedDescription}
              </div>
            </div>
            <div className="absolute bottom-40 left-4 flex flex-col">
              {couleurs.map((couleur, index) => (
                <button
                  key={index}
                  onClick={() => handleCouleurClick(couleur.couleur)}
                  className={`text-white rounded-md border-2 border-white p-2 mb-2 w-2 h-8 ${couleur.class}`}
                ></button>
              ))}
            </div>
          </div>

          <div className="w-2/5 my-6">
            <div>
              <p className="text-sm text-gray-400">
                Ref mms-{selectedProduit.toLowerCase()}-{quantityVantail}V
              </p>
              <p className="text-sm mb-8">
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl font-bold text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl font-bold text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl font-bold text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl font-bold text-yellow-400"
                />
                <FontAwesomeIcon
                  icon={faStar}
                  className="text-3xl font-bold text-yellow-400"
                />
                <span className="text-gray-400">(72 Avis) |</span>
              </p>
              <p className="font-bold text-xl  mb-12">
                {selectedProduit && <span>{selectedProduit}</span>}
                {selectedHauteur !== "0" && selectedLargeur !== "0" && (
                  <span>
                    {" "}
                    {selectedHauteur} x {selectedLargeur}{" "}
                  </span>
                )}
                {quantityVantail > 0 && (
                  <span>
                    {" "}
                    + {quantityVantail}{" "}
                    {quantityVantail >= 2 ? "vantaux" : "vantail"}{" "}
                  </span>
                )}
                {poseChecked !== "Sans la pose" && <span> + {"pose"} </span>}
                <span> + couleur {selectedCouleur} </span>
                <span> + {selectedDescription}.</span>
              </p>
              <p className="text-7xl font-bold mb-12 flex justify-between">
                {/* Valeur initial 2055, additionner par la card en euro */}
                <span>
                  {calculerValeur(2055 + selectedPourcentageCard * quantityPanier).toFixed(2)}
                </span>
                <span className="text-4xl font-bold">
                  <FontAwesomeIcon
                    icon={faEuroSign}
                    className="text-7xl font-bold"
                  />
                </span>
                <span className="relative">
                  <span className="absolute top-0 right-0 text-2xl">HT</span>
                </span>
              </p>
            </div>

            <p className="mb-2 md:mb-0">Quantité :</p>
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="flex items-center space-x-2 border-b-2 border-colorButtonHeader">
                <span className="text-xl font-bold">{quantityPanier}</span>
                <button
                  onClick={quantityUpPanier}
                  className="bg-gray-400 text-black rounded-full w-5 h-5"
                >
                  +
                </button>
                <button
                  onClick={quantityDownPanier}
                  className="bg-colorButtonHeader text-white rounded-full w-5 h-5"
                >
                  -
                </button>
              </div>
              <span className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="text-xl md:ml-2"
                />
                <FontAwesomeIcon icon={faHeart} className="text-xl md:ml-2" />
                <FontAwesomeIcon
                  icon={faShareAlt}
                  className="text-xl md:ml-2"
                />
              </span>
            </div>
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
          </div>
        </div>
      </div>

      <div className="flex flex-wrap bg-gray-300 overflow-hidden">
        <div className="flex w-full justify-around">
          <div className="w-1/3 mx-12 h-auto my-12">
            <ul>
              {pose.map((pose, index) => (
                <li key={index}>
                  <input
                    type="radio"
                    name="poseOption"
                    checked={pose === poseChecked}
                    onChange={() => handlePoseChange(pose)}
                    className="mr-1 text-xs w-5 h-5 appearance-none rounded-full border-2 bg-white checked:bg-colorButtonHeader checked:border-white"
                  />
                  <label className="mt-1">{pose}</label>
                </li>
              ))}
            </ul>
          </div>
          <div className="my-10">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-auto mb-6 md:mb-0 md:mr-8">
                <p className="mb-2 md:mb-0 text-sm w-24">Nb de vantail</p>
                <div className="flex items-center border-b-2 border-colorButtonHeader">
                  <span className="text-xl font-bold">{quantityVantail}</span>
                  <button
                    onClick={quantityUpVantail}
                    className="bg-gray-400 text-black rounded-full w-5 h-5 ml-2"
                  >
                    +
                  </button>
                  <button
                    onClick={quantityDownVantail}
                    className="bg-colorButtonHeader text-white rounded-full w-5 h-5 ml-2"
                  >
                    -
                  </button>
                </div>
              </div>

              <div className="w-full md:w-auto mb-6 md:mb-0 md:mr-8">
                <p className="mb-2 md:mb-0 text-sm">Matériaux</p>
                <div>
                  <select
                    name="produit"
                    onChange={handleProduitChange}
                    value={selectedProduit}
                    className="border-2 rounded-lg text-sm border-gray-500"
                  >
                    {produits.map((produit, index) => (
                      <option key={index}>{produit}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="w-full md:w-auto mb-6 md:mb-0 md:mr-8">
                <p className="mb-2 md:mb-0 text-xs">
                  H <span className=" text-colorButtonHeader">(en cm)</span>
                </p>
                <div>
                  <select
                    name="hauteur"
                    onChange={handleHauteurChange}
                    value={selectedHauteur}
                    className="border-2 rounded-lg text-sm border-gray-500"
                  >
                    <option>0</option>
                    <option>800</option>
                    <option>1000</option>
                    <option>1200</option>
                  </select>
                </div>
              </div>

              <div className="w-full md:w-auto">
                <p className="mb-2 md:mb-0 text-xs">
                  L <span className="text-colorButtonHeader">(en cm)</span>
                </p>
                <div>
                  <select
                    name="largeur"
                    onChange={handleLargeurChange}
                    value={selectedLargeur}
                    className="border-2 rounded-lg border-gray-500"
                  >
                    <option>0</option>
                    <option>900</option>
                    <option>1300</option>
                    <option>1500</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center w-full"></div>
        </div>
      </div>

      <div className="flex flex-wrap bg-gray-300 overflow-hidden">
        <div className="flex w-full justify-around">
          <div className="w-1/3 mx-12 h-auto my-12"></div>
          <div className="my-8 w-3/4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-auto mb-6 md:mb-0 md:mr-8">
                <p>
                  <input
                    type="radio"
                    className="mr-4 appearance-none rounded-full border-2 bg-white w-5 h-5 checked:bg-colorButtonHeader checked:border-white"
                  />
                  <label className="text-lg">
                    Options additionnels{" "}
                    <span className="text-sm text-gray-400">(plus value)</span>
                  </label>
                </p>
                <p className="mb-2 md:mb-0 text-sm">Vitrage</p>
                <div>
                  <select className="border-2 rounded-lg border-gray-500">
                    <option>Vitrage imprimé thermique GA</option>
                    <option>Vitrage imprimé thermique GA</option>
                    <option>Vitrage imprimé thermique GA</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center w-full"></div>
        </div>
      </div>

      <div className="flex flex-wrap bg-gray-300 overflow-hidden">
        <div className="flex w-full justify-around">
          <div className="w-1/3 mx-12 h-auto my-12">
            <ul>
              {plaxages.map((plaxage) => (
                <li key={plaxage.id} className="flex items-start">
                  <input
                    type="radio"
                    className="mt-4 mr-2 w-6 h-6 appearance-none rounded-full border-2 bg-white checked:bg-colorButtonHeader checked:border-white"
                    checked={selectedPlaxage === plaxage.id}
                    onChange={() => handlePlaxageSelection(plaxage.id)}
                  />
                  <label className="flex flex-col w-full">
                    <span className="self-end text-right text-xs text-red-600 mr-24">
                      {plaxage.pourcentage}%
                    </span>
                    <span className="text-sm">{plaxage.description}</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-auto mb-6 md:mb-0 md:mr-8">
                <div className="grid grid-cols-4 gap-4">
                  {cardsData.map((card) => (
                    <div
                      key={card.id}
                      className={`border p-4 rounded-md ${
                        selectedCard === card.id
                          ? "border-colorButtonHeader"
                          : "border-white"
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={card.image}
                          alt={card.description}
                          className="mx-auto mb-4 h-20 w-20"
                        />
                        <input
                          type="radio"
                          name="card"
                          className="absolute bottom-0 right-2 mt-2 w-4 h-4 appearance-none rounded-full border-2 border-gray-400 bg-white checked:bg-colorButtonHeader checked:border-white"
                          style={{
                            borderColor:
                              selectedCard === card.id
                                ? "bg-colorButtonHeader"
                                : "bg-white",
                          }}
                          onChange={() =>
                            handleCardSelect(
                              card.id,
                              card.description,
                              card.pourcentage
                            )
                          }
                        />
                      </div>
                      <label
                        className="block text-sm font-medium text-gray-700"
                        title={card.description}
                        style={{ fontSize: "10px" }}
                      >
                        {card.description}{" "}
                      </label>
                      {card.pourcentage !== 0 && (
                        <span
                          className="text-red-500 text-sm"
                          style={{ fontSize: "10px" }}
                        >
                          {"+"}
                          {card.pourcentage}{" "}
                          <FontAwesomeIcon
                            icon={faEuroSign}
                            className="text-xs font-bold"
                          />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center md:flex-row md:justify-end md:items-center mx-14">
            <div className="flex flex-col items-center justify-center md:flex-row">
              <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start">
                <div className="mr-4 md:mr-8">
                  <p className="text-3xl md:text-3xl font-bold mb-4 md:mb-0 text-colorChoisissez">
                    Choisissez ici.
                  </p>
                  <button onClick={prevProduit} className="my-2 px-4 py-2">
                    <FontAwesomeIcon
                      icon={faAngleUp}
                      className="text-colorButtonHeader"
                      style={{ fontSize: "30px" }}
                    />
                  </button>
                  <p className="text-xl mb-4 md:mb-0">{selectedProduit}</p>

                  <button onClick={nextProduit} className="my-2 px-4 py-2">
                    <FontAwesomeIcon
                      icon={faAngleDown}
                      className="text-colorButtonHeader"
                      style={{ fontSize: "30px" }}
                    />
                  </button>
                  <img src="mce logo-02.png" width="130" height="130" />
                </div>
              </div>
              <div className="hidden md:block w-1/2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap bg-gray-300 overflow-hidden">
        <div className="flex w-full justify-around">
          <div className="w-3/4 mx-12 h-auto my-12"></div>

          <div className="my-12 w-full border-6 grid grid-cols-3">
            <div className="bg-blue-500 h-1"></div>
            <div className="bg-white h-1"></div>
            <div className="bg-red-500 h-1"></div>
          </div>

          <div className="flex flex-wrap justify-between items-center w-full"></div>
        </div>
      </div>
    </div>
  );
}
export d