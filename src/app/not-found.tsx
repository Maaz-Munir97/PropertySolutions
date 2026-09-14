import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="grain relative flex min-h-svh items-center overflow-hidden bg-midnight text-linen">
      <div className="container-x relative py-40">
        <span className="eyebrow text-gold-soft">Error 404</span>
        <h1 className="display mt-6 text-6xl sm:text-8xl">
          This address <em className="text-gold-soft">isn&apos;t listed.</em>
        </h1>
        <p className="mt-6 max-w-md text-lg text-linen/65">
          The page you&apos;re looking for has moved or never existed. Let&apos;s get you back home.
        </p>
        <Button href="/" className="mt-10">
          Back to home
        </Button>
      </div>
    </section>
  );
}
