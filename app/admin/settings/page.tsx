"use client";

import { Settings } from "lucide-react";
import ComingSoon from "../components/ComingSoon";

export default function SettingsPage() {
  return (
    <ComingSoon
      title="System Settings"
      description="Configure app settings, manage feature flags, and control system-wide configurations."
      icon={Settings}
      features={[
        "Toggle feature flags on/off",
        "Configure app-wide settings",
        "Manage admin user roles and permissions",
        "Set notification preferences",
        "Control rate limits and quotas",
        "View system health and logs",
      ]}
    />
  );
}
