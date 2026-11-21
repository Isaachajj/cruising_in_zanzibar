export const createBookingReference = () => {
  const year = new Date().getFullYear();
  const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`.toUpperCase().slice(-8);
  return `CIZ-${year}-${token}`;
};

export const formatBookingCurrency = (amount) => (
  typeof amount === 'number' && Number.isFinite(amount)
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
    : 'To be confirmed'
);

export const formatBookingReceiptMessage = (receipt) => {
  const rows = [
    'Dear Cruising in Zanzibar Team,',
    '',
    'I hope you are well. Please review my booking request below and let me know about availability, the itinerary, and the final price. I look forward to your response.',
    '',
    '━━━━━━━━━━━━━━━━━━━━━━━━',
    'CRUISING IN ZANZIBAR TOURS & SAFARIS',
    'BOOKING REQUEST RECEIPT · PENDING CONFIRMATION',
    '━━━━━━━━━━━━━━━━━━━━━━━━',
    `Reference: ${receipt.reference}`,
    `Booking date: ${receipt.bookingDate}`,
    '',
    'TRIP DETAILS',
    `Package: ${receipt.productName}`,
    `Category: ${receipt.category}`,
    `Duration: ${receipt.duration || 'To be confirmed'}`,
    `Destination: ${receipt.destination || 'To be confirmed'}`,
    `Travel date: ${receipt.travelDate || 'Flexible / To be confirmed'}`,
    `Travelers: ${receipt.travelers}`,
    ...(receipt.adults !== undefined ? [`Adults: ${receipt.adults}`] : []),
    ...(receipt.children !== undefined ? [`Children: ${receipt.children}`] : []),
    `${receipt.pricePerPersonLabel || 'Price per person'}: ${formatBookingCurrency(receipt.pricePerPerson)}`,
    `${receipt.totalLabel || 'Estimated total'}: ${formatBookingCurrency(receipt.totalEstimated)}`,
    '',
    'CUSTOMER DETAILS',
    `Full name: ${receipt.customer.fullName}`,
    `Email: ${receipt.customer.email}`,
    `WhatsApp / phone: ${receipt.customer.phone}`,
    `Hotel / pickup: ${receipt.customer.pickup || 'Not provided'}`,
    `Special requests: ${receipt.customer.requests || 'None'}`,
    '',
    'Thank you for choosing Cruising in Zanzibar Tours & Safaris.',
    'We will contact you shortly to confirm availability and finalize your booking.',
    'This is a booking request only. No payment has been made and the booking is not yet confirmed.',
    '',
    'Kind regards,',
    receipt.customer.fullName,
    'cruisinginzanzibar@gmail.com · +255 653 924 851'
  ];
  return rows.join('\n');
};
