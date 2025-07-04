import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import virtualCardImage from "@/assets/virtual-card.png";
import savingsIcon from "@/assets/savings-icon.png";
import loanIcon from "@/assets/loan-icon.png";

const Features = () => {
  return (
    <section id="features" className="bg-gradient-dark py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Button variant="pill" size="pill" className="mb-6">
            Features & Services
          </Button>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Unlock the full power of Grovia
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Generate and manage virtual cards for seamless and safe online payments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Virtual Card */}
          <Card className="bg-grovia-forest border-grovia-primary/20 lg:col-span-2 lg:row-span-2">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="lg:w-1/2">
                  <h3 className="text-3xl font-bold text-white mb-4">Virtual Card</h3>
                  <p className="text-text-secondary mb-6">
                    Grovia's virtual card gives you the power to make secure online
                    transactions without the risk of exposing your physical bank details.
                    Instantly generate a digital card through the Grovia app for payments,
                    subscriptions, and business expenses.
                  </p>
                </div>
                <div className="lg:w-1/2 flex justify-center">
                  <img 
                    src={virtualCardImage} 
                    alt="Grovia Virtual Card" 
                    className="w-full max-w-sm rounded-xl shadow-glow"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Save & Transfer */}
          <Card className="bg-gradient-blue border-grovia-blue/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img 
                  src={savingsIcon} 
                  alt="Savings Icon" 
                  className="w-20 h-20 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Save & Transfer</h3>
              <p className="text-text-secondary">
                Grovia makes saving money and sending funds
                simple, fast, and rewarding. Whether you're
                building your financial future.
              </p>
            </CardContent>
          </Card>

          {/* Loan */}
          <Card className="bg-gradient-green border-grovia-primary/20">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <img 
                  src={loanIcon} 
                  alt="Loan Icon" 
                  className="w-20 h-20 mx-auto"
                />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Loan</h3>
              <p className="text-text-secondary">
                Grovia provides affordable,
                flexible loans tailored to your
                savings and capacity.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;