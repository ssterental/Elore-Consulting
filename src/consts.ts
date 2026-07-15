// ── Booking / offer config ────────────────────────────────────────────────
// Single source of truth for the "Free 15-Minute AI Visibility Review" offer
// used by CtaBooking.astro across every blog post and the homepage.
//
// BOOKING_EMBED_SRC is the Google Calendar Appointment Schedule iframe URL
// (Calendar → Appointment schedule → Share → embed). To change the offer,
// create a new schedule and paste its `?gv=true` iframe src here.
// If it ever contains REPLACE_WITH, CTAs fall back to the contact form so
// nothing ships broken.
export const BOOKING_EMBED_SRC =
  'https://calendar.google.com/calendar/appointments/schedules/AcZssZ18bh5juQRlby7FSwX7yeGV9yqlg86lqN2KwAJSzCtBOvRX9nyk9uAL0CZc1H0SWFdOVI6UsYm_?gv=true';

export const BOOKING_IS_PLACEHOLDER = BOOKING_EMBED_SRC.includes('REPLACE_WITH');

// Fallback link used only when no real embed is set yet.
export const BOOKING_HREF = BOOKING_IS_PLACEHOLDER ? '/#contact' : '#book';

export const OFFER_NAME = 'Free 15-Minute AI Visibility Review';
