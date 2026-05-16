import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="mx-auto flex min-h-screen w-full flex-col pt-20 px-8">
      <Nav />
      {children}
      <Footer />
    </main>
  );
}
