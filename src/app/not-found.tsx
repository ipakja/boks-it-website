import Button from '@/components/Button';
import Container from '@/components/Container';

/** 404-Seite für statischen Export. */
export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-medium text-slate-500">404</p>
      <h1 className="mt-2 text-2xl font-semibold text-brand-800 sm:text-3xl">
        Seite nicht gefunden
      </h1>
      <p className="mt-4 max-w-md text-slate-600">
        Die angeforderte Seite existiert nicht oder wurde verschoben.
      </p>
      <div className="mt-8">
        <Button href="/">Zur Startseite</Button>
      </div>
    </Container>
  );
}
