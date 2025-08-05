import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Leaf,
  Sprout,
  TrendingUp,
  Repeat,
  DollarSign,
} from "lucide-react";

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
}

const Step = (
  { icon, title, description, step }: StepProps = {
    icon: <Leaf className="h-8 w-8 text-green-600" />,
    title: "Step Title",
    description: "Step description goes here explaining the process.",
    step: 1,
  },
) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-4">
        {icon}
      </div>
      <div className="absolute -mt-20 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        {step}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const ProgramOverview = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Our Outgrower Program Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with rural farmers to provide sustainable economic
            opportunities through our beetroot farming program.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Step
            icon={<Leaf className="h-8 w-8 text-green-600" />}
            title="Seedling Distribution"
            description="We provide high-quality beetroot seedlings to rural farmers at no upfront cost."
            step={1}
          />

          <Step
            icon={<Sprout className="h-8 w-8 text-green-600" />}
            title="Growing Support"
            description="Farmers receive ongoing technical support and training throughout the growing season."
            step={2}
          />

          <Step
            icon={<TrendingUp className="h-8 w-8 text-green-600" />}
            title="Guaranteed Buyback"
            description="When the crop is ready, we purchase the entire harvest at fair market prices."
            step={3}
          />
        </div>

        <Card className="bg-green-50 border-green-100">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Creating Sustainable Livelihoods
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Our program provides an alternative to charcoal production,
                  helping to preserve local environments while creating
                  sustainable income opportunities.
                </p>
                <ul className="space-y-3">
                  {[
                    "Increased income for rural farmers",
                    "Reduced reliance on environmentally harmful activities",
                    "Development of agricultural skills and knowledge",
                    "Building resilient rural economies",
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <ArrowRight className="h-5 w-5 text-green-600 mr-2 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-center">
                  Program Cycle
                </h4>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-full mb-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <Leaf className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="h-1 flex-1 bg-green-200"></div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <Sprout className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="flex items-center justify-center w-full">
                    <div className="h-1 flex-1 bg-green-200"></div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <Repeat className="h-6 w-6 text-green-600" />
                    </div>
                    <div className="h-1 flex-1 bg-green-200"></div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    A continuous cycle that builds sustainable livelihoods and
                    communities
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ProgramOverview;
