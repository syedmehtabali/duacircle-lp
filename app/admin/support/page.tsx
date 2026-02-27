"use client";

import { MessageSquare } from "lucide-react";
import ComingSoon from "../components/ComingSoon";

export default function SupportPage() {
  return (
    <ComingSoon
      title="Support Tickets"
      description="Manage user support requests, respond to tickets, and track resolution times."
      icon={MessageSquare}
      features={[
        "View all support tickets by status",
        "Filter by priority and category",
        "Respond to user inquiries directly",
        "Assign tickets to team members",
        "Track resolution times and SLAs",
        "View ticket history and conversations",
      ]}
    />
  );
}
