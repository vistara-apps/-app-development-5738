import React, { useState } from 'react';
import { Heart, Star, Calendar, MapPin, Settings, Share2, Trophy, Gift } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';

const ProfilePage = () => {
  const { address, isConnected } = useAccount();
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock user data
  const [userStats] = useState({
    datesCompleted: 23,
    curatorRating: 4.8,
    tipEarnings: 0.045, // ETH
    dateStreak: 12,
    milestonesReached: 3,
    savedDates: 8
  });

  const [savedDates] = useState([
    {
      id: 1,
      title: "Sunset Rooftop Wine Tasting",
      location: "Downtown",
      price: "$$",
      savedDate: "2024-01-15",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Beach Picnic Adventure",
      location: "Coastal",
      price: "$",
      savedDate: "2024-01-10",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop"
    }
  ]);

  const [completedDates] = useState([
    {
      id: 1,
      title: "Jazz Club Evening",
      location: "Historic Quarter",
      completedDate: "2024-01-20",
      rating: 5,
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      title: "Art Gallery + Wine Bar",
      location: "Arts District",
      completedDate: "2024-01-05",
      rating: 4,
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop"
    }
  ]);

  const [milestones] = useState([
    {
      id: 1,
      type: "First Date Anniversary",
      date: "2024-01-01",
      shared: true,
      frameUrl: "/frames/milestone/1"
    },
    {
      id: 2,
      type: "6 Month Milestone",
      date: "2023-07-01",
      shared: false,
      frameUrl: null
    }
  ]);

  if (!isConnected) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 text-center">
        <div className="card">
          <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Connect Your Wallet</h2>
          <p className="text-text-muted mb-6">
            Connect your Base wallet to access your Spark profile, saved dates, and romantic reputation.
          </p>
          <ConnectButton />
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Profile Header */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
            <Heart className="w-10 h-10 text-white" />
          </div>
          
          <div className="flex-1">
            <h1 className="text-2xl font-semibold mb-2">Your Romantic Profile</h1>
            <p className="text-text-muted mb-4">
              Wallet: {address?.slice(0, 6)}...{address?.slice(-4)}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-xl font-bold text-primary">{userStats.datesCompleted}</div>
                <div className="text-xs text-text-muted">Dates Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-accent">{userStats.dateStreak}</div>
                <div className="text-xs text-text-muted">Date Streak</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-warning">★ {userStats.curatorRating}</div>
                <div className="text-xs text-text-muted">Curator Rating</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold text-success">{userStats.tipEarnings} ETH</div>
                <div className="text-xs text-text-muted">Tips Earned</div>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="btn-secondary p-2">
              <Settings className="w-4 h-4" />
            </button>
            <button className="btn-secondary p-2">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-8 bg-surface rounded-lg p-1">
        {[
          { id: 'overview', label: 'Overview', icon: Heart },
          { id: 'saved', label: 'Saved Dates', icon: Star },
          { id: 'history', label: 'Date History', icon: Calendar },
          { id: 'milestones', label: 'Milestones', icon: Trophy }
        ].map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
              activeTab === id
                ? 'bg-primary text-white'
                : 'text-text-muted hover:text-text'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Date Streak */}
          <div className="card">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Date Streak: {userStats.dateStreak} days
            </h3>
            <div className="bg-surface-hover rounded-lg p-4">
              <p className="text-text-muted text-sm mb-3">
                Keep your romantic momentum going! Log a date every 30 days to maintain your streak.
              </p>
              <div className="w-full bg-border rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-accent h-2 rounded-full"
                  style={{ width: '60%' }}
                />
              </div>
              <div className="flex justify-between text-xs text-text-muted mt-2">
                <span>18 days until next milestone</span>
                <span>30 day goal</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="card hover:shadow-glow transition-all cursor-pointer">
              <div className="text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Take New Quiz</h3>
                <p className="text-text-muted text-sm">Get fresh date ideas based on your current mood</p>
              </div>
            </div>
            
            <div className="card hover:shadow-glow transition-all cursor-pointer">
              <div className="text-center">
                <Gift className="w-12 h-12 text-accent mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Browse Kits</h3>
                <p className="text-text-muted text-sm">Find the perfect anniversary experience kit</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'saved' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Saved Date Ideas ({savedDates.length})</h3>
            <button className="btn-secondary text-sm">Clear All</button>
          </div>
          
          {savedDates.map((date) => (
            <div key={date.id} className="card">
              <div className="flex gap-4">
                <img 
                  src={date.image} 
                  alt={date.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{date.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-text-muted mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {date.location}
                    </div>
                    <span>{date.price}</span>
                  </div>
                  <div className="text-xs text-text-muted">
                    Saved {new Date(date.savedDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="btn-primary text-sm px-3 py-1">Book Now</button>
                  <button className="btn-secondary text-sm px-3 py-1">Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'history' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Completed Dates ({completedDates.length})</h3>
            <button className="btn-secondary text-sm">Add Date</button>
          </div>
          
          {completedDates.map((date) => (
            <div key={date.id} className="card">
              <div className="flex gap-4">
                <img 
                  src={date.image} 
                  alt={date.title}
                  className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                />
                <div className="flex-1">
                  <h4 className="font-semibold mb-1">{date.title}</h4>
                  <div className="flex items-center gap-4 text-sm text-text-muted mb-2">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {date.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-warning fill-current" />
                      {date.rating}/5
                    </div>
                  </div>
                  <div className="text-xs text-text-muted">
                    Completed {new Date(date.completedDate).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <button className="btn-secondary text-sm px-3 py-1">Share</button>
                  <button className="btn-secondary text-sm px-3 py-1">Review</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'milestones' && (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Relationship Milestones ({milestones.length})</h3>
            <button className="btn-secondary text-sm">Add Milestone</button>
          </div>
          
          {milestones.map((milestone) => (
            <div key={milestone.id} className="card">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold mb-1">{milestone.type}</h4>
                  <div className="text-sm text-text-muted">
                    {new Date(milestone.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex gap-2">
                  {milestone.shared ? (
                    <span className="text-xs bg-success/20 text-success px-2 py-1 rounded-full">
                      Shared Publicly
                    </span>
                  ) : (
                    <button className="btn-secondary text-sm px-3 py-1">Share Frame</button>
                  )}
                  <Trophy className="w-5 h-5 text-accent" />
                </div>
              </div>
            </div>
          ))}
          
          {/* Next Milestone */}
          <div className="card bg-primary/10 border-primary/20">
            <h4 className="font-semibold mb-2 text-primary">Next Milestone</h4>
            <p className="text-text-muted text-sm">
              Your 1-year anniversary is in 45 days! Start planning something special.
            </p>
            <button className="btn-primary text-sm mt-3">
              Browse Anniversary Kits
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;