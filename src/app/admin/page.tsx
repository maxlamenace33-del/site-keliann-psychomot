import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth";
import { getSiteSettings } from "@/lib/settings";
import { AdminDashboardClient } from "@/components/admin/AdminDashboardClient";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const isAuthenticated = await getAdminSession();

  if (!isAuthenticated) {
    redirect("/admin/login");
  }

  const settings = await getSiteSettings();

  return <AdminDashboardClient initialSettings={settings} />;
}
