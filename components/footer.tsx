import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const googleMapsUrl = "https://www.google.com/maps?sca_esv=45c8bf4228d081b3&rlz=1C1CHBF_enIN1119IN1119&sxsrf=AE3TifPbrHba7VHgfUVO8zQ3aZqo0xr8ww:1749762050417&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E6CJgRkqELXYe-BVTOeih3EjHfWe8RtBX5JHpZKl8mrb6aSb8sJ0DjFF6yZ0zsgK2s8xFta0WLXYPbo8-_G4oEmhGTAxkzD_7QFs5Uy53DbLwPYkww5B8TYVPJ2hOdzeBecYEiHjQynE1d3PvMra_IZSHpI5&biw=1536&bih=695&dpr=1.25&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KZeVZjAB-ww5MUAQ_5xXaW95&daddr=Metro+Station,+303,+Alaknanda+Apartments,+near+Vaishali,+Sector+4,+Vaishali,+Ghaziabad,+Uttar+Pradesh+201010"

  return (
    <footer id="contact" className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Kundan Tutorials</h3>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
             Your Path to Academic Excellence Starts Here
            </p>
            <div className="flex space-x-4 justify-start">
              <Link href="https://www.facebook.com/share/19xrK37G13/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://m.youtube.com/@kundantutorials4929" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="sr-only">YouTube</span>
              </Link>
              <Link href="https://www.instagram.com/kundan_tutorials?igsh=eG92c241eXJhbGcy" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#subjects" className="text-muted-foreground hover:text-primary transition-colors">
                  Subjects
                </Link>
              </li>
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </Link>
              </li>
            </ul>
          </div>

          <div className="order-1 sm:order-none">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="tel:+919711209441" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all">
                  +91-9711209441
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary shrink-0 mt-0.5" />
                <a href="mailto:saritaverma2222@gmail.com" className="text-muted-foreground hover:text-primary transition-colors text-sm sm:text-base break-all">
                  saritaverma2222@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm sm:text-base">
                  303, Alaknanda Apartments, near Vaishali metro station, Sector 4, Vaishali, Ghaziabad, Uttar Pradesh 201010
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Teaching Hours</h3>
            <ul className="space-y-2">
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-muted-foreground text-sm sm:text-base">Monday - Friday:</span>
                <span className="text-sm sm:text-base font-medium">3:00 PM - 7:00 PM</span>
              </li>
              <li className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-0">
                <span className="text-muted-foreground text-sm sm:text-base">Saturday - Sunday:</span>
                <span className="text-sm sm:text-base font-medium">10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-8 border-t border-border pt-8">
          <h3 className="text-lg font-semibold mb-4">Find Us</h3>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
            <div className="lg:col-span-2">
              <p className="text-muted-foreground mb-4 text-sm sm:text-base">
                Visit our center near Vaishali Metro Station. Easy access via public transportation with ample parking available.
              </p>
              <a 
                href={googleMapsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline text-sm sm:text-base"
              >
                <span>View on Google Maps</span>
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
            <div className="lg:col-span-3 mt-4 lg:mt-0">
              <div className="rounded-lg overflow-hidden border border-border shadow-sm h-[200px] sm:h-[250px] relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3895251551!2d77.3658392!3d28.650626799999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfab7817186a3%3A0x1fad1f22fd8e02c0!2sKundan%20Tutorials%20-%20Computer%20Training%20Institute%20in%20Vaishali!5e0!3m2!1sen!2sin!4v1718303641025!5m2!1sen!2sin"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }}
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps showing location of Kundan Tutorials"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">© {currentYear} Kundan Tutorials. All rights reserved.</p>
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">Made with 💻 for the next-gen coders</p>
        </div>
      </div>
    </footer>
  )
}