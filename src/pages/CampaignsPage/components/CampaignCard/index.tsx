import { formatDateToDisplay } from "@/utils/dates";
import type { Campaign, Group } from "@/zustand";
import { Link } from "react-router-dom";
import {
  Mail,
  Users,
  Eye,
  Calendar,
  User,
  AtSign,
  CheckCircle,
  XCircle,
  PartyPopper,
  AlertTriangle,
  GaugeIcon,
  ExternalLink,
} from "lucide-react";
type Props = {
  campaign: Campaign;
  groups: Group[];
};

export const CampaignCard = ({ campaign, groups }: Props) => {
  // Helper function to get user name by ID
  const getUserName = (userId: string, groupId: string): string => {
    const group = groups.find((g) => g.id === groupId);
    const user = group?.users.find((u) => u.id === userId);
    return user?.name || "Deleted User";
  };

  // Helper function to get campaign type/theme
  const getCampaignType = (campaign: Campaign) => {
    // You can customize this based on your theme logic
    return campaign.chosenTheme || "other";
  };

  // Helper function to get campaign type color
  const getCampaignTypeColor = (campaign: Campaign) => {
    const type = getCampaignType(campaign);
    if (type.toLowerCase().includes("urgent")) return "bg-red-500";
    if (type.toLowerCase().includes("celebration")) return "bg-orange-500";
    if (type.toLowerCase().includes("informative")) return "bg-blue-500";
    if (type.toLowerCase().includes("other")) return "bg-gray-500";
    return "bg-gray-500";
  };

  // Helper function to get campaign icon
  const getCampaignIcon = (campaign: Campaign) => {
    const type = getCampaignType(campaign);
    if (type.toLowerCase().includes("urgent"))
      return <AlertTriangle className="h-6 w-6" style={{ color: typeColor }} />;
    if (type.toLowerCase().includes("celebration"))
      return <PartyPopper className="h-6 w-6" style={{ color: typeColor }} />;
    if (type.toLowerCase().includes("informative"))
      return <Mail className="h-6 w-6" style={{ color: typeColor }} />;
    if (type.toLowerCase().includes("other"))
      return <GaugeIcon className="h-6 w-6" style={{ color: typeColor }} />;
    return <Mail className="h-6 w-6" style={{ color: typeColor }} />;
  };

  const opens = campaign.links.filter((link) => link.opened).length;
  const openRate =
    campaign.links.length > 0
      ? Math.round((opens / campaign.links.length) * 100)
      : 0;
  const campaignType = getCampaignType(campaign);
  const typeColor = getCampaignTypeColor(campaign);
  const formattedDate = formatDateToDisplay(campaign.createdAt);

  return (
    <div
      key={campaign.id}
      className="bg-white rounded-lg p-4 shadow-sm border border-gray-200"
    >
      <div className="flex items-start justify-between">
        {/* Left Section */}
        <div className="flex items-start space-x-4 flex-1">
          <div className={`p-3 ${typeColor} rounded-lg`}>
            {getCampaignIcon(campaign)}
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {campaign.email.title}
            </h3>

            <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formattedDate}</span>
              </div>

              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>{campaign.links.length} recipients</span>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-xs font-medium text-white ${typeColor}`}
              >
                {campaignType}
              </span>
            </div>

            {/* Performance Stats */}
            <div className="flex items-center space-x-6 mb-4">
              <div className="flex items-center space-x-2">
                <Eye className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-900">
                  {openRate}% opened
                </span>
                <span className="text-xs text-gray-500">({opens} opens)</span>
              </div>
            </div>

            {/* Scrollable User Links Section */}
            <div className="border rounded-lg border-gray-200">
              <div className="p-3 bg-gray-200">
                <h4 className="text-sm font-medium text-gray-900">
                  Recipients
                </h4>
              </div>
              <div className="max-h-48 overflow-y-auto">
                {campaign.links.length === 0 ? (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    No recipients
                  </div>
                ) : (
                  <div className="divide-y">
                    {campaign.links.map((link) => {
                      const userName = getUserName(link.userId, link.groupId);
                      return (
                        <div key={link.id} className="p-3 hover:bg-gray-50">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-3">
                              <User className="h-4 w-4 text-gray-400" />
                              <div>
                                <p className="text-sm font-medium text-gray-900">
                                  {userName}
                                </p>
                                <div className="flex items-center space-x-1 text-xs text-gray-500">
                                  <AtSign className="h-3 w-3" />
                                  <span>{link.userEmail}</span>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              {link.opened ? (
                                <>
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span className="text-xs text-green-600 font-medium">
                                    Opened
                                  </span>
                                </>
                              ) : (
                                <>
                                  <XCircle className="h-4 w-4 text-gray-400" />
                                  <span className="text-xs text-gray-500">
                                    Not opened
                                  </span>
                                </>
                              )}
                            </div>
                          </div>

                          <div className="ml-7">
                            <Link
                              to={`/view/${link.id}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center space-x-1 text-xs text-blue-600 hover:text-blue-800 hover:underline"
                            >
                              <ExternalLink className="h-3 w-3" />
                              <span>Visit Link</span>
                            </Link>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
