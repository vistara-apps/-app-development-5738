import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, ArrowRight, MapPin, Clock, Star } from 'lucide-react';
import { useUser } from '../context/UserContext';

const HomePage = () => {
  const { user } = useUser();
  const [featuredExperiences] = useState([
    {
      id: 1,
      title: "Sunset Rooftop Dinner",
      location: "Downtown",
      duration: "3 hours",
      rating: 4.9,
      price: "$$",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      tags: ["romantic", "view", "dinner"]
    },
    {
      id: 2,
      title: "Art Gallery + Wine Bar",
      location: "Arts District",
      duration: "2.5 hours",
      rating: 4.8,
      price: "$$$",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      tags: ["culture", "intimate", "wine"]
    },
    {
      id: 3,
      title: "Beach Picnic Adventure",
      location: "Coastal",
      duration: "4 hours",
      rating: 4.7,
      price: "$",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      tags: ["outdoor", "adventure", "casual"]
    },
    {
      id: 4,
      title: "Cooking Class Date",
      location: "Culinary Center",
      duration: "2 hours",
      rating: 4.9,
      price: "$$",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      tags: ["interactive", "food", "fun"]
    },
    {
      id: 5,
      title: "Jazz Club Evening",
      location: "Historic Quarter",
      duration: "3.5 hours",
      rating: 4.6,
      price: "$$$",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      tags: ["music", "classy", "drinks"]
    }
  ]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse-glow">
            From Jitters to Forever
          </h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Personalized romantic experiences that make every connection count. 
            AI-powered date ideas, last-minute rescue plans, and milestone celebrations.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link 
            to="/quiz" 
            className="btn-primary flex items-center gap-2 text-lg px-8 py-4"
          >
            <Heart className="w-5 h-5" />
            Start Quiz
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link 
            to="/rescue" 
            className="btn-secondary flex items-center gap-2 text-lg px-8 py-4"
          >
            <Sparkles className="w-5 h-5" />
            Browse Rescue Dates
          </Link>
        </div>
      </section>

      {/* Featured Experiences */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-semibold">Trending Experiences</h2>
          <Link to="/quiz" className="text-primary hover:text-primary-hover transition-colors">
            See All →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {featuredExperiences.map((experience) => (
            <div 
              key={experience.id} 
              className="group cursor-pointer"
            >
              <div className="card p-0 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                <div className="relative">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-sm text-white">
                    {experience.price}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 text-sm text-text-muted mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {experience.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {experience.duration}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning fill-current" />
                      <span className="text-sm">{experience.rating}</span>
                    </div>
                    
                    <div className="flex gap-1">
                      {experience.tags.slice(0, 2).map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs bg-surface-hover text-text-muted px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        <Link to="/quiz" className="card group hover:shadow-glow transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">AI Date Quiz</h3>
            <p className="text-text-muted mb-4">
              60-second quiz to get personalized date ideas. From first date jitters to anniversary planning.
            </p>
            <span className="text-primary group-hover:text-accent transition-colors">
              Take Quiz →
            </span>
          </div>
        </Link>

        <Link to="/rescue" className="card group hover:shadow-glow transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-warning to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Last-Minute Rescue</h3>
            <p className="text-text-muted mb-4">
              Same-day date packages when plans fall through. Vetted venues with instant booking.
            </p>
            <span className="text-primary group-hover:text-accent transition-colors">
              Browse Rescue →
            </span>
          </div>
        </Link>

        <Link to="/proposal" className="card group hover:shadow-glow transition-all duration-300">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Proposal Planning</h3>
            <p className="text-text-muted mb-4">
              Step-by-step blueprint for the perfect proposal. Location scouting to day-of coordination.
            </p>
            <span className="text-primary group-hover:text-accent transition-colors">
              Start Planning →
            </span>
          </div>
        </Link>
      </section>

      {/* Stats Section */}
      <section className="text-center py-12 bg-gradient-to-r from-surface/50 to-surface-hover/50 rounded-lg border border-border">
        <div className="grid grid-cols-3 gap-8">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">50k+</div>
            <div className="text-text-muted">Perfect Dates Created</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-accent mb-2">98%</div>
            <div className="text-text-muted">Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-success mb-2">24/7</div>
            <div className="text-text-muted">Rescue Available</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;