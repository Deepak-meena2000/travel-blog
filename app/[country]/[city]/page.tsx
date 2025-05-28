import { notFound } from 'next/navigation';

interface PageParams {
  country: string;
  city: string;
}

// Allowed city names (itineraries)
const ALLOWED_CITIES = [
  '9-days-itinerary',
  '16-days-itinerary'
] as const;

const DynamicCountryPage = async ({
    params,
  }: {
    params: Promise<{ country: string; city: string }>;
  }) => {
  const { country, city } = await params;

  // Validate if the city is in the allowed list
  if (!ALLOWED_CITIES.includes(city as typeof ALLOWED_CITIES[number])) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">
        {country} {city}
      </h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-600">
          Your complete {city} travel guide for {country}
        </p>
        {/* Add your itinerary content here */}
      </div>
    </div>
  );
};

export default DynamicCountryPage;
