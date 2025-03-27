export const environment = {
    production: true,
    emailjs: {
        serviceId: process.env['YOUR_SERVICE_ID'],
        templateId: process.env['YOUR_TEMPLATE_ID'],
        publicKey: process.env['YOUR_PUBLIC_KEY'],
    }
};
