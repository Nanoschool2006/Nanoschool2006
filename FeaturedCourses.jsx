import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Clock, Users, BookOpen, ArrowRight } from "lucide-react";

const featuredCourses = [
  {
    title: "Machine Learning Engineering",
    instructor: "Dr. Sarah Chen",
    level: "Beginner to Expert",
    duration: "12 weeks",
    students: "2,847",
    rating: 4.9,
    description: "Complete journey from supervised learning basics to advanced ML engineering practices.",
    tags: ["Python", "TensorFlow", "MLOps"],
    price: "$299",
    href: createPageUrl('MLEngineering'),
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop"
  },
  {
    title: "AI in Healthcare Digital Transformation",
    instructor: "Prof. Michael Rodriguez",
    level: "Intermediate",
    duration: "8 weeks",
    students: "1,523",
    rating: 4.8,
    description: "Apply AI solutions to revolutionize healthcare systems and patient outcomes.",
    tags: ["Healthcare", "Medical Imaging", "Ethics"],
    price: "$249",
    href: createPageUrl('Healthcare'),
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop"
  },
  {
    title: "Deep Learning & Generative AI",
    instructor: "Dr. Alex Kim",
    level: "Intermediate",
    duration: "10 weeks",
    students: "3,156",
    rating: 4.9,
    description: "Master neural networks, GANs, transformers, and build cutting-edge generative AI applications.",
    tags: ["Deep Learning", "GANs", "Transformers"],
    price: "$349",
    href: createPageUrl('DeepLearning'),
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop"
  },
  {
    title: "Quantum Computing & AI",
    instructor: "Dr. Lisa Wang",
    level: "Advanced",
    duration: "6 weeks",
    students: "892",
    rating: 4.7,
    description: "Explore the intersection of quantum computing and artificial intelligence.",
    tags: ["Quantum", "Research", "Physics"],
    price: "$399",
    href: createPageUrl('QuantumComputing'),
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=250&fit=crop"
  }
];

export default function FeaturedCourses() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start with our most popular and highly-rated courses, designed by industry experts 
            and trusted by thousands of professionals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCourses.map((course, index) => (
            <Card key={index} className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              {/* Course Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white text-gray-900 font-semibold">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                  {course.title}
                </CardTitle>
                <p className="text-sm text-gray-600">by {course.instructor}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {course.description}
                </p>

                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {course.tags.map((tag, idx) => (
                    <span key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{course.price}</span>
                  <Link to={course.href}>
                    <Button size="sm" className="group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 transition-all duration-300">
                      Enroll Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to={createPageUrl('Courses')}>
            <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:border-blue-500 hover:text-blue-600">
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}