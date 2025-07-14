export function Exhibitions() {
  const exhibitions = [
    {
      year: "2025",
      title: 'Ausstellung „einfach im Fluss"',
      details: [
        "Vernissage",
        "09.09. von 19:19 - 22:30 Uhr (Einlass ab 18:30 Uhr) - inkl. Wasserturmführung, exkl. Buffet = Fokussierung auf Wasser ;-)",
        "Öffnungszeiten:",
        "10.-12.09. von 15:30 - 20:30 Uhr",
        "13.09. von 10:30 - 13:30 Uhr + 16:30 - 20:30 Uhr (Finissage)",
      ],
      link: "https://www.wien.gv.at/wienwasser/bildung/wasserturm/ausstellung.html",
    },
    {
      year: "2024",
      title: "Gruppenausstellung im Atelier Schönbrunner Straße",
      details: [
        "Vernissage: 15. März 2024, 18:00 Uhr",
        "Ausstellungsdauer: 16. März - 30. April 2024",
        "Öffnungszeiten: Do-So 14:00-18:00 Uhr",
      ],
    },
    {
      year: "2023",
      title: "Einzelausstellung 'Farbwelten'",
      details: [
        "Galerie am Park, Wien",
        "Vernissage: 8. September 2023, 19:00 Uhr",
        "Ausstellungsdauer: 9. September - 15. Oktober 2023",
      ],
    },
  ]

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">Ausstellungen & Aktivitäten</h2>
        <div className="space-y-8">
          {exhibitions.map((exhibition, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900">{exhibition.year}</h3>
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                {exhibition.link ? (
                  <a
                    href={exhibition.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {exhibition.title}
                  </a>
                ) : (
                  exhibition.title
                )}
              </h4>
              <ul className="space-y-2">
                {exhibition.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-gray-700 leading-relaxed">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
