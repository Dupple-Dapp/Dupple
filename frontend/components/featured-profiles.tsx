import React from "react";
import Image from "next/image";

const FeaturedProfiles = () => {
  const people = ["/person.jpg"];
  return (
    <div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Meet Amazing Singles
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our community is filled with interesting, like-minded individuals
            looking for genuine connections.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {people.map((person) => (
              <div
                key={person}
                className="bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <Image
                    src={person}
                    alt="Profile Image"
                    width={500}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-gray-900">Name, 28</h3>
                  <p className="text-gray-500 text-sm">City, State</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedProfiles;
