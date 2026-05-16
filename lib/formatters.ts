/**
 * Telefon numarasını formatlı gösterir
 * @example formatPhone("+905321234567") => "+90 532 123 45 67"
 */
export function formatPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  
  if (cleaned.startsWith("90") && cleaned.length === 12) {
    return `+90 ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8, 10)} ${cleaned.slice(10)}`;
  }
  
  if (cleaned.length === 10) {
    return `${cleaned.slice(0, 3)} ${cleaned.slice(3, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
  }
  
  return phone;
}

/**
 * Fiyatı Türk Lirası formatında gösterir
 * @example formatPrice(1500) => "1.500 ₺"
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat("tr-TR", {
    style: "currency",
    currency: "TRY",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price).replace("₺", "").trim() + " ₺";
}

/**
 * Tarihi Türkçe formatında gösterir
 * @example formatDate("2026-01-15") => "15 Ocak 2026"
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

/**
 * Süreyi kısaltılmış formatta gösterir
 * @example formatDuration("60 dk") => "60 dk"
 */
export function formatDuration(duration: string): string {
  return duration;
}

/**
 * WhatsApp mesaj linkini oluşturur
 */
export function createWhatsAppLink(
  phoneNumber: string,
  message?: string
): string {
  const cleanPhone = phoneNumber.replace(/\D/g, "");
  const encodedMessage = message ? encodeURIComponent(message) : "";
  return `https://wa.me/${cleanPhone}${encodedMessage ? `?text=${encodedMessage}` : ""}`;
}

/**
 * Slug oluşturur
 * @example createSlug("Cilt Bakımı") => "cilt-bakimi"
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ü/g, "u")
    .replace(/ö/g, "o")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}
