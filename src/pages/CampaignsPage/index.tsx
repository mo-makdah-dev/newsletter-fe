import React from "react";
import { useCampaignsStore } from "@/zustand/useCampaignsStore";
import { useGroupsStore } from "@/zustand/useGroupsStore";
import { Mail, Users, Eye, MousePointer } from "lucide-react";
import { AnalyticsCard } from "./components/AnalyticsCard";
import { CampaignCard } from "./components/CampaignCard";

const CampaignsPage = () => {
  const { campaigns } = useCampaignsStore();
  const { groups } = useGroupsStore();

  // Calculate statistics
  const totalCampaigns = campaigns.length;
  const totalSent = campaigns.reduce(
    (sum, campaign) => sum + campaign.links.length,
    0
  );
  const totalOpens = campaigns.reduce(
    (sum, campaign) =>
      sum + campaign.links.filter((link) => link.opened).length,
    0
  );

  const avgOpenRate =
    totalOpens > 0 ? Math.round((totalOpens / totalSent) * 100) : 0;

  // sort campaigns by createdAt from newest to oldest
  const sortedCampaigns = [...campaigns].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );

  return (
    <div className="flex flex-col h-full w-full p-6 bg-gray-50">
      {/* Analytics Dashboard */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Analytics</h1>
        <p className="text-gray-600 mb-6">
          Track your newsletter performance and engagement metrics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnalyticsCard
            value={totalCampaigns}
            isPercentage={false}
            title="Campaigns"
            Icon={<Mail className="h-6 w-6 text-white" />}
          />
          <AnalyticsCard
            value={totalSent}
            isPercentage={false}
            title="Total Sent"
            Icon={<Users className="h-6 w-6 text-white" />}
          />
          <AnalyticsCard
            value={totalOpens}
            isPercentage={false}
            title="Total Opens"
            Icon={<Eye className="h-6 w-6 text-white" />}
          />
          <AnalyticsCard
            value={avgOpenRate}
            isPercentage={true}
            title="Avg Open Rate"
            Icon={<MousePointer className="h-6 w-6 text-white" />}
          />
        </div>
      </div>

      {/* Campaign History */}
      <div className="flex flex-col flex-1 overflow-y-hidden">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Campaign History
        </h2>
        <p className="text-gray-600 mb-6">
          View all your sent newsletters and their performance.
        </p>

        <div className="space-y-4 overflow-y-auto flex-1 ">
          {sortedCampaigns.length === 0 ? (
            <div className="bg-white rounded-lg p-8 text-center shadow-sm border">
              <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">
                No campaigns yet. Create your first newsletter to get started!
              </p>
            </div>
          ) : (
            sortedCampaigns.map((campaign) => (
              <CampaignCard
                key={campaign.id}
                campaign={campaign}
                groups={groups}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
