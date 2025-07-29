import React from 'react';
import { Globe, Briefcase, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const participants = [
  { country: "United States", profession: "Ph.D. Scholar / Researcher" },
  { country: "Egypt", profession: "Academician / Faculty" },
  { country: "Saudi Arabia", profession: "Industry Professional" },
  { country: "Serbia", profession: "Student" },
  { country: "Pakistan", profession: "Ph.D. Scholar / Researcher" },
  { country: "United Kingdom", profession: "Academician / Faculty" },
  { country: "Germany", profession: "Ph.D. Scholar / Researcher" },
  { country: "India", profession: "Academician / Faculty" },
  { country: "Senegal", profession: "Student" },
  { country: "Brazil", profession: "Ph.D. Scholar / Researcher" },
  { country: "Nigeria", profession: "Student" },
  { country: "China", profession: "Ph.D. Scholar / Researcher" },
  { country: "Canada", profession: "Student" },
  { country: "South Africa", profession: "Academician / Faculty" },
  { country: "Turkey", profession: "Ph.D. Scholar / Researcher" },
  { country: "Australia", profession: "Ph.D. Scholar / Researcher" },
  { country: "Japan", profession: "Industry Professional" },
  { country: "France", profession: "Student" },
  { country: "Italy", profession: "Academician / Faculty" },
  { country: "Mexico", profession: "Ph.D. Scholar / Researcher" },
  { country: "United Arab Emirates", profession: "Industry Professional" }
];

const stats = [
  {
    icon: Globe,
    value: "150+",
    label: "Countries Represented",
  },
  {
    icon: Briefcase,
    value: "25+",
    label: "Unique Professions",
  },
  {
    icon: Users,
    value: "50,000+",
    label: "Global Learners",
  }
];

export default function GlobalCommunity() {
  // Duplicate the participants array for a seamless loop
  const scrollingParticipants = [...participants, ...participants];

  return (
    <section className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Join a Diverse Global Network
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Our learners come from every corner of the globe, representing a vast spectrum of industries and professional backgrounds.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-10 rounded-2xl mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                <stat.icon className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-lg font-semibold text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Scrolling Showcase */}
        <div className="relative">
           {/* Background map */}
          <div 
            className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" 
            style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')" }}
          ></div>
        
          <div className="relative h-64 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-around gap-4 animate-marquee-y">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex-shrink-0 flex justify-around gap-4">
                  {scrollingParticipants.slice(0, 7).map((p, j) => (
                    <Card key={j} className="bg-white/10 backdrop-blur-md border-white/20">
                      <CardContent className="p-4 text-center">
                        <p className="font-semibold text-cyan-300">{p.profession}</p>
                        <p className="text-sm text-gray-400">from {p.country}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
              {[...Array(2)].map((_, i) => (
                 <div key={i+2} className="flex-shrink-0 flex justify-around gap-4" style={{ animationDelay: '15s' }}>
                  {scrollingParticipants.slice(7, 14).map((p, j) => (
                    <Card key={j} className="bg-white/10 backdrop-blur-md border-white/20">
                      <CardContent className="p-4 text-center">
                        <p className="font-semibold text-cyan-300">{p.profession}</p>
                        <p className="text-sm text-gray-400">from {p.country}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
              {[...Array(2)].map((_, i) => (
                 <div key={i+4} className="flex-shrink-0 flex justify-around gap-4" style={{ animationDelay: '30s' }}>
                  {scrollingParticipants.slice(14).map((p, j) => (
                    <Card key={j} className="bg-white/10 backdrop-blur-md border-white/20">
                      <CardContent className="p-4 text-center">
                        <p className="font-semibold text-cyan-300">{p.profession}</p>
                        <p className="text-sm text-gray-400">from {p.country}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <style>
            {`
            @keyframes marquee-y {
              0% { transform: translateY(0%); }
              100% { transform: translateY(-50%); }
            }
            .animate-marquee-y {
              animation: marquee-y 60s linear infinite;
            }
            `}
          </style>
        </div>
      </div>
    </section>
  );
}