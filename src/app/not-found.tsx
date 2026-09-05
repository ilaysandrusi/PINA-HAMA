import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center">
      <p className="text-gold">404</p>
      <h1 className="mt-3 font-display text-4xl">העמוד לא נמצא</h1>
      <p className="mt-4 text-cream/70">חזרו הביתה, או פתחו את התפריט.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link className="btn-gold" href="/">
          בית
        </Link>
        <Link className="btn-ghost" href="/menu">
          תפריט
        </Link>
      </div>
    </div>
  );
}
