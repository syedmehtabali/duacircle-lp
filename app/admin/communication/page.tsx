"use client";

import { Send } from "lucide-react";
import ComingSoon from "../components/ComingSoon";

export default function CommunicationPage() {
  return (
    <ComingSoon
      title="Communication Center"
      description="Send notifications, emails, and announcements to users across different segments."
      icon={Send}
      features={[
        "Send push notifications to user segments",
        "Compose and schedule email campaigns",
        "Create in-app announcements",
        "Target specific user groups",
        "Preview messages before sending",
        "Track delivery and engagement metrics",
      ]}
    />
  );
}
