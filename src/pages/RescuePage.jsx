import React, { useState } from 'react';
import { Clock, MapPin, Users, Star, AlertCircle } from 'lucide-react';

const RescuePage = () => {
  const [rescuePackages] = useState([
    {
      id: 1,
      title: "Tonight's Golden Hour Special",
      description: "Rooftop cocktails + Italian dinner combo",
      city: "Downtown",
      availableDate: "Today",
      timeSlot: "6:00 PM - 10:00 PM",
      spotsRemaining: 3,
      price: 85,
      venues: ["Sky Lounge", "Nonna's Kitchen"],
      backupPlan: "Indoor wine bar if weather turns",
      image: "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=300&fit=crop",
      urgency: "high"
    },
    {
      id: 2,
      title: "Morning Surprise Package",
      description: "Sunrise hike + brunch at the summit",
      city: "Mountain View",
      availableDate: "Tomorrow",
      timeSlot: "6:00 AM - 11:00 AM",
      spotsRemaining: 7,
      price: 65,
      venues: ["Eagle Peak Trail", "Summit Café"],
      backupPlan: "Valley trail + café if peak is cloudy",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=300&fit=crop",
      urgency: "medium"
    },
    {
      id: 3,
      title: "Cultural Evening Escape",
      description: "Gallery opening + speakeasy experience",
      city: "Arts District",
      availableDate: "Tonight",
      timeSlot: "7:00 PM - 12:00 AM",
      spotsRemaining: 1,
      price: 120,
      venues: ["Modern Art Gallery", "Hidden Door"],
      backupPlan: "Alternative gallery + cocktail lounge",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
      urgency: "critical"
    },
    {
      id: 4,
      title: "Seaside Romance Package",
      description: "Beach picnic + sunset sailing",
      city: "Coastal",
      availableDate: "Tomorrow",
      timeSlot: "4:00 PM - 8:00 PM",
      spotsRemaining: 5,
      price: 95,
      venues: ["Crystal Cove", "Marina Sailing Club"],
      backupPlan: "Pier restaurant if sailing cancelled",
      image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=300&fit=crop",
      urgency: "low"
    }
  ]);

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'critical': return 'text-red-400 bg-red-400/10';
      case 'high': return 'text-warning bg-warning/10';
      case 'medium': return 'text-accent bg-accent/10';
      default: return 'text-success bg-success/10';
    }
  };

  const getUrgencyText = (urgency, spots) => {
    if (urgency === 'critical') return 'Almost Gone!';
    if (urgency === 'high') return 'Filling Fast';
    if (urgency === 'medium') return 'Popular';
    return 'Available';
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Last-Minute Date Rescue</h1>
        <p className="text-text-muted max-w-2xl mx-auto">
          When plans fall through or inspiration strikes, these curated same-day packages 
          turn panic into romance in minutes.
        </p>
      </div>

      {/* Alert Banner */}
      <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mb-8 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-semibold text-accent mb-1">How Rescue Works</h3>
          <p className="text-sm text-text-muted">
            These are pre-arranged experiences with guaranteed availability. Book now, 
            show up and enjoy—we've handled all the coordination.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-8">
        <button className="btn-primary text-sm px-4 py-2">All Areas</button>
        <button className="btn-secondary text-sm px-4 py-2">Today Only</button>
        <button className="btn-secondary text-sm px-4 py-2">Under $100</button>
        <button className="btn-secondary text-sm px-4 py-2">Indoor Options</button>
      </div>

      {/* Rescue Packages */}
      <div className="space-y-6">
        {rescuePackages.map((pkg) => (
          <div key={pkg.id} className="card overflow-hidden">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Image */}
              <div className="relative">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-48 md:h-full object-cover rounded-lg"
                />
                <div className={`absolute top-3 left-3 px-2 py-1 rounded-md text-xs font-medium ${getUrgencyColor(pkg.urgency)}`}>
                  {getUrgencyText(pkg.urgency, pkg.spotsRemaining)}
                </div>
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-sm text-white">
                  ${pkg.price}
                </div>
              </div>

              {/* Details */}
              <div className="md:col-span-2 space-y-4">
                <div>
                  <h2 className="text-xl font-semibold mb-2">{pkg.title}</h2>
                  <p className="text-text-muted mb-3">{pkg.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-text-muted" />
                      <span>{pkg.availableDate} • {pkg.timeSlot}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-text-muted" />
                      <span>{pkg.city}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-text-muted" />
                      <span>{pkg.spotsRemaining} spots left</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-warning" />
                      <span>Vetted venues</span>
                    </div>
                  </div>
                </div>

                {/* Venues */}
                <div>
                  <h4 className="font-medium mb-2">Included Venues:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.venues.map((venue, index) => (
                      <span 
                        key={index}
                        className="text-xs bg-surface-hover text-text-muted px-2 py-1 rounded-full"
                      >
                        {venue}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Backup Plan */}
                <div className="bg-surface-hover rounded-lg p-3">
                  <h4 className="font-medium text-sm mb-1">Backup Plan:</h4>
                  <p className="text-sm text-text-muted">{pkg.backupPlan}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 pt-2">
                  <button className="btn-primary flex-1">
                    Book Now - ${pkg.price}
                  </button>
                  <button className="btn-secondary px-4">
                    Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 p-8 bg-gradient-to-r from-surface/50 to-surface-hover/50 rounded-lg border border-border">
        <h3 className="text-xl font-semibold mb-2">Don't See Your Area?</h3>
        <p className="text-text-muted mb-4">
          We're expanding rescue coverage daily. Join our waitlist to get notified 
          when rescue packages become available in your city.
        </p>
        <button className="btn-secondary">
          Join Waitlist
        </button>
      </div>
    </div>
  );
};

export default RescuePage;