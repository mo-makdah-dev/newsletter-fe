import React from "react";
import { MousePointer, TrendingUp, Mail } from "lucide-react";
import { getTopLeads, type TopLead } from "@/utils/topLeads";
import type { Campaign } from "@/zustand/types";

interface TopLeadsProps {
  campaigns: Campaign[];
}

const TopLeads: React.FC<TopLeadsProps> = ({ campaigns }) => {
  const topLeads = getTopLeads(campaigns, 10);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="h-5 w-5 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Top Leads</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Most engaged subscribers by click count
      </p>

      {topLeads.length === 0 ? (
        <div className="text-center py-8">
          <Mail className="h-8 w-8 text-gray-400 mx-auto mb-2" />
          <p className="text-sm text-gray-500">No engagement data yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {topLeads.map((lead, index) => (
            <div
              key={lead.email}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-6 h-6 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                  {index + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {lead.email}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MousePointer className="h-3 w-3" />
                      {lead.totalClicks} clicks
                    </span>
                    <span>•</span>
                    <span>{lead.clickRate}% rate</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopLeads;
