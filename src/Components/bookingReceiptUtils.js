export const createBookingReference = () => {
  const year = new Date().getFullYear();
  const token = `${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`.toUpperCase().slice(-8);
  return `CIZ-${year}-${token}`;
};

import { translatePhrase } from '../i18n/LanguageContext';

export const formatBookingCurrency = (amount, language = 'en') => (
  typeof amount === 'number' && Number.isFinite(amount)
    ? new Intl.NumberFormat(language === 'ru' ? 'ru-RU' : language === 'fr' ? 'fr-FR' : language === 'de' ? 'de-DE' : language === 'it' ? 'it-IT' : 'en-US', { style: 'currency', currency: 'USD' }).format(amount)
    : translatePhrase('To be confirmed', language)
);

const localizeDynamicValue = (value, language) => {
  if (!value || !['ru', 'fr', 'de', 'it'].includes(language)) return value || translatePhrase('To be confirmed', language);
  const exactTranslation = translatePhrase(value, language);
  if (exactTranslation !== value) return exactTranslation;
  if (language === 'de') {
    return value
      .replace(/\b(\d+)\s+Days?\b/gi, (_, count) => `${count} ${count === '1' ? 'Tag' : 'Tage'}`)
      .replace(/\b(\d+)\s+Nights?\b/gi, (_, count) => `${count} ${count === '1' ? 'Nacht' : 'Nächte'}`)
      .replace(/\b(\d+)\s+Hours?\b/gi, '$1 Std.')
      .replace(/\b(\d+)\s+People\b/gi, '$1 Personen')
      .replace(/\b(\d+)\s+Person\b/gi, '$1 Person')
      .replace(/\bFlexible\s*\/\s*To be confirmed\b/gi, 'Flexibel / wird noch bestätigt');
  }
  if (language === 'fr') {
    return value
      .replace(/\b(\d+)\s+Days?\b/g, '$1 jours')
      .replace(/\b(\d+)\s+Nights?\b/g, '$1 nuits')
      .replace(/\b(\d+)\s+Hours?\b/g, '$1 h')
      .replace(/\b(\d+)\s+People\b/g, '$1 personnes')
      .replace(/\b(\d+)\s+Person\b/g, '$1 personne')
      .replace(/\bFlexible\s*\/\s*To be confirmed\b/g, 'Flexible / à confirmer');
  }
  if (language === 'it') {
    return value
      .replace(/\b(\d+)\s+Days?\b/gi, (_, count) => `${count} ${count === '1' ? 'giorno' : 'giorni'}`)
      .replace(/\b(\d+)\s+Nights?\b/gi, (_, count) => `${count} ${count === '1' ? 'notte' : 'notti'}`)
      .replace(/\b(\d+)\s+Hours?\b/gi, (_, count) => `${count} ${count === '1' ? 'ora' : 'ore'}`)
      .replace(/\b(\d+)\s+People\b/gi, '$1 persone')
      .replace(/\b(\d+)\s+Person\b/gi, (_, count) => `${count} ${count === '1' ? 'persona' : 'persone'}`)
      .replace(/\bFlexible\s*\/\s*To be confirmed\b/gi, 'Flessibile / da confermare');
  }
  return value
    .replace(/\b(\d+)\s+Days?\b/g, '$1 дн.')
    .replace(/\b(\d+)\s+Nights?\b/g, '$1 ноч.')
    .replace(/\b(\d+)\s+Hours?\b/g, '$1 ч.')
    .replace(/\b(\d+)\s+People\b/g, '$1 чел.')
    .replace(/\b(\d+)\s+Person\b/g, '$1 чел.');
};

