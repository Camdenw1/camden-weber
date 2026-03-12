export default function Footer() {
  return (
    <footer className="border-t border-stone/20 mt-24 py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-serif text-stone text-sm italic">
          Camden Weber — built with curiosity
        </p>
        <div className="flex items-center gap-6 text-sm text-stone">
          <a
            href="https://github.com/Camdenw1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bark transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/camdenw1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-bark transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:camdenweber18@gmail.com"
            className="hover:text-bark transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
