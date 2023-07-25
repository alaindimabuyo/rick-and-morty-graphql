import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import {
  renderShimmer,
  getGenderIcon,
  getSpeciesIcon,
  getStatusIcon,
} from "../../constants/index";
import Spinner from "../../components/Spinner";

import { useGetChracterDetailsQuery } from "../../redux/character/api";
const CharacterDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: character,
    error,
    isLoading,
    refetch,
  } = useGetChracterDetailsQuery(id);

  if (isLoading) {
    <Spinner />;
  }

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-black mb-8">
          Character Details
        </h1>
        <div className="flex flex-col items-center rounded-lg shadow-lg bg-white m-4 p-8 max-w-lg mx-auto">
          <Image
            src={character?.image}
            alt={character?.name}
            width={300}
            height={300}
            className="object-cover w-48 h-48 rounded-full"
          />
          <h2 className="text-2xl font-bold text-black mt-4 mb-2">
            {character?.name}
          </h2>
          <div className="flex items-center mb-4">
            {getStatusIcon(character?.status)}
            <p className="ml-2 text-lg font-semibold text-gray-600">
              {character?.status}
            </p>
          </div>
          <div className="flex items-center mb-4">
            {getSpeciesIcon(character?.species)}
            <p className="ml-2 text-lg font-semibold text-gray-600">
              {character?.species}
            </p>
          </div>
          <div className="flex items-center mb-4">
            {getGenderIcon(character?.gender)}
            <p className="ml-2 text-lg font-semibold text-gray-600">
              {character?.gender}
            </p>
          </div>
          <p className="text-lg text-gray-700 mb-6">
            Origin: {character?.origin.name}
          </p>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => router.back()}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetailsPage;
