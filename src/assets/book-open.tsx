import bookOpen from './book-open.png';

export default function BookOpenImage({ className = '' }: { className?: string }) {
  return <img src={bookOpen} alt="Book Open" className={className} />;
}