import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import { ArrowUpRight, Users, DollarSign, Leaf } from "lucide-react";

interface ImpactMetric {
  title: string;
  value: string;
  description: string;
  icon: React.ReactNode;
  progress?: number;
}

const ImpactSection = ({
  metrics = defaultMetrics,
}: {
  metrics?: ImpactMetric[];
}) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-green-800 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Impact
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Through our beetroot outgrower program, we're creating sustainable
            economic opportunities while reducing environmental impact in rural
            communities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            >
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-full bg-green-100 text-green-600">
                      {metric.icon}
                    </div>
                    <ArrowUpRight className="text-green-500" size={20} />
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                    {metric.value}
                  </h3>
                  <p className="text-lg font-medium text-gray-700 mb-3">
                    {metric.title}
                  </p>
                  <p className="text-gray-600 mb-4">{metric.description}</p>

                  {metric.progress !== undefined && (
                    <div className="mt-2">
                      <Progress
                        value={metric.progress}
                        className="h-2 bg-green-100"
                      />
                      <p className="text-sm text-gray-500 mt-1 text-right">
                        {metric.progress}% of goal
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="text-green-700 font-medium">
            Join us in making a difference
          </p>
          <h3 className="text-2xl font-bold text-gray-800 mt-2 mb-6">
            Together, we can create sustainable futures
          </h3>
          <button className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md font-medium transition-colors duration-300">
            Learn More About Our Impact
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const defaultMetrics: ImpactMetric[] = [
  {
    title: "Farmers Supported",
    value: "1,200+",
    description:
      "Rural farmers provided with sustainable income opportunities through our outgrower program.",
    icon: <Users size={24} />,
    progress: 80,
  },
  {
    title: "Income Increase",
    value: "300%",
    description:
      "Average income improvement for participating farmers compared to previous economic activities.",
    icon: <DollarSign size={24} />,
    progress: 75,
  },
  {
    title: "Environmental Impact",
    value: "40,000+",
    description:
      "Trees saved annually by providing alternatives to charcoal production in rural communities.",
    icon: <Leaf size={24} />,
    progress: 65,
  },
];

export default ImpactSection;
