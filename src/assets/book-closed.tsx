import bookClosed from './book-closed.png';

export default function BookClosedImage({ className = '' }: { className?: string }) {
  return <img src={bookClosed} alt="Book Closed" className={className} />;
}