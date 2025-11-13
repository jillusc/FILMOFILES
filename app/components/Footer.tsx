export default function Footer() {
  return (
    <footer className="bg-charcoal text-lightgrey py-4 border-t border-gold text-center text-sm">
      <p>© {new Date().getFullYear()} jillusc </p>
      <p className="text-xs">All rights reserved.</p>
    </footer>
  );
}
