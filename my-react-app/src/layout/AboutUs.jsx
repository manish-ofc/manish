import {
  Lock,
  Database,
  Server,
  Shuffle,
} from "lucide-react";

import phoneimage from "../assets/phone.jpg";

export default function AboutUs() {
  return (
    <section className="bg-white px-6 py-16 md:px-20">
      
      {/* Heading */}
      <div className="mb-12">
        
        <p className="text-sm font-semibold text-blue-600">
          About Our App
        </p>

        <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
          A new way to manage
          <br />
          your online money.
        </h2>
      </div>

      {/* Content Grid */}
      <div className="grid gap-12 md:grid-cols-2">
        
        {/* Features */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          
          <FeatureCard
            icon={<Lock className="h-6 w-6 text-white" />}
            title="Security Maintenance"
            description="The little rotter bevvy I gormless mush golly gosh cras."
            bg="bg-blue-500"
          />

          <FeatureCard
            icon={<Database className="h-6 w-6 text-white" />}
            title="Backup Database"
            description="The little rotter bevvy I gormless mush golly gosh cras."
            bg="bg-yellow-400"
          />

          <FeatureCard
            icon={<Server className="h-6 w-6 text-white" />}
            title="Server Maintenance"
            description="The little rotter bevvy I gormless mush golly gosh cras."
            bg="bg-purple-400"
          />

          <FeatureCard
            icon={<Shuffle className="h-6 w-6 text-white" />}
            title="No Risk Protectable"
            description="The little rotter bevvy I gormless mush golly gosh cras."
            bg="bg-green-400"
          />
        </div>

        {/* Phone Mockup */}
        <div className="relative flex items-center justify-center">
          
          <img
            src={phoneimage}
            alt="App Preview"
            className="relative w-full max-w-xs rounded-2xl object-cover shadow-xl"
          />

          {/* Optional Overlay Image */}
          {/*
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src=""
              alt="Hero"
              className="max-h-full max-w-full rounded-lg object-cover"
            />
          </div>
          */}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, description, bg }) {
  return (
    <div className="flex items-start space-x-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md">
      
      {/* Icon */}
      <div className={`rounded-xl p-3 ${bg}`}>
        {icon}
      </div>

      {/* Text */}
      <div>
        
        <h4 className="text-base font-semibold text-gray-900">
          {title}
        </h4>

        <p className="mt-1 text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}