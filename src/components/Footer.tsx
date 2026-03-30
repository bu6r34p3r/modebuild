export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-5 flex items-center justify-between">
      <span className="text-xs text-text-faint">&copy; 2026 Mode:Build</span>
      <div className="flex gap-5">
        <a href="https://youtube.com/@modebuild" target="_blank" rel="noopener noreferrer" className="text-xs text-text-faint hover:text-text-subtle transition-colors">YouTube</a>
        <a href="https://www.linkedin.com/in/soldbyphillip/" target="_blank" rel="noopener noreferrer" className="text-xs text-text-faint hover:text-text-subtle transition-colors">LinkedIn</a>
        <a href="https://x.com/phi11ip_e11iott" target="_blank" rel="noopener noreferrer" className="text-xs text-text-faint hover:text-text-subtle transition-colors">Twitter</a>
      </div>
    </footer>
  );
}
