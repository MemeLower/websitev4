import Image from "next/image"

export default function SprayArtPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900">Spray Art</h1>

        <div className="max-w-6xl mx-auto">
          {/* Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <Image
                src="/mpichl29/sprayart1.jpg"
                alt="Spray Art Process 1"
                width={600}
                height={600}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="/mpichl29/sprayart2.jpg"
                alt="Spray Art Workshop"
                width={600}
                height={800}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <Image
                src="/mpichl29/sprayart3.jpg"
                alt="Spray Art Process 2"
                width={600}
                height={600}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className="space-y-4">
              <Image
                src="/mpichl29/sprayart4.jpg"
                alt="Finished Spray Art"
                width={600}
                height={800}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>

          {/* Reflection Text */}
          <div className="bg-gray-50 rounded-lg p-8 mt-12">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">(Unfassbar wie ich mich damals - 2014 - gesehen/gegeben habe.</p>

              <blockquote className="border-l-4 border-blue-500 pl-6 italic text-gray-600 mb-6">
                „Time flies and my mind changes along the way."
              </blockquote>

              <p className="mb-4">2022 hat mich eine Kollegin bei der Weihnachtsfeier so beschrieben:</p>

              <div className="bg-white p-6 rounded-lg border-l-4 border-green-500 mb-6">
                <p className="mb-4">
                  "Liebe Maria,
                  <br />
                  was ich besonders an dir schätze ist, dass du immer du bist. Herrlich unkonventionell, voller Empathie
                  und super quirlig!
                </p>

                <blockquote className="italic text-center text-gray-600 my-4">
                  „Today you are you – there is no one yourer than you!"
                  <br />
                  <cite>Dr. Seuss</cite>
                </blockquote>

                <p>
                  Dickes Bussi,
                  <br />
                  Katharina
                  <br />
                  PS: Ja woll, dass ich noch öfter zu deinem wohlgesonnenen auf kommen darf"
                </p>
              </div>

              <p className="text-lg font-medium">
                Dem ist nichts hinzuzufügen. Heute bin ich EINFACH. Der Weg bis hierher war aber lang und keinesfalls
                immer eben ...)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
