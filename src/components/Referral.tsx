import { Card, CardContent } from "@/components/ui/card";

const Referral = () => {
  return (
    <section className="bg-gradient-blue py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side - Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Referral program
            </h2>
            <h3 className="text-2xl font-semibold text-grovia-blue-light mb-6">
              Earn Rewards by Inviting Others to Grow
            </h3>
            
            <div className="space-y-4 text-text-secondary">
              <p>
                Our referral program lets you earn rewards every time you invite someone to join the
                Grovia community.
              </p>
              <p>
                when they sign up and start using Grovia, you both benefit. It's our way of saying
                thank you for helping us build a stronger, more empowered financial network.
              </p>
            </div>

            {/* Referral Network Icon */}
            <div className="mt-8 flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-grovia-primary rounded-full"></div>
                <div className="w-4 h-4 bg-grovia-blue-light rounded-full"></div>
                <div className="w-4 h-4 bg-grovia-primary rounded-full"></div>
              </div>
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xl">$</span>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="lg:w-1/2 flex justify-center">
            <Card className="bg-white rounded-3xl p-4 shadow-2xl max-w-xs w-full">
              <CardContent className="p-0">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">9:41</span>
                    <div className="flex space-x-1">
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                  </div>

                  <div className="text-center mb-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">Refer a friend</h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Share your referral code to family and friends to receive a token
                    </p>
                    
                    <div className="bg-grovia-primary/10 rounded-lg p-4 mb-4">
                      <span className="text-2xl">🎁</span>
                    </div>

                    <div className="bg-white rounded-lg p-3 mb-4 border">
                      <div className="flex items-center justify-between">
                        <span className="text-grovia-primary font-medium">www.grovia.com/referral</span>
                        <button className="w-6 h-6 bg-grovia-primary rounded flex items-center justify-center">
                          <span className="text-white text-xs">📋</span>
                        </button>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-2">Total earnings</div>
                    <div className="text-lg font-bold text-gray-800">My referrals</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Referral;