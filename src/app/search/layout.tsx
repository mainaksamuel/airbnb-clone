import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search | Airbnb Clone",
  description: "Search for your next stay",
};

export default function SearchPageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex">{children}</main>;
}
