import Image from "next/image"

export default function IchPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">ich</h1>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <Image
                src="/mpichl29/ICH-Abendstimmung.jpg"
                alt="Abendstimmung"
                width={400}
                height={300}
                className="rounded-lg shadow-lg w-full"
              />
              <p className="text-center text-sm text-gray-600 mt-2">
                <strong>Abendstimmung</strong> - Acryl auf Leinwand
              </p>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">Über mich</h2>
              <p className="text-gray-700 mb-4">
                Hier finde ich mich selbst in meinen Werken wieder. Jedes Bild erzählt eine Geschichte aus meinem Leben,
                meinen Gedanken und meinen Träumen.
              </p>
              <p className="text-gray-700">
                Die Kunst ist mein Weg, mich selbst zu verstehen und auszudrücken. In jedem Pinselstrich liegt ein Teil
                meiner Seele.
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Mein künstlerischer Weg</h2>
            <p className="mb-4">
              Meine Reise als Künstlerin begann nicht mit einer formalen Ausbildung, sondern mit dem inneren Drang,
              meine Gefühle und Gedanken sichtbar zu machen.
            </p>
            <p className="mb-4">
              Jedes Werk ist ein Dialog mit mir selbst - manchmal laut und expressiv, manchmal leise und nachdenklich.
              Die Farben sprechen, wo Worte versagen.
            </p>
            <p>
              Ich lade Sie ein, durch meine Augen zu sehen und vielleicht auch ein Stück von sich selbst in meinen
              Werken zu entdecken.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
