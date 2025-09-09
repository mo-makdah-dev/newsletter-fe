import type { Campaign, UserLink } from "@/zustand/types";

export interface TopLead {
  email: string;
  totalClicks: number;
  totalOpens: number;
  clickRate: number;
}

export const getTopLeads = (
  campaigns: Campaign[],
  limit: number = 10
): TopLead[] => {
  // Create a map to aggregate data by email
  const emailStats = new Map<
    string,
    { totalClicks: number; totalOpens: number }
  >();

  // Iterate through all campaigns and their links
  campaigns.forEach((campaign) => {
    campaign.links.forEach((link: UserLink) => {
      const email = link.userEmail;
      const currentStats = emailStats.get(email) || {
        totalClicks: 0,
        totalOpens: 0,
      };

      // Count opens and clicks
      if (link.opened) {
        currentStats.totalOpens += 1;
      }
      if (link.ctaClicked) {
        currentStats.totalClicks += 1;
      }

      emailStats.set(email, currentStats);
    });
  });

  // Convert map to array and calculate click rates
  const topLeads: TopLead[] = Array.from(emailStats.entries()).map(
    ([email, stats]) => ({
      email,
      totalClicks: stats.totalClicks,
      totalOpens: stats.totalOpens,
      clickRate:
        stats.totalOpens > 0
          ? Math.round((stats.totalClicks / stats.totalOpens) * 100)
          : 0,
    })
  );

  // Sort by total clicks (descending) and return top N
  return topLeads.sort((a, b) => b.totalClicks - a.totalClicks).slice(0, limit);
};
