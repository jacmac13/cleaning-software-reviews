export const affiliateLinks = {
  jobber: "[AFFILIATE_LINK_JOBBER]",
  housecallPro: "[AFFILIATE_LINK_HOUSECALLPRO]",
  zenMaid: "[AFFILIATE_LINK_ZENMAID]",
  swept: "[AFFILIATE_LINK_SWEPT]",
  launch27: "[AFFILIATE_LINK_LAUNCH27]",
  connecteam: "[AFFILIATE_LINK_CONNECTEAM]",
  serviceM8: "[AFFILIATE_LINK_SERVICEM8]",
  acuity: "[AFFILIATE_LINK_ACUITY]",
} as const;

export type ToolSlug = keyof typeof affiliateLinks;

export function getAffiliateLink(slug: ToolSlug): string {
  return affiliateLinks[slug];
}
