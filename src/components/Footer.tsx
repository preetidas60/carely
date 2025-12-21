export default function Footer() {
  return (
    <footer className="px-8 py-10 text-sm text-textMuted">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-4">
        <p>© 2024 Carely</p>
        <div className="flex gap-6">
          <a>Privacy Policy</a>
          <a>Terms of Service</a>
          <a>Contact</a>
        </div>
      </div>
    </footer>
  );
}
