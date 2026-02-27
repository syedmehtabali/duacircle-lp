"use client";

import { TrendingUp } from "lucide-react";
import ComingSoon from "../components/ComingSoon";

export default function AnalyticsPage() {
  return (
    <ComingSoon
      title="Analytics Dashboard"
      description="Track app growth, engagement metrics, and user behavior with detailed charts and insights."
      icon={TrendingUp}
      features={[
        "Daily, weekly, and monthly growth charts",
        "DAU/MAU metrics and retention cohorts",
        "Prayer activity and engagement trends",
        "Feature usage analytics and funnels",
        "User acquisition and churn analysis",
        "Export reports for stakeholders",
      ]}
    />
  );
}
