export const environment = {
    production: false,
    emailjs: {
        serviceId: process.env['NG_APP_YOUR_SERVICE_ID'],
        templateId: process.env['NG_APP_YOUR_TEMPLATE_ID'],
        publicKey: process.env['NG_APP_YOUR_PUBLIC_KEY'],
    }
};
