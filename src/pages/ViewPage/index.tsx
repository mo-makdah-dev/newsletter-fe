import { useParams, Link } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { useCampaignsStore } from "@/zustand/useCampaignsStore";
import { LetterTemplate } from "@/components/common/LetterTemplate";

const ViewPage = () => {
  const { id } = useParams();
  console.log(id);
  const { campaigns, updateLinkOpened } = useCampaignsStore();

  // Find the campaign and link by the provided ID
  const { campaign, link } = useMemo(() => {
    if (!id) return { campaign: null, link: null };

    for (const campaign of campaigns) {
      const link = campaign.links.find((link) => link.id === id);
      if (link) {
        return { campaign, link };
      }
    }
    return { campaign: null, link: null };
  }, [campaigns, id]);

  // Update link opened status when component mounts
  useEffect(() => {
    if (link && !link.opened) {
      updateLinkOpened(link.id);
    }
  }, [link, updateLinkOpened]);

  // If link not found, show not found message
  if (!campaign || !link) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Newsletter Not Found
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            The newsletter you're looking for doesn't exist or has been removed.
          </p>
          <Link
            to="/campaigns"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Back to Campaigns
          </Link>
        </div>
      </div>
    );
  }

  // Display the newsletter template with campaign data
  return (
    <div className="flex h-full w-full">
      <LetterTemplate
        mainColor={campaign.theme.mainColor}
        secondaryColor={campaign.theme.secondaryColor}
        theme={campaign.chosenTheme}
        title={campaign.email.title}
        content={campaign.email.content}
        actionUrl={campaign.email.actionUrl}
        actionLabel={campaign.email.actionLabel}
        textColor={campaign.theme.textColor}
      />
    </div>
  );
};

export default ViewPage;
