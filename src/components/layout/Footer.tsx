export function Footer() {
  return (
    <footer className="ml-64 border-t bg-muted/30 py-6">
      <div className="px-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Email: support@disha.gov.in</p>
              <p>Phone: 1800-111-363</p>
              <p>Help Desk: Mon-Fri, 9 AM - 6 PM</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>FAQ</p>
            </div>
          </div>

          {/* Government Info */}
          <div>
            <h3 className="mb-3 font-semibold text-foreground">Government Portal</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Ministry of Skill Development</p>
              <p>& Entrepreneurship</p>
              <p>Government of India</p>
            </div>
          </div>
        </div>

        <div className="mt-6 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>© 2024 DISHA - AI Automation Engine. All rights reserved.</p>
          <p className="mt-1">Developed for PM Recommendation Scheme</p>
        </div>
      </div>
    </footer>
  );
}