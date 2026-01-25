
import { prisma } from "@/lib/prisma";
import HomeClient from "@/components/HomeClient";

// Force dynamic rendering to ensure fresh CMS data
export const dynamic = "force-dynamic";

export default async function Home() {
  let sections: any[] = [];

  try {
    const homePage = await prisma.sitePage.findUnique({
      where: { slug: "home" },
      include: { sections: true }
    });
    if (homePage) {
      sections = homePage.sections;
    }
  } catch (e) {
    console.error("CMS Fetch Error:", e);
    // Fallback to empty sections (default static mode)
  }

  return <HomeClient sections={sections} />;
}
