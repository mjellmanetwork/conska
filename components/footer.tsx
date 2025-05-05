import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, FileText } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background py-12">
      <div className="container">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Logo and Company Info */}
          <div className="flex flex-col space-y-4">
            <Link href="/" className="inline-block">
              <Image src="/images/conska-logo.png" alt="Conska Oy Logo" width={140} height={35} className="h-auto" />
            </Link>
            <p className="text-sm text-muted-foreground">Rakentaminen on palveluala</p>
            <p className="text-sm text-muted-foreground">© {currentYear} Conska Oy. Kaikki oikeudet pidätetään.</p>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Yhteystiedot</h3>
            <div className="flex items-start space-x-2">
              <MapPin className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="text-sm">
                  <strong>Conska Oy</strong>
                  <br />
                  Punttikuja 5<br />
                  00730 Helsinki
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:0413136339" className="text-sm hover:underline">
                041 3136339
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:info@conska.fi" className="text-sm hover:underline">
                info@conska.fi
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <Link href="/laskutusohje" className="text-sm hover:underline">
                Laskutusohjeet
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Palvelumme</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/palvelut" className="text-sm hover:underline">
                Kaikki palvelut
              </Link>
              <Link href="/referenssit/julkisivu-parvekesaneeraus" className="text-sm hover:underline">
                Julkisivu & parvekesaneeraus
              </Link>
              <Link href="/referenssit/hiekkapuhallus" className="text-sm hover:underline">
                Hiekkapuhallus
              </Link>
              <Link href="/referenssit/korjausrakentaminen" className="text-sm hover:underline">
                Korjausrakentaminen
              </Link>
              <Link href="/referenssit/huoneistoremontit-markatilat" className="text-sm hover:underline">
                Huoneistoremontit
              </Link>
            </nav>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold">Tietoa</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/yhteystiedot" className="text-sm hover:underline">
                Yhteystiedot
              </Link>
              <Link href="/kumppanit" className="text-sm hover:underline">
                Kumppanit
              </Link>
              <Link href="/evastekaytanto" className="text-sm hover:underline">
                Evästekäytäntö
              </Link>
              <Link href="/tietosuoja" className="text-sm hover:underline">
                Tietosuoja
              </Link>
              <Link href="/ehdot" className="text-sm hover:underline">
                Käyttöehdot
              </Link>
            </nav>
          </div>
        </div>

        {/* Social Media and Certifications - New Section */}
        <div className="mt-12 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-4 items-center">
              <Image src="/images/aaa-logo.png" alt="AAA-luottoluokitus" width={60} height={30} className="h-auto" />
              <Image
                src="/images/luotettava-kumppani-green.png"
                alt="Luotettava Kumppani"
                width={100}
                height={30}
                className="h-auto"
              />
            </div>
            <div>
              <p className="text-sm text-muted-foreground text-center md:text-right">
                Conska Oy | Y-tunnus: 2469661-2 |{" "}
                <a href="mailto:info@conska.fi" className="hover:underline">
                  info@conska.fi
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
