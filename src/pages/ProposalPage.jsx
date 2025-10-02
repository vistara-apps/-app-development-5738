import React, { useState } from 'react';
import { CheckCircle, Circle, Calendar, MapPin, Camera, Users, DollarSign, Heart } from 'lucide-react';
import { usePayment } from '../context/PaymentContext';

const ProposalPage = () => {
  const [hasAccess, setHasAccess] = useState(false);
  const [checklist, setChecklist] = useState([
    { id: 1, task: 'Set budget range', category: '6 weeks out', completed: false, description: 'Determine realistic budget for ring, venue, photographer, celebration' },
    { id: 2, task: 'Choose proposal style', category: '6 weeks out', completed: false, description: 'Private vs public, indoor vs outdoor, simple vs elaborate' },
    { id: 3, task: 'Scout 3-5 potential locations', category: '5 weeks out', completed: false, description: 'Visit locations at proposed time, check lighting, crowds, accessibility' },
    { id: 4, task: 'Research photographers', category: '4 weeks out', completed: false, description: 'Get quotes, check availability, review portfolios' },
    { id: 5, task: 'Plan ring pickup/delivery', category: '3 weeks out', completed: false, description: 'Coordinate timing, ensure proper sizing, have backup plan' },
    { id: 6, task: 'Coordinate with friends/family', category: '2 weeks out', completed: false, description: 'Send private invites if including others, plan surprises' },
    { id: 7, task: 'Confirm all vendors', category: '1 week out', completed: false, description: 'Double-check photographer, restaurant reservations, backup plans' },
    { id: 8, task: 'Practice the moment', category: '3 days out', completed: false, description: 'Rehearse speech, know ring box logistics, plan kneeling spot' },
    { id: 9, task: 'Check weather & backup plan', category: '1 day out', completed: false, description: 'Confirm outdoor conditions, activate indoor backup if needed' },
    { id: 10, task: 'Final preparation checklist', category: 'Day of', completed: false, description: 'Ring secured, photographer confirmed, speech ready, breathe!' }
  ]);
  
  const { processPayment, paymentLoading, isWalletConnected } = usePayment();

  const handleUnlock = async () => {
    try {
      await processPayment('25.00', 'Proposal Blueprint Toolkit');
      setHasAccess(true);
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  const toggleTask = (taskId) => {
    setChecklist(prev => prev.map(item => 
      item.id === taskId ? { ...item, completed: !item.completed } : item
    ));
  };

  const completedTasks = checklist.filter(item => item.completed).length;
  const progressPercentage = (completedTasks / checklist.length) * 100;

  const categories = ['6 weeks out', '5 weeks out', '4 weeks out', '3 weeks out', '2 weeks out', '1 week out', '3 days out', '1 day out', 'Day of'];

  if (!hasAccess) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Heart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Proposal Blueprint Toolkit</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto mb-8">
            Step-by-step guidance for planning the perfect proposal. From 6 weeks out to the moment you ask, we'll help you create an unforgettable experience.
          </p>
        </div>

        {/* Features Preview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="card text-center">
            <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Timeline Template</h3>
            <p className="text-text-muted text-sm">
              Complete 6-week countdown with weekly milestones and daily tasks leading to the big moment.
            </p>
          </div>
          
          <div className="card text-center">
            <MapPin className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Location Scouting</h3>
            <p className="text-text-muted text-sm">
              Private vs public venues, lighting considerations, backup plans, and permit requirements.
            </p>
          </div>
          
          <div className="card text-center">
            <Camera className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Vendor Directory</h3>
            <p className="text-text-muted text-sm">
              Vetted photographers, florists, musicians with reviews, pricing, and availability.
            </p>
          </div>
          
          <div className="card text-center">
            <Users className="w-12 h-12 text-warning mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Coordination Tools</h3>
            <p className="text-text-muted text-sm">
              Private Farcaster DM integration to secretly coordinate with friends and family.
            </p>
          </div>
          
          <div className="card text-center">
            <DollarSign className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Budget Tracker</h3>
            <p className="text-text-muted text-sm">
              Realistic cost breakdowns from $500 to $5000+ with priority spending guides.
            </p>
          </div>
          
          <div className="card text-center">
            <CheckCircle className="w-12 h-12 text-accent mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Day-of Checklist</h3>
            <p className="text-text-muted text-sm">
              Hour-by-hour timeline, emergency contacts, weather contingencies, and backup plans.
            </p>
          </div>
        </div>

        {/* Pricing */}
        <div className="card text-center max-w-md mx-auto">
          <h3 className="text-2xl font-semibold mb-2">Complete Blueprint Access</h3>
          <div className="text-4xl font-bold text-primary mb-4">$25</div>
          <p className="text-text-muted mb-6">
            One-time purchase. Lifetime access to all tools, templates, and vendor directory.
          </p>
          
          <button 
            onClick={handleUnlock}
            disabled={paymentLoading || !isWalletConnected}
            className="btn-primary w-full mb-4 disabled:opacity-50"
          >
            {paymentLoading ? 'Processing...' : 'Unlock Blueprint'}
          </button>
          
          {!isWalletConnected && (
            <p className="text-xs text-warning">
              Connect your wallet to purchase the blueprint
            </p>
          )}
          
          <div className="text-xs text-text-muted mt-4">
            ✓ 6-week timeline template<br />
            ✓ Vendor directory with reviews<br />
            ✓ Budget tracking tools<br />
            ✓ Location scouting guide<br />
            ✓ Day-of coordination checklist
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="card">
            <p className="text-text-muted italic mb-4">
              "The timeline template saved me so much stress. Having everything laid out week by week made the whole process feel manageable instead of overwhelming."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <div>
                <div className="font-medium">Michael R.</div>
                <div className="text-sm text-text-muted">Proposed at Golden Gate Park</div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <p className="text-text-muted italic mb-4">
              "The vendor directory was incredible. Found our photographer through Spark and she captured the most amazing surprise proposal photos."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-accent to-primary rounded-full"></div>
              <div>
                <div className="font-medium">David L.</div>
                <div className="text-sm text-text-muted">Beach proposal in Malibu</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Header with Progress */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Your Proposal Blueprint</h1>
        <p className="text-text-muted mb-6">
          Follow this step-by-step guide to plan the perfect proposal. Check off tasks as you complete them.
        </p>
        
        <div className="bg-surface rounded-lg p-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>{completedTasks} / {checklist.length} completed</span>
          </div>
          <div className="w-full bg-border rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-primary to-accent h-3 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Checklist by Category */}
      <div className="space-y-8">
        {categories.map((category) => {
          const categoryTasks = checklist.filter(item => item.category === category);
          const categoryCompleted = categoryTasks.filter(task => task.completed).length;
          
          return (
            <div key={category} className="card">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">{category}</h2>
                <span className="text-sm text-text-muted">
                  {categoryCompleted} / {categoryTasks.length} complete
                </span>
              </div>
              
              <div className="space-y-3">
                {categoryTasks.map((item) => (
                  <div 
                    key={item.id}
                    className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                      item.completed 
                        ? 'bg-success/10 border border-success/20' 
                        : 'bg-surface-hover hover:bg-surface'
                    }`}
                  >
                    <button
                      onClick={() => toggleTask(item.id)}
                      className="mt-0.5 flex-shrink-0"
                    >
                      {item.completed ? (
                        <CheckCircle className="w-5 h-5 text-success" />
                      ) : (
                        <Circle className="w-5 h-5 text-text-muted hover:text-primary" />
                      )}
                    </button>
                    
                    <div className="flex-1">
                      <h3 className={`font-medium mb-1 ${
                        item.completed ? 'line-through text-text-muted' : ''
                      }`}>
                        {item.task}
                      </h3>
                      <p className="text-sm text-text-muted">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Success Message */}
      {completedTasks === checklist.length && (
        <div className="card bg-success/10 border-success/20 text-center mt-8">
          <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-success">
            You're Ready! 🎉
          </h3>
          <p className="text-text-muted">
            You've completed all the preparation steps. Trust in your planning and enjoy this magical moment. 
            Wishing you both a lifetime of happiness!
          </p>
        </div>
      )}

      {/* Emergency Contact */}
      <div className="card bg-warning/10 border-warning/20 mt-8">
        <h3 className="font-semibold text-warning mb-2">Day-of Emergency Support</h3>
        <p className="text-sm text-text-muted">
          Having last-minute jitters or need immediate help? Our proposal support team is available 
          via emergency chat during your scheduled proposal time.
        </p>
        <button className="btn-secondary text-sm mt-3">
          Access Emergency Support
        </button>
      </div>
    </div>
  );
};

export default ProposalPage;