import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, MapPin, DollarSign, Users, Heart, Coffee, Loader } from 'lucide-react';
import { Link } from 'react-router-dom';
import { usePayment } from '../context/PaymentContext';

const QuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const { processPayment, paymentLoading, isWalletConnected } = usePayment();
  const [unlockedIdeas, setUnlockedIdeas] = useState(new Set());

  const questions = [
    {
      id: 'location',
      title: 'Where are you planning your date?',
      icon: MapPin,
      type: 'select',
      options: [
        { value: 'downtown', label: 'Downtown' },
        { value: 'suburbs', label: 'Suburbs' },
        { value: 'coastal', label: 'Coastal Area' },
        { value: 'countryside', label: 'Countryside' },
      ]
    },
    {
      id: 'budget',
      title: "What's your budget range?",
      icon: DollarSign,
      type: 'select',
      options: [
        { value: '$', label: '$ (Under $50)' },
        { value: '$$', label: '$$ ($50-150)' },
        { value: '$$$', label: '$$$ ($150-300)' },
        { value: '$$$$', label: '$$$$ ($300+)' },
      ]
    },
    {
      id: 'stage',
      title: "What's your relationship stage?",
      icon: Users,
      type: 'select',
      options: [
        { value: 'first-date', label: 'First Date' },
        { value: 'dating', label: 'Dating (2-6 months)' },
        { value: 'serious', label: 'Serious Relationship' },
        { value: 'married', label: 'Married/Long-term' },
      ]
    },
    {
      id: 'interests',
      title: 'Your partner loves... (select all that apply)',
      icon: Heart,
      type: 'multiselect',
      options: [
        { value: 'foodie', label: 'Foodie Experiences' },
        { value: 'outdoorsy', label: 'Outdoor Adventures' },
        { value: 'artsy', label: 'Arts & Culture' },
        { value: 'cozy', label: 'Cozy & Intimate' },
        { value: 'adventurous', label: 'Thrill Seeking' },
        { value: 'music', label: 'Live Music' },
        { value: 'wine', label: 'Wine & Cocktails' },
        { value: 'wellness', label: 'Wellness & Spa' },
      ]
    },
    {
      id: 'dietary',
      title: 'Any dietary restrictions? (optional)',
      icon: Coffee,
      type: 'text',
      placeholder: 'e.g., vegetarian, gluten-free, allergies...'
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateResults();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const generateResults = async () => {
    setLoading(true);
    
    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Mock AI-generated results based on answers
    const mockResults = [
      {
        id: 1,
        title: "Sunset Rooftop Wine Tasting",
        shortDescription: "Romantic evening with city views",
        fullDescription: "Experience a curated wine tasting session on our exclusive rooftop terrace as the sun sets over the city. Includes 6 premium wine tastings, artisanal cheese board, and personalized sommelier guidance. The venue features heated seating areas and stunning 360-degree city views.",
        location: "Sky Lounge, Downtown",
        duration: "3 hours",
        price: answers.budget || "$$",
        rating: 4.9,
        bookingLink: "https://example.com/book",
        backupOptions: ["Intimate Wine Bar", "Rooftop Dinner"],
        proTips: [
          "Make reservations 2 weeks in advance",
          "Arrive 15 minutes early for best seating",
          "Parking available in adjacent garage"
        ],
        image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&h=400&fit=crop",
        tags: ["romantic", "wine", "view", "upscale"]
      },
      {
        id: 2,
        title: "Private Art Gallery + Dinner",
        shortDescription: "Culture meets cuisine",
        fullDescription: "Begin with a private viewing at the Contemporary Art Gallery featuring local artists, followed by dinner at the acclaimed Atelier Restaurant. The gallery portion includes a guided tour with the curator, wine reception, and access to exclusive pieces not shown to the public.",
        location: "Arts District",
        duration: "4 hours",
        price: answers.budget || "$$$",
        rating: 4.8,
        bookingLink: "https://example.com/book-art",
        backupOptions: ["Museum + Café", "Art Class + Bistro"],
        proTips: [
          "Gallery portion starts at 6 PM sharp",
          "Smart casual dress code required",
          "Free valet parking available"
        ],
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        tags: ["culture", "art", "dinner", "sophisticated"]
      },
      {
        id: 3,
        title: "Beach Picnic Adventure",
        shortDescription: "Coastal romance under the stars",
        fullDescription: "A carefully planned beach picnic experience featuring gourmet basket with local specialties, comfortable seating setup, and bonfire arrangement. Includes acoustic guitar for ambiance, polaroid camera for memories, and stargazing guide with telescope.",
        location: "Crystal Cove Beach",
        duration: "5 hours",
        price: answers.budget || "$",
        rating: 4.7,
        bookingLink: "https://example.com/book-beach",
        backupOptions: ["Park Picnic", "Lakeside Dinner"],
        proTips: [
          "Bring light jacket for evening breeze",
          "Tide is lowest at 7 PM",
          "Parking fills up after 5 PM"
        ],
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop",
        tags: ["outdoor", "beach", "romantic", "adventure"]
      }
    ];
    
    setResults(mockResults);
    setLoading(false);
  };

  const handleUnlock = async (dateId) => {
    try {
      await processPayment('2.00', `Unlock date idea ${dateId}`);
      setUnlockedIdeas(prev => new Set([...prev, dateId]));
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const handleSave = (dateId) => {
    // Save to localStorage for now
    const saved = JSON.parse(localStorage.getItem('spark_saved_dates') || '[]');
    saved.push(dateId);
    localStorage.setItem('spark_saved_dates', JSON.stringify(saved));
    alert('Date saved to your profile!');
  };

  const handleShare = (date) => {
    // Create shareable Frame URL
    const frameUrl = `${window.location.origin}/frames/date/${date.id}`;
    const text = `Just found the perfect date idea: ${date.title}! ✨`;
    
    if (navigator.share) {
      navigator.share({
        title: 'Spark Date Idea',
        text: text,
        url: frameUrl,
      });
    } else {
      // Fallback to clipboard
      navigator.clipboard.writeText(`${text} ${frameUrl}`);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-semibold mb-2">Consulting the romance AI...</h2>
          <p className="text-text-muted">Crafting your perfect date ideas</p>
          <div className="mt-8 flex justify-center gap-2">
            {[1, 2, 3].map((i) => (
              <div 
                key={i}
                className="w-3 h-3 bg-primary rounded-full animate-pulse"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Your Perfect Date Ideas! 💕</h1>
          <p className="text-text-muted">Curated specifically for your preferences</p>
        </div>

        <div className="grid gap-8">
          {results.map((date) => {
            const isUnlocked = unlockedIdeas.has(date.id);
            
            return (
              <div key={date.id} className="card">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img 
                      src={date.image} 
                      alt={date.title}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h2 className="text-xl font-semibold mb-2">{date.title}</h2>
                        <p className="text-text-muted mb-4">{date.shortDescription}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-text-muted">{date.price}</div>
                        <div className="text-sm text-warning">★ {date.rating}</div>
                      </div>
                    </div>

                    <div className="flex gap-2 mb-6">
                      {date.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs bg-surface-hover text-text-muted px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {isUnlocked ? (
                      <div className="space-y-4">
                        <p className="text-sm leading-relaxed">{date.fullDescription}</p>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-text-muted">Location:</span>
                            <div>{date.location}</div>
                          </div>
                          <div>
                            <span className="text-text-muted">Duration:</span>
                            <div>{date.duration}</div>
                          </div>
                        </div>

                        <div>
                          <span className="text-text-muted text-sm">Pro Tips:</span>
                          <ul className="list-disc list-inside text-sm mt-1 space-y-1">
                            {date.proTips.map((tip, index) => (
                              <li key={index} className="text-text-muted">{tip}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-3 pt-4">
                          <a 
                            href={date.bookingLink}
                            className="btn-primary text-sm px-4 py-2"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Book Now
                          </a>
                          <button 
                            onClick={() => handleShare(date)}
                            className="btn-secondary text-sm px-4 py-2"
                          >
                            Share
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-text-muted">
                          Unlock full details, location, booking info, and pro tips.
                        </p>
                        
                        <div className="flex gap-3">
                          <button 
                            onClick={() => handleUnlock(date.id)}
                            disabled={paymentLoading || !isWalletConnected}
                            className="btn-primary text-sm px-4 py-2 disabled:opacity-50"
                          >
                            {paymentLoading ? (
                              <Loader className="w-4 h-4 animate-spin" />
                            ) : (
                              'Unlock for $2'
                            )}
                          </button>
                          <button 
                            onClick={() => handleSave(date.id)}
                            className="btn-secondary text-sm px-4 py-2"
                          >
                            Save for Later
                          </button>
                          <button 
                            onClick={() => handleShare(date)}
                            className="btn-secondary text-sm px-4 py-2"
                          >
                            Share Frame
                          </button>
                        </div>
                        
                        {!isWalletConnected && (
                          <p className="text-xs text-warning">
                            Connect your wallet to unlock date details
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <Link to="/quiz" className="btn-secondary">
            Take Quiz Again
          </Link>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentStep];
  const currentAnswer = answers[currentQuestion.id];
  const isAnswered = currentAnswer !== undefined && currentAnswer !== '';

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-text-muted mb-2">
          <span>Question {currentStep + 1} of {questions.length}</span>
          <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
        </div>
        <div className="w-full bg-border rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="card mb-8">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
            <currentQuestion.icon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-semibold mb-2">{currentQuestion.title}</h1>
        </div>

        <div className="space-y-4">
          {currentQuestion.type === 'select' && (
            <div className="grid gap-3">
              {currentQuestion.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() => handleAnswer(currentQuestion.id, option.value)}
                  className={`p-4 border rounded-lg text-left transition-all ${
                    currentAnswer === option.value
                      ? 'border-primary bg-primary/10 text-primary'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}

          {currentQuestion.type === 'multiselect' && (
            <div className="grid grid-cols-2 gap-3">
              {currentQuestion.options.map((option) => {
                const selectedValues = currentAnswer || [];
                const isSelected = selectedValues.includes(option.value);
                
                return (
                  <button
                    key={option.value}
                    onClick={() => {
                      const newValues = isSelected
                        ? selectedValues.filter(v => v !== option.value)
                        : [...selectedValues, option.value];
                      handleAnswer(currentQuestion.id, newValues);
                    }}
                    className={`p-3 border rounded-lg text-sm text-left transition-all ${
                      isSelected
                        ? 'border-primary bg-primary/10 text-primary'
                        : 'border-border hover:border-primary/50'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          )}

          {currentQuestion.type === 'text' && (
            <textarea
              value={currentAnswer || ''}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
              placeholder={currentQuestion.placeholder}
              className="w-full p-4 bg-surface border border-border rounded-lg focus:outline-none focus:border-primary resize-none"
              rows={3}
            />
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between">
        <button 
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="btn-secondary disabled:opacity-50 flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          Previous
        </button>

        <button 
          onClick={handleNext}
          disabled={!isAnswered}
          className="btn-primary disabled:opacity-50 flex items-center gap-2"
        >
          {currentStep === questions.length - 1 ? 'Generate Ideas' : 'Next'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default QuizPage;