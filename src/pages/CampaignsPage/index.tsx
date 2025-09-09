import React from "react";
import { useCampaignsStore } from "@/zustand/useCampaignsStore";
import { useGroupsStore } from "@/zustand/useGroupsStore";
import { Mail, Eye, TrendingUp, Target, BarChart3, Send } from "lucide-react";
import { AnalyticsCard } from "./components/AnalyticsCard";
import { CampaignCard } from "./components/CampaignCard";
import TopLeads from "./components/TopLeads";

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

  const totalCtaClicked = campaigns.reduce(
    (sum, campaign) =>
      sum + campaign.links.filter((link) => link.ctaClicked).length,
    0
  );

  const avgCtaClickedRate =
    totalCtaClicked > 0 ? Math.round((totalCtaClicked / totalOpens) * 100) : 0;

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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
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
            Icon={<Send className="h-6 w-6 text-white" />}
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
            Icon={<TrendingUp className="h-6 w-6 text-white" />}
          />
          <AnalyticsCard
            value={totalCtaClicked}
            isPercentage={false}
            title="Total CTA Clicked"
            Icon={<Target className="h-6 w-6 text-white" />}
          />
          <AnalyticsCard
            value={avgCtaClickedRate}
            isPercentage={true}
            title="Avg Click Rate"
            Icon={<BarChart3 className="h-6 w-6 text-white" />}
          />
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Campaign History
      </h2>
      <p className="text-gray-600 mb-6">
        View all your sent newsletters and their performance.
      </p>
      <div className="flex gap-6 flex-1 overflow-hidden">
        <div className="flex flex-col flex-1 overflow-y-hidden">
          <div className="space-y-4 overflow-y-auto flex-1">
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
        <div className="w-1/5 min-w-[300px]">
          <TopLeads campaigns={campaigns} />
        </div>
      </div>
    </div>
  );
};

export default CampaignsPage;
