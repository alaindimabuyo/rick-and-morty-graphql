"use client";
import React, { useState } from "react";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import { useGetAllCharactersQuery } from "../redux/character/api";
import {
  renderShimmer,
  trimName,
  getGenderIcon,
  getSpeciesIcon,
  getStatusIcon,
} from "../constants/index";
import Link from "next/link";
const Home = () => {
  const { data, error, isLoading, refetch } = useGetAllCharactersQuery();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredCharacters = data?.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    renderShimmer();
  }
  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="p-8">
        <h1 className="text-4xl font-bold text-black mb-8">
          Rick and Morty Characters
        </h1>
        <input
          type="text"
          placeholder="Search characters..."
          className="w-full px-4 py-2 mb-4 text-black bg-white rounded-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap justify-center p-4 overflow-y-auto">
        {filteredCharacters?.map((character) => (
          <Link key={character.id} href={`/characters/${character.id}`}>
            <div className="flex flex-col items-center rounded-lg shadow-lg bg-white m-4 pb-5 w-40 hover:shadow-xl transition-shadow duration-300">
              <Image
                src={character.image}
                alt={character.name}
                width={300}
                height={300}
                className="object-cover w-full h-22 rounded-t-lg"
              />
              <p className="mt-2 mb-4 text-lg font-bold text-black">
                {trimName(character.name)}
              </p>
              <div className="flex items-center">
                {getStatusIcon(character.status)}
                <p className="ml-2 text-sm text-gray-600">{character.status}</p>
              </div>
              <div className="flex items-center">
                {getSpeciesIcon(character.species)}
                <p className="ml-2 text-sm text-gray-600">
                  {character.species}
                </p>
              </div>
              <div className="flex items-center">
                {getGenderIcon(character.gender)}
                <p className="ml-2 text-sm text-gray-600">{character.gender}</p>
              </div>
              <p className="text-xs text-gray-600">
                Origin: {trimName(character.origin.name)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
