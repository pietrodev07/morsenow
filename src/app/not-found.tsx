import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <main className="flex h-svh flex-col items-center justify-center gap-5">
      <h1 className="text-3xl font-semibold">Ops, page not found...</h1>

      <Button asChild>
        <Link href="/">Back to home</Link>
      </Button>
    </main>
  );
}
