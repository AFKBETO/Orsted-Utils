export const config = {
    environment: Deno.env.get('ORSTED_ENVIRONMENT') || 'development',
    mongo_uri: Deno.env.get('ORSTED_MONGO_URI') || '',
};
