import React, { useState } from 'react';
import { Gift, Heart, Calendar, Star, Package, ArrowRight } from 'lucide-react';

const KitsPage = () => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [kits] = useState([
    {
      id: 1,
      theme: "Memory Lane",
      yearMilestone: 1,
      price: 89,
      contents: [
        "Custom photo timeline poster",
        "Couple's trivia game (50 questions)",
        "Memory jar with prompts",
        "Polaroid camera + film",
        "Curated playlist vinyl",
        "Setup instructions"
      ],
      activities: "Recreate your first date, photo scavenger hunt, time capsule creation",
      playlistUrl: "spotify:playlist:memory-lane-1yr",
      rating: 4.9,
      reviews: 234,
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=600&h=400&fit=crop",
      shippingTime: "3 days"
    },
    {
      id: 2,
      theme: "Adventure Awaits",
      yearMilestone: 2,
      price: 129,
      contents: [
        "Adventure bucket list template",
        "Travel scratch-off map",
        "Date night coupons (12 months)",
        "Professional photo session voucher",
        "Adventure planning journal",
        "Celebration champagne"
      ],
      activities: "Plan future adventures, create couple's bucket list, dream destination vision board",
      playlistUrl: "spotify:playlist:adventure-2yr",
      rating: 4.8,
      reviews: 189,
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      shippingTime: "3 days"
    },
    {
      id: 3,
      theme: "Growing Together",
      yearMilestone: 5,
      price: 199,
      contents: [
        "Custom relationship timeline book",
        "Future planning workbook",
        "Professional couple's massage kit",
        "Gourmet dinner ingredients",
        "Five-year goal planner",
        "Luxury candles & ambiance set"
      ],
      activities: "Relationship reflection, future goal setting, intimate dinner preparation",
      playlistUrl: "spotify:playlist:growing-5yr",
      rating: 4.9,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&h=400&fit=crop",
      shippingTime: "5 days"
    },
    {
      id: 4,
      theme: "Forever Foundation",
      yearMilestone: 10,
      price: 299,
      contents: [
        "Professional memory book design service",
        "Decade highlight video creation",
        "Premium couple's spa package",
        "Fine dining at-home experience",
        "Legacy planning materials",
        "Renewal ceremony planning guide"
      ],
      activities: "Decade celebration, legacy building, renewal ceremony planning",
      playlistUrl: "spotify:playlist:forever-10yr",
      rating: 5.0,
      reviews: 89,
      image: "https://images.unsplash.com/photo-1511207538754-e8555f2bc187?w=600&h=400&fit=crop",
      shippingTime: "7 days"
    },
    {
      id: 5,
      theme: "First Date Nerves",
      yearMilestone: 0,
      price: 49,
      contents: [
        "Conversation starter cards",
        "Anxiety-relief tea blend",
        "Good luck charm keepsake",
        "Date outfit suggestions guide",
        "First date survival kit",
        "Follow-up text templates"
      ],
      activities: "Confidence building, conversation practice, outfit planning",
      playlistUrl: "spotify:playlist:first-date",
      rating: 4.7,
      reviews: 445,
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&h=400&fit=crop",
      shippingTime: "2 days"
    },
    {
      id: 6,
      theme: "New Relationship Energy",
      yearMilestone: 0.5,
      price: 69,
      contents: [
        "Getting-to-know-you games",
        "Date idea scratch cards",
        "Couple's compatibility quiz",
        "Photo booth props",
        "Relationship milestone tracker",
        "Date night planning calendar"
      ],
      activities: "Compatibility exploration, fun photo sessions, date planning",
      playlistUrl: "spotify:playlist:new-energy",
      rating: 4.8,
      reviews: 327,
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?w=600&h=400&fit=crop",
      shippingTime: "3 days"
    }
  ]);

  const yearOptions = [
    { value: 'all', label: 'All Milestones' },
    { value: '0', label: 'First Date' },
    { value: '0.5', label: '6 Months' },
    { value: '1', label: '1 Year' },
    { value: '2', label: '2 Years' },
    { value: '5', label: '5 Years' },
    { value: '10', label: '10+ Years' }
  ];

  const filteredKits = selectedYear === 'all' 
    ? kits 
    : kits.filter(kit => kit.yearMilestone.toString() === selectedYear);

  const handlePreOrder = (kit) => {
    alert(`Pre-order ${kit.theme} kit for $${kit.price}. Shipping in ${kit.shippingTime}.`);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Anniversary Experience Kits</h1>
        <p className="text-xl text-text-muted max-w-2xl mx-auto">
          Thoughtfully curated kits for every relationship milestone. Delivered to your door 
          with everything you need for an unforgettable celebration.
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {yearOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedYear(option.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedYear === option.value
                  ? 'bg-primary text-white'
                  : 'bg-surface-hover text-text-muted hover:text-text'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Kits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {filteredKits.map((kit) => (
          <div key={kit.id} className="card group hover:shadow-glow transition-all duration-300">
            {/* Image */}
            <div className="relative mb-4">
              <img 
                src={kit.image} 
                alt={kit.theme}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-md">
                <span className="text-white font-semibold">${kit.price}</span>
              </div>
              {kit.yearMilestone >= 1 && (
                <div className="absolute top-3 left-3 bg-gradient-to-r from-primary to-accent px-3 py-1 rounded-md">
                  <span className="text-white font-semibold text-sm">
                    {kit.yearMilestone} Year{kit.yearMilestone > 1 ? 's' : ''}
                  </span>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {kit.theme}
                </h3>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-warning fill-current" />
                    <span className="text-sm">{kit.rating}</span>
                  </div>
                  <span className="text-text-muted text-sm">
                    ({kit.reviews} reviews)
                  </span>
                  <div className="flex items-center gap-1 ml-auto">
                    <Package className="w-4 h-4 text-text-muted" />
                    <span className="text-sm text-text-muted">{kit.shippingTime}</span>
                  </div>
                </div>
              </div>

              {/* Contents Preview */}
              <div>
                <h4 className="font-medium text-sm mb-2">What's Inside:</h4>
                <ul className="text-sm text-text-muted space-y-1">
                  {kit.contents.slice(0, 3).map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                  {kit.contents.length > 3 && (
                    <li className="text-primary text-xs">
                      +{kit.contents.length - 3} more items
                    </li>
                  )}
                </ul>
              </div>

              {/* Activities */}
              <div>
                <h4 className="font-medium text-sm mb-1">Experience Includes:</h4>
                <p className="text-sm text-text-muted">{kit.activities}</p>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <button 
                  onClick={() => handlePreOrder(kit)}
                  className="btn-primary w-full text-sm"
                >
                  Pre-Order ${kit.price}
                </button>
                <div className="flex gap-2">
                  <button className="btn-secondary flex-1 text-sm">
                    Full Details
                  </button>
                  <button className="btn-secondary flex-1 text-sm">
                    Preview Kit
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold text-center mb-8">How Anniversary Kits Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">1. Order in Advance</h3>
            <p className="text-text-muted text-sm">
              Order your kit 3-7 days before your milestone date. We'll handle the timing so it arrives perfectly.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-accent to-warning rounded-full flex items-center justify-center mx-auto mb-4">
              <Gift className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">2. Unbox Together</h3>
            <p className="text-text-muted text-sm">
              Follow the included setup guide. Each kit is designed for 2-4 hours of quality time together.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-warning to-success rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-semibold mb-2">3. Share the Moment</h3>
            <p className="text-text-muted text-sm">
              Create lasting memories and optionally share your celebration with the Spark community.
            </p>
          </div>
        </div>
      </section>

      {/* Custom Kit CTA */}
      <div className="card bg-gradient-to-r from-surface/50 to-surface-hover/50 text-center">
        <h3 className="text-xl font-semibold mb-2">Need Something Custom?</h3>
        <p className="text-text-muted mb-6">
          Planning a unique milestone or have specific preferences? Our curation team can create 
          a personalized kit just for your relationship.
        </p>
        <button className="btn-secondary flex items-center gap-2 mx-auto">
          Request Custom Kit
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default KitsPage;