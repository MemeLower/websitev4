export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Marie P.</h3>
            <p className="text-gray-300">
              Amateurkünstlerin aus Wien. Spezialisiert auf Acrylmalerei, Objektkunst, Spray Art und experimentelle
              Techniken.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p className="text-gray-300">
              Email:{" "}
              <a href="mailto:marie-p@aon.at" className="text-blue-400 hover:text-blue-300">
                marie-p@aon.at
              </a>
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="/ich" className="hover:text-white">
                  ich
                </a>
              </li>
              <li>
                <a href="/selbst" className="hover:text-white">
                  selbst
                </a>
              </li>
              <li>
                <a href="/bei-mir" className="hover:text-white">
                  bei mir
                </a>
              </li>
              <li>
                <a href="/in-aus-mir" className="hover:text-white">
                  in/aus mir
                </a>
              </li>
              <li>
                <a href="/mit-mir" className="hover:text-white">
                  mit mir
                </a>
              </li>
              <li>
                <a href="/objektkunst" className="hover:text-white">
                  Objektkunst
                </a>
              </li>
              <li>
                <a href="/spray-art" className="hover:text-white">
                  Spray Art
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Marie P. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}
