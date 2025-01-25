import React, { useState } from "react";
import HeaderSection from "./HeaderSection";
import PricingCard from "./PricingCard";

const PricingPage = () => {
  const [billingCycle, setBillingCycle] = useState("Monthly");

  const handleToggle = (cycle) => {
    setBillingCycle(cycle);
  };

  const pricingPlans = [
    {
      title: "Standard",
      price: billingCycle === "Monthly" ? 49 : 499,
      duration: billingCycle === "Monthly" ? "Monthly" : "Yearly",
      features: [
        "End to End support",
        "Weekly meetings",
        "Directly from certified Dealers",
        "Quality control and product inspection",
      ],
      buttonText: "Contact Now",
      buttonAction: () => alert("Contacting for Standard Plan..."),
    },
    {
      title: "Professional",
      price: billingCycle === "Monthly" ? 79 : 799,
      duration: billingCycle === "Monthly" ? "Monthly" : "Yearly",
      features: [
        "End to End support",
        "Weekly meetings",
        "Directly from certified Dealers",
        "Quality control and product inspection",
        "Quality Reports",
        "Guaranteed On-Time shipping",
      ],
      buttonText: "Purchase Now",
      buttonAction: () => alert("Purchasing Professional Plan..."),
    },
    {
      title: "Ultimate",
      price: billingCycle === "Monthly" ? 99 : 999,
      duration: billingCycle === "Monthly" ? "Monthly" : "Yearly",
      features: [
        "End to End support",
        "Weekly meetings",
        "Directly from certified Dealers",
        "Quality control and product inspection",
        "Quality Reports",
        "Guaranteed On-Time shipping",
        "Customizable packaging and specifications",
        "Competitive pricing for bulk orders",
      ],
      buttonText: "Purchase Now",
      buttonAction: () => alert("Purchasing Ultimate Plan..."),
    },
  ];

  return (
    <div className="bg-gray-800 text-white min-h-screen px-4">
      <HeaderSection onToggle={handleToggle} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
