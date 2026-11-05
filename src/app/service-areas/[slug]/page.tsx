import { permanentRedirect } from "next/navigation";

interface LocationPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "elizabeth" },
    { slug: "union" },
    { slug: "westfield" },
    { slug: "cranford" },
    { slug: "roselle" },
    { slug: "fanwood" },
  ];
}

export default async function LegacyServiceAreaRedirectPage({
  params,
}: LocationPageProps) {
  const { slug } = await params;

  if (slug === "elizabeth") {
    permanentRedirect("/");
  }

  const slugMap: Record<string, string> = {
    union: "/locations/plumber-union-nj",
    westfield: "/locations/plumber-westfield-nj",
    cranford: "/locations/plumber-cranford-nj",
    roselle: "/locations/plumber-roselle-nj",
    fanwood: "/locations/plumber-fanwood-nj",
  };

  const destination = slugMap[slug] || "/service-areas";
  permanentRedirect(destination);
}