export const formatBookingReceiptMessage = (receipt, language = 'en') => {
  if (language === 'it') {
    const productName = localizeDynamicValue(receipt.productName, language);
    const category = receipt.category === 'Zanzibar Tour'
      ? 'Tour a Zanzibar'
      : receipt.category === 'Tanzania Safari' ? 'Safari in Tanzania' : localizeDynamicValue(receipt.category, language);
    const priceLabel = translatePhrase(receipt.pricePerPersonLabel || 'Price per person', language);
    const totalLabel = translatePhrase(receipt.totalLabel || 'Estimated total', language);
    return [
      'Gentile team di Cruising in Zanzibar Tours & Safaris,',
      '',
      'Grazie per il vostro supporto. Vi chiedo di verificare la mia richiesta e di informarmi sulla disponibilità, sull’itinerario e sul prezzo finale. Resto in attesa di un vostro gentile riscontro.',
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      'CRUISING IN ZANZIBAR TOURS & SAFARIS',
      'RIEPILOGO DELLA RICHIESTA · IN ATTESA DI CONFERMA',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      `Riferimento: ${receipt.reference}`,
      `Data della richiesta: ${receipt.bookingDate}`,
      '',
      'DETTAGLI DEL VIAGGIO',
      `Tour / pacchetto: ${productName}`,
      `Categoria: ${category}`,
      `Durata: ${localizeDynamicValue(receipt.duration, language)}`,
      `Destinazione: ${receipt.destination || 'Da confermare'}`,
      `Data del viaggio: ${localizeDynamicValue(receipt.travelDate || 'Flexible / To be confirmed', language)}`,
      `Numero di viaggiatori: ${localizeDynamicValue(receipt.travelers, language)}`,
      ...(receipt.adults !== undefined ? [`Adulti: ${receipt.adults}`] : []),
      ...(receipt.children !== undefined ? [`Bambini: ${receipt.children}`] : []),
      `${priceLabel}: ${formatBookingCurrency(receipt.pricePerPerson, language)}`,
      `${totalLabel}: ${formatBookingCurrency(receipt.totalEstimated, language)}`,
      '',
      'DATI DEL CLIENTE',
      `Nome completo: ${receipt.customer.fullName}`,
      `E-mail: ${receipt.customer.email}`,
      `WhatsApp / telefono: ${receipt.customer.phone}`,
      `Hotel / luogo di prelievo: ${receipt.customer.pickup === 'Not provided' ? 'Non indicato' : receipt.customer.pickup || 'Non indicato'}`,
      `Richieste speciali: ${receipt.customer.requests === 'None' ? 'Nessuna' : receipt.customer.requests || 'Nessuna'}`,
      '',
      'Grazie per aver scelto Cruising in Zanzibar Tours & Safaris.',
      'Il nostro team vi contatterà a breve per confermare la disponibilità e definire la prenotazione.',
      'Questa è solo una richiesta di prenotazione. Non è stato effettuato alcun pagamento e la prenotazione non è ancora confermata.',
      '',
      'Cordiali saluti,',
      receipt.customer.fullName,
      'cruisinginzanzibar@gmail.com · +255 653 924 851'
    ].join('\n');
  }
  if (language === 'de') {
    const productName = localizeDynamicValue(receipt.productName, language);
    const category = receipt.category === 'Zanzibar Tour'
      ? 'Tour auf Sansibar'
      : receipt.category === 'Tanzania Safari' ? 'Safari in Tansania' : localizeDynamicValue(receipt.category, language);
    const priceLabel = translatePhrase(receipt.pricePerPersonLabel || 'Price per person', language);
    const totalLabel = translatePhrase(receipt.totalLabel || 'Estimated total', language);
    return [
      'Guten Tag, liebes Team von Cruising in Zanzibar Tours & Safaris,',
      '',
      'vielen Dank für Ihre Unterstützung. Bitte prüfen Sie meine Buchungsanfrage und informieren Sie mich über die Verfügbarkeit, den Reiseablauf und den endgültigen Preis. Ich freue mich auf Ihre Rückmeldung.',
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      'CRUISING IN ZANZIBAR TOURS & SAFARIS',
      'BUCHUNGSANFRAGE · NOCH NICHT BESTÄTIGT',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      `Buchungsnummer: ${receipt.reference}`,
      `Anfragedatum: ${receipt.bookingDate}`,
      '',
      'REISEDETAILS',
      `Tour / Paket: ${productName}`,
      `Kategorie: ${category}`,
      `Dauer: ${localizeDynamicValue(receipt.duration, language)}`,
      `Reiseziel: ${receipt.destination || 'Wird noch bestätigt'}`,
      `Reisedatum: ${localizeDynamicValue(receipt.travelDate || 'Flexible / To be confirmed', language)}`,
      `Anzahl der Reisenden: ${localizeDynamicValue(receipt.travelers, language)}`,
      ...(receipt.adults !== undefined ? [`Erwachsene: ${receipt.adults}`] : []),
      ...(receipt.children !== undefined ? [`Kinder: ${receipt.children}`] : []),
      `${priceLabel}: ${formatBookingCurrency(receipt.pricePerPerson, language)}`,
      `${totalLabel}: ${formatBookingCurrency(receipt.totalEstimated, language)}`,
      '',
      'KONTAKTDATEN',
      `Vollständiger Name: ${receipt.customer.fullName}`,
      `E-Mail: ${receipt.customer.email}`,
      `WhatsApp / Telefon: ${receipt.customer.phone}`,
      `Hotel / Abholort: ${receipt.customer.pickup === 'Not provided' ? 'Nicht angegeben' : receipt.customer.pickup || 'Nicht angegeben'}`,
      `Besondere Wünsche: ${receipt.customer.requests === 'None' ? 'Keine' : receipt.customer.requests || 'Keine'}`,
      '',
      'Vielen Dank, dass Sie sich für Cruising in Zanzibar Tours & Safaris entschieden haben.',
      'Unser Team meldet sich in Kürze, um die Verfügbarkeit zu bestätigen und Ihre Buchung abschließend abzustimmen.',
      'Dies ist zunächst nur eine Buchungsanfrage. Es wurde keine Zahlung geleistet und die Buchung ist noch nicht bestätigt.',
      '',
      'Freundliche Grüße',
      receipt.customer.fullName,
      'cruisinginzanzibar@gmail.com · +255 653 924 851'
    ].join('\n');
  }

  if (language === 'fr') {
    const productName = localizeDynamicValue(receipt.productName, language);
    const category = receipt.category === 'Zanzibar Tour'
      ? 'Excursion à Zanzibar'
      : receipt.category === 'Tanzania Safari' ? 'Safari en Tanzanie' : localizeDynamicValue(receipt.category, language);
    const priceLabel = translatePhrase(receipt.pricePerPersonLabel || 'Price per person', language);
    const totalLabel = translatePhrase(receipt.totalLabel || 'Estimated total', language);
    return [
      'Bonjour à l’équipe de Cruising in Zanzibar Tours & Safaris,',
      '',
      'Merci de vérifier ma demande de réservation et de me confirmer les disponibilités, le programme ainsi que le prix définitif. Dans l’attente de votre réponse.',
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      'CRUISING IN ZANZIBAR TOURS & SAFARIS',
      'DEMANDE DE RÉSERVATION · EN ATTENTE DE CONFIRMATION',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      `Référence : ${receipt.reference}`,
      `Date de la demande : ${receipt.bookingDate}`,
      '',
      'DÉTAILS DU VOYAGE',
      `Excursion / circuit : ${productName}`,
      `Catégorie : ${category}`,
      `Durée : ${localizeDynamicValue(receipt.duration, language)}`,
      `Destination : ${receipt.destination || 'À confirmer'}`,
      `Date du voyage : ${localizeDynamicValue(receipt.travelDate || 'Flexible / To be confirmed', language)}`,
      `Nombre de voyageurs : ${localizeDynamicValue(receipt.travelers, language)}`,
      ...(receipt.adults !== undefined ? [`Adultes : ${receipt.adults}`] : []),
      ...(receipt.children !== undefined ? [`Enfants : ${receipt.children}`] : []),
      `${priceLabel} : ${formatBookingCurrency(receipt.pricePerPerson, language)}`,
      `${totalLabel} : ${formatBookingCurrency(receipt.totalEstimated, language)}`,
      '',
      'COORDONNÉES DU VOYAGEUR',
      `Nom complet : ${receipt.customer.fullName}`,
      `E-mail : ${receipt.customer.email}`,
      `WhatsApp / téléphone : ${receipt.customer.phone}`,
      `Hôtel / lieu de prise en charge : ${receipt.customer.pickup === 'Not provided' ? 'Non renseigné' : receipt.customer.pickup || 'Non renseigné'}`,
      `Demandes particulières : ${receipt.customer.requests === 'None' ? 'Aucune' : receipt.customer.requests || 'Aucune'}`,
      '',
      'Merci d’avoir choisi Cruising in Zanzibar Tours & Safaris.',
      'Notre équipe vous contactera bientôt pour confirmer les disponibilités et finaliser votre réservation.',
      'Il s’agit uniquement d’une demande de réservation. Aucun paiement n’a été effectué et la réservation n’est pas encore confirmée.',
      '',
      'Cordialement,',
      receipt.customer.fullName,
      'cruisinginzanzibar@gmail.com · +255 653 924 851'
    ].join('\n');
  }

  if (language === 'ru') {
    const productName = localizeDynamicValue(receipt.productName, language);
    const category = receipt.category === 'Zanzibar Tour'
      ? 'Тур по Занзибару'
      : receipt.category === 'Tanzania Safari' ? 'Сафари по Танзании' : localizeDynamicValue(receipt.category, language);
    const priceLabel = translatePhrase(receipt.pricePerPersonLabel || 'Price per person', language);
    const totalLabel = translatePhrase(receipt.totalLabel || 'Estimated total', language);
    const rows = [
      'Добрый день, команда Cruising in Zanzibar!',
      '',
      'Спасибо за вашу помощь. Пожалуйста, проверьте мой запрос на бронирование и сообщите о наличии мест, программе поездки и окончательной стоимости. Буду ждать вашего ответа.',
      '',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      'CRUISING IN ZANZIBAR TOURS & SAFARIS',
      'ЗАПРОС НА БРОНИРОВАНИЕ · ОЖИДАЕТ ПОДТВЕРЖДЕНИЯ',
      '━━━━━━━━━━━━━━━━━━━━━━━━',
      `Номер бронирования: ${receipt.reference}`,
      `Дата запроса: ${receipt.bookingDate}`,
      '',
      'ДАННЫЕ ПОЕЗДКИ',
      `Тур: ${productName}`,
      `Категория: ${category}`,
      `Продолжительность: ${localizeDynamicValue(receipt.duration, language)}`,
      `Направление: ${receipt.destination || 'Уточняется'}`,
      `Дата поездки: ${localizeDynamicValue(receipt.travelDate || 'Flexible / To be confirmed', language)}`,
      `Количество путешественников: ${localizeDynamicValue(receipt.travelers, language)}`,
      ...(receipt.adults !== undefined ? [`Взрослые: ${receipt.adults}`] : []),
      ...(receipt.children !== undefined ? [`Дети: ${receipt.children}`] : []),
      `${priceLabel}: ${formatBookingCurrency(receipt.pricePerPerson, language)}`,
      `${totalLabel}: ${formatBookingCurrency(receipt.totalEstimated, language)}`,
      '',
      'ДАННЫЕ КЛИЕНТА',
      `Полное имя: ${receipt.customer.fullName}`,
      `Электронная почта: ${receipt.customer.email}`,
      `WhatsApp / телефон: ${receipt.customer.phone}`,
      `Отель / место подачи: ${receipt.customer.pickup === 'Not provided' ? 'Не указано' : receipt.customer.pickup || 'Не указано'}`,
      `Особые пожелания: ${receipt.customer.requests === 'None' ? 'Нет' : receipt.customer.requests || 'Нет'}`,
      '',
      'Спасибо, что выбрали Cruising in Zanzibar Tours & Safaris.',
      'Мы скоро свяжемся с вами, чтобы подтвердить наличие мест и окончательно согласовать бронирование.',
      'Это запрос на бронирование. Оплата не производилась, бронирование пока не подтверждено.',
      '',
      'С уважением,',
      receipt.customer.fullName,
      'cruisinginzanzibar@gmail.com · +255 653 924 851'
    ];
    return rows.join('\n');
  }

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
