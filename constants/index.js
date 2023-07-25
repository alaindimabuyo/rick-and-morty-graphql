import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "tailwindcss/tailwind.css";
import {
  faCheckCircle,
  faTimesCircle,
  faQuestionCircle,
  faUserAstronaut,
  faUsers,
  faVenus,
  faMars,
  faGenderless,
} from "@fortawesome/free-solid-svg-icons";

export const trimName = (name) => {
  const maxLength = 12;
  if (name.length > maxLength) {
    return name.substring(0, maxLength) + "...";
  }
  return name;
};

export const getStatusIcon = (status) => {
  switch (status) {
    case "Alive":
      return (
        <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
      );
    case "Dead":
      return <FontAwesomeIcon icon={faTimesCircle} className="text-red-500" />;
    default:
      return (
        <FontAwesomeIcon icon={faQuestionCircle} className="text-gray-500" />
      );
  }
};

export const getSpeciesIcon = (species) => {
  switch (species) {
    case "Human":
      return <FontAwesomeIcon icon={faUsers} className="text-blue-500" />;
    case "Alien":
      return (
        <FontAwesomeIcon icon={faUserAstronaut} className="text-purple-500" />
      );
    default:
      return null;
  }
};

export const getGenderIcon = (gender) => {
  switch (gender) {
    case "Male":
      return <FontAwesomeIcon icon={faMars} className="text-blue-500" />;
    case "Female":
      return <FontAwesomeIcon icon={faVenus} className="text-pink-500" />;
    default:
      return <FontAwesomeIcon icon={faGenderless} className="text-gray-500" />;
  }
};

export const renderShimmer = () => (
  <div className="animate-pulse flex flex-col items-center rounded-lg shadow-lg bg-white m-4 p-8 max-w-lg mx-auto">
    <div className="w-48 h-48 rounded-full bg-gray-300"></div>
    <div className="w-2/3 h-8 mt-4 rounded bg-gray-300"></div>
    <div className="w-1/2 h-8 mt-2 rounded bg-gray-300"></div>
    <div className="w-3/4 h-8 mt-2 rounded bg-gray-300"></div>
    <div className="w-2/5 h-8 mt-2 rounded bg-gray-300"></div>
    <div className="w-1/3 h-8 mt-2 rounded bg-gray-300"></div>
    <div className="w-1/2 h-8 mt-2 rounded bg-gray-300"></div>
    <div className="w-3/4 h-8 mt-2 rounded bg-gray-300"></div>
  </div>
);
